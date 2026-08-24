import { BarChart3, BookOpen, CircleUserRound, FileUp, GraduationCap, Heart, Home, Menu, Search, Settings, X } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页', icon: Home, end: true },
  { to: '/courses', label: '课程', icon: BookOpen },
  { to: '/favorites', label: '收藏', icon: Heart },
  { to: '/quiz', label: '测验', icon: GraduationCap },
  { to: '/dictionary', label: '词典', icon: Search },
  { to: '/progress', label: '进度', icon: BarChart3 },
  { to: '/import', label: '导入', icon: FileUp },
  { to: '/settings', label: '设置', icon: Settings },
]

export function AppShell({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <img src="./logo.svg" alt="" />
          <span><strong>数据中心英语培训</strong><small>Data Center English Training</small></span>
        </NavLink>
        <button className="icon-btn mobile-menu" type="button" aria-label="打开导航" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className="top-profile"><CircleUserRound /><span>本地学习模式</span></div>
      </header>

      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="主导航">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              <Icon size={19} /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-note">
          <strong>离线发音</strong>
          <span>语音资源随网站部署，不依赖妙搭或外部TTS。</span>
        </div>
      </aside>

      <main className="main-content">{children}</main>

      <nav className="bottom-nav" aria-label="手机导航">
        {navItems.slice(0, 5).map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? 'active' : ''}>
            <Icon size={20} /><span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
