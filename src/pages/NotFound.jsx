// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center dark:text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">Page not found.</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">← Back home</Link>
    </main>
  )
}