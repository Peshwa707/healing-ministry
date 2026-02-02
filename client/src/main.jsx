import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { setupNotificationListeners, checkWebSchedule } from './services/notificationService'

// Register Service Worker for web notifications
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration.scope)

        // Reload schedules from localStorage on SW activation
        const schedules = localStorage.getItem('adhkar_schedules')
        if (schedules && registration.active) {
          registration.active.postMessage({
            type: 'SCHEDULE_UPDATE',
            schedules: JSON.parse(schedules)
          })
        }
      })
      .catch(error => {
        console.error('SW registration failed:', error)
      })
  })

  // Web in-app notification check (for when tab is active)
  setInterval(() => {
    const schedule = checkWebSchedule()
    if (schedule) {
      // Dispatch custom event for Ruqyah page to handle
      window.dispatchEvent(new CustomEvent('start-adhkar', {
        detail: { type: schedule.type }
      }))

      // Also show notification if page is backgrounded
      if (document.hidden && Notification.permission === 'granted') {
        new Notification(schedule.title, {
          body: schedule.body,
          icon: '/icon-192.png',
          tag: schedule.id
        })
      }
    }
  }, 60000) // Check every minute
}

// Setup Capacitor notification listeners for mobile
if (window.Capacitor) {
  setupNotificationListeners((type) => {
    // Navigate to ruqyah with autoplay parameter
    window.location.href = `/ruqyah?autoplay=${type}`
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
