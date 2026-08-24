import { describe, expect, it } from 'vitest'
import { splitForKokoro } from './kokoroRuntime'

describe('splitForKokoro', () => {
  it('keeps normal sentences intact', () => {
    expect(splitForKokoro('Good morning, everyone. Please inspect the gearbox.'))
      .toEqual(['Good morning, everyone.', 'Please inspect the gearbox.'])
  })

  it('splits very long text without losing its words', () => {
    const input = Array.from({ length: 120 }, (_, index) => `word${index}`).join(' ')
    const parts = splitForKokoro(input)
    expect(parts.length).toBeGreaterThan(1)
    expect(parts.every(part => part.length <= 320)).toBe(true)
    expect(parts.join(' ')).toBe(input)
  })

  it('ignores empty input', () => {
    expect(splitForKokoro('   ')).toEqual([])
  })
})
