import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Book, ChevronDown, ChevronUp, Play, Pause, Search,
  BookOpen, ArrowLeft, Loader, Volume2, Info
} from 'lucide-react'
import './Quran.css'

// API endpoints
const SURAH_LIST_API = 'https://api.alquran.cloud/v1/surah'
const SURAH_ARABIC_API = 'https://api.alquran.cloud/v1/surah'
const SURAH_TRANSLATION_API = 'https://api.alquran.cloud/v1/surah'
const TAFSIR_API = 'https://quranapi.pages.dev/api/tafsir'
const AUDIO_BASE_URL = 'https://cdn.islamic.network/quran/audio/128/ar.alafasy'

export default function Quran() {
  const [surahs, setSurahs] = useState([])
  const [selectedSurah, setSelectedSurah] = useState(null)
  const [surahData, setSurahData] = useState(null)
  const [tafsirData, setTafsirData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingSurah, setLoadingSurah] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedVerse, setExpandedVerse] = useState(null)
  const [playingAudio, setPlayingAudio] = useState(null)
  const [showTafsir, setShowTafsir] = useState({})
  const [fetchError, setFetchError] = useState(null)
  const audioRef = useRef(null)
  const abortControllerRef = useRef(null)

  // Fetch list of all surahs
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch(SURAH_LIST_API)
        const data = await response.json()
        if (data.code === 200) {
          setSurahs(data.data)
        }
      } catch (error) {
        console.error('Error fetching surahs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchSurahs()
  }, [])

  // Fetch surah data when selected
  const fetchSurahData = async (surahNumber) => {
    // Cancel any in-flight request to prevent race conditions
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    abortControllerRef.current = new AbortController()
    const { signal } = abortControllerRef.current

    setLoadingSurah(true)
    setSelectedSurah(surahNumber)
    setSurahData(null)
    setTafsirData(null)
    setExpandedVerse(null)
    setShowTafsir({})
    setFetchError(null)

    try {
      // Fetch Arabic and English translation in parallel
      const [arabicRes, englishRes, tafsirRes] = await Promise.all([
        fetch(`${SURAH_ARABIC_API}/${surahNumber}`, { signal }),
        fetch(`${SURAH_TRANSLATION_API}/${surahNumber}/en.asad`, { signal }),
        fetch(`${TAFSIR_API}/${surahNumber}.json`, { signal })
      ])

      // Check if request was aborted
      if (signal.aborted) return

      const arabicData = await arabicRes.json()
      const englishData = await englishRes.json()

      let tafsir = null
      if (tafsirRes.ok) {
        tafsir = await tafsirRes.json()
      }

      // Double-check abort status after parsing
      if (signal.aborted) return

      if (arabicData.code === 200 && englishData.code === 200) {
        // Combine Arabic and English verses
        const combinedVerses = arabicData.data.ayahs.map((ayah, index) => ({
          number: ayah.numberInSurah,
          globalNumber: ayah.number,
          arabic: ayah.text,
          translation: englishData.data.ayahs[index]?.text || '',
          juz: ayah.juz,
          page: ayah.page,
          audioId: ayah.number
        }))

        setSurahData({
          ...arabicData.data,
          verses: combinedVerses
        })
        setTafsirData(tafsir)
      } else {
        setFetchError('Failed to load surah data')
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        // Request was cancelled, ignore
        return
      }
      console.error('Error fetching surah:', error)
      setFetchError('Failed to load surah. Please try again.')
    } finally {
      if (!signal.aborted) {
        setLoadingSurah(false)
      }
    }
  }

  // Play audio
  const playAudio = (audioId) => {
    if (playingAudio === audioId) {
      audioRef.current?.pause()
      setPlayingAudio(null)
      return
    }

    // Clean up previous audio to prevent memory leak
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
      audioRef.current.onended = null
      audioRef.current.onerror = null
    }

    audioRef.current = new Audio(`${AUDIO_BASE_URL}/${audioId}.mp3`)
    audioRef.current.play().catch(err => console.error('Audio error:', err))
    setPlayingAudio(audioId)

    audioRef.current.onended = () => setPlayingAudio(null)
    audioRef.current.onerror = () => setPlayingAudio(null)
  }

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  // Filter surahs by search
  const filteredSurahs = surahs.filter(surah =>
    surah.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    surah.englishNameTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    surah.number.toString().includes(searchQuery)
  )

  // Toggle tafsir for a verse
  const toggleTafsir = (verseNumber) => {
    setShowTafsir(prev => ({
      ...prev,
      [verseNumber]: !prev[verseNumber]
    }))
  }

  // Get tafsir for a specific verse
  const getVerseTafsir = (verseNumber) => {
    if (!tafsirData) return null
    const verseKey = `verse_${verseNumber}`
    return tafsirData[verseKey]?.tafsirs?.['ibn-kathir'] || null
  }

  // Render surah list
  const renderSurahList = () => (
    <div className="surah-list-view">
      <div className="search-bar">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search surah by name or number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="surah-categories">
        <div className="category-info">
          <span className="meccan">Meccan</span>
          <span className="medinan">Medinan</span>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <Loader className="spinner" size={32} />
          <p>Loading Quran...</p>
        </div>
      ) : (
        <div className="surahs-grid">
          {filteredSurahs.map(surah => (
            <button
              key={surah.number}
              className={`surah-card ${surah.revelationType.toLowerCase()}`}
              onClick={() => fetchSurahData(surah.number)}
            >
              <div className="surah-number">{surah.number}</div>
              <div className="surah-info">
                <h3>{surah.englishName}</h3>
                <p className="surah-meaning">{surah.englishNameTranslation}</p>
                <span className="surah-meta">{surah.numberOfAyahs} verses</span>
              </div>
              <div className="surah-arabic">{surah.name}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  )

  // Render surah detail view
  const renderSurahDetail = () => (
    <div className="surah-detail-view">
      <button className="back-btn" onClick={() => setSelectedSurah(null)}>
        <ArrowLeft size={20} />
        Back to Surahs
      </button>

      {loadingSurah ? (
        <div className="loading-state">
          <Loader className="spinner" size={32} />
          <p>Loading Surah...</p>
        </div>
      ) : surahData ? (
        <>
          <div className="surah-header-detail">
            <div className="surah-title">
              <span className="surah-num">Surah {surahData.number}</span>
              <h2>{surahData.englishName}</h2>
              <p className="surah-arabic-name">{surahData.name}</p>
              <p className="surah-translation">{surahData.englishNameTranslation}</p>
            </div>
            <div className="surah-stats">
              <span className={`revelation-badge ${surahData.revelationType.toLowerCase()}`}>
                {surahData.revelationType}
              </span>
              <span className="verse-count">{surahData.numberOfAyahs} verses</span>
            </div>
          </div>

          {surahData.number !== 9 && (
            <div className="bismillah">
              <p className="arabic-text">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <p className="translation">In the name of Allah, the Most Gracious, the Most Merciful</p>
            </div>
          )}

          <div className="verses-container">
            {surahData.verses.map((verse) => {
              const tafsir = getVerseTafsir(verse.number)
              return (
                <div key={verse.number} className="verse-card">
                  <div className="verse-header">
                    <span className="verse-number">{verse.number}</span>
                    <div className="verse-actions">
                      <button
                        className={`action-btn ${playingAudio === verse.audioId ? 'playing' : ''}`}
                        onClick={() => playAudio(verse.audioId)}
                        title="Play audio"
                      >
                        {playingAudio === verse.audioId ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      {tafsir && (
                        <button
                          className={`action-btn tafsir-btn ${showTafsir[verse.number] ? 'active' : ''}`}
                          onClick={() => toggleTafsir(verse.number)}
                          title="Show Tafsir Ibn Kathir"
                        >
                          <BookOpen size={16} />
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="verse-arabic">{verse.arabic}</p>
                  <p className="verse-translation">{verse.translation}</p>

                  {showTafsir[verse.number] && tafsir && (
                    <div className="tafsir-section">
                      <div className="tafsir-header">
                        <BookOpen size={16} />
                        <h4>Tafsir Ibn Kathir</h4>
                      </div>
                      <div className="tafsir-content">
                        {tafsir.split('\n').map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      ) : fetchError ? (
        <div className="error-state">
          <p>{fetchError}</p>
          <button className="btn btn-primary" onClick={() => fetchSurahData(selectedSurah)}>
            Try Again
          </button>
        </div>
      ) : (
        <div className="error-state">
          <p>Failed to load surah. Please try again.</p>
        </div>
      )}
    </div>
  )

  return (
    <div className="page quran-page">
      <header className="page-header">
        <div className="header-icon islamic">
          <Book size={28} />
        </div>
        <h1>Al-Quran</h1>
        <p className="arabic-subtitle">القرآن الكريم</p>
        <p className="subtitle">With Tafsir Ibn Kathir</p>
      </header>

      {!tafsirData && selectedSurah && !loadingSurah && (
        <div className="tafsir-notice">
          <Info size={16} />
          <span>Tafsir may not be available for all surahs</span>
        </div>
      )}

      {selectedSurah ? renderSurahDetail() : renderSurahList()}
    </div>
  )
}
