import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { AudioButton } from '../components/AudioButton'
import { PageHeader } from '../components/PageHeader'
import { useApp } from '../context/AppContext'

export function DictionaryPage() {
  const { scenarios } = useApp()
  const [query, setQuery] = useState('')
  const entries = useMemo(() => {
    const map = new Map<string, { word: string; phonetic?: string; translation: string; examples: string[] }>()
    scenarios.forEach((scenario) => scenario.sentences.forEach((sentence) => sentence.words?.forEach((word) => {
      const key = word.word.toLowerCase()
      const current = map.get(key)
      if (current) current.examples.push(sentence.en)
      else map.set(key, { word: word.word, phonetic: word.phonetic, translation: word.translation, examples: [sentence.en] })
    })))
    return [...map.values()]
  }, [scenarios])
  const visible = entries.filter((entry) => `${entry.word}${entry.translation}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="page">
      <PageHeader title="课程词典" subtitle="搜索课程中的重点单词" />
      <label className="search-box"><Search /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="输入英文或中文" /></label>
      <div className="dictionary-grid">{visible.map((entry) => <article className="dictionary-card" key={entry.word}><div className="dictionary-title"><div><h2>{entry.word}</h2><span>{entry.phonetic}</span></div><AudioButton text={entry.word} label="朗读" /></div><p>{entry.translation}</p><small>{entry.examples[0]}</small></article>)}</div>
      {!visible.length && <div className="empty-state">当前种子课程中没有匹配词条；导入完整课程后词典会自动扩展。</div>}
    </div>
  )
}
