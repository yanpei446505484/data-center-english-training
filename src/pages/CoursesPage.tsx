import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { categoryLabels } from '../data/seed'
import { PageHeader } from '../components/PageHeader'

export function CoursesPage() {
  const { scenarios } = useApp()
  const [query, setQuery] = useState('')
  const visible = useMemo(() => scenarios.filter((scenario) => `${scenario.title}${scenario.subtitle}${scenario.description}`.toLowerCase().includes(query.toLowerCase())), [query, scenarios])
  return (
    <div className="page">
      <PageHeader title="全部课程" subtitle="按工作与生活场景逐步训练" />
      <label className="search-box"><Search /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索课程或场景" /></label>
      <div className="course-list">
        {visible.map((scenario, index) => (
          <Link to={`/scenario/${scenario.id}`} className="course-row" key={scenario.id}>
            <span className={`course-index tone-${index % 4}`}>{String(index + 1).padStart(2, '0')}</span>
            <div><span className="badge">{categoryLabels[scenario.category]}</span><h2>{scenario.title}</h2><p>{scenario.subtitle} · {scenario.description}</p></div>
            <strong>{scenario.sentences.length}句</strong>
          </Link>
        ))}
        {!visible.length && <div className="empty-state">没有找到相关课程。</div>}
      </div>
    </div>
  )
}
