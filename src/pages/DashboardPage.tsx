import { ArrowRight, BookOpenCheck, Flame, Headphones, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryLabels } from '../data/seed'
import { useApp } from '../context/AppContext'

export function DashboardPage() {
  const { scenarios, progress } = useApp()
  const total = scenarios.reduce((sum, scenario) => sum + scenario.sentences.length, 0)
  const completion = total ? Math.round((progress.completedSentenceIds.length / total) * 100) : 0
  const first = scenarios[0]
  return (
    <div className="page dashboard-page">
      <section className="welcome-card">
        <div>
          <span className="eyebrow">TODAY'S TRAINING</span>
          <h1>把数据中心英语<br />练成工作习惯</h1>
          <p>每天练习真实场景，听、读、记、测一体完成。</p>
          {first && <Link className="primary-link" to={`/scenario/${first.id}`}>继续学习 <ArrowRight size={18} /></Link>}
        </div>
        <div className="welcome-visual" aria-hidden="true"><Headphones /><span>{completion}%</span><small>总进度</small></div>
      </section>

      <section className="stat-grid">
        <article><BookOpenCheck /><div><strong>{progress.completedSentenceIds.length}</strong><span>已学句子</span></div></article>
        <article><Flame /><div><strong>{progress.streakDays}</strong><span>连续学习天数</span></div></article>
        <article><Trophy /><div><strong>{progress.quizTotal ? Math.round(progress.quizCorrect / progress.quizTotal * 100) : 0}%</strong><span>测验正确率</span></div></article>
      </section>

      <section className="section-block">
        <div className="section-title"><div><span className="eyebrow">SCENARIOS</span><h2>训练场景</h2></div><Link to="/courses">查看全部 <ArrowRight size={16} /></Link></div>
        <div className="scenario-grid">
          {scenarios.slice(0, 4).map((scenario, index) => {
            const current = progress.scenarioPositions[scenario.id] || 0
            return (
              <Link className="scenario-card" to={`/scenario/${scenario.id}`} key={scenario.id}>
                <div className={`scenario-number tone-${index % 4}`}>{String(index + 1).padStart(2, '0')}</div>
                <span className="badge">{categoryLabels[scenario.category]}</span>
                <h3>{scenario.title}</h3><p>{scenario.subtitle}</p>
                <div className="mini-progress"><span style={{ width: `${Math.round(current / Math.max(1, scenario.sentences.length - 1) * 100)}%` }} /></div>
                <small>{scenario.sentences.length} 句 · {scenario.level}</small>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
