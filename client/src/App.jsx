import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Ruqyah from './pages/Ruqyah'
import PrayerWall from './pages/PrayerWall'
import Afflictions from './pages/Afflictions'
import Quran from './pages/Quran'
import Settings from './pages/Settings'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ruqyah" element={<Ruqyah />} />
          <Route path="prayer-wall" element={<PrayerWall />} />
          <Route path="afflictions" element={<Afflictions />} />
          <Route path="quran" element={<Quran />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
