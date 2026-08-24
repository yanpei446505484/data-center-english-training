import { describe, expect, it } from 'vitest'
import { isWavBuffer } from './audioEngine'

describe('isWavBuffer', () => {
  it('accepts RIFF/WAVE data', () => {
    const bytes = new TextEncoder().encode('RIFF0000WAVE')
    expect(isWavBuffer(bytes.buffer)).toBe(true)
  })

  it('rejects invalid or empty data', () => {
    expect(isWavBuffer(new ArrayBuffer(0))).toBe(false)
    expect(isWavBuffer(new TextEncoder().encode('NOT-A-WAVE!!').buffer)).toBe(false)
  })
})
