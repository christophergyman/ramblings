import { useParams } from 'react-router'
import { getPost } from '../lib/posts'
import Prose from '../components/Prose'
import NotFoundPage from './NotFoundPage'

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) return <NotFoundPage />

  const date = new Date(post.date + 'T00:00:00')
  const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })

  return (
    <article>
      <header className="max-w-[760px] pt-8 md:pt-14 pb-7 md:pb-10">
        <div className="font-body font-light text-[13px] md:text-sm text-muted">
          <time dateTime={post.date}>{formatted}</time>
          {post.category && (
            <span> — {post.category}</span>
          )}
        </div>
        <h1 className="font-display font-bold text-[32px] leading-[38px] md:text-[48px] md:leading-[54px] text-heading tracking-[-0.03em] mt-3 md:mt-4">
          {post.title}
        </h1>
      </header>

      <hr className="border-t border-divider max-w-[680px] mb-0" />

      <div className="max-w-[760px] pt-8 md:pt-10 pb-10">
        <Prose html={post.content} />
      </div>
    </article>
  )
}
