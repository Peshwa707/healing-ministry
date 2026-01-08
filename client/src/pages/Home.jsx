import { useState } from 'react'
import { Heart, BookOpen, Sparkles, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

const dailyVerse = {
  text: "Come to me, all you who are weary and burdened, and I will give you rest.",
  reference: "Matthew 11:28",
}

export default function Home() {
  const [quickPrayer, setQuickPrayer] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleQuickPrayer = (e) => {
    e.preventDefault()
    if (!quickPrayer.trim()) return

    // Save to localStorage for now
    const prayers = JSON.parse(localStorage.getItem('my_prayers') || '[]')
    prayers.unshift({
      id: Date.now(),
      text: quickPrayer,
      createdAt: new Date().toISOString(),
      answered: false,
    })
    localStorage.setItem('my_prayers', JSON.stringify(prayers))

    setQuickPrayer('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="page home-page">
      <header className="home-header">
        <div className="header-icon">
          <Sparkles size={32} />
        </div>
        <h1>Healing Ministry</h1>
        <p>Find peace, hope, and spiritual renewal</p>
      </header>

      <section className="daily-verse card">
        <h2>Today's Verse</h2>
        <blockquote>"{dailyVerse.text}"</blockquote>
        <cite>— {dailyVerse.reference}</cite>
      </section>

      <section className="quick-prayer card">
        <h2>Quick Prayer Request</h2>
        <form onSubmit={handleQuickPrayer}>
          <textarea
            value={quickPrayer}
            onChange={(e) => setQuickPrayer(e.target.value)}
            placeholder="Share what's on your heart..."
            rows={3}
          />
          <button type="submit" className="btn btn-primary">
            <Send size={18} />
            Submit Prayer
          </button>
        </form>
        {submitted && (
          <p className="success-message">Your prayer has been saved!</p>
        )}
      </section>

      <section className="quick-actions">
        <Link to="/prayer-wall" className="action-card">
          <div className="action-icon">
            <Heart size={28} />
          </div>
          <h3>Prayer Wall</h3>
          <p>Join in prayer with others</p>
        </Link>

        <Link to="/devotionals" className="action-card">
          <div className="action-icon secondary">
            <BookOpen size={28} />
          </div>
          <h3>Daily Devotionals</h3>
          <p>Grow in your faith journey</p>
        </Link>
      </section>
    </div>
  )
}
