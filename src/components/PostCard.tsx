import { Link } from 'react-router'
import type { Post } from '../lib/posts'

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.date + 'T00:00:00')
  const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })

  return (
    <Link to={`/${post.slug}`} className="block group no-underline">
      {/* Desktop */}
      <article className="hidden md:flex items-baseline justify-between py-6">
        <div>
          <h2 className="font-display font-semibold text-[20px] leading-snug text-heading tracking-[-0.01em] group-hover:text-secondary transition-colors">
            {post.title}
          </h2>
          {post.category && (
            <span className="font-body font-light text-[14px] text-muted mt-1 block">
              {post.category}
            </span>
          )}
        </div>
        <time
          dateTime={post.date}
          className="font-mono text-[13px] text-muted flex-shrink-0 ml-10"
        >
          {formatted}
        </time>
      </article>

      {/* Mobile */}
      <article className="flex md:hidden flex-col gap-1.5 py-5">
        <h2 className="font-display font-semibold text-[17px] leading-[22px] text-heading tracking-[-0.01em] group-hover:text-secondary transition-colors">
          {post.title}
        </h2>
        <div className="flex items-center gap-3 text-muted">
          {post.category && (
            <span className="font-body font-light text-[13px]">
              {post.category}
            </span>
          )}
          {post.category && <span className="text-[13px]">&middot;</span>}
          <time dateTime={post.date} className="font-mono text-[12px]">
            {formatted}
          </time>
        </div>
      </article>
    </Link>
  )
}
