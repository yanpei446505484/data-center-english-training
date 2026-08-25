import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  loadStudyProgress,
  recordFlashcardResult,
  recordQuizResult,
  recordSentenceStudied,
  recordSentencesStudied,
} from './useStudyProgress';

describe('unified study progress', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 7, 25, 9, 30, 0));
  });

  it('persists learned sentences and daily activity in the canonical record', () => {
    recordSentenceStudied(1);
    recordSentencesStudied([1, 2, 3]);

    const progress = loadStudyProgress();
    expect(progress.studiedIds.sort((a, b) => a - b)).toEqual([1, 2, 3]);
    expect(progress.dailyLog['2026-08-25']).toBe(2);
    expect(progress.practiceCount).toBe(2);
    expect(progress.streak).toBe(1);
  });

  it('records quiz totals, per-sentence outcomes and mastered cards', () => {
    recordQuizResult(2, 3, [
      { sentenceId: 10, correct: true },
      { sentenceId: 10, correct: false },
      { sentenceId: 11, correct: true },
    ]);
    recordFlashcardResult(12, true);

    const progress = loadStudyProgress();
    expect(progress.quizCorrect).toBe(2);
    expect(progress.quizTotal).toBe(3);
    expect(progress.studiedIds).toEqual(expect.arrayContaining([10, 11, 12]));
    expect(progress.sentenceResults[10]).toMatchObject({ correct: 1, wrong: 1 });
    expect(progress.masteredIds).toEqual(expect.arrayContaining([11, 12]));
    expect(progress.masteredIds).not.toContain(10);
  });

  it('migrates the old ProgressPage data instead of discarding it', () => {
    localStorage.setItem('dc_english_progress', JSON.stringify({
      learned: {
        25: { correct: 3, wrong: 1, lastReview: '2026-08-24T12:00:00.000Z' },
      },
      streakDays: 2,
      checkinDates: ['2026-08-24', '2026-08-25'],
    }));

    const progress = loadStudyProgress();
    expect(progress.studiedIds).toContain(25);
    expect(progress.quizCorrect).toBe(3);
    expect(progress.quizTotal).toBe(4);
    expect(progress.dailyLog['2026-08-24']).toBe(1);
    expect(progress.dailyLog['2026-08-25']).toBe(1);
    expect(progress.streak).toBe(2);
  });
});
