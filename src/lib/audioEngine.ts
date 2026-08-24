import type { Accent } from '../types'

interface MeSpeak {
  loadConfig: (url: string, callback: (ok: boolean, detail?: string) => void) => void
  loadVoice: (url: string, callback: (ok: boolean, detail?: string) => void) => void
  speak: (text: string, options: Record<string, unknown>) => ArrayBuffer | null
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

function loadData(loader: (url: string, callback: (ok: boolean, detail?: string) => void) => void, path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    loader(assetUrl(path), (ok, detail) => ok ? resolve() : reject(new Error(detail || `语音数据加载失败：${path}`)))
  })
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

  preload(): Promise<void> {
    return this.initialize()
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
      this.engine = window.__meSpeak
      await loadData(this.engine.loadConfig.bind(this.engine), 'mespeak/mespeak_config.json')
      await loadData(this.engine.loadVoice.bind(this.engine), 'mespeak/voices/en/en-rp.json')
      await loadData(this.engine.loadVoice.bind(this.engine), 'mespeak/voices/en/en-us.json')
      await loadData(this.engine.loadVoice.bind(this.engine), 'mespeak/voices/zh.json')
    })().catch((error) => {
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
      await this.initialize()
      if (runId !== this.generation || this.stopped) return
      const voice = options.language === 'zh' ? 'zh' : options.accent === 'american' ? 'en/en-us' : 'en/en-rp'
      const wav = this.engine?.speak(normalized, {
        voice,
        speed: options.speed ?? 145,
        amplitude: 100,
        wordgap: 1,
        rawdata: true,
      })
      if (!(wav instanceof ArrayBuffer) || !isWavBuffer(wav)) throw new Error('离线语音没有生成有效WAV音频')
      const decoded = await this.context!.decodeAudioData(wav.slice(0))
      if (runId !== this.generation || this.stopped) return
      const total = Math.max(1, Math.min(15, options.repeat ?? 1))
      let current = 0
      const playNext = () => {
        if (runId !== this.generation || this.stopped || !this.context) return
        const source = this.context.createBufferSource()
        source.buffer = decoded
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
    await this.initialize()
    const results: AudioSelfTestResult[] = []
    for (const accent of ['british', 'american'] as const) {
      const voice = accent === 'british' ? 'en/en-rp' : 'en/en-us'
      const wav = this.engine!.speak('Good morning, everyone.', { voice, speed: 145, rawdata: true })
      const valid = wav instanceof ArrayBuffer && isWavBuffer(wav)
      let decodable = false
      if (valid) {
        try {
          await this.context!.decodeAudioData(wav.slice(0))
          decodable = true
        } catch { decodable = false }
      }
      results.push({
        accent,
        bytes: wav instanceof ArrayBuffer ? wav.byteLength : 0,
        riff: valid,
        wave: valid,
        decodable,
      })
    }
    return results
  }
}

export const audioEngine = new OfflineAudioEngine()
