import { useState } from 'react'

function SettingsPage({ name, onNameChange, preferences, onPreferencesChange }) {
  const [saved, setSaved] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSaved(true)
  }

  function updatePreference(key, value) {
    onPreferencesChange({
      ...preferences,
      [key]: value,
    })
    setSaved(false)
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Settings</h2>
        <p className="mt-2 text-slate-500">Customise your StudyFlow experience.</p>
      </div>

      <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-bold">Profile preferences</h3>
            <label htmlFor="display-name" className="mb-2 block text-sm font-medium">Display name</label>
            <input
              id="display-name"
              value={name}
              onChange={event => {
                onNameChange(event.target.value)
                setSaved(false)
              }}
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-teal-500 focus:outline-none"
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Study preferences</h3>
            <label htmlFor="duration" className="mb-2 block text-sm font-medium">Study session duration</label>
            <select
              id="duration"
              value={preferences.studyDuration}
              onChange={event => updatePreference('studyDuration', Number(event.target.value))}
              className="w-full rounded-lg border border-slate-300 p-3"
            >
              <option value="15">15 minutes</option>
              <option value="25">25 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">Show welcome message</p>
              <p className="text-sm text-slate-500">Display your greeting on the Dashboard.</p>
            </div>
            <input
              type="checkbox"
              checked={preferences.showWelcome}
              onChange={event => updatePreference('showWelcome', event.target.checked)}
              aria-label="Show welcome message"
              className="h-5 w-5 accent-teal-500"
            />
          </div>

          <button type="submit" className="rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700">
            Save Settings
          </button>

          {saved && <p role="status" className="text-sm text-teal-700">Settings saved successfully.</p>}
        </form>
      </section>
    </div>
  )
}

export default SettingsPage
