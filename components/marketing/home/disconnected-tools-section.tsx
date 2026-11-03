import type { HomeContent } from "@/lib/i18n/home-content"

type DisconnectedToolsSectionProps = {
  content: HomeContent["disconnectedTools"]
}

export function DisconnectedToolsSection({ content }: DisconnectedToolsSectionProps) {
  return (
    <section className="section-y bg-ground" aria-labelledby="disconnected-tools-heading">
      <div className="container-site">
        <header className="max-w-3xl">
          <h2 id="disconnected-tools-heading" className="t-section text-ink" data-split="lines">
            {content.heading}
          </h2>
          <p className="t-body mt-4 max-w-2xl text-subtle sm:mt-5" data-reveal="fade" data-delay="0.15">
            {content.body}
          </p>
        </header>

        <div
          className="mt-10 overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-float)] sm:mt-12 lg:mt-16"
          data-reveal="up"
          data-delay="0.2"
        >
          {/* Desktop / tablet header */}
          <div className="hidden grid-cols-[1fr_auto_1fr] items-stretch border-b border-line sm:grid">
            <div className="px-4 py-3 text-sm font-semibold text-subtle sm:px-6">
              {content.fragmentedLabel}
            </div>
            <div aria-hidden className="relative w-px bg-line">
              <span className="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-[10px] font-bold leading-none text-subtle">
                →
              </span>
            </div>
            <div className="px-4 py-3 text-sm font-semibold text-ink sm:px-6">
              {content.connectedLabel}
            </div>
          </div>

          <ul>
            {content.rows.map((row, i) => (
              <li key={row.before} className={i > 0 ? "border-t border-line" : undefined}>
                {/* Mobile: stacked before → after */}
                <div className="sm:hidden">
                  <div className="flex items-start gap-3 px-4 py-3.5">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sold/70"
                    />
                    <div>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-subtle">
                        {content.fragmentedLabel}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-subtle line-through decoration-sold/30 decoration-1">
                        {row.before}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-sage/15 px-4 py-3.5">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-available"
                    />
                    <div>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-available-ink">
                        {content.connectedLabel}
                      </p>
                      <p className="mt-1 text-sm font-medium leading-snug text-ink">{row.after}</p>
                    </div>
                  </div>
                </div>

                {/* sm+: side-by-side columns */}
                <div className="group hidden grid-cols-[1fr_auto_1fr] items-stretch transition-colors duration-300 hover:bg-ink/[0.015] sm:grid">
                  <div className="flex items-start gap-3 px-4 py-4 sm:px-6">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sold/70 transition-transform duration-300 group-hover:scale-125"
                    />
                    <p className="text-sm leading-snug text-subtle line-through decoration-sold/30 decoration-1 sm:text-[0.9375rem]">
                      {row.before}
                    </p>
                  </div>
                  <div aria-hidden className="relative w-px bg-line">
                    <span className="absolute left-1/2 top-1/2 h-px w-0 -translate-x-1/2 -translate-y-1/2 bg-brand transition-[width] duration-500 group-hover:w-4" />
                  </div>
                  <div className="relative flex items-start gap-3 overflow-hidden bg-sage/15 px-4 py-4 sm:px-6">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-available/10 transition-[width] duration-500 group-hover:w-full"
                    />
                    <span
                      aria-hidden
                      className="relative mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-available transition-transform duration-300 group-hover:scale-125"
                    />
                    <p className="relative text-sm font-medium leading-snug text-ink sm:text-[0.9375rem]">
                      {row.after}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
