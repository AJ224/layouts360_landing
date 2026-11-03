import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { HomeContent } from "@/lib/i18n/home-content"
import { SHOTS, type ShotKey } from "@/lib/product-shots"

const VISUAL: Record<HomeContent["groups"]["items"][number]["id"], ShotKey> = {
  visualize: "plotDetail",
  operate: "crm",
  control: "dashboardLeadership",
}

export function ConnectedPlatformSection({ content }: { content: HomeContent["groups"] }) {
  return (
    <section className="section-y border-t border-line bg-white" aria-labelledby="groups-heading">
      <div className="container-site">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="groups-heading" className="t-section text-ink" data-split="lines">
            {content.heading}
          </h2>
          <p className="t-body mt-5 text-subtle" data-reveal="fade" data-delay="0.15">
            {content.body}
          </p>
        </header>

        <div
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8"
          data-reveal="up"
          data-stagger
        >
          {content.items.map((item) => {
            const shot = SHOTS[VISUAL[item.id]]
            return (
              <article
                key={item.id}
                className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-float)] sm:col-span-1 lg:col-span-1 [&:last-child]:sm:col-span-2 [&:last-child]:lg:col-span-1"
                aria-labelledby={`group-${item.id}`}
              >
                <Link
                  href={item.href}
                  className="relative block aspect-[16/10] overflow-hidden rounded-t-[var(--radius-card)] border-b border-line focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:aspect-[4/3]"
                >
                  <Image
                    src={shot.src}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                  <h3 id={`group-${item.id}`} className="t-sub text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-snug text-ink/80 sm:text-[0.9375rem]">
                    {item.lead}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2 sm:mt-5 sm:space-y-2.5">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm leading-snug text-subtle">
                        <span
                          aria-hidden
                          className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className="link-draw mt-5 inline-flex min-h-6 items-center gap-1.5 py-1 text-sm font-semibold text-ink sm:mt-6 sm:text-[0.9375rem]"
                  >
                    {item.linkLabel}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
