import { Routes, Route, useLocation } from 'react-router-dom'
import { useCallback } from 'react'

import SiteLayout from './layouts/SiteLayout'
import DashboardPage from './pages/DashboardPage'
import TasksPage from './pages/TasksPage'
import FocusPage from './pages/FocusPage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'

import initialTasks from './data/initialTasks'
import useLocalStorage from './hooks/useLocalStorage'
import useDocumentTitle from './hooks/useDocumentTitle'

function App() {
  const [tasks, setTasks] = useLocalStorage('studyflow-tasks', initialTasks)
  const [name, setName] = useLocalStorage('studyflow-name', 'Emerance')

  const [preferences, setPreferences] = useLocalStorage(
    'studyflow-preferences',
    {
      studyDuration: 25,
      showWelcome: true,
    }
  )

  const location = useLocation()

  const pageTitles = {
    '/': 'Dashboard',
    '/tasks': 'Tasks',
    '/focus': 'Focus',
    '/settings': 'Settings',
  }

  const currentPage = pageTitles[location.pathname] || 'Page Not Found'
  useDocumentTitle(`${currentPage} | StudyFlow`)

  const addTask = useCallback((newTask) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      {
        ...newTask,
        id: newTask.id ?? Date.now(),
        completed: newTask.completed ?? false,
      },
    ])
  }, [setTasks])

  const updateTask = useCallback((updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    )
  }, [setTasks])

  const toggleTask = useCallback((taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }, [setTasks])

  const deleteTask = useCallback((taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    )
  }, [setTasks])

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route
          path="/"
          element={
            <DashboardPage
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
              name={name}
            />
          }
        />

        <Route
          path="/tasks"
          element={
            <TasksPage
              tasks={tasks}
              onAdd={addTask}
              onUpdate={updateTask}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          }
        />

        <Route
          path="/focus"
          element={
            <FocusPage studyDuration={preferences.studyDuration} />
          }
        />

        <Route
          path="/settings"
          element={
            <SettingsPage
              name={name}
              onNameChange={setName}
              preferences={preferences}
              onPreferencesChange={setPreferences}
            />
          }
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
