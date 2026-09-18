import Image from "next/image"
import { LANDING_IMAGES } from "@/lib/media"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"
import type { HomeContent } from "@/lib/i18n/home-content"

type DigitizationPricingSectionProps = {
  content: HomeContent["digitization"]
}

export function DigitizationPricingSection({ content }: DigitizationPricingSectionProps) {
  return (
    <Section id="digitization" className="bg-white py-20">
      <SectionHeader title={content.headline} description={content.body} />
      <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
        <Image
          src={LANDING_IMAGES.floorPlanCloseup.src}
          alt={LANDING_IMAGES.floorPlanCloseup.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
        />
      </div>
    </Section>
  )
}
