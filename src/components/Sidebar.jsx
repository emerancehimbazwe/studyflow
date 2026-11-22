import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', path: '/' },
  { name: 'Tasks', path: '/tasks' },
  { name: 'Focus', path: '/focus' },
  { name: 'Settings', path: '/settings' },
]

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-slate-900 p-6 text-white">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          Study<span className="text-teal-400">Flow</span>
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Your study companion
        </p>
      </div>

      <nav className="flex flex-col gap-3">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 font-medium transition ${
                isActive
                  ? 'bg-teal-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-xl bg-slate-800 p-4">
        <p className="font-semibold">Stay focused!</p>
        <p className="mt-2 text-sm text-slate-400">
          Small steps every day lead to big achievements.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
