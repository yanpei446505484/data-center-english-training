export type KokoroVoice = 'bf_emma' | 'af_sarah'

interface KokoroAudio {
  audio: Float32Array
  sampling_rate: number
  toWav: () => ArrayBuffer
}

interface KokoroModel {
  generate: (text: string, options: { voice: KokoroVoice; speed: number }) => Promise<KokoroAudio>
}

interface KokoroModule {
  env: { wasmPaths: string }
  KokoroTTS: {
    from_pretrained: (
      modelId: string,
      options: {
        dtype: 'q8'
        device: 'wasm'
        progress_callback?: (progress: unknown) => void
      },
    ) => Promise<KokoroModel>
  }
}

const MAX_SEGMENT_LENGTH = 320
const SILENCE_SECONDS = .12

let model: KokoroModel | null = null
let modelPromise: Promise<KokoroModel> | null = null

function assetUrl(path: string): string {
  return new URL(path, document.baseURI).href
}

/** Split long passages so Kokoro's 512-token limit never truncates them. */
export function splitForKokoro(text: string): string[] {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (!normalized) return []

  const sentences = normalized.match(/[^.!?。！？]+[.!?。！？]+|[^.!?。！？]+$/g) || [normalized]
  const parts: string[] = []
  for (const sentence of sentences) {
    let remaining = sentence.trim()
    while (remaining.length > MAX_SEGMENT_LENGTH) {
      let splitAt = remaining.lastIndexOf(' ', MAX_SEGMENT_LENGTH)
      if (splitAt < MAX_SEGMENT_LENGTH * .55) splitAt = MAX_SEGMENT_LENGTH
      parts.push(remaining.slice(0, splitAt).trim())
      remaining = remaining.slice(splitAt).trim()
    }
    if (remaining) parts.push(remaining)
  }
  return parts
}

async function loadModel(onProgress?: (progress: unknown) => void): Promise<KokoroModel> {
  if (model) return model
  if (modelPromise) return modelPromise

  modelPromise = (async () => {
    const runtimeUrl = assetUrl('kokoro/kokoro.web.js')
    const runtime = await import(/* @vite-ignore */ runtimeUrl) as KokoroModule
    runtime.env.wasmPaths = assetUrl('kokoro/')
    // The self-hosted runtime resolves this identifier beneath its own
    // /kokoro/ directory, so every model request stays on the Pages origin.
    const loaded = await runtime.KokoroTTS.from_pretrained('model', {
      dtype: 'q8',
      device: 'wasm',
      progress_callback: onProgress,
    })
    model = loaded
    return loaded
  })().catch((error) => {
    modelPromise = null
    throw error
  })

  return modelPromise
}

/** Start downloading and initializing Kokoro before the first pronunciation click. */
export async function preloadKokoroModel(): Promise<void> {
  await loadModel()
}

function concatenateAudio(chunks: KokoroAudio[]): ArrayBuffer {
  if (chunks.length === 1) return chunks[0].toWav()
  const sampleRate = chunks[0]?.sampling_rate || 24_000
  const silenceLength = Math.round(sampleRate * SILENCE_SECONDS)
  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.audio.length, 0)
    + silenceLength * Math.max(0, chunks.length - 1)
  const samples = new Float32Array(totalLength)
  let offset = 0
  chunks.forEach((chunk, index) => {
    if (chunk.sampling_rate !== sampleRate) throw new Error('Kokoro 音频采样率不一致')
    samples.set(chunk.audio, offset)
    offset += chunk.audio.length
    if (index < chunks.length - 1) offset += silenceLength
  })

  const headerBytes = 44
  const wav = new ArrayBuffer(headerBytes + samples.byteLength)
  const view = new DataView(wav)
  const writeText = (position: number, value: string) => {
    for (let i = 0; i < value.length; i += 1) view.setUint8(position + i, value.charCodeAt(i))
  }
  writeText(0, 'RIFF')
  view.setUint32(4, 36 + samples.byteLength, true)
  writeText(8, 'WAVE')
  writeText(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 3, true)
  view.setUint16(22, 1, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * 4, true)
  view.setUint16(32, 4, true)
  view.setUint16(34, 32, true)
  writeText(36, 'data')
  view.setUint32(40, samples.byteLength, true)
  new Float32Array(wav, headerBytes).set(samples)
  return wav
}

export async function generateKokoroWav(
  text: string,
  voice: KokoroVoice,
  speed = 1,
  onProgress?: (progress: unknown) => void,
): Promise<ArrayBuffer> {
  const parts = splitForKokoro(text)
  if (parts.length === 0) throw new Error('没有可朗读的文字')
  const tts = await loadModel(onProgress)
  const chunks: KokoroAudio[] = []
  for (const part of parts) chunks.push(await tts.generate(part, { voice, speed }))
  return concatenateAudio(chunks)
}

export function isKokoroModelReady(): boolean {
  return model !== null
}
