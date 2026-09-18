import Image from "next/image"
import { LANDING_IMAGES } from "@/lib/media"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"
import type { HomeContent } from "@/lib/i18n/home-content"

const PILLAR_IMAGES = [
  LANDING_IMAGES.interactivePlot,
  LANDING_IMAGES.apartmentFloor,
  LANDING_IMAGES.liveDashboard,
] as const

type PlatformInventorySectionProps = {
  content: HomeContent["platform"]
}

export function PlatformInventorySection({ content }: PlatformInventorySectionProps) {
  return (
    <Section id="platform" className="bg-white py-20">
      <SectionHeader title={content.headline} />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {content.pillars.map((pillar, index) => {
          const image = PILLAR_IMAGES[index] ?? PILLAR_IMAGES[0]
          return (
            <article key={pillar.title} className="flex flex-col">
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
