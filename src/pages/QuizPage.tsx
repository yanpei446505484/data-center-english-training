import { Check, RotateCcw, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { AudioButton } from '../components/AudioButton'
import { PageHeader } from '../components/PageHeader'
import { useApp } from '../context/AppContext'

function shuffled<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5)
}

export function QuizPage() {
  const { scenarios, recordQuiz } = useApp()
  const all = useMemo(() => scenarios.flatMap((scenario) => scenario.sentences), [scenarios])
  const [round, setRound] = useState(0)
  const question = all[round % all.length]
  const options = useMemo(() => question ? shuffled([question.zh, ...shuffled(all.filter((item) => item.id !== question.id)).slice(0, 3).map((item) => item.zh)]) : [], [all, question])
  const [answer, setAnswer] = useState<string | null>(null)

  if (!question) return <div className="page empty-state">没有可用于测验的课程数据。</div>
  const choose = (option: string) => {
    if (answer) return
    setAnswer(option)
    recordQuiz(option === question.zh)
  }
  const next = () => { setAnswer(null); setRound((value) => value + 1) }

  return (
    <div className="page quiz-page">
      <PageHeader title="听力测验" subtitle={`第 ${round + 1} 题 · 听句子选择正确中文`} />
      <article className="quiz-card">
        <AudioButton text={question.en} label="播放题目" className="quiz-audio" />
        <p className="quiz-hint">先听发音，再选择句子的正确含义。</p>
        <div className="quiz-options">{options.map((option, index) => {
          const correct = answer && option === question.zh
          const wrong = answer === option && option !== question.zh
          return <button type="button" onClick={() => choose(option)} key={option} className={`${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''}`}><span>{String.fromCharCode(65 + index)}</span>{option}{correct && <Check />}{wrong && <X />}</button>
        })}</div>
        {answer && <div className={`answer-note ${answer === question.zh ? 'correct' : 'wrong'}`}><strong>{answer === question.zh ? '回答正确' : '再复习一次'}</strong><p>{question.en}<br />{question.zh}</p><button type="button" onClick={next}><RotateCcw />下一题</button></div>}
      </article>
    </div>
  )
}
