import { Outlet, NavLink } from 'react-router-dom'
import { Home, Book, Heart, BookOpen } from 'lucide-react'
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
        <NavLink to="/prayer-wall" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Heart size={24} />
          <span>Duas</span>
        </NavLink>
        <NavLink to="/salah" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={24} />
          <span>Salah</span>
        </NavLink>
      </nav>
    </div>
  )
}
