export type Accent = 'british' | 'american'

export interface MeSpeak {
  loadConfig: (data: unknown) => void
  loadVoice: (data: unknown) => void
  isConfigLoaded: () => boolean
  isVoiceLoaded: (voice: string) => boolean
  setDefaultVoice: (voice: string) => void
  speak: (text: string, options: Record<string, unknown>) => unknown
}

declare global {
  interface Window {
    module?: { exports: unknown }
    exports?: unknown
    require?: (id: string) => unknown
    __captureCommonJs?: (name: string) => void
    __ESpeakFactory?: unknown
    __meSpeak?: MeSpeak
    webkitAudioContext?: typeof AudioContext
  }
}

export interface SpeakOptions {
  accent?: Accent
  language?: 'en' | 'zh'
  speed?: number
  repeat?: number
  onStart?: () => void
  onFinish?: (reason: 'ended' | 'stopped' | 'error') => void
}

export interface AudioSelfTestResult {
  accent: Accent
  bytes: number
  riff: boolean
  wave: boolean
  decodable: boolean
}

interface StaticAudioManifest {
  version: number
  baseSpeed: number
  items: Record<string, string>
}

const loadedScripts = new Map<string, Promise<void>>()

function assetUrl(path: string): string {
  return new URL(path, document.baseURI).href
}

function loadScript(path: string): Promise<void> {
  const url = assetUrl(path)
  const existing = loadedScripts.get(url)
  if (existing) return existing
  const pending = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.async = false
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`离线语音资源加载失败：${path}`))
    document.head.appendChild(script)
  })
  loadedScripts.set(url, pending)
  return pending
}

async function fetchJsonAsset(path: string): Promise<unknown> {
  const response = await fetch(assetUrl(path), { cache: 'force-cache' })
  if (!response.ok) throw new Error(`语音数据加载失败：${path}（HTTP ${response.status}）`)
  return response.json()
}

const VOICE_ASSETS = [
  ['en/en-rp', 'mespeak/voices/en/en-rp.json'],
  ['en/en-us', 'mespeak/voices/en/en-us.json'],
  ['zh', 'mespeak/voices/zh.json'],
] as const

/**
 * Configure meSpeak from parsed same-origin JSON.
 *
 * meSpeak's loadConfig(url) API has no completion callback. Waiting for one
 * leaves initialization pending forever, while a second click can observe a
 * half-initialized engine with no active voice. Loading the JSON ourselves and
 * passing objects makes configuration synchronous and verifiable.
 */
export async function configureMeSpeak(
  engine: MeSpeak,
  loadJson: (path: string) => Promise<unknown> = fetchJsonAsset,
): Promise<void> {
  const [config, ...voices] = await Promise.all([
    loadJson('mespeak/mespeak_config.json'),
    ...VOICE_ASSETS.map(([, path]) => loadJson(path)),
  ])

  engine.loadConfig(config)
  voices.forEach(voice => engine.loadVoice(voice))
  engine.setDefaultVoice('en/en-rp')

  if (!engine.isConfigLoaded()) throw new Error('离线语音配置未能加载')
  const missing = VOICE_ASSETS
    .map(([voice]) => voice)
    .filter(voice => !engine.isVoiceLoaded(voice))
  if (missing.length > 0) throw new Error(`离线语音声库未能加载：${missing.join(', ')}`)
}

export function normalizeAudioBuffer(value: unknown): ArrayBuffer | null {
  if (Object.prototype.toString.call(value) === '[object ArrayBuffer]') {
    const bytes = new Uint8Array(value as ArrayBuffer)
    return bytes.slice().buffer
  }
  if (ArrayBuffer.isView(value)) {
    const bytes = new Uint8Array(value.buffer, value.byteOffset, value.byteLength)
    return bytes.slice().buffer
  }
  if (Array.isArray(value)) return Uint8Array.from(value).buffer
  return null
}

export function isWavBuffer(value: ArrayBuffer): boolean {
  if (value.byteLength < 12) return false
  const bytes = new Uint8Array(value, 0, 12)
  const text = String.fromCharCode(...bytes)
  return text.startsWith('RIFF') && text.slice(8, 12) === 'WAVE'
}

class OfflineAudioEngine {
  private engine: MeSpeak | null = null
  private initPromise: Promise<void> | null = null
  private context: AudioContext | null = null
  private source: AudioBufferSourceNode | null = null
  private finish: SpeakOptions['onFinish'] | null = null
  private stopped = false
  private generation = 0
  private manifest: StaticAudioManifest | null = null
  private manifestPromise: Promise<StaticAudioManifest> | null = null

  preload(): Promise<void> {
    return this.loadManifest().then(() => undefined)
  }

  private loadManifest(): Promise<StaticAudioManifest> {
    if (this.manifest) return Promise.resolve(this.manifest)
    if (this.manifestPromise) return this.manifestPromise
    this.manifestPromise = fetch(assetUrl('audio/manifest.json'), { cache: 'no-cache' }).then(async (response) => {
      if (!response.ok) throw new Error(`静态语音清单加载失败：HTTP ${response.status}`)
      const manifest = await response.json() as StaticAudioManifest
      if (!manifest.items || !manifest.baseSpeed) throw new Error('静态语音清单格式无效')
      this.manifest = manifest
      return manifest
    }).catch((error) => {
      this.manifestPromise = null
      throw error
    })
    return this.manifestPromise
  }

  private async loadStaticWav(text: string, voice: string): Promise<{ wav: ArrayBuffer; baseSpeed: number } | null> {
    const manifest = await this.loadManifest().catch(() => null)
    const path = manifest?.items[`${voice}\0${text}`]
    if (!manifest || !path) return null
    const response = await fetch(assetUrl(path))
    if (!response.ok) throw new Error(`预生成语音加载失败：HTTP ${response.status}`)
    const wav = await response.arrayBuffer()
    if (!isWavBuffer(wav)) throw new Error('预生成语音文件不是有效WAV音频')
    return { wav, baseSpeed: manifest.baseSpeed }
  }

  private initialize(): Promise<void> {
    if (this.engine) return Promise.resolve()
    if (this.initPromise) return this.initPromise
    this.initPromise = (async () => {
      await loadScript('mespeak/cjs-shim.js')
      await loadScript('mespeak/ESpeak.js')
      window.__captureCommonJs?.('__ESpeakFactory')
      await loadScript('mespeak/mespeak.js')
      window.__captureCommonJs?.('__meSpeak')
      if (!window.__meSpeak) throw new Error('离线语音引擎初始化失败')
      const engine = window.__meSpeak
      await configureMeSpeak(engine)
      this.engine = engine
    })().catch((error) => {
      this.engine = null
      this.initPromise = null
      throw error
    })
    return this.initPromise
  }

  async unlock(): Promise<void> {
    if (!this.context) {
      const Context = window.AudioContext || window.webkitAudioContext
      if (!Context) throw new Error('当前浏览器不支持本地音频播放')
      this.context = new Context()
    }
    if (this.context.state === 'suspended') await this.context.resume()
  }

  async speak(text: string, options: SpeakOptions = {}): Promise<void> {
    const normalized = text.trim()
    if (!normalized) throw new Error('没有可朗读的文字')
    this.stop()
    const runId = ++this.generation
    this.stopped = false
    this.finish = options.onFinish || null
    try {
      await this.unlock()
      if (runId !== this.generation || this.stopped) return
      const voice = options.language === 'zh' ? 'zh' : options.accent === 'american' ? 'en/en-us' : 'en/en-rp'
      const staticAudio = options.language === 'zh' ? null : await this.loadStaticWav(normalized, voice)
      let wav = staticAudio?.wav || null
      if (!wav) {
        await this.initialize()
        const raw = this.engine?.speak(normalized, {
          voice,
          speed: options.speed ?? 145,
          amplitude: 100,
          wordgap: 1,
          rawdata: 'array',
        })
        wav = normalizeAudioBuffer(raw)
      }
      if (!wav || !isWavBuffer(wav)) throw new Error('离线语音没有生成有效WAV音频')
      const decoded = await this.context!.decodeAudioData(wav.slice(0))
      if (runId !== this.generation || this.stopped) return
      const total = Math.max(1, Math.min(15, options.repeat ?? 1))
      let current = 0
      const playNext = () => {
        if (runId !== this.generation || this.stopped || !this.context) return
        const source = this.context.createBufferSource()
        source.buffer = decoded
        if (staticAudio) source.playbackRate.value = Math.max(.65, Math.min(1.45, (options.speed ?? staticAudio.baseSpeed) / staticAudio.baseSpeed))
        source.connect(this.context.destination)
        this.source = source
        source.onended = () => {
          if (runId !== this.generation || this.stopped) return
          current += 1
          if (current < total) {
            window.setTimeout(playNext, 260)
          } else {
            this.source = null
            const done = this.finish
            this.finish = null
            done?.('ended')
          }
        }
        if (current === 0) options.onStart?.()
        source.start(0)
      }
      playNext()
    } catch (error) {
      if (runId === this.generation) {
        const done = this.finish
        this.finish = null
        done?.('error')
      }
      throw error
    }
  }

  stop(): void {
    this.generation += 1
    this.stopped = true
    if (this.source) {
      this.source.onended = null
      try { this.source.stop() } catch { /* already stopped */ }
      this.source.disconnect()
      this.source = null
    }
    const done = this.finish
    this.finish = null
    done?.('stopped')
  }

  async selfTest(): Promise<AudioSelfTestResult[]> {
    await this.unlock()
    const results: AudioSelfTestResult[] = []
    for (const accent of ['british', 'american'] as const) {
      const voice = accent === 'british' ? 'en/en-rp' : 'en/en-us'
      const wav = (await this.loadStaticWav('Good morning, everyone.', voice))?.wav || null
      const valid = Boolean(wav && isWavBuffer(wav))
      let decodable = false
      if (valid) {
        try {
          await this.context!.decodeAudioData(wav!.slice(0))
          decodable = true
        } catch { decodable = false }
      }
      results.push({
        accent,
        bytes: wav?.byteLength || 0,
        riff: valid,
        wave: valid,
        decodable,
      })
    }
    return results
  }
}

export const audioEngine = new OfflineAudioEngine()
