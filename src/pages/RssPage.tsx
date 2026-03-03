export default function RssPage() {
  return (
    <div className="max-w-[560px]">
      <header className="mb-8 md:mb-10">
        <h1 className="font-display font-bold text-[40px] leading-[44px] md:text-[64px] md:leading-[68px] text-heading tracking-[-0.03em]">
          RSS
        </h1>
        <p className="text-secondary text-[15px] leading-[22px] md:text-[17px] md:leading-[26px] font-light mt-4 md:mt-5">
          Subscribe to this blog in your favorite feed reader. New posts show up
          automatically — no algorithms, no newsletters, no noise.
        </p>
      </header>

      <section className="mb-10 md:mb-12">
        <div className="font-mono text-[12px] md:text-[13px] text-heading font-medium tracking-[0.05em] uppercase mb-2">
          Feed URL
        </div>
        <div className="bg-[#edeef0] rounded-md p-4 font-mono text-[14px] md:text-[15px] text-heading">
          ramblings.blog/feed.xml
        </div>
      </section>

      <section className="mb-10 md:mb-12">
        <h2 className="font-display font-bold text-[20px] md:text-[22px] text-heading tracking-[-0.01em] mb-3">
          What is RSS?
        </h2>
        <p className="text-secondary text-[15px] md:text-[17px] leading-[26px] md:leading-[30px] font-light">
          RSS is an open standard that lets you follow websites without creating
          accounts or sharing your email. You add a feed URL to a reader app,
          and new posts appear there automatically. Think of it as a personal,
          ad-free timeline you control.
        </p>
      </section>

      <section>
        <h2 className="font-display font-bold text-[20px] md:text-[22px] text-heading tracking-[-0.01em] mb-3">
          Recommended readers
        </h2>
        <div className="flex gap-6">
          <a
            href="https://netnewswire.com"
            className="font-display font-medium text-sm text-secondary underline underline-offset-2 hover:text-heading transition-colors"
          >
            NetNewsWire
          </a>
          <a
            href="https://feedbin.com"
            className="font-display font-medium text-sm text-secondary underline underline-offset-2 hover:text-heading transition-colors"
          >
            Feedbin
          </a>
          <a
            href="https://reederapp.com"
            className="font-display font-medium text-sm text-secondary underline underline-offset-2 hover:text-heading transition-colors"
          >
            Reeder
          </a>
        </div>
      </section>
    </div>
  )
}
