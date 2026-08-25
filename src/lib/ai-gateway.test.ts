import { describe, expect, it } from 'vitest';
import { detectTranslationDirection, splitTranslationText } from './ai-gateway';

describe('detectTranslationDirection', () => {
  it('translates English input to Chinese', () => {
    expect(detectTranslationDirection('The UPS alarm has cleared.')).toEqual({
      sourceLanguage: 'en',
      targetLanguage: 'zh',
    });
  });

  it('translates Chinese or mixed input to English', () => {
    expect(detectTranslationDirection('请检查 UPS 告警。')).toEqual({
      sourceLanguage: 'zh',
      targetLanguage: 'en',
    });
  });
});

describe('splitTranslationText', () => {
  it('keeps every request below the UTF-8 byte limit without losing text', () => {
    const input = '检查配电柜。'.repeat(100);
    const chunks = splitTranslationText(input, 120);
    const encoder = new TextEncoder();

    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.join('')).toBe(input);
    expect(chunks.every(chunk => encoder.encode(chunk).byteLength <= 120)).toBe(true);
  });
});
