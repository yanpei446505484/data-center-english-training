import type { AppProgress, Scenario, UserSettings } from '../types'

export const STORAGE_KEYS = {
  favorites: 'dc-english-favorites',
  progress: 'dc-english-progress',
  settings: 'dc-english-settings',
  scenarios: 'dc-english-custom-scenarios',
} as const

export const defaultProgress: AppProgress = {
  completedSentenceIds: [],
  practicedSentenceIds: [],
  scenarioPositions: {},
  quizCorrect: 0,
  quizTotal: 0,
  streakDays: 1,
}

export const defaultSettings: UserSettings = {
  accent: 'british',
  speed: 145,
  nickname: '学习者',
}

export function readStored<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function writeStored<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function exportUserData(favorites: string[], progress: AppProgress, settings: UserSettings, scenarios: Scenario[]): string {
  return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), favorites, progress, settings, scenarios }, null, 2)
}
