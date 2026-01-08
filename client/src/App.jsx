import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Ruqyah from './pages/Ruqyah'
import PrayerWall from './pages/PrayerWall'
import MyPrayers from './pages/MyPrayers'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ruqyah" element={<Ruqyah />} />
          <Route path="prayer-wall" element={<PrayerWall />} />
          <Route path="my-prayers" element={<MyPrayers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
