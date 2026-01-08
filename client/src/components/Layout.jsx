import { Outlet, NavLink } from 'react-router-dom'
import { Home, Heart, BookOpen, User } from 'lucide-react'
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
        <NavLink to="/prayer-wall" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Heart size={24} />
          <span>Prayers</span>
        </NavLink>
        <NavLink to="/devotionals" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={24} />
          <span>Devotions</span>
        </NavLink>
        <NavLink to="/my-prayers" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <User size={24} />
          <span>My Prayers</span>
        </NavLink>
      </nav>
    </div>
  )
}
