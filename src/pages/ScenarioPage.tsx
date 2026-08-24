import { Bookmark, BookmarkCheck, CheckCircle2, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AudioButton } from '../components/AudioButton'
import { FollowPractice } from '../components/FollowPractice'
import { useApp } from '../context/AppContext'
import { audioEngine } from '../lib/audioEngine'

const repeatOptions = [1, 5, 10, 15]

export function ScenarioPage() {
  const { scenarioId } = useParams()
  const navigate = useNavigate()
  const { scenarios, favorites, progress, settings, toggleFavorite, markCompleted, markPracticed } = useApp()
  const scenario = scenarios.find((item) => item.id === scenarioId)
  const initial = scenario ? Math.min(progress.scenarioPositions[scenario.id] || 0, scenario.sentences.length - 1) : 0
  const [index, setIndex] = useState(initial)
  const [repeat, setRepeat] = useState(1)
  const sentence = scenario?.sentences[index]
  const completion = scenario ? Math.round(((index + 1) / scenario.sentences.length) * 100) : 0

  useEffect(() => () => audioEngine.stop(), [])
  const words = useMemo(() => sentence?.words || [], [sentence])
  const wordTokens = useMemo(() => [...new Set(sentence?.en.match(/[A-Za-z]+(?:['’][A-Za-z]+)?/g) || [])], [sentence])

  if (!scenario || !sentence) return <div className="page empty-state">没有找到这个训练场景。</div>
  const favorite = favorites.includes(sentence.id)
  const move = (next: number) => {
    audioEngine.stop()
    const safe = Math.max(0, Math.min(scenario.sentences.length - 1, next))
    setIndex(safe)
    markCompleted(scenario.sentences[safe].id, scenario.id, safe)
  }

  return (
    <div className="scenario-page">
      <header className="scenario-head">
        <button type="button" className="icon-btn" onClick={() => navigate(-1)} aria-label="返回"><ChevronLeft /></button>
        <div><h1>{scenario.title}</h1><p>第 {index + 1} / {scenario.sentences.length} 句</p></div>
      </header>
      <div className="progress-track"><span style={{ width: `${completion}%` }} /></div><small className="progress-label">进度 {completion}%</small>

      <article className="training-card">
        <div className="training-meta"><span>第{index + 1}句</span><span>{scenario.subtitle}</span></div>
        <h2>{sentence.en}</h2>
        <button className="favorite-line" type="button" onClick={() => toggleFavorite(sentence.id)}>
          {favorite ? <BookmarkCheck /> : <Bookmark />} {favorite ? '已收藏整句' : '收藏整句'}
        </button>
        <p className="translation">{sentence.zh}</p>
        {sentence.ipa && <p className="ipa">{sentence.ipa}</p>}
        <div className="repeat-row"><Volume2 size={17} /><span>重复：</span>{repeatOptions.map((value) => <button className={repeat === value ? 'active' : ''} type="button" key={value} onClick={() => setRepeat(value)}>{value}遍</button>)}</div>

        <AudioButton text={sentence.en} accent={settings.accent} repeat={repeat} label="听标准发音" className="wide" onEnded={() => markCompleted(sentence.id, scenario.id, index)} />
        <FollowPractice sentence={sentence.en} onRecorded={() => markPracticed(sentence.id)} />

        <div className="word-practice"><h3>逐词朗读</h3><p>每个单词都可以单独发音</p><div>{wordTokens.map((word) => <AudioButton key={word} text={word} accent={settings.accent} label={word} />)}</div></div>
        {!!words.length && <div className="word-section"><h3>重点单词</h3>{words.map((word) => <div className="word-row" key={word.word}><div><strong>{word.word}</strong><span>{word.phonetic}</span><p>{word.translation}</p></div><AudioButton text={word.word} label="朗读" /></div>)}</div>}
      </article>

      <div className="scenario-actions">
        <button type="button" disabled={index === 0} onClick={() => move(index - 1)}><ChevronLeft />上一句</button>
        <button type="button" className="complete-btn" onClick={() => markCompleted(sentence.id, scenario.id, index)}><CheckCircle2 />标记已学</button>
        <button type="button" disabled={index === scenario.sentences.length - 1} onClick={() => move(index + 1)}>下一句<ChevronRight /></button>
      </div>
    </div>
  )
}
