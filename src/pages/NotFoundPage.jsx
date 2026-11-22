import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold text-primary">
        Page not found
      </h1>
      <p className="mt-2 text-slate-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-accent px-5 py-3 font-semibold text-white hover:bg-teal-600"
      >
        Return to Dashboard
      </Link>
    </div>
  )
}

export default NotFoundPage
