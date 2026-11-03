import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { HomeContent } from "@/lib/i18n/home-content"

const VISUALS = [
  "/images/built-for/plotted-development.png",
  "/images/built-for/township-projects.jpg",
  "/images/built-for/residential-developments.jpg",
  "/images/built-for/multi-project-developers.jpg",
] as const

export function BuiltForSection({ content }: { content: HomeContent["builtFor"] }) {
  return (
    <section
      className="section-y border-t border-line bg-white/60"
      aria-labelledby="builtfor-heading"
    >
      <div className="container-site">
        <header className="max-w-3xl">
          <h2 id="builtfor-heading" className="t-section text-ink" data-split="lines">
            {content.heading}
          </h2>
          <p className="t-body mt-5 max-w-2xl text-subtle" data-reveal="fade" data-delay="0.15">
            {content.body}
          </p>
        </header>

        <div
          className="mt-10 grid auto-rows-fr grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-16"
          data-reveal="up"
          data-stagger
        >
          {content.items.map((item, i) => {
            const src = VISUALS[i]
            return (
              <article key={item.title} className="group flex h-full flex-col">
                <Link
                  href={item.href}
                  className="relative block aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-ground shadow-[var(--shadow-float-lg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <Image
                    src={src}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>
                <div className="mt-4 flex flex-1 flex-col sm:mt-6 sm:min-h-[7.5rem]">
                  <h3 className="t-sub text-ink">
                    <Link href={item.href} className="link-draw inline-flex items-center gap-1.5">
                      {item.title}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </h3>
                  <p className="t-small mt-2 max-w-md flex-1 text-subtle">{item.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
