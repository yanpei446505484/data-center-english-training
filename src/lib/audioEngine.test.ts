import { describe, expect, it } from 'vitest'
import { configureMeSpeak, isWavBuffer, normalizeAudioBuffer, type MeSpeak } from './audioEngine'

describe('isWavBuffer', () => {
  it('accepts RIFF/WAVE data', () => {
    const bytes = new TextEncoder().encode('RIFF0000WAVE')
    expect(isWavBuffer(bytes.buffer)).toBe(true)
  })

  it('rejects invalid or empty data', () => {
    expect(isWavBuffer(new ArrayBuffer(0))).toBe(false)
    expect(isWavBuffer(new TextEncoder().encode('NOT-A-WAVE!!').buffer)).toBe(false)
  })

  it('normalizes plain byte arrays returned by browser builds', () => {
    const wav = normalizeAudioBuffer(Array.from(new TextEncoder().encode('RIFF0000WAVE')))
    expect(wav).toBeInstanceOf(ArrayBuffer)
    expect(isWavBuffer(wav!)).toBe(true)
  })

  it('normalizes typed-array views', () => {
    const wav = normalizeAudioBuffer(new Uint8Array(new TextEncoder().encode('RIFF0000WAVE')))
    expect(wav).toBeInstanceOf(ArrayBuffer)
    expect(isWavBuffer(wav!)).toBe(true)
  })
})

describe('configureMeSpeak', () => {
  it('loads config and every fallback voice before marking the engine ready', async () => {
    let configLoaded = false
    const voices = new Set<string>()
    let defaultVoice = ''
    const requested: string[] = []
    const jsonByPath: Record<string, unknown> = {
      'mespeak/mespeak_config.json': { config: 'ok' },
      'mespeak/voices/en/en-rp.json': { voice_id: 'en/en-rp' },
      'mespeak/voices/en/en-us.json': { voice_id: 'en/en-us' },
      'mespeak/voices/zh.json': { voice_id: 'zh' },
    }
    const engine: MeSpeak = {
      loadConfig: () => { configLoaded = true },
      loadVoice: data => { voices.add((data as { voice_id: string }).voice_id) },
      isConfigLoaded: () => configLoaded,
      isVoiceLoaded: voice => voices.has(voice),
      setDefaultVoice: voice => { defaultVoice = voice },
      speak: () => null,
    }

    await configureMeSpeak(engine, async path => {
      requested.push(path)
      return jsonByPath[path]
    })

    expect(requested).toEqual(Object.keys(jsonByPath))
    expect([...voices]).toEqual(['en/en-rp', 'en/en-us', 'zh'])
    expect(defaultVoice).toBe('en/en-rp')
  })

  it('fails clearly when a required voice is missing', async () => {
    const engine: MeSpeak = {
      loadConfig: () => undefined,
      loadVoice: () => undefined,
      isConfigLoaded: () => true,
      isVoiceLoaded: () => false,
      setDefaultVoice: () => undefined,
      speak: () => null,
    }

    await expect(configureMeSpeak(engine, async () => ({})))
      .rejects.toThrow('离线语音声库未能加载')
  })
})
