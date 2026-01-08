import { useState, useRef, useEffect } from 'react'
import { Book, Play, Pause, Square, ChevronRight, ChevronDown, Volume2, Info, Sun, Moon as MoonIcon, Bed, SkipForward, SkipBack, List } from 'lucide-react'
import { surahs, healingDuas, ruqyahProgram, ruqyahInfo, dailyAdhkar, getVerseAudioUrl, buildPlaylist, buildAdhkarPlaylist, getSurahById } from '../data/quranData'
import './Ruqyah.css'

export default function Ruqyah() {
  const [activeTab, setActiveTab] = useState('surahs')
  const [expandedSurah, setExpandedSurah] = useState(null)
  const [playingAudio, setPlayingAudio] = useState(null)
  const [showInfo, setShowInfo] = useState(false)

  // Autoplay state
  const [autoplayMode, setAutoplayMode] = useState(false)
  const [currentPlaylist, setCurrentPlaylist] = useState([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [playlistName, setPlaylistName] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  const playAudio = (audioId) => {
    if (autoplayMode) return // Don't allow manual play during autoplay

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
    if (autoplayMode && currentPlaylist.length > 0) {
      // Move to next track
      if (currentTrackIndex < currentPlaylist.length - 1) {
        setCurrentTrackIndex(prev => prev + 1)
      } else {
        // Playlist finished
        stopAutoplay()
      }
    } else {
      setPlayingAudio(null)
    }
  }

  // Effect to play current track when index changes
  useEffect(() => {
    if (autoplayMode && currentPlaylist.length > 0 && isPlaying) {
      const currentTrack = currentPlaylist[currentTrackIndex]
      if (currentTrack?.audioUrl && audioRef.current) {
        audioRef.current.src = currentTrack.audioUrl
        audioRef.current.play()
        setPlayingAudio(currentTrack.audioUrl)
      }
    }
  }, [currentTrackIndex, autoplayMode, isPlaying])

  const startAutoplay = (playlist, name) => {
    if (playlist.length === 0) return

    // Filter to only items with audio
    const audioItems = playlist.filter(item => item.audioUrl)
    if (audioItems.length === 0) {
      alert('This program contains no audio items')
      return
    }

    setCurrentPlaylist(audioItems)
    setPlaylistName(name)
    setCurrentTrackIndex(0)
    setAutoplayMode(true)
    setIsPlaying(true)

    // Start first track
    const firstTrack = audioItems[0]
    if (firstTrack?.audioUrl && audioRef.current) {
      audioRef.current.src = firstTrack.audioUrl
      audioRef.current.play()
      setPlayingAudio(firstTrack.audioUrl)
    }
  }

  const stopAutoplay = () => {
    setAutoplayMode(false)
    setIsPlaying(false)
    setCurrentPlaylist([])
    setCurrentTrackIndex(0)
    setPlaylistName('')
    setPlayingAudio(null)
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  const skipNext = () => {
    if (currentTrackIndex < currentPlaylist.length - 1) {
      setCurrentTrackIndex(prev => prev + 1)
    }
  }

  const skipPrev = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(prev => prev - 1)
    }
  }

  const playSurahFull = (surah) => {
    const playlist = surah.verses.map(verse => ({
      type: 'verse',
      surahId: surah.id,
      surahName: surah.name,
      arabicName: surah.arabicName,
      verseNumber: verse.number,
      arabic: verse.arabic,
      transliteration: verse.transliteration,
      translation: verse.translation,
      audioUrl: getVerseAudioUrl(verse.audioId)
    }))
    startAutoplay(playlist, `Surah ${surah.name}`)
  }

  const playProgram = (program) => {
    const playlist = buildPlaylist(program.id)
    startAutoplay(playlist, program.title)
  }

  const playAdhkar = (adhkarType) => {
    const adhkar = dailyAdhkar[adhkarType]
    const playlist = buildAdhkarPlaylist(adhkarType)
    startAutoplay(playlist, adhkar.title)
  }

  const currentTrack = currentPlaylist[currentTrackIndex]

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

      {/* Autoplay Player Bar */}
      {autoplayMode && (
        <div className="autoplay-bar">
          <div className="autoplay-info">
            <span className="playlist-name">{playlistName}</span>
            <span className="track-counter">{currentTrackIndex + 1} / {currentPlaylist.length}</span>
          </div>
          {currentTrack && (
            <div className="current-track">
              <p className="track-arabic">{currentTrack.arabic?.substring(0, 50)}...</p>
              <p className="track-name">
                {currentTrack.itemName || currentTrack.surahName}
                {currentTrack.verseNumber && ` ${currentTrack.verseNumber}`}
                {currentTrack.totalRepetitions > 1 && ` (${currentTrack.repetition}/${currentTrack.totalRepetitions})`}
              </p>
            </div>
          )}
          <div className="autoplay-controls">
            <button onClick={skipPrev} disabled={currentTrackIndex === 0}>
              <SkipBack size={20} />
            </button>
            <button onClick={togglePlayPause} className="play-pause-btn">
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button onClick={skipNext} disabled={currentTrackIndex >= currentPlaylist.length - 1}>
              <SkipForward size={20} />
            </button>
            <button onClick={stopAutoplay} className="stop-btn">
              <Square size={20} />
            </button>
          </div>
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
          className={`tab ${activeTab === 'adhkar' ? 'active' : ''}`}
          onClick={() => setActiveTab('adhkar')}
        >
          Adhkar
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
                    disabled={autoplayMode}
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
                            disabled={autoplayMode}
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

      {activeTab === 'adhkar' && (
        <div className="adhkar-section">
          <div className="adhkar-cards">
            {/* Morning Adhkar */}
            <div className="adhkar-card card">
              <div className="adhkar-header">
                <div className="adhkar-icon morning">
                  <Sun size={24} />
                </div>
                <div className="adhkar-info">
                  <h3>{dailyAdhkar.morning.title}</h3>
                  <span className="arabic-title">{dailyAdhkar.morning.arabicTitle}</span>
                  <p className="timing">{dailyAdhkar.morning.timing}</p>
                </div>
              </div>
              <p className="adhkar-desc">{dailyAdhkar.morning.description}</p>
              <div className="adhkar-items-preview">
                {dailyAdhkar.morning.items.slice(0, 4).map((item, idx) => (
                  <span key={idx} className="preview-item">{item.name}</span>
                ))}
                <span className="more-items">+{dailyAdhkar.morning.items.length - 4} more</span>
              </div>
              <button
                className="btn btn-primary play-adhkar-btn"
                onClick={() => playAdhkar('morning')}
                disabled={autoplayMode}
              >
                <Play size={18} />
                Start Morning Adhkar
              </button>
            </div>

            {/* Evening Adhkar */}
            <div className="adhkar-card card">
              <div className="adhkar-header">
                <div className="adhkar-icon evening">
                  <MoonIcon size={24} />
                </div>
                <div className="adhkar-info">
                  <h3>{dailyAdhkar.evening.title}</h3>
                  <span className="arabic-title">{dailyAdhkar.evening.arabicTitle}</span>
                  <p className="timing">{dailyAdhkar.evening.timing}</p>
                </div>
              </div>
              <p className="adhkar-desc">{dailyAdhkar.evening.description}</p>
              <div className="adhkar-items-preview">
                {dailyAdhkar.evening.items.slice(0, 4).map((item, idx) => (
                  <span key={idx} className="preview-item">{item.name}</span>
                ))}
                <span className="more-items">+{dailyAdhkar.evening.items.length - 4} more</span>
              </div>
              <button
                className="btn btn-primary play-adhkar-btn evening-btn"
                onClick={() => playAdhkar('evening')}
                disabled={autoplayMode}
              >
                <Play size={18} />
                Start Evening Adhkar
              </button>
            </div>

            {/* Before Sleep Adhkar */}
            <div className="adhkar-card card">
              <div className="adhkar-header">
                <div className="adhkar-icon sleep">
                  <Bed size={24} />
                </div>
                <div className="adhkar-info">
                  <h3>{dailyAdhkar.beforeSleep.title}</h3>
                  <span className="arabic-title">{dailyAdhkar.beforeSleep.arabicTitle}</span>
                  <p className="timing">{dailyAdhkar.beforeSleep.timing}</p>
                </div>
              </div>
              <p className="adhkar-desc">{dailyAdhkar.beforeSleep.description}</p>
              <div className="adhkar-items-preview">
                {dailyAdhkar.beforeSleep.items.slice(0, 4).map((item, idx) => (
                  <span key={idx} className="preview-item">{item.name}</span>
                ))}
                <span className="more-items">+{dailyAdhkar.beforeSleep.items.length - 4} more</span>
              </div>
              <button
                className="btn btn-primary play-adhkar-btn sleep-btn"
                onClick={() => playAdhkar('beforeSleep')}
                disabled={autoplayMode}
              >
                <Play size={18} />
                Start Sleep Adhkar
              </button>
            </div>
          </div>

          {/* Detailed Adhkar List */}
          <div className="adhkar-details">
            <h3><List size={20} /> All Adhkar Items</h3>
            {Object.entries(dailyAdhkar).map(([key, adhkar]) => (
              <div key={key} className="adhkar-detail-section">
                <h4>{adhkar.title}</h4>
                <div className="adhkar-items-list">
                  {adhkar.items.map((item, idx) => (
                    <div key={idx} className="adhkar-item">
                      <div className="item-header">
                        <span className="item-name">{item.name}</span>
                        <span className="item-times">{item.times}x</span>
                      </div>
                      {item.arabic && <p className="arabic-text">{item.arabic}</p>}
                      {item.transliteration && <p className="transliteration">{item.transliteration}</p>}
                      {item.translation && <p className="translation">{item.translation}</p>}
                      {item.benefit && <p className="benefit">{item.benefit}</p>}
                      {item.reference && <span className="reference">{item.reference}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
          <p className="programs-intro">
            Select a Ruqyah program to automatically play all recitations in sequence.
          </p>
          {ruqyahProgram.map((program) => (
            <div key={program.id} className="program-card card">
              <div className="program-header">
                <div>
                  <h3>{program.title}</h3>
                  <p className="program-desc">{program.description}</p>
                </div>
                <button
                  className="btn btn-primary play-program-btn"
                  onClick={() => playProgram(program)}
                  disabled={autoplayMode}
                >
                  <Play size={18} />
                  Start
                </button>
              </div>
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
