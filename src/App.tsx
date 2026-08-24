import { useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { AppProvider } from './context/AppContext'
import { audioEngine } from './lib/audioEngine'
import { CoursesPage } from './pages/CoursesPage'
import { DashboardPage } from './pages/DashboardPage'
import { DictionaryPage } from './pages/DictionaryPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { ImportPage } from './pages/ImportPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProgressPage } from './pages/ProgressPage'
import { QuizPage } from './pages/QuizPage'
import { ScenarioPage } from './pages/ScenarioPage'
import { SettingsPage } from './pages/SettingsPage'

function AppRoutes() {
  useEffect(() => {
    const timer = window.setTimeout(() => audioEngine.preload().catch(() => undefined), 600)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/scenario/:scenarioId" element={<ScenarioPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/import" element={<ImportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  )
}

export default function App() {
  return <AppProvider><HashRouter><AppRoutes /></HashRouter></AppProvider>
}
