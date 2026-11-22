import { useState } from 'react'
import FocusTimer from '../components/FocusTimer'

function FocusPage({ studyDuration = 25 }) {
  const [mode, setMode] = useState('Study')

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Focus Time</h2>
        <p className="mt-2 text-slate-500">
          Give your studies your full attention.
        </p>
      </div>

      <FocusTimer
        key={mode}
        mode={mode}
        onModeChange={setMode}
        studyDuration={studyDuration}
      />
    </div>
  )
}

export default FocusPage
