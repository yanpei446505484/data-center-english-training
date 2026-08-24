import { BookmarkX } from 'lucide-react'
import { AudioButton } from '../components/AudioButton'
import { PageHeader } from '../components/PageHeader'
import { useApp } from '../context/AppContext'

export function FavoritesPage() {
  const { scenarios, favorites, toggleFavorite } = useApp()
  const sentences = scenarios.flatMap((scenario) => scenario.sentences.map((sentence) => ({ ...sentence, scenarioTitle: scenario.title }))).filter((sentence) => favorites.includes(sentence.id))
  return (
    <div className="page">
      <PageHeader title="我的收藏" subtitle="集中复习收藏的句子和表达" />
      <div className="sentence-list">
        {sentences.map((sentence) => <article className="sentence-row" key={sentence.id}>
          <div><span className="badge">{sentence.scenarioTitle}</span><h2>{sentence.en}</h2><p>{sentence.zh}</p></div>
          <div className="row-actions"><AudioButton text={sentence.en} label="朗读" /><button className="icon-btn danger" type="button" onClick={() => toggleFavorite(sentence.id)} aria-label="取消收藏"><BookmarkX /></button></div>
        </article>)}
        {!sentences.length && <div className="empty-state">还没有收藏。学习句子时点击“收藏整句”即可加入这里。</div>}
      </div>
    </div>
  )
}
