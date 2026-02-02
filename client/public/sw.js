// Service Worker for Adhkar Schedule Notifications

const CACHE_NAME = 'healing-ministry-v1'

// Install event
self.addEventListener('install', (event) => {
  self.skipWaiting()
})

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim())
})

// Store schedules
let schedules = []
let checkInterval = null

// Message handler for schedule updates
self.addEventListener('message', (event) => {
  if (event.data.type === 'SCHEDULE_UPDATE') {
    schedules = event.data.schedules || []
    startScheduleChecker()
  } else if (event.data.type === 'CANCEL_ALL') {
    schedules = []
    if (checkInterval) {
      clearInterval(checkInterval)
      checkInterval = null
    }
  }
})

// Check schedules every minute
function startScheduleChecker() {
  if (checkInterval) {
    clearInterval(checkInterval)
  }

  if (schedules.length === 0) return

  // Check immediately
  checkSchedules()

  // Then check every minute
  checkInterval = setInterval(checkSchedules, 60000)
}

function checkSchedules() {
  const now = new Date()
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

  for (const schedule of schedules) {
    if (schedule.time === currentTime) {
      showNotification(schedule)
    }
  }
}

async function showNotification(schedule) {
  const todayKey = `${new Date().toDateString()}-${schedule.time}`

  // Use IndexedDB or just rely on the 1-minute check interval
  // to avoid duplicate notifications

  try {
    await self.registration.showNotification(schedule.title, {
      body: schedule.body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: schedule.id,
      data: {
        type: schedule.type,
        url: `/ruqyah?autoplay=${schedule.type}`
      },
      requireInteraction: true,
      actions: [
        { action: 'start', title: 'Start Adhkar' },
        { action: 'dismiss', title: 'Dismiss' }
      ]
    })
  } catch (error) {
    console.error('Failed to show notification:', error)
  }
}

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'dismiss') return

  const urlToOpen = event.notification.data?.url || '/ruqyah'

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Check if app is already open
        for (const client of clientList) {
          if (client.url.includes('/ruqyah') || client.url.includes(self.registration.scope)) {
            // Navigate existing window
            client.navigate(urlToOpen)
            return client.focus()
          }
        }
        // Open new window
        return clients.openWindow(urlToOpen)
      })
  )
})

// Periodic sync for background schedule checking (if supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'adhkar-check') {
    event.waitUntil(checkSchedules())
  }
})
