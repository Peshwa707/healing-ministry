import { useState, useRef, useEffect } from 'react'
import {
  BookOpen, Clock, ChevronDown, ChevronUp, Play, Pause, Square,
  Volume2, Info, CheckCircle, List, Brain, Heart, Sun, Moon,
  Utensils, Home, Car, Shirt, Shield, Star, RotateCcw, Eye, EyeOff
} from 'lucide-react'
import { salahOverview, prerequisites, salahSteps, afterSalahAdhkar, getAudioUrl, getDuaAudioUrl } from '../data/salahData'
import { witrPrayer, dailyDuasCategories, prayerDuasForMemorization } from '../data/dailyDuasData'
import './Salah.css'

export default function Salah() {
  const [activeTab, setActiveTab] = useState('guide')
  const [expandedStep, setExpandedStep] = useState(1)
  const [expandedPrereq, setExpandedPrereq] = useState(null)
  const [showOverview, setShowOverview] = useState(true)
  const [playingAudio, setPlayingAudio] = useState(null)
  const [completedSteps, setCompletedSteps] = useState([])
  const audioRef = useRef(null)

  // Memorization state
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [memorizedDuas, setMemorizedDuas] = useState(() => {
    const saved = localStorage.getItem('memorized_duas')
    return saved ? JSON.parse(saved) : []
  })
  const [memorizationMode, setMemorizationMode] = useState('all') // 'all', 'unmemorized', 'review'

  // Daily Duas state
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [expandedDua, setExpandedDua] = useState(null)

  // Save memorized duas to localStorage
  useEffect(() => {
    localStorage.setItem('memorized_duas', JSON.stringify(memorizedDuas))
  }, [memorizedDuas])

  // Get filtered cards based on mode
  const getFilteredCards = () => {
    switch (memorizationMode) {
      case 'unmemorized':
        return prayerDuasForMemorization.filter(d => !memorizedDuas.includes(d.id))
      case 'review':
        return prayerDuasForMemorization.filter(d => memorizedDuas.includes(d.id))
      default:
        return prayerDuasForMemorization
    }
  }

  const filteredCards = getFilteredCards()

  // Play audio for verses with audio IDs (Quran) or dua audio IDs (Hisn al-Muslim)
  const playAudio = (audioId, uniqueKey, isDua = false) => {
    if (playingAudio === uniqueKey) {
      audioRef.current?.pause()
      setPlayingAudio(null)
      return
    }

    const audioUrl = isDua ? getDuaAudioUrl(audioId) : getAudioUrl(audioId)
    if (!audioUrl) return

    if (audioRef.current) {
      audioRef.current.pause()
    }

    audioRef.current = new Audio(audioUrl)
    audioRef.current.play().catch(err => {
      console.error('Audio playback failed:', err)
      setPlayingAudio(null)
    })
    setPlayingAudio(uniqueKey)

    audioRef.current.onended = () => {
      setPlayingAudio(null)
    }

    audioRef.current.onerror = () => {
      console.error('Audio failed to load')
      setPlayingAudio(null)
    }
  }

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  const toggleStep = (stepId) => {
    setExpandedStep(expandedStep === stepId ? null : stepId)
  }

  const markStepComplete = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId))
    } else {
      setCompletedSteps([...completedSteps, stepId])
    }
  }

  // Memorization functions
  const toggleMemorized = (duaId) => {
    if (memorizedDuas.includes(duaId)) {
      setMemorizedDuas(memorizedDuas.filter(id => id !== duaId))
    } else {
      setMemorizedDuas([...memorizedDuas, duaId])
    }
  }

  const nextCard = () => {
    setShowAnswer(false)
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    } else {
      setCurrentCardIndex(0)
    }
  }

  const prevCard = () => {
    setShowAnswer(false)
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
    } else {
      setCurrentCardIndex(filteredCards.length - 1)
    }
  }

  const resetMemorization = () => {
    setMemorizedDuas([])
    setCurrentCardIndex(0)
    setShowAnswer(false)
  }

  // Get icon for category
  const getCategoryIcon = (iconName) => {
    const icons = {
      sun: <Sun size={20} />,
      moon: <Moon size={20} />,
      utensils: <Utensils size={20} />,
      door: <Home size={20} />,
      home: <Home size={20} />,
      building: <BookOpen size={20} />,
      car: <Car size={20} />,
      shirt: <Shirt size={20} />,
      heart: <Heart size={20} />,
      shield: <Shield size={20} />,
      star: <Star size={20} />
    }
    return icons[iconName] || <BookOpen size={20} />
  }

  const renderOverview = () => (
    <div className="salah-overview">
      <div className={`overview-card card ${showOverview ? 'expanded' : ''}`}>
        <button
          className="overview-header"
          onClick={() => setShowOverview(!showOverview)}
        >
          <div className="overview-title">
            <Info size={20} />
            <h3>About Salah</h3>
          </div>
          {showOverview ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {showOverview && (
          <div className="overview-content">
            <p>{salahOverview.description}</p>

            <h4>Importance of Salah</h4>
            <ul>
              {salahOverview.importance.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h4>Daily Prayer Times</h4>
            <div className="prayer-times-grid">
              {salahOverview.prayerTimes.map((prayer, idx) => (
                <div key={idx} className="prayer-time-item">
                  <div className="prayer-name">
                    <span className="english">{prayer.name}</span>
                    <span className="arabic">{prayer.arabic}</span>
                  </div>
                  <div className="prayer-details">
                    <span className="timing">{prayer.timing}</span>
                    <span className="rakats">{prayer.rakats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderPrerequisites = () => (
    <div className="prerequisites-section">
      <h3 className="section-title">
        <CheckCircle size={20} />
        {prerequisites.title}
      </h3>
      <div className="prereq-list">
        {prerequisites.items.map((item, idx) => (
          <div key={idx} className="prereq-card card">
            <button
              className="prereq-header"
              onClick={() => setExpandedPrereq(expandedPrereq === idx ? null : idx)}
            >
              <div className="prereq-info">
                <span className="prereq-number">{idx + 1}</span>
                <div>
                  <h4>{item.name}</h4>
                  <span className="arabic-small">{item.arabic}</span>
                </div>
              </div>
              {item.steps && (
                expandedPrereq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />
              )}
            </button>

            <p className="prereq-desc">{item.description}</p>

            {item.steps && expandedPrereq === idx && (
              <div className="prereq-steps">
                <ol>
                  {item.steps.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const renderDuaElement = (element, stepId) => (
    <div key={element.id} className="dua-element">
      <div className="dua-header">
        <div className="dua-name">
          <h5>{element.name}</h5>
          <span className="arabic-name">{element.arabicName}</span>
        </div>
        {element.times && (
          <span className="times-badge">{element.times}x</span>
        )}
      </div>

      {element.arabic && (
        <div className="dua-content">
          <p className="arabic-text">{element.arabic}</p>
          {element.transliteration && (
            <p className="transliteration">{element.transliteration}</p>
          )}
          {element.translation && (
            <p className="translation">{element.translation}</p>
          )}
        </div>
      )}

      {element.verses && (
        <div className="verses-list">
          {element.verses.map((verse, idx) => (
            <div key={idx} className="verse-item">
              <div className="verse-arabic-row">
                <p className="arabic-text">{verse.arabic}</p>
                {verse.audioId && (
                  <button
                    className={`audio-btn ${playingAudio === `${stepId}-${element.id}-${idx}` ? 'playing' : ''}`}
                    onClick={() => playAudio(verse.audioId, `${stepId}-${element.id}-${idx}`)}
                  >
                    {playingAudio === `${stepId}-${element.id}-${idx}` ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                )}
              </div>
              <p className="transliteration">{verse.transliteration}</p>
              <p className="translation">{verse.translation}</p>
            </div>
          ))}
        </div>
      )}

      {element.instruction && (
        <p className="instruction">
          <Info size={14} />
          {element.instruction}
        </p>
      )}

      {element.reference && (
        <span className="reference">Reference: {element.reference}</span>
      )}

      {element.alternative && (
        <div className="alternative-dua">
          <h6>Alternative:</h6>
          <p className="arabic-text small">{element.alternative.arabic}</p>
          <p className="transliteration">{element.alternative.transliteration}</p>
          <p className="translation">{element.alternative.translation}</p>
        </div>
      )}

      {element.examples && (
        <div className="examples">
          <span>Suggested: </span>
          {element.examples.join(', ')}
        </div>
      )}

      {element.audioId && !element.verses && (
        <button
          className={`play-audio-btn btn ${playingAudio === `${stepId}-${element.id}` ? 'playing' : ''}`}
          onClick={() => playAudio(element.audioId, `${stepId}-${element.id}`)}
        >
          {playingAudio === `${stepId}-${element.id}` ? (
            <><Pause size={16} /> Pause</>
          ) : (
            <><Play size={16} /> Play Audio</>
          )}
        </button>
      )}

      {element.duaAudioId && !element.verses && (
        <button
          className={`play-audio-btn btn ${playingAudio === `${stepId}-${element.id}-dua` ? 'playing' : ''}`}
          onClick={() => playAudio(element.duaAudioId, `${stepId}-${element.id}-dua`, true)}
        >
          {playingAudio === `${stepId}-${element.id}-dua` ? (
            <><Pause size={16} /> Pause</>
          ) : (
            <><Volume2 size={16} /> Listen</>
          )}
        </button>
      )}
    </div>
  )

  const renderSteps = () => (
    <div className="steps-section">
      <div className="progress-indicator">
        <span>{completedSteps.length} of {salahSteps.length} steps reviewed</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(completedSteps.length / salahSteps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="steps-list">
        {salahSteps.map((step) => (
          <div
            key={step.id}
            className={`step-card card ${expandedStep === step.id ? 'expanded' : ''} ${completedSteps.includes(step.id) ? 'completed' : ''}`}
          >
            <button
              className="step-header"
              onClick={() => toggleStep(step.id)}
            >
              <div className="step-info">
                <div className={`step-number ${completedSteps.includes(step.id) ? 'done' : ''}`}>
                  {completedSteps.includes(step.id) ? <CheckCircle size={18} /> : step.id}
                </div>
                <div>
                  <h4>{step.step}</h4>
                  <span className="arabic-name">{step.arabicName}</span>
                </div>
              </div>
              <div className="step-meta">
                <span className={`position-badge ${step.position}`}>{step.position}</span>
                {expandedStep === step.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </button>

            {expandedStep === step.id && (
              <div className="step-content">
                <p className="step-description">{step.description}</p>

                {step.note && (
                  <div className="step-note">
                    <Info size={14} />
                    {step.note}
                  </div>
                )}

                <div className="elements-list">
                  {step.elements.map((element) => renderDuaElement(element, step.id))}
                </div>

                <button
                  className={`mark-complete-btn btn ${completedSteps.includes(step.id) ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => markStepComplete(step.id)}
                >
                  {completedSteps.includes(step.id) ? 'Mark as Not Reviewed' : 'Mark as Reviewed'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const renderAfterSalah = () => (
    <div className="after-salah-section">
      <div className="section-header">
        <h3>{afterSalahAdhkar.title}</h3>
        <span className="arabic-title">{afterSalahAdhkar.arabicTitle}</span>
      </div>
      <p className="section-desc">{afterSalahAdhkar.description}</p>

      <div className="adhkar-list">
        {afterSalahAdhkar.items.map((item) => (
          <div key={item.id} className="adhkar-item card">
            <div className="adhkar-header">
              <h4>{item.name}</h4>
              {item.times && <span className="times-badge">{item.times}x</span>}
            </div>

            <p className="arabic-text">{item.arabic}</p>

            {item.transliteration && (
              <p className="transliteration">{item.transliteration}</p>
            )}

            {item.translation && (
              <p className="translation">{item.translation}</p>
            )}

            {item.description && (
              <p className="description">{item.description}</p>
            )}

            {item.benefit && (
              <p className="benefit">
                <CheckCircle size={14} />
                {item.benefit}
              </p>
            )}

            {item.reference && (
              <span className="reference">{item.reference}</span>
            )}

            {item.duaAudioId && (
              <button
                className={`play-audio-btn btn ${playingAudio === `after-${item.id}` ? 'playing' : ''}`}
                onClick={() => playAudio(item.duaAudioId, `after-${item.id}`, true)}
              >
                {playingAudio === `after-${item.id}` ? (
                  <><Pause size={16} /> Pause</>
                ) : (
                  <><Volume2 size={16} /> Listen</>
                )}
              </button>
            )}

            {item.quranAudioId && (
              <button
                className={`play-audio-btn btn ${playingAudio === `after-quran-${item.id}` ? 'playing' : ''}`}
                onClick={() => playAudio(item.quranAudioId, `after-quran-${item.id}`, false)}
              >
                {playingAudio === `after-quran-${item.id}` ? (
                  <><Pause size={16} /> Pause</>
                ) : (
                  <><Play size={16} /> Play Recitation</>
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const renderMemorize = () => {
    const currentCard = filteredCards[currentCardIndex]
    const progress = memorizedDuas.length
    const total = prayerDuasForMemorization.length

    return (
      <div className="memorize-section">
        <div className="memorize-header">
          <h3>
            <Brain size={20} />
            Memorize Prayer Duas
          </h3>
          <p>Learn the essential duas recited during Salah</p>
        </div>

        {/* Progress */}
        <div className="memorize-progress card">
          <div className="progress-stats">
            <span className="progress-text">{progress} of {total} memorized</span>
            <button className="reset-btn" onClick={resetMemorization} title="Reset progress">
              <RotateCcw size={16} />
            </button>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(progress / total) * 100}%` }} />
          </div>
        </div>

        {/* Mode selector */}
        <div className="mode-selector">
          <button
            className={`mode-btn ${memorizationMode === 'all' ? 'active' : ''}`}
            onClick={() => { setMemorizationMode('all'); setCurrentCardIndex(0); setShowAnswer(false); }}
          >
            All ({prayerDuasForMemorization.length})
          </button>
          <button
            className={`mode-btn ${memorizationMode === 'unmemorized' ? 'active' : ''}`}
            onClick={() => { setMemorizationMode('unmemorized'); setCurrentCardIndex(0); setShowAnswer(false); }}
          >
            Learning ({prayerDuasForMemorization.filter(d => !memorizedDuas.includes(d.id)).length})
          </button>
          <button
            className={`mode-btn ${memorizationMode === 'review' ? 'active' : ''}`}
            onClick={() => { setMemorizationMode('review'); setCurrentCardIndex(0); setShowAnswer(false); }}
          >
            Review ({memorizedDuas.length})
          </button>
        </div>

        {/* Flashcard */}
        {filteredCards.length > 0 ? (
          <div className="flashcard-container">
            <div className={`flashcard card ${showAnswer ? 'flipped' : ''}`}>
              <div className="flashcard-front">
                <div className="card-category">{currentCard.category}</div>
                <h4 className="card-title">{currentCard.name}</h4>
                <span className="card-arabic-name">{currentCard.arabicName}</span>
                <p className="card-when">{currentCard.whenToSay}</p>
                <button className="reveal-btn btn btn-primary" onClick={() => setShowAnswer(true)}>
                  <Eye size={16} />
                  Show Dua
                </button>
              </div>

              {showAnswer && (
                <div className="flashcard-back">
                  <div className="card-category">{currentCard.category}</div>
                  <p className="arabic-text">{currentCard.arabic}</p>
                  <p className="transliteration">{currentCard.transliteration}</p>
                  <p className="translation">{currentCard.translation}</p>
                  {currentCard.times && (
                    <span className="times-badge">{currentCard.times}x</span>
                  )}

                  {currentCard.duaAudioId && (
                    <button
                      className={`play-audio-btn btn ${playingAudio === `mem-${currentCard.id}` ? 'playing' : ''}`}
                      onClick={() => playAudio(currentCard.duaAudioId, `mem-${currentCard.id}`, true)}
                    >
                      {playingAudio === `mem-${currentCard.id}` ? (
                        <><Pause size={16} /> Pause</>
                      ) : (
                        <><Volume2 size={16} /> Listen</>
                      )}
                    </button>
                  )}

                  <button className="hide-btn" onClick={() => setShowAnswer(false)}>
                    <EyeOff size={14} />
                    Hide
                  </button>
                </div>
              )}
            </div>

            {/* Card navigation */}
            <div className="card-navigation">
              <button className="nav-btn" onClick={prevCard}>
                <ChevronDown size={20} style={{ transform: 'rotate(90deg)' }} />
                Previous
              </button>
              <span className="card-counter">{currentCardIndex + 1} / {filteredCards.length}</span>
              <button className="nav-btn" onClick={nextCard}>
                Next
                <ChevronDown size={20} style={{ transform: 'rotate(-90deg)' }} />
              </button>
            </div>

            {/* Mark as memorized */}
            <button
              className={`memorize-btn btn ${memorizedDuas.includes(currentCard.id) ? 'btn-success' : 'btn-secondary'}`}
              onClick={() => toggleMemorized(currentCard.id)}
            >
              {memorizedDuas.includes(currentCard.id) ? (
                <><CheckCircle size={16} /> Memorized</>
              ) : (
                <><Brain size={16} /> Mark as Memorized</>
              )}
            </button>
          </div>
        ) : (
          <div className="no-cards card">
            <p>No duas in this category. {memorizationMode === 'review' ? 'Start learning some duas first!' : 'All duas have been memorized!'}</p>
          </div>
        )}

        {/* Quick reference list */}
        <div className="quick-reference">
          <h4>All Prayer Duas</h4>
          <div className="duas-list">
            {prayerDuasForMemorization.map((dua, idx) => (
              <div
                key={dua.id}
                className={`dua-item ${memorizedDuas.includes(dua.id) ? 'memorized' : ''}`}
                onClick={() => {
                  const index = filteredCards.findIndex(d => d.id === dua.id)
                  if (index !== -1) {
                    setCurrentCardIndex(index)
                    setShowAnswer(false)
                  }
                }}
              >
                <span className="dua-number">{idx + 1}</span>
                <div className="dua-info">
                  <span className="dua-name">{dua.name}</span>
                  <span className="dua-category">{dua.category}</span>
                </div>
                {memorizedDuas.includes(dua.id) && <CheckCircle size={16} className="check-icon" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderDailyDuas = () => (
    <div className="daily-duas-section">
      {/* Witr Prayer Section */}
      <div className="witr-section">
        <div className="section-header">
          <h3>
            <Moon size={20} />
            {witrPrayer.title}
          </h3>
          <span className="arabic-title">{witrPrayer.arabicTitle}</span>
        </div>

        <div className="witr-overview card">
          <p>{witrPrayer.description}</p>
          <div className="witr-info">
            <span className="timing"><Clock size={14} /> {witrPrayer.timing}</span>
          </div>
          <h5>Importance:</h5>
          <ul>
            {witrPrayer.importance.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="witr-duas">
          {witrPrayer.duas.map((dua) => (
            <div key={dua.id} className="dua-card card">
              <div className="dua-header">
                <div>
                  <h4>{dua.name}</h4>
                  <span className="arabic-name">{dua.arabicName}</span>
                </div>
                {dua.times && <span className="times-badge">{dua.times}x</span>}
              </div>

              {dua.description && <p className="dua-desc">{dua.description}</p>}

              <p className="arabic-text">{dua.arabic}</p>
              <p className="transliteration">{dua.transliteration}</p>
              <p className="translation">{dua.translation}</p>

              {dua.note && (
                <p className="dua-note">
                  <Info size={14} />
                  {dua.note}
                </p>
              )}

              {dua.reference && <span className="reference">{dua.reference}</span>}

              {dua.duaAudioId && (
                <button
                  className={`play-audio-btn btn ${playingAudio === `witr-${dua.id}` ? 'playing' : ''}`}
                  onClick={() => playAudio(dua.duaAudioId, `witr-${dua.id}`, true)}
                >
                  {playingAudio === `witr-${dua.id}` ? (
                    <><Pause size={16} /> Pause</>
                  ) : (
                    <><Volume2 size={16} /> Listen</>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Activities Categories */}
      <div className="daily-categories-section">
        <div className="section-header">
          <h3>
            <Heart size={20} />
            Duas for Daily Activities
          </h3>
          <p>Select a category to view duas</p>
        </div>

        <div className="categories-grid">
          {dailyDuasCategories.map((category) => (
            <button
              key={category.id}
              className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              {getCategoryIcon(category.icon)}
              <span className="category-name">{category.name}</span>
              <span className="category-arabic">{category.arabicName}</span>
              <span className="dua-count">{category.duas.length} duas</span>
            </button>
          ))}
        </div>

        {/* Selected Category Duas */}
        {selectedCategory && (
          <div className="category-duas">
            {dailyDuasCategories
              .find(c => c.id === selectedCategory)
              ?.duas.map((dua) => (
                <div key={dua.id} className="dua-card card">
                  <button
                    className="dua-expand-header"
                    onClick={() => setExpandedDua(expandedDua === dua.id ? null : dua.id)}
                  >
                    <div>
                      <h4>{dua.name}</h4>
                      <span className="arabic-name">{dua.arabicName}</span>
                    </div>
                    <div className="dua-meta">
                      {dua.times && <span className="times-badge">{dua.times}x</span>}
                      {expandedDua === dua.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {expandedDua === dua.id && (
                    <div className="dua-content">
                      <p className="arabic-text">{dua.arabic}</p>
                      <p className="transliteration">{dua.transliteration}</p>
                      <p className="translation">{dua.translation}</p>

                      {dua.instruction && (
                        <p className="instruction">
                          <Info size={14} />
                          {dua.instruction}
                        </p>
                      )}

                      {dua.benefit && (
                        <p className="benefit">
                          <CheckCircle size={14} />
                          {dua.benefit}
                        </p>
                      )}

                      {dua.reference && <span className="reference">{dua.reference}</span>}

                      {dua.duaAudioId && (
                        <button
                          className={`play-audio-btn btn ${playingAudio === `daily-${dua.id}` ? 'playing' : ''}`}
                          onClick={() => playAudio(dua.duaAudioId, `daily-${dua.id}`, true)}
                        >
                          {playingAudio === `daily-${dua.id}` ? (
                            <><Pause size={16} /> Pause</>
                          ) : (
                            <><Volume2 size={16} /> Listen</>
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="page salah-page">
      <header className="page-header">
        <div className="header-icon islamic">
          <BookOpen size={28} />
        </div>
        <h1>{salahOverview.title}</h1>
        <p className="arabic-subtitle">{salahOverview.arabicTitle}</p>
      </header>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'guide' ? 'active' : ''}`}
          onClick={() => setActiveTab('guide')}
        >
          <List size={16} />
          Prayer Guide
        </button>
        <button
          className={`tab ${activeTab === 'after' ? 'active' : ''}`}
          onClick={() => setActiveTab('after')}
        >
          <Clock size={16} />
          After Salah
        </button>
        <button
          className={`tab ${activeTab === 'memorize' ? 'active' : ''}`}
          onClick={() => setActiveTab('memorize')}
        >
          <Brain size={16} />
          Memorize
        </button>
        <button
          className={`tab ${activeTab === 'daily' ? 'active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          <Heart size={16} />
          Daily Duas
        </button>
      </div>

      {activeTab === 'guide' && (
        <>
          {renderOverview()}
          {renderPrerequisites()}
          {renderSteps()}
        </>
      )}

      {activeTab === 'after' && renderAfterSalah()}
      {activeTab === 'memorize' && renderMemorize()}
      {activeTab === 'daily' && renderDailyDuas()}
    </div>
  )
}
