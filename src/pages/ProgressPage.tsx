import { BarChart3, CheckCircle2, Mic2, Target, Trophy } from 'lucide-react'
import type { CSSProperties } from 'react'
import { PageHeader } from '../components/PageHeader'
import { useApp } from '../context/AppContext'

export function ProgressPage() {
  const { scenarios, progress } = useApp()
  const total = scenarios.reduce((sum, scenario) => sum + scenario.sentences.length, 0)
  const completion = total ? Math.round(progress.completedSentenceIds.length / total * 100) : 0
  return (
    <div className="page">
      <PageHeader title="学习进度" subtitle="数据只保存在你的浏览器中" />
      <div className="progress-summary"><div className="progress-ring" style={{ '--value': `${completion * 3.6}deg` } as CSSProperties}><strong>{completion}%</strong><span>总体完成</span></div><div><h2>坚持每天练习</h2><p>完成句子会自动保存在本机。导出备份可用于更换设备。</p></div></div>
      <div className="stat-grid"><article><CheckCircle2 /><div><strong>{progress.completedSentenceIds.length}</strong><span>已完成句子</span></div></article><article><Mic2 /><div><strong>{progress.practicedSentenceIds.length}</strong><span>已跟读句子</span></div></article><article><Target /><div><strong>{total}</strong><span>课程句子总数</span></div></article><article><Trophy /><div><strong>{progress.quizTotal ? Math.round(progress.quizCorrect / progress.quizTotal * 100) : 0}%</strong><span>测验正确率</span></div></article></div>
      <section className="section-block"><div className="section-title"><h2>课程明细</h2><BarChart3 /></div><div className="course-progress-list">{scenarios.map((scenario) => {
        const completed = scenario.sentences.filter((sentence) => progress.completedSentenceIds.includes(sentence.id)).length
        const percent = Math.round(completed / scenario.sentences.length * 100)
        return <article key={scenario.id}><div><strong>{scenario.title}</strong><span>{completed}/{scenario.sentences.length}句</span></div><div className="mini-progress"><span style={{ width: `${percent}%` }} /></div></article>
      })}</div></section>
    </div>
  )
}
