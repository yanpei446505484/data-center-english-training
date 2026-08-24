import { describe, expect, it } from 'vitest'
import { isWavBuffer, normalizeAudioBuffer } from './audioEngine'

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
