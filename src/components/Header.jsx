function Header({ name = 'Emerance', subtitle = 'Here is your study overview for today.' }) {
  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="mb-1 text-sm font-medium text-slate-500">
          Welcome back
        </p>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Hey, {name}!
        </h2>
        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
        <p className="text-xs text-slate-500">Your study space</p>
        <p className="font-semibold text-slate-800">StudyFlow</p>
      </div>
    </header>
  )
}

export default Header
