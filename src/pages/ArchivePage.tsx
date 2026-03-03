import { Link } from 'react-router'
import { posts } from '../lib/posts'

export default function ArchivePage() {
  const grouped = posts.reduce<Record<number, typeof posts>>((acc, post) => {
    const year = new Date(post.date + 'T00:00:00').getFullYear()
    ;(acc[year] ??= []).push(post)
    return acc
  }, {})

  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div>
      <header className="mb-10 md:mb-16">
        <h1 className="font-display font-bold text-[40px] leading-[44px] md:text-[64px] md:leading-[68px] text-heading tracking-[-0.03em]">
          Archive
        </h1>
        <p className="text-secondary text-[15px] leading-[22px] md:text-[17px] md:leading-[26px] font-light max-w-[480px] mt-4 md:mt-5">
          Everything I've written, grouped by year.
        </p>
      </header>

      {years.map((year) => (
        <section key={year} className="mb-8 md:mb-10">
          <div className="font-mono text-muted text-[13px] tracking-[0.05em] uppercase mb-2">
            {year}
          </div>
          <hr className="border-t border-divider mb-0" />

          <div className="divide-y divide-divider">
            {grouped[year].map((post) => {
              const date = new Date(post.date + 'T00:00:00')
              const month = date.toLocaleDateString('en-US', { month: 'short' })

              return (
                <Link
                  key={post.slug}
                  to={`/${post.slug}`}
                  className="block group no-underline"
                >
                  {/* Desktop */}
                  <div className="hidden md:flex items-baseline py-5">
                    <span className="font-mono text-[13px] text-muted w-[50px] flex-shrink-0">
                      {month}
                    </span>
                    <span className="font-display font-medium text-[17px] text-heading group-hover:text-secondary transition-colors">
                      {post.title}
                    </span>
                    <span className="font-body font-light text-[14px] text-muted ml-auto flex-shrink-0">
                      {post.category}
                    </span>
                  </div>

                  {/* Mobile */}
                  <div className="flex md:hidden flex-col gap-1 py-4">
                    <span className="font-display font-medium text-[16px] leading-[22px] text-heading group-hover:text-secondary transition-colors">
                      {post.title}
                    </span>
                    <div className="flex items-center gap-2 text-muted text-[13px]">
                      <span className="font-body font-light">{post.category}</span>
                      <span>&middot;</span>
                      <span className="font-mono">{month}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
