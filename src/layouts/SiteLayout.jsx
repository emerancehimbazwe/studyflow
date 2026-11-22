import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-background md:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default SiteLayout
