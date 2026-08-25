// Central learning-progress store used by every learning page.
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';

const STORAGE_KEY = '__app_dc_english_progress';
const LEGACY_STORAGE_KEY = 'dc_english_progress';

export interface ISentenceStudyResult {
  correct: number;
  wrong: number;
  lastReview: string;
}

export interface IStudyProgress {
  studiedIds: number[];
  masteredIds: number[];
  quizCorrect: number;
  quizTotal: number;
  practiceCount: number;
  dailyLog: Record<string, number>;
  lastDate: string;
  streak: number;
  sentenceResults: Record<number, ISentenceStudyResult>;
}

interface ILegacyProgress {
  learned?: Record<number, ISentenceStudyResult>;
  streakDays?: number;
  checkinDates?: string[];
}

export interface ISentenceQuizAttempt {
  sentenceId: number;
  correct: boolean;
}

export function createEmptyStudyProgress(): IStudyProgress {
  return {
    studiedIds: [],
    masteredIds: [],
    quizCorrect: 0,
    quizTotal: 0,
    practiceCount: 0,
    dailyLog: {},
    lastDate: '',
    streak: 0,
    sentenceResults: {},
  };
}

export function getLocalDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function asNonNegativeInt(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value)
    ? Math.max(0, Math.floor(value))
    : 0;
}

function normalizeIds(value: unknown): number[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value
    .filter((id): id is number => typeof id === 'number' && Number.isFinite(id) && id > 0)
    .map(Math.floor))];
}

function normalizeDailyLog(value: unknown): Record<string, number> {
  if (!value || typeof value !== 'object') return {};
  const result: Record<string, number> = {};
  for (const [date, count] of Object.entries(value)) {
    const normalized = asNonNegativeInt(count);
    if (/^\d{4}-\d{2}-\d{2}$/.test(date) && normalized > 0) result[date] = normalized;
  }
  return result;
}

function normalizeSentenceResults(value: unknown): Record<number, ISentenceStudyResult> {
  if (!value || typeof value !== 'object') return {};
  const result: Record<number, ISentenceStudyResult> = {};
  for (const [idText, raw] of Object.entries(value)) {
    const id = Number(idText);
    if (!Number.isFinite(id) || id <= 0 || !raw || typeof raw !== 'object') continue;
    const item = raw as Partial<ISentenceStudyResult>;
    result[Math.floor(id)] = {
      correct: asNonNegativeInt(item.correct),
      wrong: asNonNegativeInt(item.wrong),
      lastReview: typeof item.lastReview === 'string' ? item.lastReview : '',
    };
  }
  return result;
}

function normalizeProgress(value: unknown): IStudyProgress {
  const empty = createEmptyStudyProgress();
  if (!value || typeof value !== 'object') return empty;
  const parsed = value as Partial<IStudyProgress>;
  const dailyLog = normalizeDailyLog(parsed.dailyLog);
  const recordedPracticeCount = asNonNegativeInt(parsed.practiceCount);
  return {
    studiedIds: normalizeIds(parsed.studiedIds),
    masteredIds: normalizeIds(parsed.masteredIds),
    quizCorrect: asNonNegativeInt(parsed.quizCorrect),
    quizTotal: asNonNegativeInt(parsed.quizTotal),
    practiceCount: recordedPracticeCount || Object.values(dailyLog).reduce((sum, count) => sum + count, 0),
    dailyLog,
    lastDate: typeof parsed.lastDate === 'string' ? parsed.lastDate : '',
    streak: asNonNegativeInt(parsed.streak),
    sentenceResults: normalizeSentenceResults(parsed.sentenceResults),
  };
}

function parseStoredValue(key: string): unknown {
  try {
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function progressStorageKeys(baseKey: string): string[] {
  return [...new Set([userStorageKey(baseKey), baseKey])];
}

function mergeLegacyProgress(progress: IStudyProgress, value: unknown): void {
  if (!value || typeof value !== 'object') return;
  const legacy = value as ILegacyProgress;
  const learned = normalizeSentenceResults(legacy.learned);
  const studiedIds = new Set(progress.studiedIds);
  const masteredIds = new Set(progress.masteredIds);

  for (const [idText, item] of Object.entries(learned)) {
    const id = Number(idText);
    studiedIds.add(id);
    const current = progress.sentenceResults[id] ?? { correct: 0, wrong: 0, lastReview: '' };
    progress.sentenceResults[id] = {
      correct: Math.max(current.correct, item.correct),
      wrong: Math.max(current.wrong, item.wrong),
      lastReview: current.lastReview > item.lastReview ? current.lastReview : item.lastReview,
    };
    if (item.correct > 0 && item.wrong === 0) masteredIds.add(id);
  }

  const legacyCorrect = Object.values(learned).reduce((sum, item) => sum + item.correct, 0);
  const legacyWrong = Object.values(learned).reduce((sum, item) => sum + item.wrong, 0);
  progress.quizCorrect = Math.max(progress.quizCorrect, legacyCorrect);
  progress.quizTotal = Math.max(progress.quizTotal, legacyCorrect + legacyWrong);
  progress.practiceCount = Math.max(progress.practiceCount, legacyCorrect + legacyWrong);

  for (const date of Array.isArray(legacy.checkinDates) ? legacy.checkinDates : []) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) progress.dailyLog[date] = Math.max(progress.dailyLog[date] || 0, 1);
  }
  progress.streak = Math.max(progress.streak, asNonNegativeInt(legacy.streakDays));
  progress.studiedIds = [...studiedIds];
  progress.masteredIds = [...masteredIds];
}

function mergeCanonicalProgress(target: IStudyProgress, source: IStudyProgress): void {
  target.studiedIds = [...new Set([...target.studiedIds, ...source.studiedIds])];
  target.masteredIds = [...new Set([...target.masteredIds, ...source.masteredIds])];
  target.quizCorrect = Math.max(target.quizCorrect, source.quizCorrect);
  target.quizTotal = Math.max(target.quizTotal, source.quizTotal);
  target.practiceCount = Math.max(target.practiceCount, source.practiceCount);
  target.lastDate = target.lastDate > source.lastDate ? target.lastDate : source.lastDate;
  target.streak = Math.max(target.streak, source.streak);
  for (const [date, count] of Object.entries(source.dailyLog)) {
    target.dailyLog[date] = Math.max(target.dailyLog[date] || 0, count);
  }
  for (const [idText, item] of Object.entries(source.sentenceResults)) {
    const id = Number(idText);
    const current = target.sentenceResults[id] ?? { correct: 0, wrong: 0, lastReview: '' };
    target.sentenceResults[id] = {
      correct: Math.max(current.correct, item.correct),
      wrong: Math.max(current.wrong, item.wrong),
      lastReview: current.lastReview > item.lastReview ? current.lastReview : item.lastReview,
    };
  }
}

export function computeStreak(log: Record<string, number>): number {
  let streak = 0;
  const date = new Date();
  const today = getLocalDateKey(date);
  while (true) {
    const key = getLocalDateKey(date);
    if ((log[key] || 0) > 0) {
      streak++;
      date.setDate(date.getDate() - 1);
    } else if (key === today) {
      date.setDate(date.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

export function saveStudyProgress(data: IStudyProgress): void {
  storage.setItem(userStorageKey(STORAGE_KEY), JSON.stringify(data));
}

/** Load the canonical progress and migrate records created by older releases. */
export function loadStudyProgress(): IStudyProgress {
  const progress = createEmptyStudyProgress();
  for (const key of progressStorageKeys(STORAGE_KEY)) {
    const value = parseStoredValue(key);
    if (value) mergeCanonicalProgress(progress, normalizeProgress(value));
  }
  for (const key of progressStorageKeys(LEGACY_STORAGE_KEY)) {
    mergeLegacyProgress(progress, parseStoredValue(key));
  }
  progress.streak = computeStreak(progress.dailyLog);
  saveStudyProgress(progress);
  return progress;
}

/** Restore the sync cache from IndexedDB first when mobile storage evicted localStorage. */
export async function loadStudyProgressAsync(): Promise<IStudyProgress> {
  const keys = [
    ...progressStorageKeys(STORAGE_KEY),
    ...progressStorageKeys(LEGACY_STORAGE_KEY),
  ];
  await Promise.all([...new Set(keys)].map((key) => storage.getItemAsync(key)));
  return loadStudyProgress();
}

function recordActivity(progress: IStudyProgress, amount = 1): void {
  const today = getLocalDateKey();
  progress.dailyLog[today] = (progress.dailyLog[today] || 0) + Math.max(1, amount);
  progress.practiceCount += Math.max(1, amount);
  progress.lastDate = today;
  progress.streak = computeStreak(progress.dailyLog);
}

/** Mark one or more real course sentences as studied and count one learning activity. */
export function recordSentencesStudied(sentenceIds: number[], activityAmount = 1): void {
  const progress = loadStudyProgress();
  progress.studiedIds = [...new Set([
    ...progress.studiedIds,
    ...normalizeIds(sentenceIds),
  ])];
  recordActivity(progress, activityAmount);
  saveStudyProgress(progress);
}

export function recordSentenceStudied(sentenceId: number): void {
  recordSentencesStudied([sentenceId]);
}

/** Record aggregate quiz totals and per-sentence outcomes for weak-item analysis. */
export function recordQuizResult(
  correct: number,
  total: number,
  attempts: ISentenceQuizAttempt[] = [],
): void {
  const progress = loadStudyProgress();
  progress.quizCorrect += asNonNegativeInt(correct);
  progress.quizTotal += asNonNegativeInt(total);
  const studiedIds = new Set(progress.studiedIds);
  const masteredIds = new Set(progress.masteredIds);
  const reviewedAt = new Date().toISOString();

  for (const attempt of attempts) {
    const id = Math.floor(attempt.sentenceId);
    if (!Number.isFinite(id) || id <= 0) continue;
    studiedIds.add(id);
    const current = progress.sentenceResults[id] ?? { correct: 0, wrong: 0, lastReview: '' };
    const next = {
      correct: current.correct + (attempt.correct ? 1 : 0),
      wrong: current.wrong + (attempt.correct ? 0 : 1),
      lastReview: reviewedAt,
    };
    progress.sentenceResults[id] = next;
    if (next.correct > 0 && next.wrong === 0) masteredIds.add(id);
    if (next.wrong > 0) masteredIds.delete(id);
  }

  progress.studiedIds = [...studiedIds];
  progress.masteredIds = [...masteredIds];
  recordActivity(progress);
  saveStudyProgress(progress);
}

/** Record a flashcard decision and keep learned/mastered counters in sync. */
export function recordFlashcardResult(sentenceId: number, known: boolean): void {
  const progress = loadStudyProgress();
  const id = Math.floor(sentenceId);
  if (!Number.isFinite(id) || id <= 0) return;
  progress.studiedIds = [...new Set([...progress.studiedIds, id])];
  const masteredIds = new Set(progress.masteredIds);
  if (known) masteredIds.add(id);
  else masteredIds.delete(id);
  progress.masteredIds = [...masteredIds];
  recordActivity(progress);
  saveStudyProgress(progress);
}

export function recordDailyActivity(): void {
  const progress = loadStudyProgress();
  recordActivity(progress);
  saveStudyProgress(progress);
}

export function clearStudyProgress(): void {
  for (const key of [
    ...progressStorageKeys(STORAGE_KEY),
    ...progressStorageKeys(LEGACY_STORAGE_KEY),
  ]) {
    storage.removeItem(key);
  }
}
