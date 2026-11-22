import { useEffect, useRef, useState } from 'react'

function FocusTimer({
  mode,
  onModeChange,
  studyDuration = 25,
}) {
  const totalSeconds = mode === 'Study'
    ? studyDuration * 60
    : 5 * 60

  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)
  const [isRunning, setIsRunning] = useState(false)

  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) return

    intervalRef.current = setInterval(() => {
      setSecondsLeft(previous => {
        if (previous <= 1) {
          setIsRunning(false)
          return 0
        }

        return previous - 1
      })
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [isRunning])

  function resetTimer() {
    setIsRunning(false)
    setSecondsLeft(totalSeconds)
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  const progress = totalSeconds > 0
    ? ((totalSeconds - secondsLeft) / totalSeconds) * 100
    : 0

  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10">
      <div className="mb-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => onModeChange('Study')}
          className={`rounded-xl px-6 py-3 font-semibold ${
            mode === 'Study'
              ? 'bg-teal-600 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          Study
        </button>

        <button
          type="button"
          onClick={() => onModeChange('Break')}
          className={`rounded-xl px-6 py-3 font-semibold ${
            mode === 'Break'
              ? 'bg-teal-600 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          Break
        </button>
      </div>

      <p className="mb-3 font-medium text-slate-500">
        {mode} Session
      </p>

      <div className="my-8">
        <p className="text-6xl font-bold tracking-wider text-slate-900 sm:text-7xl">
          {formatTime(secondsLeft)}
        </p>
      </div>

      <div
        className="mb-8 h-3 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Timer progress"
      >
        <div
          className="h-full rounded-full bg-teal-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setIsRunning(previous => !previous)}
          disabled={secondsLeft === 0}
          className="rounded-xl bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700 disabled:opacity-50"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button
          type="button"
          onClick={resetTimer}
          className="rounded-xl border border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:bg-slate-50"
        >
          Reset
        </button>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        {secondsLeft === 0
          ? 'Session completed! Well done.'
          : isRunning
            ? 'Stay focused. You are doing great!'
            : 'Ready when you are. Start your session.'}
      </p>
    </section>
  )
}

export default FocusTimer
