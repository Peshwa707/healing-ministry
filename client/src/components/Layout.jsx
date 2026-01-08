import { Outlet, NavLink } from 'react-router-dom'
import { Home, Book, BookOpen, BookText } from 'lucide-react'
import './Layout.css'

export default function Layout() {
  return (
    <div className="app-layout">
      <main className="main-content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/ruqyah" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Book size={24} />
          <span>Ruqyah</span>
        </NavLink>
        <NavLink to="/quran" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookText size={24} />
          <span>Quran</span>
        </NavLink>
        <NavLink to="/salah" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={24} />
          <span>Salah</span>
        </NavLink>
      </nav>
    </div>
  )
}
