import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function PageHeader({ title, subtitle, back = false }: { title: string; subtitle?: string; back?: boolean }) {
  const navigate = useNavigate()
  return (
    <div className="page-header">
      {back && <button type="button" className="icon-btn" aria-label="返回" onClick={() => navigate(-1)}><ArrowLeft /></button>}
      <div><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
    </div>
  )
}
