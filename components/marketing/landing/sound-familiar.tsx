import Image from "next/image"
import {
  FileSpreadsheet,
  FileText,
  MessageCircle,
  RefreshCw,
  Search,
  Users,
} from "lucide-react"
import { LANDING_IMAGES } from "@/lib/media"
import type { HomeContent } from "@/lib/i18n/home-content"

const PAIN_ICONS = [FileText, FileSpreadsheet, MessageCircle, RefreshCw, Search, Users] as const

type SoundFamiliarSectionProps = {
  content: HomeContent["problem"]
}

export function SoundFamiliarSection({ content }: SoundFamiliarSectionProps) {
  return (
    <section
      id="problems"
      className="section-y border-t border-line bg-ground"
      aria-labelledby="problems-heading"
    >
      <div className="container-site">
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 lg:mb-16">
          <h2 id="problems-heading" className="t-section text-ink" data-split="lines">
            {content.headline}
          </h2>
        </header>

        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5"
          data-reveal="up"
          data-stagger
        >
          {content.painCards.map((title, index) => {
            const Icon = PAIN_ICONS[index] ?? FileText
            return (
              <article
                key={title}
                className="group flex items-start gap-4 rounded-[var(--radius-card)] border border-line bg-white px-4 py-4 text-left shadow-[var(--shadow-float)] transition-colors duration-300 hover:border-ink/15 sm:flex-col sm:items-center sm:px-6 sm:py-8 sm:text-center"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sold-soft sm:mb-5 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-sold" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-sm font-semibold leading-snug text-ink sm:text-[0.9375rem]">
                  {title}
                </h3>
              </article>
            )
          })}
        </div>

        <div className="mt-12 grid items-center gap-8 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-14">
          <div
            className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-float-lg)]"
            data-reveal="up"
          >
            <Image
              src={LANDING_IMAGES.salesWalkthrough.src}
              alt={LANDING_IMAGES.salesWalkthrough.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <ul className="space-y-2.5 sm:space-y-3" data-reveal="up" data-stagger>
              {content.questions.map((q) => (
                <li
                  key={q}
                  className="rounded-[var(--radius-card)] border border-line bg-white px-4 py-3.5 text-sm font-medium text-ink shadow-[var(--shadow-float)] sm:px-5 sm:py-4 sm:text-[0.9375rem]"
                >
                  “{q}”
                </li>
              ))}
            </ul>
            <p
              className="mt-6 text-base font-semibold leading-snug text-ink sm:mt-8 sm:text-lg"
              data-reveal="fade"
              data-delay="0.15"
            >
              {`${content.closerBefore} `}
              <span className="text-available-ink">{content.closerAccent}</span>
              {content.closerAfter}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
