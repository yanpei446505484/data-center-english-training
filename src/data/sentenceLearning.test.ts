import { describe, expect, it } from 'vitest';
import { MOCK_SENTENCES, SENTENCE_SECTIONS } from './sentenceLearning';

describe('complete original course corpus', () => {
  it('contains 81 sections and 2,600 uniquely addressable records', () => {
    expect(SENTENCE_SECTIONS).toHaveLength(81);
    expect(MOCK_SENTENCES).toHaveLength(2600);
    expect(new Set(MOCK_SENTENCES.map(sentence => sentence.id)).size).toBe(2600);
    expect(MOCK_SENTENCES[0]?.id).toBe(1);
    expect(MOCK_SENTENCES.at(-1)?.id).toBe(2600);
  });

  it('covers every record exactly once through normalized section ranges', () => {
    const total = SENTENCE_SECTIONS.reduce(
      (sum, section) => sum + section.range[1] - section.range[0] + 1,
      0,
    );
    expect(total).toBe(2600);
    expect(SENTENCE_SECTIONS[0]?.range).toEqual([1, 30]);
    expect(SENTENCE_SECTIONS.at(-1)?.range[1]).toBe(2600);
    for (const section of SENTENCE_SECTIONS) {
      const actual = MOCK_SENTENCES.filter(
        sentence => sentence.id >= section.range[0] && sentence.id <= section.range[1],
      );
      expect(actual).toHaveLength(section.range[1] - section.range[0] + 1);
    }
  });

  it('keeps the complete core and deep-learning fields', () => {
    for (const sentence of MOCK_SENTENCES) {
      expect(sentence.sourceId).toBeTypeOf('number');
      expect(sentence.en.trim()).not.toBe('');
      expect(sentence.cn.trim()).not.toBe('');
      expect(sentence.ipa.trim()).not.toBe('');
      expect(sentence.when.trim()).not.toBe('');
      expect(sentence.pattern?.trim()).not.toBe('');
      expect(sentence.thinking?.trim()).not.toBe('');
      expect(sentence.pronunciation?.trim()).not.toBe('');
      expect(sentence.quiz?.length).toBeGreaterThan(0);
    }

    expect(MOCK_SENTENCES.filter(sentence => sentence.words.length > 0).length).toBeGreaterThanOrEqual(2570);
    expect(MOCK_SENTENCES.filter(sentence => sentence.phrases.length > 0).length).toBeGreaterThanOrEqual(2599);
    expect(MOCK_SENTENCES.filter(sentence => (sentence.grammar?.length ?? 0) > 0).length).toBeGreaterThanOrEqual(2587);
  });
});
