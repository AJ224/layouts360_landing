import { painPoints } from "@/components/marketing/landing/data"
import { IconCard, Section, SectionHeader } from "@/components/marketing/landing/ui"

export function SoundFamiliarSection() {
  return (
    <Section id="problems">
      <SectionHeader
        eyebrow="Problems developers face"
        eyebrowClassName="bg-rose-100 text-rose-600"
        title="Selling plots without plot management software gets expensive"
        description="Most real estate developers don't lose sales to competitors—they lose them to disorganized inventory, slow follow-ups, and double bookings."
      />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((card) => (
          <IconCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  )
}
