function SummaryCard({ title, value, description, accent = 'teal' }) {
  const accentColors = {
    teal: 'border-teal-500',
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    orange: 'border-orange-500',
  }

  return (
    <article className={`rounded-2xl border border-slate-200 border-l-4 ${accentColors[accent] || accentColors.teal} bg-white p-5 shadow-sm`}>
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </article>
  )
}

export default SummaryCard
