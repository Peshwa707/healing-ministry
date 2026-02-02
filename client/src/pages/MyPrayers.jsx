import { useState, useEffect } from 'react'
import { Plus, Check, Trash2, Clock, CheckCircle, X, AlertTriangle } from 'lucide-react'
import './MyPrayers.css'

export default function MyPrayers() {
  const [prayers, setPrayers] = useState([])
  const [newPrayer, setNewPrayer] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'answered'
  const [deleteConfirm, setDeleteConfirm] = useState(null) // ID of prayer to delete

  useEffect(() => {
    const stored = localStorage.getItem('my_prayers')
    if (stored) {
      try {
        setPrayers(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse prayers from localStorage:', e)
        setPrayers([])
      }
    }
  }, [])

  // Sync localStorage changes across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'my_prayers' && e.newValue) {
        try {
          setPrayers(JSON.parse(e.newValue))
        } catch (err) {
          console.error('Failed to parse prayers from storage event:', err)
        }
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const savePrayers = (updated) => {
    setPrayers(updated)
    localStorage.setItem('my_prayers', JSON.stringify(updated))
  }

  const handleAddPrayer = (e) => {
    e.preventDefault()
    if (!newPrayer.trim()) return

    const prayer = {
      id: Date.now(),
      text: newPrayer,
      createdAt: new Date().toISOString(),
      answered: false,
      answeredAt: null,
    }

    savePrayers([prayer, ...prayers])
    setNewPrayer('')
  }

  const toggleAnswered = (id) => {
    const updated = prayers.map(p =>
      p.id === id
        ? { ...p, answered: !p.answered, answeredAt: !p.answered ? new Date().toISOString() : null }
        : p
    )
    savePrayers(updated)
  }

  const deletePrayer = (id) => {
    setDeleteConfirm(id)
  }

  const confirmDelete = () => {
    if (deleteConfirm) {
      savePrayers(prayers.filter(p => p.id !== deleteConfirm))
      setDeleteConfirm(null)
    }
  }

  const cancelDelete = () => {
    setDeleteConfirm(null)
  }

  const filteredPrayers = prayers.filter(p => {
    if (filter === 'active') return !p.answered
    if (filter === 'answered') return p.answered
    return true
  })

  const stats = {
    total: prayers.length,
    active: prayers.filter(p => !p.answered).length,
    answered: prayers.filter(p => p.answered).length,
  }

  return (
    <div className="page my-prayers-page">
      <header className="page-header">
        <h1>My Prayers</h1>
        <p>Track your personal prayer journey</p>
      </header>

      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-value">{stats.total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.active}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-item answered">
          <span className="stat-value">{stats.answered}</span>
          <span className="stat-label">Answered</span>
        </div>
      </div>

      <form className="add-prayer-form" onSubmit={handleAddPrayer}>
        <input
          type="text"
          value={newPrayer}
          onChange={(e) => setNewPrayer(e.target.value)}
          placeholder="Add a new prayer..."
        />
        <button type="submit" className="btn btn-primary">
          <Plus size={20} />
        </button>
      </form>

      <div className="filter-tabs">
        <button
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-tab ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`filter-tab ${filter === 'answered' ? 'active' : ''}`}
          onClick={() => setFilter('answered')}
        >
          Answered
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="modal-overlay" onClick={cancelDelete}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <AlertTriangle size={24} className="warning-icon" />
              <h3>Delete Prayer</h3>
              <button className="modal-close" onClick={cancelDelete}>
                <X size={20} />
              </button>
            </div>
            <p className="modal-message">
              Are you sure you want to delete this prayer? This action cannot be undone.
            </p>
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="prayers-list">
        {filteredPrayers.length === 0 ? (
          <div className="empty-state">
            <p>No prayers yet. Start by adding one above!</p>
          </div>
        ) : (
          filteredPrayers.map((prayer) => (
            <div key={prayer.id} className={`prayer-item ${prayer.answered ? 'answered' : ''}`}>
              <button
                className="check-btn"
                onClick={() => toggleAnswered(prayer.id)}
                title={prayer.answered ? 'Mark as active' : 'Mark as answered'}
              >
                {prayer.answered ? (
                  <CheckCircle size={24} />
                ) : (
                  <div className="check-circle" />
                )}
              </button>

              <div className="prayer-content">
                <p className="prayer-text">{prayer.text}</p>
                <span className="prayer-date">
                  <Clock size={12} />
                  {new Date(prayer.createdAt).toLocaleDateString()}
                  {prayer.answered && prayer.answeredAt && (
                    <span className="answered-date">
                      • Answered {new Date(prayer.answeredAt).toLocaleDateString()}
                    </span>
                  )}
                </span>
              </div>

              <button
                className="delete-btn"
                onClick={() => deletePrayer(prayer.id)}
                title="Delete prayer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
