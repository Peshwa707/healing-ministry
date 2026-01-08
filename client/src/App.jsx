import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PrayerWall from './pages/PrayerWall'
import Devotionals from './pages/Devotionals'
import MyPrayers from './pages/MyPrayers'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prayer-wall" element={<PrayerWall />} />
          <Route path="devotionals" element={<Devotionals />} />
          <Route path="my-prayers" element={<MyPrayers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
