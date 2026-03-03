import { Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <nav className="px-6 md:px-20 py-6 md:py-8 flex items-center justify-between">
          <Link
            to="/"
            className="font-display font-bold text-heading text-xl tracking-tight no-underline"
          >
            ramblings
          </Link>
          <div className="flex gap-5 md:gap-8 font-display font-normal text-[13px] md:text-sm text-secondary">
            <Link to="/archive" className="hover:text-heading no-underline">
              archive
            </Link>
            <Link to="/about" className="hover:text-heading no-underline">
              about
            </Link>
            <Link to="/rss" className="hover:text-heading no-underline">
              rss
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 w-full px-6 md:px-20 py-8 md:py-10">
        <Outlet />
      </main>

      <footer>
        <div className="px-6 md:px-20 py-6 text-sm text-muted font-mono">
          &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
