import Image from "next/image"
import type { HomeContent } from "@/lib/i18n/home-content"
import { SHOTS, type ShotKey } from "@/lib/product-shots"

const PILLAR_SHOTS: ShotKey[] = ["layoutMap", "projects", "dashboardMain"]

type PlatformInventorySectionProps = {
  content: HomeContent["platform"]
}

export function PlatformInventorySection({ content }: PlatformInventorySectionProps) {
  return (
    <section
      id="platform"
      className="section-y border-t border-line bg-white"
      aria-labelledby="platform-heading"
    >
      <div className="container-site">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
          <h2 id="platform-heading" className="t-section text-ink" data-split="lines">
            {content.headline}
          </h2>
        </header>

        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          data-reveal="up"
          data-stagger
        >
          {content.pillars.map((pillar, index) => {
            const shot = SHOTS[PILLAR_SHOTS[index] ?? PILLAR_SHOTS[0]]
            return (
              <article
                key={pillar.title}
                className="group flex h-full flex-col [&:last-child]:sm:col-span-2 [&:last-child]:lg:col-span-1"
              >
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-ground shadow-[var(--shadow-float-lg)]">
                  <div className="flex items-center gap-2 border-b border-line bg-white px-3.5 py-2 text-xs font-semibold text-subtle">
                    <span className="h-1.5 w-1.5 rounded-full bg-available" aria-hidden />
                    Layouts360 · {shot.label}
                  </div>
                  <div className="relative aspect-[16/10] bg-white">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <h3 className="t-sub mt-5 text-ink sm:mt-6">{pillar.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-subtle sm:mt-4">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span
                        className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
