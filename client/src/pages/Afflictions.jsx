import { useState } from 'react'
import { AlertTriangle, ChevronDown, ChevronUp, Shield, BookOpen, Heart, AlertCircle, Info, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  disclaimer,
  typesOfPossession,
  causesOfPossession,
  typesOfAfflictions,
  protectionMethods,
  treatmentGuidelines,
  importantNotes
} from '../data/afflictionsData'
import './Afflictions.css'

function CollapsibleSection({ title, icon: Icon, children, defaultOpen = false, variant = 'default' }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`collapsible-section ${variant}`}>
      <button className="section-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="section-title">
          {Icon && <Icon size={20} />}
          <span>{title}</span>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  )
}

function SymptomList({ symptoms, title }) {
  if (!symptoms || symptoms.length === 0) return null
  return (
    <div className="symptom-category">
      {title && <h5>{title}</h5>}
      <ul>
        {symptoms.map((symptom, idx) => (
          <li key={idx}>{symptom}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Afflictions() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'types', label: 'Types' },
    { id: 'causes', label: 'Causes' },
    { id: 'afflictions', label: 'Afflictions' },
    { id: 'protection', label: 'Protection' }
  ]

  return (
    <div className="page afflictions-page">
      <header className="afflictions-header">
        <Link to="/" className="back-button">
          <ArrowLeft size={20} />
        </Link>
        <div className="header-content">
          <h1>Spiritual Afflictions</h1>
          <p>Understanding Jinn Possession & Related Conditions</p>
        </div>
      </header>

      {showDisclaimer && (
        <div className="disclaimer-banner">
          <div className="disclaimer-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="disclaimer-content">
            <h3>{disclaimer.title}</h3>
            <p>{disclaimer.content.split('\n\n')[0]}</p>
            <div className="disclaimer-points">
              <p><strong>Key Points:</strong></p>
              <ul>
                <li>Symptoms may have natural medical causes</li>
                <li>Always consult medical professionals first</li>
                <li>Seek qualified Islamic scholars for spiritual guidance</li>
              </ul>
            </div>
            <p className="sources">
              <strong>Sources:</strong> {disclaimer.sources.join(', ')}
            </p>
            <button className="btn-dismiss" onClick={() => setShowDisclaimer(false)}>
              I Understand
            </button>
          </div>
        </div>
      )}

      <nav className="afflictions-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <section className="info-card">
              <div className="info-icon">
                <Info size={24} />
              </div>
              <h2>What is Jinn Possession?</h2>
              <p>
                In Islamic belief, jinn are beings created from smokeless fire who live in a parallel world
                to humans. While most jinn live their lives separately from humans, interactions can occur
                that lead to what is known as "possession" (Al-Mass) or spiritual affliction.
              </p>
              <p>
                The Quran confirms the existence of jinn in Surah Al-Jinn (72) and mentions their ability
                to affect humans in various verses. The Prophet Muhammad (peace be upon him) performed
                ruqyah (spiritual healing) and taught his companions how to protect themselves.
              </p>
            </section>

            <section className="info-card warning">
              <div className="info-icon warning">
                <AlertCircle size={24} />
              </div>
              <h2>Important Considerations</h2>
              <ul className="considerations-list">
                {importantNotes.notes.map((note, idx) => (
                  <li key={idx}>
                    <strong>{note.title}:</strong> {note.content}
                  </li>
                ))}
              </ul>
            </section>

            <section className="quick-nav">
              <h3>Explore Topics</h3>
              <div className="nav-grid">
                <button onClick={() => setActiveTab('types')} className="nav-card">
                  <BookOpen size={24} />
                  <span>Types of Possession</span>
                </button>
                <button onClick={() => setActiveTab('causes')} className="nav-card">
                  <AlertTriangle size={24} />
                  <span>Causes</span>
                </button>
                <button onClick={() => setActiveTab('afflictions')} className="nav-card">
                  <AlertCircle size={24} />
                  <span>Afflictions & Symptoms</span>
                </button>
                <button onClick={() => setActiveTab('protection')} className="nav-card">
                  <Shield size={24} />
                  <span>Protection</span>
                </button>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'types' && (
          <div className="types-tab">
            <section className="section-intro">
              <h2>{typesOfPossession.title}</h2>
              <p>{typesOfPossession.description}</p>
            </section>

            {typesOfPossession.types.map(type => (
              <CollapsibleSection
                key={type.id}
                title={`${type.name} (${type.arabicName})`}
                icon={BookOpen}
                variant={type.severity}
              >
                <p className="type-description">{type.description}</p>
                <h4>Characteristics:</h4>
                <ul>
                  {type.characteristics.map((char, idx) => (
                    <li key={idx}>{char}</li>
                  ))}
                </ul>
                <div className={`severity-badge ${type.severity}`}>
                  Severity: {type.severity.charAt(0).toUpperCase() + type.severity.slice(1)}
                </div>
              </CollapsibleSection>
            ))}
          </div>
        )}

        {activeTab === 'causes' && (
          <div className="causes-tab">
            <section className="section-intro">
              <h2>{causesOfPossession.title}</h2>
              <p>{causesOfPossession.description}</p>
            </section>

            {causesOfPossession.causes.map(cause => (
              <CollapsibleSection
                key={cause.id}
                title={`${cause.name} (${cause.arabicName})`}
                icon={AlertTriangle}
              >
                <p className="cause-description">{cause.description}</p>

                <h4>Examples:</h4>
                <ul>
                  {cause.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>

                <div className="prevention-box">
                  <h4><Shield size={16} /> Prevention:</h4>
                  <p>{cause.prevention}</p>
                </div>

                {cause.reference && (
                  <p className="reference"><em>Reference: {cause.reference}</em></p>
                )}
              </CollapsibleSection>
            ))}
          </div>
        )}

        {activeTab === 'afflictions' && (
          <div className="afflictions-tab">
            <section className="section-intro">
              <h2>{typesOfAfflictions.title}</h2>
              <p>{typesOfAfflictions.description}</p>
            </section>

            {typesOfAfflictions.afflictions.map(affliction => (
              <CollapsibleSection
                key={affliction.id}
                title={`${affliction.name} (${affliction.arabicName})`}
                icon={AlertCircle}
                variant="affliction"
              >
                <p className="affliction-description">{affliction.description}</p>

                {/* For Jinn Possession */}
                {affliction.symptoms && !Array.isArray(affliction.symptoms) && (
                  <div className="symptoms-grid">
                    <SymptomList symptoms={affliction.symptoms.physical} title="Physical Symptoms" />
                    <SymptomList symptoms={affliction.symptoms.psychological} title="Psychological Symptoms" />
                    <SymptomList symptoms={affliction.symptoms.spiritual} title="Spiritual Symptoms" />
                    <SymptomList symptoms={affliction.symptoms.sleep} title="Sleep-Related Symptoms" />
                  </div>
                )}

                {/* For Sihr - show types */}
                {affliction.types && affliction.id === 'sihr' && (
                  <div className="sihr-types">
                    <h4>Types of Sihr:</h4>
                    {affliction.types.map((type, idx) => (
                      <div key={idx} className="sihr-type-card">
                        <h5>{type.name} ({type.arabicName})</h5>
                        <p>{type.description}</p>
                        {type.symptoms && (
                          <ul>
                            {type.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                          </ul>
                        )}
                      </div>
                    ))}
                    {affliction.generalSymptoms && (
                      <div className="general-symptoms">
                        <h4>General Symptoms of Sihr:</h4>
                        <ul>
                          {affliction.generalSymptoms.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* For Evil Eye - show types */}
                {affliction.types && affliction.id === 'ayn' && (
                  <div className="ayn-types">
                    <h4>Types of Evil Eye:</h4>
                    <div className="ayn-grid">
                      {affliction.types.map((type, idx) => (
                        <div key={idx} className="ayn-type-card">
                          <h5>{type.name} ({type.arabicName})</h5>
                          <p>{type.description}</p>
                        </div>
                      ))}
                    </div>
                    <SymptomList symptoms={affliction.symptoms} title="Symptoms" />
                    {affliction.hadith && (
                      <blockquote className="hadith-quote">{affliction.hadith}</blockquote>
                    )}
                  </div>
                )}

                {/* For Jinn Aashiq */}
                {affliction.characteristics && affliction.id === 'aashiq' && (
                  <>
                    <h4>Characteristics:</h4>
                    <ul>
                      {affliction.characteristics.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                    <SymptomList symptoms={affliction.symptoms} title="Symptoms" />
                    {affliction.causes && (
                      <>
                        <h4>Causes:</h4>
                        <ul>
                          {affliction.causes.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                      </>
                    )}
                  </>
                )}

                {/* For Waswas */}
                {affliction.id === 'waswas' && (
                  <>
                    <SymptomList symptoms={affliction.symptoms} title="Symptoms" />
                    {affliction.treatment && (
                      <div className="treatment-box">
                        <h4><Heart size={16} /> Treatment:</h4>
                        <p>{affliction.treatment}</p>
                      </div>
                    )}
                  </>
                )}

                {/* For regular array symptoms */}
                {Array.isArray(affliction.symptoms) && affliction.id !== 'ayn' && affliction.id !== 'aashiq' && affliction.id !== 'waswas' && (
                  <SymptomList symptoms={affliction.symptoms} title="Symptoms" />
                )}
              </CollapsibleSection>
            ))}
          </div>
        )}

        {activeTab === 'protection' && (
          <div className="protection-tab">
            <section className="section-intro">
              <h2>{protectionMethods.title}</h2>
              <p>{protectionMethods.description}</p>
            </section>

            {protectionMethods.methods.map(method => (
              <CollapsibleSection
                key={method.id}
                title={`${method.name} (${method.arabicName})`}
                icon={Shield}
                variant="protection"
              >
                <p>{method.description}</p>

                {method.importance && (
                  <blockquote className="importance-quote">{method.importance}</blockquote>
                )}

                {method.timing && (
                  <div className="timing-box">
                    <h4>Timing:</h4>
                    <ul>
                      <li><strong>Morning:</strong> {method.timing.morning}</li>
                      <li><strong>Evening:</strong> {method.timing.evening}</li>
                    </ul>
                  </div>
                )}

                {method.keyAdhkar && (
                  <>
                    <h4>Key Adhkar:</h4>
                    <ul>
                      {method.keyAdhkar.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </>
                )}

                {method.recommendations && (
                  <>
                    <h4>Recommendations:</h4>
                    <ul>
                      {method.recommendations.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </>
                )}

                {method.hadith && (
                  <blockquote className="hadith-quote">{method.hadith}</blockquote>
                )}

                {method.benefits && (
                  <>
                    <h4>Benefits:</h4>
                    <ul>
                      {method.benefits.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </>
                )}

                {method.occasions && (
                  <>
                    <h4>Occasions to Say Bismillah:</h4>
                    <ul>
                      {method.occasions.map((o, i) => <li key={i}>{o}</li>)}
                    </ul>
                  </>
                )}

                {method.duas && (
                  <div className="duas-list">
                    <h4>Protective Duas:</h4>
                    {method.duas.map((dua, i) => (
                      <div key={i} className="dua-card">
                        <p className="dua-arabic">{dua.arabic}</p>
                        <p className="dua-transliteration">{dua.transliteration}</p>
                        <p className="dua-translation">"{dua.translation}"</p>
                        <p className="dua-info">
                          <strong>Times:</strong> {dua.times}x | <strong>When:</strong> {dua.occasion}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleSection>
            ))}

            <section className="treatment-guidelines">
              <h2>{treatmentGuidelines.title}</h2>
              <p>{treatmentGuidelines.description}</p>

              <div className="principles-list">
                {treatmentGuidelines.principles.map((principle, idx) => (
                  <div key={idx} className="principle-card">
                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>
                  </div>
                ))}
              </div>

              <div className="warning-section">
                <h3><AlertTriangle size={20} /> {treatmentGuidelines.warning.title}</h3>
                <ul className="forbidden-list">
                  {treatmentGuidelines.warning.forbidden.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="cta-section">
              <Link to="/ruqyah" className="btn btn-primary islamic-btn">
                <BookOpen size={18} />
                Go to Ruqyah Page
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
