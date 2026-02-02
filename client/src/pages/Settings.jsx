import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Settings as SettingsIcon, Sun, Moon, Bell, BellOff, Clock, ChevronLeft, AlertCircle, Check } from 'lucide-react'
import useLocalStorage from '../hooks/useLocalStorage'
import {
  requestPermission,
  checkPermission,
  scheduleNotifications,
  cancelAllNotifications,
  getDefaultSettings
} from '../services/notificationService'
import './Settings.css'

const STORAGE_KEY = 'adhkar_schedule_settings'

export default function Settings() {
  const [settings, setSettings] = useLocalStorage(STORAGE_KEY, getDefaultSettings())
  const [permissionStatus, setPermissionStatus] = useState('unknown')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)

  // Check permission status on mount
  useEffect(() => {
    checkPermission().then(granted => {
      setPermissionStatus(granted ? 'granted' : 'denied')
      setSettings(prev => ({ ...prev, notificationsPermitted: granted }))
    })
  }, [])

  // Auto-dismiss messages
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [message])

  const handleRequestPermission = async () => {
    const granted = await requestPermission()
    setPermissionStatus(granted ? 'granted' : 'denied')
    setSettings(prev => ({ ...prev, notificationsPermitted: granted }))

    if (granted) {
      setMessage({ type: 'success', text: 'Notifications enabled!' })
      // Re-schedule with current settings if any are enabled
      if (settings.morningEnabled || settings.eveningEnabled) {
        await scheduleNotifications(settings)
      }
    } else {
      setMessage({ type: 'error', text: 'Permission denied. Enable in browser/device settings.' })
    }
  }

  const handleToggle = async (field) => {
    const newSettings = {
      ...settings,
      [field]: !settings[field]
    }
    setSettings(newSettings)

    // Schedule or cancel notifications
    setSaving(true)
    try {
      if (newSettings.morningEnabled || newSettings.eveningEnabled) {
        await scheduleNotifications(newSettings)
        setMessage({ type: 'success', text: 'Reminder scheduled!' })
      } else {
        await cancelAllNotifications()
        setMessage({ type: 'success', text: 'All reminders cancelled' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update schedule' })
    }
    setSaving(false)
  }

  const handleTimeChange = async (field, value) => {
    const newSettings = {
      ...settings,
      [field]: value
    }
    setSettings(newSettings)

    // Reschedule if enabled
    if (
      (field === 'morningTime' && settings.morningEnabled) ||
      (field === 'eveningTime' && settings.eveningEnabled)
    ) {
      setSaving(true)
      try {
        await scheduleNotifications(newSettings)
        setMessage({ type: 'success', text: 'Time updated!' })
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to update schedule' })
      }
      setSaving(false)
    }
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return (
    <div className="page settings-page">
      <header className="page-header">
        <Link to="/ruqyah" className="back-link">
          <ChevronLeft size={24} />
        </Link>
        <div className="header-icon settings-icon">
          <SettingsIcon size={28} />
        </div>
        <h1>Adhkar Reminders</h1>
        <p>Schedule daily remembrance notifications</p>
      </header>

      {/* Toast Message */}
      {message && (
        <div className={`toast-notification ${message.type}`}>
          {message.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Permission Card */}
      <div className="card settings-card permission-card">
        <div className="setting-row">
          <div className="setting-info">
            <div className={`setting-icon ${permissionStatus === 'granted' ? 'enabled' : ''}`}>
              {permissionStatus === 'granted' ? <Bell size={20} /> : <BellOff size={20} />}
            </div>
            <div>
              <h3>Notifications</h3>
              <p className="setting-desc">
                {permissionStatus === 'granted'
                  ? 'Notifications are enabled'
                  : 'Enable to receive reminders'}
              </p>
            </div>
          </div>
          {permissionStatus !== 'granted' && (
            <button className="btn btn-primary" onClick={handleRequestPermission}>
              Enable
            </button>
          )}
          {permissionStatus === 'granted' && (
            <span className="permission-granted">
              <Check size={20} />
            </span>
          )}
        </div>
      </div>

      {/* Morning Adhkar */}
      <div className="card settings-card">
        <div className="setting-row">
          <div className="setting-info">
            <div className={`setting-icon morning ${settings.morningEnabled ? 'enabled' : ''}`}>
              <Sun size={20} />
            </div>
            <div>
              <h3>Morning Adhkar</h3>
              <p className="setting-desc">After Fajr prayer</p>
            </div>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.morningEnabled}
              onChange={() => handleToggle('morningEnabled')}
              disabled={permissionStatus !== 'granted' || saving}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        {settings.morningEnabled && (
          <div className="time-picker-row">
            <Clock size={18} className="time-icon" />
            <input
              type="time"
              value={settings.morningTime}
              onChange={(e) => handleTimeChange('morningTime', e.target.value)}
              disabled={saving}
            />
          </div>
        )}
      </div>

      {/* Evening Adhkar */}
      <div className="card settings-card">
        <div className="setting-row">
          <div className="setting-info">
            <div className={`setting-icon evening ${settings.eveningEnabled ? 'enabled' : ''}`}>
              <Moon size={20} />
            </div>
            <div>
              <h3>Evening Adhkar</h3>
              <p className="setting-desc">After Asr prayer</p>
            </div>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.eveningEnabled}
              onChange={() => handleToggle('eveningEnabled')}
              disabled={permissionStatus !== 'granted' || saving}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        {settings.eveningEnabled && (
          <div className="time-picker-row">
            <Clock size={18} className="time-icon" />
            <input
              type="time"
              value={settings.eveningTime}
              onChange={(e) => handleTimeChange('eveningTime', e.target.value)}
              disabled={saving}
            />
          </div>
        )}
      </div>

      {/* Timezone Info */}
      <div className="timezone-info">
        <p>Timezone: {timezone}</p>
        <p className="timezone-note">Times are based on your device's local time</p>
      </div>

      {/* Instructions */}
      <div className="card instructions-card">
        <h4>How it works</h4>
        <ul>
          <li>Enable notifications to receive adhkar reminders</li>
          <li>Set your preferred times for morning and evening</li>
          <li>Tap the notification to open the app and start playback</li>
          <li>Reminders repeat daily at your chosen times</li>
        </ul>
      </div>
    </div>
  )
}
