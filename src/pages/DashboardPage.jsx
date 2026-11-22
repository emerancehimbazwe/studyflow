import Header from '../components/Header'
import SummaryCard from '../components/SummaryCard'
import ProgressCard from '../components/ProgressCard'
import TaskCard from '../components/TaskCard'
import SectionCard from '../components/SectionCard'

function DashboardPage({ tasks, onToggle, onDelete, name = 'Emerance' }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = totalTasks - completedTasks
  const upcomingTasks = tasks.filter(task => !task.completed).slice(0, 4)

  return (
    <div>
      <Header name={name} />

      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard title="Total Tasks" value={totalTasks} description="All your study tasks" accent="blue" />
        <SummaryCard title="Completed" value={completedTasks} description="Tasks finished" accent="teal" />
        <SummaryCard title="Pending" value={pendingTasks} description="Tasks to complete" accent="orange" />
        <SummaryCard title="Completion" value={`${totalTasks ? Math.round(completedTasks / totalTasks * 100) : 0}%`} description="Your study progress" accent="purple" />
      </div>

      <div className="mb-8">
        <ProgressCard completed={completedTasks} total={totalTasks} />
      </div>

      <SectionCard title="Upcoming Tasks" description="Your next study activities">
        <div className="space-y-3">
          {upcomingTasks.length > 0 ? (
            upcomingTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))
          ) : (
            <p className="py-8 text-center text-slate-500">
              No pending tasks. Great work!
            </p>
          )}
        </div>
      </SectionCard>
    </div>
  )
}

export default DashboardPage
