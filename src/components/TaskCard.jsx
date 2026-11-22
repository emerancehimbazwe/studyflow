function TaskCard({ task, onToggle, onDelete }) {
  return (
    <article className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
          className="h-5 w-5 accent-teal-500"
        />

        <div className="min-w-0">
          <h4 className={`break-words font-semibold ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
            {task.title}
          </h4>
          <p className="mt-1 text-sm text-slate-500">
            {task.category} · {task.priority} priority
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Delete
      </button>
    </article>
  )
}

export default TaskCard
