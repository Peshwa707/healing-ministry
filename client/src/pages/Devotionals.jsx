import { useState } from 'react'
import { BookOpen, ChevronRight, Calendar, Clock } from 'lucide-react'
import './Devotionals.css'

const devotionals = [
  {
    id: 1,
    title: 'Finding Peace in Troubled Times',
    verse: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives.',
    verseRef: 'John 14:27',
    content: `In a world filled with uncertainty and chaos, Jesus offers us something different—His peace. This isn't the kind of peace that depends on circumstances. It's a deep, abiding peace that remains steady even when storms rage around us.

When anxiety threatens to overwhelm you, remember that Christ's peace is available to you right now. Take a moment to breathe deeply and invite His presence into your situation.

Today, practice letting go of one worry and placing it in God's hands. Trust that He is working all things together for your good.`,
    date: '2024-01-15',
    readTime: '3 min',
  },
  {
    id: 2,
    title: 'Strength in Weakness',
    verse: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness."',
    verseRef: '2 Corinthians 12:9',
    content: `We often view weakness as something to hide or overcome. But God sees it differently. Our weakness creates space for His strength to shine through.

When Paul asked God to remove his "thorn in the flesh," God's response wasn't to take it away, but to promise His grace would be enough.

Where do you feel weak today? Instead of fighting against it, consider how God might be inviting you to depend more fully on Him. Your weakness isn't a disqualification—it's an opportunity for God's power to be displayed.`,
    date: '2024-01-14',
    readTime: '3 min',
  },
  {
    id: 3,
    title: 'The Gift of Today',
    verse: 'This is the day that the LORD has made; let us rejoice and be glad in it.',
    verseRef: 'Psalm 118:24',
    content: `Each new day is a gift from God—a fresh start, a new beginning. Whether yesterday was filled with joy or sorrow, today offers new mercies and new opportunities.

The psalmist doesn't say "rejoice if it's a good day." The call is to rejoice in THIS day—whatever it holds. This isn't about ignoring difficulties, but about choosing to see God's hand in every moment.

Take a moment right now to thank God for three specific things about today. Let gratitude shift your perspective and open your eyes to the blessings around you.`,
    date: '2024-01-13',
    readTime: '2 min',
  },
]

export default function Devotionals() {
  const [selectedDevo, setSelectedDevo] = useState(null)

  if (selectedDevo) {
    return (
      <div className="page devotional-detail">
        <button className="back-btn" onClick={() => setSelectedDevo(null)}>
          ← Back to Devotionals
        </button>

        <article className="devo-content">
          <header>
            <h1>{selectedDevo.title}</h1>
            <div className="devo-meta">
              <span><Calendar size={14} /> {new Date(selectedDevo.date).toLocaleDateString()}</span>
              <span><Clock size={14} /> {selectedDevo.readTime}</span>
            </div>
          </header>

          <blockquote className="verse-block">
            <p>"{selectedDevo.verse}"</p>
            <cite>— {selectedDevo.verseRef}</cite>
          </blockquote>

          <div className="devo-body">
            {selectedDevo.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="page devotionals-page">
      <header className="page-header">
        <div className="header-icon">
          <BookOpen size={28} />
        </div>
        <h1>Daily Devotionals</h1>
        <p>Grow deeper in your faith each day</p>
      </header>

      <div className="devotionals-list">
        {devotionals.map((devo) => (
          <button
            key={devo.id}
            className="devo-card card"
            onClick={() => setSelectedDevo(devo)}
          >
            <div className="devo-info">
              <span className="devo-date">
                {new Date(devo.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <h3>{devo.title}</h3>
              <p className="devo-verse">{devo.verseRef}</p>
            </div>
            <ChevronRight size={24} className="chevron" />
          </button>
        ))}
      </div>
    </div>
  )
}
