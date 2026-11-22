function ProgressCard({ completed = 0, total = 0 }) {
  const percentage = total > 0
    ? Math.round((completed / total) * 100)
    : 0

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Study progress
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Your completed study tasks
          </p>
        </div>
        <span className="text-2xl font-bold text-teal-600">
          {percentage}%
        </span>
      </div>

      <div
        className="h-3 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Study task completion"
      >
        <div
          className="h-full rounded-full bg-teal-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-500">
        {completed} of {total} tasks completed
      </p>
    </section>
  )
}

export default ProgressCard
