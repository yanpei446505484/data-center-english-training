import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <div className="page empty-state"><h1>页面不存在</h1><p>返回首页继续学习。</p><Link className="primary-link" to="/">返回首页</Link></div>
}
