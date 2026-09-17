import Image from "next/image"
import { LANDING_IMAGES } from "@/lib/media"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"

export function DigitizationPricingSection() {
  return (
    <Section id="digitization" className="bg-white py-20">
      <SectionHeader
        eyebrow="Your existing data"
        eyebrowClassName="bg-slate-100 text-slate-700"
        title="Your existing data. Your new system."
        description="Already have your project in PDF, CAD, Excel, or Illustrator? We'll help transform it into a live, interactive inventory system."
      />
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
          <Image
            src={LANDING_IMAGES.floorPlanCloseup.src}
            alt={LANDING_IMAGES.floorPlanCloseup.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 28rem"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Project digitization
          </p>
          <p className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            From layout to live project inventory
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We digitize according to property type, inventory size, and project complexity so your
            team can sell from a live map instead of static files.
          </p>
        </div>
      </div>
    </Section>
  )
}
