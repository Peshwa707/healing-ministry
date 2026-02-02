/**
 * Platform-agnostic notification service for scheduled adhkar reminders
 * Supports both web (Service Worker) and mobile (Capacitor Local Notifications)
 */

const STORAGE_KEY = 'adhkar_schedule_settings'

// Check if running in Capacitor
const isCapacitor = () => {
  return window.Capacitor !== undefined
}

// Get stored settings
export const getSettings = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : getDefaultSettings()
  } catch {
    return getDefaultSettings()
  }
}

// Save settings
export const saveSettings = (settings) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}

// Default settings
export const getDefaultSettings = () => ({
  morningEnabled: false,
  morningTime: '07:00',
  eveningEnabled: false,
  eveningTime: '18:00',
  notificationsPermitted: false
})

// Request notification permission
export const requestPermission = async () => {
  if (isCapacitor()) {
    return requestCapacitorPermission()
  }
  return requestWebPermission()
}

// Web permission request
const requestWebPermission = async () => {
  if (!('Notification' in window)) {
    console.warn('Notifications not supported')
    return false
  }

  const permission = await Notification.requestPermission()
  return permission === 'granted'
}

// Capacitor permission request
const requestCapacitorPermission = async () => {
  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications')
    const result = await LocalNotifications.requestPermissions()
    return result.display === 'granted'
  } catch (error) {
    console.error('Failed to request Capacitor notification permission:', error)
    return false
  }
}

// Check current permission status
export const checkPermission = async () => {
  if (isCapacitor()) {
    try {
      const { LocalNotifications } = await import('@capacitor/local-notifications')
      const result = await LocalNotifications.checkPermissions()
      return result.display === 'granted'
    } catch {
      return false
    }
  }

  if (!('Notification' in window)) return false
  return Notification.permission === 'granted'
}

// Calculate next occurrence of a time (HH:MM format)
const getNextOccurrence = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number)
  const now = new Date()
  const next = new Date()

  next.setHours(hours, minutes, 0, 0)

  // If time has passed today, schedule for tomorrow
  if (next <= now) {
    next.setDate(next.getDate() + 1)
  }

  return next
}

// Schedule notifications based on current settings
export const scheduleNotifications = async (settings) => {
  // Cancel existing notifications first
  await cancelAllNotifications()

  if (isCapacitor()) {
    return scheduleCapacitorNotifications(settings)
  }
  return scheduleWebNotifications(settings)
}

// Schedule web notifications (using Service Worker)
const scheduleWebNotifications = async (settings) => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker not supported')
    return false
  }

  try {
    const registration = await navigator.serviceWorker.ready

    // Store schedule in localStorage for SW to read
    const schedules = []

    if (settings.morningEnabled) {
      schedules.push({
        id: 'morning',
        time: settings.morningTime,
        title: 'Morning Adhkar',
        body: 'Time for your morning remembrance',
        type: 'morning'
      })
    }

    if (settings.eveningEnabled) {
      schedules.push({
        id: 'evening',
        time: settings.eveningTime,
        title: 'Evening Adhkar',
        body: 'Time for your evening remembrance',
        type: 'evening'
      })
    }

    localStorage.setItem('adhkar_schedules', JSON.stringify(schedules))

    // Notify SW of schedule update
    if (registration.active) {
      registration.active.postMessage({
        type: 'SCHEDULE_UPDATE',
        schedules
      })
    }

    return true
  } catch (error) {
    console.error('Failed to schedule web notifications:', error)
    return false
  }
}

// Schedule Capacitor local notifications
const scheduleCapacitorNotifications = async (settings) => {
  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications')

    const notifications = []

    if (settings.morningEnabled) {
      const morningTime = getNextOccurrence(settings.morningTime)
      notifications.push({
        id: 1,
        title: 'Morning Adhkar',
        body: 'Time for your morning remembrance',
        schedule: {
          at: morningTime,
          repeats: true,
          every: 'day'
        },
        extra: {
          type: 'morning'
        },
        smallIcon: 'ic_stat_icon',
        iconColor: '#6366f1'
      })
    }

    if (settings.eveningEnabled) {
      const eveningTime = getNextOccurrence(settings.eveningTime)
      notifications.push({
        id: 2,
        title: 'Evening Adhkar',
        body: 'Time for your evening remembrance',
        schedule: {
          at: eveningTime,
          repeats: true,
          every: 'day'
        },
        extra: {
          type: 'evening'
        },
        smallIcon: 'ic_stat_icon',
        iconColor: '#6366f1'
      })
    }

    if (notifications.length > 0) {
      await LocalNotifications.schedule({ notifications })
    }

    return true
  } catch (error) {
    console.error('Failed to schedule Capacitor notifications:', error)
    return false
  }
}

// Cancel all scheduled notifications
export const cancelAllNotifications = async () => {
  if (isCapacitor()) {
    try {
      const { LocalNotifications } = await import('@capacitor/local-notifications')
      const pending = await LocalNotifications.getPending()
      if (pending.notifications.length > 0) {
        await LocalNotifications.cancel({
          notifications: pending.notifications.map(n => ({ id: n.id }))
        })
      }
    } catch (error) {
      console.error('Failed to cancel Capacitor notifications:', error)
    }
  }

  // Clear web schedules
  localStorage.removeItem('adhkar_schedules')

  // Notify SW
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready
      if (registration.active) {
        registration.active.postMessage({
          type: 'CANCEL_ALL'
        })
      }
    } catch {
      // SW might not be active
    }
  }
}

// Setup notification click listener for Capacitor
export const setupNotificationListeners = (onNotificationTap) => {
  if (isCapacitor()) {
    import('@capacitor/local-notifications').then(({ LocalNotifications }) => {
      LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
        const type = notification.notification.extra?.type
        if (type) {
          onNotificationTap(type)
        }
      })
    }).catch(console.error)
  }
}

// For web: check if it's time for a notification (called periodically)
export const checkWebSchedule = () => {
  const schedulesStr = localStorage.getItem('adhkar_schedules')
  if (!schedulesStr) return null

  const schedules = JSON.parse(schedulesStr)
  const now = new Date()
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

  for (const schedule of schedules) {
    if (schedule.time === currentTime) {
      // Check if we already triggered this minute
      const lastTriggered = localStorage.getItem(`adhkar_last_${schedule.id}`)
      const todayKey = `${now.toDateString()}-${currentTime}`

      if (lastTriggered !== todayKey) {
        localStorage.setItem(`adhkar_last_${schedule.id}`, todayKey)
        return schedule
      }
    }
  }

  return null
}
