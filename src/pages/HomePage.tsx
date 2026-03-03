import { posts } from '../lib/posts'
import PostCard from '../components/PostCard'

export default function HomePage() {
  return (
    <div>
      <header className="mb-10 md:mb-16">
        <h1 className="font-display font-bold text-[40px] leading-[44px] md:text-[64px] md:leading-[68px] text-heading tracking-[-0.03em]">
          Thinking out loud.
        </h1>
        <p className="text-secondary text-[15px] leading-[22px] md:text-[17px] md:leading-[26px] font-light max-w-[480px] mt-4 md:mt-5">
          Technical writing, book reviews, current tools, and whatever else crosses my mind.
        </p>
      </header>

      <hr className="border-t border-divider mb-0" />

      <div className="divide-y divide-divider">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
