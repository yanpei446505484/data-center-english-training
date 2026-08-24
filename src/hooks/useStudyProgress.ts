// EXPORTS: recordSentenceStudied, recordQuizResult, recordDailyActivity, loadStudyProgress
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';

const STORAGE_KEY = '__app_dc_english_progress';

interface IStudyProgress {
  studiedIds: number[];
  masteredIds: number[];
  quizCorrect: number;
  quizTotal: number;
  dailyLog: Record<string, number>;
  lastDate: string;
  streak: number;
}

const DEFAULT_PROGRESS: IStudyProgress = {
  studiedIds: [],
  masteredIds: [],
  quizCorrect: 0,
  quizTotal: 0,
  dailyLog: {},
  lastDate: '',
  streak: 0,
};

function loadStudyProgress(): IStudyProgress {
  try {
    const raw = storage.getItem(userStorageKey(STORAGE_KEY));
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw) as Partial<IStudyProgress>;
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

function saveStudyProgress(data: IStudyProgress) {
  storage.setItem(userStorageKey(STORAGE_KEY), JSON.stringify(data));
}

function computeStreak(log: Record<string, number>): number {
  const today = new Date().toISOString().slice(0, 10);
  let streak = 0;
  const d = new Date();
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (log[key] && log[key] > 0) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else if (key === today) {
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

/**
 * Mark a sentence as studied. Adds to studiedIds if not already there,
 * and records daily activity.
 */
export function recordSentenceStudied(sentenceId: number) {
  const progress = loadStudyProgress();
  if (!progress.studiedIds.includes(sentenceId)) {
    progress.studiedIds.push(sentenceId);
  }
  const today = new Date().toISOString().slice(0, 10);
  progress.dailyLog[today] = (progress.dailyLog[today] || 0) + 1;
  progress.lastDate = today;
  progress.streak = computeStreak(progress.dailyLog);
  saveStudyProgress(progress);
}

/**
 * Record quiz results. Updates quizCorrect/quizTotal and daily activity.
 */
export function recordQuizResult(correct: number, total: number) {
  const progress = loadStudyProgress();
  progress.quizCorrect += correct;
  progress.quizTotal += total;
  const today = new Date().toISOString().slice(0, 10);
  progress.dailyLog[today] = (progress.dailyLog[today] || 0) + 1;
  progress.lastDate = today;
  progress.streak = computeStreak(progress.dailyLog);
  saveStudyProgress(progress);
}

/**
 * Record a generic daily learning activity (e.g., scenario practice, flashcard review).
 */
export function recordDailyActivity() {
  const progress = loadStudyProgress();
  const today = new Date().toISOString().slice(0, 10);
  progress.dailyLog[today] = (progress.dailyLog[today] || 0) + 1;
  progress.lastDate = today;
  progress.streak = computeStreak(progress.dailyLog);
  saveStudyProgress(progress);
}
