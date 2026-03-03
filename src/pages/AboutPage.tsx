export default function AboutPage() {
  return (
    <div>
      {/* Mobile: photo on top */}
      <div className="md:hidden mb-8">
        <div className="w-full aspect-[4/3] bg-[#dde1e6] rounded-lg" />
      </div>

      <div className="flex gap-16 items-start">
        <div className="flex-1 max-w-[600px]">
          <h1 className="font-display font-bold text-[40px] leading-[44px] md:text-[64px] md:leading-[68px] text-heading tracking-[-0.03em] mb-8 md:mb-10">
            About
          </h1>

          <div className="space-y-6 text-[#495057] text-[15px] md:text-[17px] leading-[26px] md:leading-[30px] font-light">
            <p>
              I'm a software engineer who writes about the tools, books, and ideas that
              shape how I work. This blog is where I think out loud — no hot takes, no SEO
              bait, just honest writing about things I care about.
            </p>
            <p>
              Most days I'm deep in terminal workflows, building things with code and
              occasionally questioning whether the abstractions we reach for actually
              serve us. I read a lot — mostly philosophy, technical writing, and the
              occasional novel that refuses to leave my head.
            </p>
            <p>
              If something here resonates, I'd love to hear from you.
            </p>
          </div>

          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com"
              className="font-display font-medium text-sm text-heading underline underline-offset-2"
            >
              github
            </a>
            <a
              href="mailto:hello@example.com"
              className="font-display font-medium text-sm text-heading underline underline-offset-2"
            >
              email
            </a>
            <a
              href="https://twitter.com"
              className="font-display font-medium text-sm text-heading underline underline-offset-2"
            >
              twitter
            </a>
          </div>
        </div>

        {/* Desktop: photo on right */}
        <div className="hidden md:block w-[280px] h-[320px] bg-[#dde1e6] rounded-lg flex-shrink-0" />
      </div>
    </div>
  )
}
