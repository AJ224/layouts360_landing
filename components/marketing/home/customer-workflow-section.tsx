import Image from "next/image"
import { LANDING_IMAGES } from "@/lib/media"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"

const QUESTIONS = [
  "Is Plot 247 available?",
  "Which flats are available on the 8th floor?",
  "Did someone already hold this unit?",
  "Send me the latest Excel.",
] as const

export function CustomerWorkflowSection() {
  return (
    <Section className="bg-slate-50 py-20">
      <SectionHeader
        eyebrow="One source of truth"
        eyebrowClassName="bg-emerald-100 text-emerald-700"
        title="Give your sales team one live inventory"
        description="No more chasing status in chat or sheets. Everyone sees the same availability, including plots, floors, and flats."
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <Image
            src={LANDING_IMAGES.salesWalkthrough.src}
            alt={LANDING_IMAGES.salesWalkthrough.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-500">No more</p>
          <ul className="space-y-3">
            {QUESTIONS.map((q) => (
              <li
                key={q}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-medium text-slate-700 shadow-sm"
              >
                “{q}”
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-semibold text-slate-900">
            Your team sees the <span className="text-emerald-700">same live inventory</span>.
          </p>
        </div>
      </div>
    </Section>
  )
}
