import { useEffect, useMemo, useRef, useState } from 'react'
import TaskCard from '../components/TaskCard'
import SectionCard from '../components/SectionCard'
import useDebounce from '../hooks/useDebounce'

function TasksPage({ tasks, onAdd, onUpdate, onToggle, onDelete }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Programming')
  const [priority, setPriority] = useState('Medium')
  const [dueDate, setDueDate] = useState('')
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [sort, setSort] = useState('date')
  const [error, setError] = useState('')
  const [editingTask, setEditingTask] = useState(null)

  const titleRef = useRef(null)
  const debouncedSearch = useDebounce(search, 300)

  useEffect(() => {
    if (editingTask) {
      titleRef.current?.focus()
    }
  }, [editingTask])

  const filteredTasks = useMemo(() => {
    return tasks
      .filter(task =>
        task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
      .filter(task =>
        status === 'All' ||
        (status === 'Completed' ? task.completed : !task.completed)
      )
      .filter(task =>
        categoryFilter === 'All' || task.category === categoryFilter
      )
      .sort((a, b) => {
        if (sort === 'title') {
          return a.title.localeCompare(b.title)
        }

        if (sort === 'priority') {
          const priorityOrder = { High: 1, Medium: 2, Low: 3 }
          return priorityOrder[a.priority] - priorityOrder[b.priority]
        }

        return (a.dueDate || '9999-12-31').localeCompare(
          b.dueDate || '9999-12-31'
        )
      })
  }, [tasks, debouncedSearch, status, categoryFilter, sort])

  function resetForm() {
    setTitle('')
    setCategory('Programming')
    setPriority('Medium')
    setDueDate('')
    setEditingTask(null)
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      setError('Please enter a task title.')
      titleRef.current?.focus()
      return
    }

    const taskDetails = {
      title: title.trim(),
      category,
      priority,
      dueDate,
    }

    if (editingTask) {
      onUpdate({
        ...editingTask,
        ...taskDetails,
      })
    } else {
      onAdd(taskDetails)
    }

    resetForm()
  }

  function handleEdit(task) {
    setEditingTask(task)
    setTitle(task.title)
    setCategory(task.category)
    setPriority(task.priority)
    setDueDate(task.dueDate || '')
    setError('')
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">My Tasks</h2>
        <p className="mt-2 text-slate-500">
          Organise your study activities.
        </p>
      </div>

      <SectionCard
        title={editingTask ? 'Edit task' : 'Add a new task'}
        description={
          editingTask
            ? 'Update your study activity details'
            : 'Create a new study activity'
        }
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="task-title"
              className="mb-2 block text-sm font-medium"
            >
              Task title
            </label>

            <input
              ref={titleRef}
              id="task-title"
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder="Enter your study task"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label
              htmlFor="task-category"
              className="mb-2 block text-sm font-medium"
            >
              Category
            </label>

            <select
              id="task-category"
              value={category}
              onChange={event => setCategory(event.target.value)}
              className="w-full rounded-lg border border-slate-300 p-3"
            >
              <option>Programming</option>
              <option>Mathematics</option>
              <option>Reading</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="task-priority"
              className="mb-2 block text-sm font-medium"
            >
              Priority
            </label>

            <select
              id="task-priority"
              value={priority}
              onChange={event => setPriority(event.target.value)}
              className="w-full rounded-lg border border-slate-300 p-3"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="due-date"
              className="mb-2 block text-sm font-medium"
            >
              Due date
            </label>

            <input
              id="due-date"
              type="date"
              value={dueDate}
              onChange={event => setDueDate(event.target.value)}
              className="w-full rounded-lg border border-slate-300 p-3"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 sm:col-span-2">
              {error}
            </p>
          )}

          <div className="flex flex-wrap gap-3 sm:col-span-2">
            <button
              type="submit"
              className="rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700"
            >
              {editingTask ? 'Save Changes' : 'Add Task'}
            </button>

            {editingTask && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </SectionCard>

      <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <input
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="Search tasks..."
          aria-label="Search tasks"
          className="rounded-lg border border-slate-300 bg-white p-3"
        />

        <select
          value={status}
          onChange={event => setStatus(event.target.value)}
          aria-label="Filter by status"
          className="rounded-lg border border-slate-300 bg-white p-3"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>

        <select
          value={categoryFilter}
          onChange={event => setCategoryFilter(event.target.value)}
          aria-label="Filter by category"
          className="rounded-lg border border-slate-300 bg-white p-3"
        >
          <option>All</option>
          <option>Programming</option>
          <option>Mathematics</option>
          <option>Reading</option>
          <option>Other</option>
        </select>

        <select
          value={sort}
          onChange={event => setSort(event.target.value)}
          aria-label="Sort tasks"
          className="rounded-lg border border-slate-300 bg-white p-3"
        >
          <option value="date">Sort by due date</option>
          <option value="title">Sort A–Z</option>
          <option value="priority">Sort by priority</option>
        </select>
      </div>

      <SectionCard
        title="All Tasks"
        description={`${filteredTasks.length} tasks found`}
      >
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="py-8 text-center text-slate-500">
              No tasks yet. Add your first study task!
            </p>
          ) : filteredTasks.length === 0 ? (
            <p className="py-8 text-center text-slate-500">
              No tasks match your search or filters. Try changing them.
            </p>
          ) : (
            filteredTasks.map(task => (
              <div
                key={task.id}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <div className="min-w-0 flex-1">
                  <TaskCard
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleEdit(task)}
                  className="rounded-lg border border-teal-600 px-4 py-2 font-medium text-teal-700 hover:bg-teal-50"
                >
                  Edit
                </button>
              </div>
            ))
          )}
        </div>
      </SectionCard>
    </div>
  )
}

export default TasksPage
