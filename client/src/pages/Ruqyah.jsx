import { useState, useRef, useEffect } from 'react'
import { Book, Play, Pause, ChevronRight, ChevronDown, Volume2, RotateCcw, Info } from 'lucide-react'
import { surahs, healingDuas, ruqyahProgram, ruqyahInfo, getVerseAudioUrl } from '../data/quranData'
import './Ruqyah.css'

export default function Ruqyah() {
  const [activeTab, setActiveTab] = useState('surahs')
  const [expandedSurah, setExpandedSurah] = useState(null)
  const [playingAudio, setPlayingAudio] = useState(null)
  const [showInfo, setShowInfo] = useState(false)
  const audioRef = useRef(null)

  const playAudio = (audioId) => {
    if (playingAudio === audioId) {
      audioRef.current?.pause()
      setPlayingAudio(null)
    } else {
      if (audioRef.current) {
        audioRef.current.src = getVerseAudioUrl(audioId)
        audioRef.current.play()
        setPlayingAudio(audioId)
      }
    }
  }

  const handleAudioEnd = () => {
    setPlayingAudio(null)
  }

  const playSurahFull = async (surah) => {
    // Play all verses in sequence
    for (const verse of surah.verses) {
      if (audioRef.current) {
        audioRef.current.src = getVerseAudioUrl(verse.audioId)
        setPlayingAudio(verse.audioId)
        await new Promise((resolve) => {
          audioRef.current.onended = resolve
          audioRef.current.play()
        })
      }
    }
    setPlayingAudio(null)
  }

  return (
    <div className="page ruqyah-page">
      <audio ref={audioRef} onEnded={handleAudioEnd} />

      <header className="page-header">
        <div className="header-icon islamic">
          <Book size={28} />
        </div>
        <h1>Islamic Ruqyah</h1>
        <p>Healing through the Quran</p>
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
          <Info size={20} />
        </button>
      </header>

      {showInfo && (
        <div className="info-card card">
          <h3>About Ruqyah</h3>
          <p>{ruqyahInfo.description}</p>
          <h4>Guidelines:</h4>
          <ul>
            {ruqyahInfo.guidelines.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'surahs' ? 'active' : ''}`}
          onClick={() => setActiveTab('surahs')}
        >
          Surahs
        </button>
        <button
          className={`tab ${activeTab === 'duas' ? 'active' : ''}`}
          onClick={() => setActiveTab('duas')}
        >
          Duas
        </button>
        <button
          className={`tab ${activeTab === 'program' ? 'active' : ''}`}
          onClick={() => setActiveTab('program')}
        >
          Programs
        </button>
      </div>

      {activeTab === 'surahs' && (
        <div className="surahs-list">
          {surahs.map((surah) => (
            <div key={surah.id} className="surah-card card">
              <button
                className="surah-header"
                onClick={() => setExpandedSurah(expandedSurah === surah.id ? null : surah.id)}
              >
                <div className="surah-info">
                  <span className="surah-number">{surah.id}</span>
                  <div className="surah-names">
                    <h3>{surah.name}</h3>
                    <span className="arabic-name">{surah.arabicName}</span>
                  </div>
                </div>
                <div className="surah-meta">
                  <span>{surah.verses?.length || surah.totalVerses} verses</span>
                  {expandedSurah === surah.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
              </button>

              {expandedSurah === surah.id && (
                <div className="surah-content">
                  <p className="surah-description">{surah.description}</p>

                  <div className="benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {surah.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="btn btn-primary play-all-btn"
                    onClick={() => playSurahFull(surah)}
                  >
                    <Volume2 size={18} />
                    Play Full Surah
                  </button>

                  <div className="verses-list">
                    {surah.verses.map((verse) => (
                      <div key={verse.number} className="verse-card">
                        <div className="verse-header">
                          <span className="verse-number">
                            {surah.id}:{verse.number}
                            {verse.name && <span className="verse-name"> - {verse.name}</span>}
                          </span>
                          <button
                            className={`play-btn ${playingAudio === verse.audioId ? 'playing' : ''}`}
                            onClick={() => playAudio(verse.audioId)}
                          >
                            {playingAudio === verse.audioId ? <Pause size={18} /> : <Play size={18} />}
                          </button>
                        </div>
                        <p className="arabic-text">{verse.arabic}</p>
                        <p className="transliteration">{verse.transliteration}</p>
                        <p className="translation">{verse.translation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'duas' && (
        <div className="duas-list">
          {healingDuas.map((dua) => (
            <div key={dua.id} className="dua-card card">
              <div className="dua-header">
                <h3>{dua.name}</h3>
                <span className="recite-times">Recite {dua.times}x</span>
              </div>
              <p className="arabic-text">{dua.arabic}</p>
              <p className="transliteration">{dua.transliteration}</p>
              <p className="translation">{dua.translation}</p>
              <span className="reference">{dua.reference}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'program' && (
        <div className="programs-list">
          {ruqyahProgram.map((program) => (
            <div key={program.id} className="program-card card">
              <h3>{program.title}</h3>
              <p className="program-desc">{program.description}</p>
              <div className="program-items">
                {program.items.map((item, idx) => (
                  <div key={idx} className="program-item">
                    <span className="item-times">{item.times}x</span>
                    <span className="item-note">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
