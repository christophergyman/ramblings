import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="font-display font-bold text-6xl text-heading mb-4">404</h1>
      <p className="text-secondary mb-8">This page doesn't exist.</p>
      <Link
        to="/"
        className="font-mono text-sm text-muted hover:text-heading no-underline"
      >
        &larr; back home
      </Link>
    </div>
  )
}
