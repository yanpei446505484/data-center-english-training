import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react'
import { seedScenarios } from '../data/seed'
import { defaultProgress, defaultSettings, readStored, STORAGE_KEYS, writeStored } from '../lib/storage'
import type { AppProgress, Scenario, UserSettings } from '../types'

interface AppState {
  scenarios: Scenario[]
  favorites: string[]
  progress: AppProgress
  settings: UserSettings
  toggleFavorite: (sentenceId: string) => void
  markCompleted: (sentenceId: string, scenarioId: string, position: number) => void
  markPracticed: (sentenceId: string) => void
  updateSettings: (next: Partial<UserSettings>) => void
  recordQuiz: (correct: boolean) => void
  importScenarios: (next: Scenario[]) => void
  resetLocalData: () => void
}

const AppContext = createContext<AppState | null>(null)

export function AppProvider({ children }: PropsWithChildren) {
  const [customScenarios, setCustomScenarios] = useState<Scenario[]>(() => readStored(STORAGE_KEYS.scenarios, []))
  const [favorites, setFavorites] = useState<string[]>(() => readStored(STORAGE_KEYS.favorites, []))
  const [progress, setProgress] = useState<AppProgress>(() => {
    const stored = readStored<Partial<AppProgress>>(STORAGE_KEYS.progress, defaultProgress)
    return { ...defaultProgress, ...stored, completedSentenceIds: stored.completedSentenceIds || [], practicedSentenceIds: stored.practicedSentenceIds || [], scenarioPositions: stored.scenarioPositions || {} }
  })
  const [settings, setSettings] = useState<UserSettings>(() => readStored(STORAGE_KEYS.settings, defaultSettings))
  const scenarios = useMemo(() => [...seedScenarios, ...customScenarios], [customScenarios])

  const value: AppState = {
    scenarios,
    favorites,
    progress,
    settings,
    toggleFavorite(sentenceId) {
      setFavorites((current) => {
        const next = current.includes(sentenceId) ? current.filter((id) => id !== sentenceId) : [...current, sentenceId]
        writeStored(STORAGE_KEYS.favorites, next)
        return next
      })
    },
    markCompleted(sentenceId, scenarioId, position) {
      setProgress((current) => {
        const completedSentenceIds = current.completedSentenceIds.includes(sentenceId)
          ? current.completedSentenceIds
          : [...current.completedSentenceIds, sentenceId]
        const next = {
          ...current,
          completedSentenceIds,
          scenarioPositions: { ...current.scenarioPositions, [scenarioId]: position },
          lastStudyDate: new Date().toISOString().slice(0, 10),
        }
        writeStored(STORAGE_KEYS.progress, next)
        return next
      })
    },
    markPracticed(sentenceId) {
      setProgress((current) => {
        if (current.practicedSentenceIds.includes(sentenceId)) return current
        const next = { ...current, practicedSentenceIds: [...current.practicedSentenceIds, sentenceId] }
        writeStored(STORAGE_KEYS.progress, next)
        return next
      })
    },
    updateSettings(nextSettings) {
      setSettings((current) => {
        const next = { ...current, ...nextSettings }
        writeStored(STORAGE_KEYS.settings, next)
        return next
      })
    },
    recordQuiz(correct) {
      setProgress((current) => {
        const next = { ...current, quizTotal: current.quizTotal + 1, quizCorrect: current.quizCorrect + (correct ? 1 : 0) }
        writeStored(STORAGE_KEYS.progress, next)
        return next
      })
    },
    importScenarios(nextScenarios) {
      setCustomScenarios(nextScenarios)
      writeStored(STORAGE_KEYS.scenarios, nextScenarios)
    },
    resetLocalData() {
      Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key))
      setCustomScenarios([])
      setFavorites([])
      setProgress(defaultProgress)
      setSettings(defaultSettings)
    },
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppState {
  const value = useContext(AppContext)
  if (!value) throw new Error('useApp must be used inside AppProvider')
  return value
}
