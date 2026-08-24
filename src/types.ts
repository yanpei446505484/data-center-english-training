export type Accent = 'british' | 'american'

export interface WordNote {
  word: string
  phonetic?: string
  translation: string
  partOfSpeech?: string
}

export interface TrainingSentence {
  id: string
  en: string
  zh: string
  ipa?: string
  words?: WordNote[]
}

export interface Scenario {
  id: string
  title: string
  subtitle: string
  category: 'handover' | 'electrical' | 'cooling' | 'life'
  level: '基础' | '进阶' | '专业'
  description: string
  sentences: TrainingSentence[]
  source: 'screenshot_exact' | 'reconstructed_seed' | 'imported'
}

export interface UserSettings {
  accent: Accent
  speed: number
  nickname: string
}

export interface AppProgress {
  completedSentenceIds: string[]
  practicedSentenceIds: string[]
  scenarioPositions: Record<string, number>
  quizCorrect: number
  quizTotal: number
  streakDays: number
  lastStudyDate?: string
}

export interface ImportedRow {
  scenarioId?: string
  scenarioTitle?: string
  category?: Scenario['category']
  level?: Scenario['level']
  en: string
  zh: string
  ipa?: string
}
