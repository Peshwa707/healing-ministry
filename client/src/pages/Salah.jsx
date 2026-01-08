import { useState, useRef, useEffect } from 'react'
import {
  BookOpen, Clock, ChevronDown, ChevronUp, Play, Pause, Square,
  Volume2, Info, CheckCircle, List
} from 'lucide-react'
import { salahOverview, prerequisites, salahSteps, afterSalahAdhkar, getAudioUrl } from '../data/salahData'
import './Salah.css'

export default function Salah() {
  const [activeTab, setActiveTab] = useState('guide')
  const [expandedStep, setExpandedStep] = useState(1)
  const [expandedPrereq, setExpandedPrereq] = useState(null)
  const [showOverview, setShowOverview] = useState(true)
  const [playingAudio, setPlayingAudio] = useState(null)
  const [completedSteps, setCompletedSteps] = useState([])
  const audioRef = useRef(null)

  // Play audio for verses with audio IDs
  const playAudio = (audioId, uniqueKey) => {
    if (playingAudio === uniqueKey) {
      audioRef.current?.pause()
      setPlayingAudio(null)
      return
    }

    const audioUrl = getAudioUrl(audioId)
    if (!audioUrl) return

    if (audioRef.current) {
      audioRef.current.pause()
    }

    audioRef.current = new Audio(audioUrl)
    audioRef.current.play()
    setPlayingAudio(uniqueKey)

    audioRef.current.onended = () => {
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
          </div>
        ))}
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
      </div>

      {activeTab === 'guide' && (
        <>
          {renderOverview()}
          {renderPrerequisites()}
          {renderSteps()}
        </>
      )}

      {activeTab === 'after' && renderAfterSalah()}
    </div>
  )
}
