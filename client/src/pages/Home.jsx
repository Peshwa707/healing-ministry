import { useState } from 'react'
import { Book, Heart, Moon, Send, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

const dailyVerses = [
  {
    arabic: 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ',
    translation: 'And We send down of the Quran that which is healing and mercy for the believers.',
    reference: 'Surah Al-Isra 17:82',
  },
  {
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    translation: 'Verily, in the remembrance of Allah do hearts find rest.',
    reference: 'Surah Ar-Ra\'d 13:28',
  },
  {
    arabic: 'وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ',
    translation: 'And when I am ill, it is He who cures me.',
    reference: 'Surah Ash-Shu\'ara 26:80',
  },
  {
    arabic: 'رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ',
    translation: 'My Lord, indeed adversity has touched me, and you are the Most Merciful of the merciful.',
    reference: 'Surah Al-Anbiya 21:83',
  },
]

export default function Home() {
  const [quickDua, setQuickDua] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Get verse based on day of year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000)
  const dailyVerse = dailyVerses[dayOfYear % dailyVerses.length]

  const handleQuickDua = (e) => {
    e.preventDefault()
    if (!quickDua.trim()) return

    let prayers = []
    try {
      prayers = JSON.parse(localStorage.getItem('my_prayers') || '[]')
    } catch (e) {
      console.error('Failed to parse my_prayers from localStorage:', e)
      prayers = []
    }
    prayers.unshift({
      id: Date.now(),
      text: quickDua,
      createdAt: new Date().toISOString(),
      answered: false,
    })
    localStorage.setItem('my_prayers', JSON.stringify(prayers))

    setQuickDua('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="page home-page">
      <header className="home-header">
        <div className="header-icon islamic">
          <Moon size={32} />
        </div>
        <h1>Healing Ministry</h1>
        <p>Islamic Ruqyah & Spiritual Healing</p>
      </header>

      <section className="daily-verse card islamic-card">
        <h2>Verse of the Day</h2>
        <p className="arabic-verse">{dailyVerse.arabic}</p>
        <blockquote>"{dailyVerse.translation}"</blockquote>
        <cite>— {dailyVerse.reference}</cite>
      </section>

      <section className="quick-prayer card">
        <h2>Quick Dua Request</h2>
        <form onSubmit={handleQuickDua}>
          <textarea
            value={quickDua}
            onChange={(e) => setQuickDua(e.target.value)}
            placeholder="Write your dua or prayer need..."
            rows={3}
          />
          <button type="submit" className="btn btn-primary islamic-btn">
            <Send size={18} />
            Save Dua
          </button>
        </form>
        {submitted && (
          <p className="success-message">Your dua has been saved! May Allah accept it.</p>
        )}
      </section>

      <section className="quick-actions">
        <Link to="/ruqyah" className="action-card">
          <div className="action-icon islamic">
            <Book size={28} />
          </div>
          <h3>Ruqyah</h3>
          <p>Quran healing verses</p>
        </Link>

        <Link to="/afflictions" className="action-card">
          <div className="action-icon warning">
            <AlertCircle size={28} />
          </div>
          <h3>Afflictions</h3>
          <p>Learn about spiritual afflictions</p>
        </Link>

        <Link to="/prayer-wall" className="action-card">
          <div className="action-icon">
            <Heart size={28} />
          </div>
          <h3>Community Duas</h3>
          <p>Make dua for others</p>
        </Link>
      </section>

      <section className="hadith-card card">
        <h3>Hadith on Healing</h3>
        <p className="hadith-text">
          "Make use of the two cures: honey and the Quran."
        </p>
        <cite>— Ibn Majah</cite>
      </section>
    </div>
  )
}
