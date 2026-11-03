import type { HomeContent } from "@/lib/i18n/home-content"

type StatsSectionProps = {
  content: HomeContent["stats"]
}

export function StatsSection({ content }: StatsSectionProps) {
  return (
    <section
      className="border-y border-line bg-white"
      aria-label={content.ariaLabel}
    >
      <div className="container-site">
        <dl
          className="grid grid-cols-3 divide-x divide-line"
          data-reveal="up"
          data-stagger
        >
          {content.items.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center justify-center px-2 py-10 text-center sm:px-6 sm:py-14 md:py-16"
            >
              <dt className="order-2 mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-subtle sm:mt-3 sm:text-[0.8125rem]">
                {item.label}
              </dt>
              <dd className="order-1 text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-none tracking-tight text-ink tabular-nums">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
