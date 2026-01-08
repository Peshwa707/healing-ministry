import { useState, useEffect } from 'react'
import { Heart, Plus, Send, X } from 'lucide-react'
import './PrayerWall.css'

// Sample prayer requests (in a real app, this would come from a backend)
const samplePrayers = [
  {
    id: 1,
    name: 'Sarah',
    text: 'Please pray for my mother who is going through cancer treatment. She needs strength and healing.',
    prayerCount: 24,
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    name: 'Anonymous',
    text: 'Struggling with anxiety and depression. Praying for peace and clarity.',
    prayerCount: 42,
    createdAt: '2024-01-14T15:30:00Z',
  },
  {
    id: 3,
    name: 'Michael',
    text: 'Looking for a new job after being laid off. Trusting God for provision.',
    prayerCount: 18,
    createdAt: '2024-01-13T09:15:00Z',
  },
]

export default function PrayerWall() {
  const [prayers, setPrayers] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [newPrayer, setNewPrayer] = useState({ name: '', text: '', anonymous: false })
  const [prayedFor, setPrayedFor] = useState(new Set())

  useEffect(() => {
    // Load from localStorage or use sample data
    const stored = localStorage.getItem('prayer_wall')
    if (stored) {
      setPrayers(JSON.parse(stored))
    } else {
      setPrayers(samplePrayers)
      localStorage.setItem('prayer_wall', JSON.stringify(samplePrayers))
    }

    // Load prayed-for list
    const prayedList = localStorage.getItem('prayed_for')
    if (prayedList) {
      setPrayedFor(new Set(JSON.parse(prayedList)))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newPrayer.text.trim()) return

    const prayer = {
      id: Date.now(),
      name: newPrayer.anonymous ? 'Anonymous' : (newPrayer.name || 'Anonymous'),
      text: newPrayer.text,
      prayerCount: 0,
      createdAt: new Date().toISOString(),
    }

    const updated = [prayer, ...prayers]
    setPrayers(updated)
    localStorage.setItem('prayer_wall', JSON.stringify(updated))
    setNewPrayer({ name: '', text: '', anonymous: false })
    setShowForm(false)
  }

  const handlePrayFor = (id) => {
    if (prayedFor.has(id)) return

    const updated = prayers.map(p =>
      p.id === id ? { ...p, prayerCount: p.prayerCount + 1 } : p
    )
    setPrayers(updated)
    localStorage.setItem('prayer_wall', JSON.stringify(updated))

    const newPrayedFor = new Set([...prayedFor, id])
    setPrayedFor(newPrayedFor)
    localStorage.setItem('prayed_for', JSON.stringify([...newPrayedFor]))
  }

  return (
    <div className="page prayer-wall-page">
      <header className="page-header">
        <h1>Prayer Wall</h1>
        <p>Join together in prayer and support one another</p>
      </header>

      <button className="btn btn-primary add-prayer-btn" onClick={() => setShowForm(true)}>
        <Plus size={20} />
        Share Prayer Request
      </button>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Share Your Prayer Request</h2>
              <button className="close-btn" onClick={() => setShowForm(false)}>
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name (optional)</label>
                <input
                  type="text"
                  id="name"
                  value={newPrayer.name}
                  onChange={(e) => setNewPrayer({ ...newPrayer, name: e.target.value })}
                  placeholder="Enter your name"
                  disabled={newPrayer.anonymous}
                />
              </div>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={newPrayer.anonymous}
                    onChange={(e) => setNewPrayer({ ...newPrayer, anonymous: e.target.checked })}
                  />
                  Post anonymously
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="prayer">Prayer Request</label>
                <textarea
                  id="prayer"
                  value={newPrayer.text}
                  onChange={(e) => setNewPrayer({ ...newPrayer, text: e.target.value })}
                  placeholder="Share what's on your heart..."
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Send size={18} />
                Submit Prayer Request
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="prayers-list">
        {prayers.map((prayer) => (
          <div key={prayer.id} className="prayer-card card">
            <div className="prayer-header">
              <span className="prayer-name">{prayer.name}</span>
              <span className="prayer-date">
                {new Date(prayer.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="prayer-text">{prayer.text}</p>
            <div className="prayer-actions">
              <button
                className={`pray-btn ${prayedFor.has(prayer.id) ? 'prayed' : ''}`}
                onClick={() => handlePrayFor(prayer.id)}
                disabled={prayedFor.has(prayer.id)}
              >
                <Heart size={18} fill={prayedFor.has(prayer.id) ? 'currentColor' : 'none'} />
                <span>{prayer.prayerCount} praying</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
