import { painPoints } from "@/components/marketing/landing/data"
import { IconCard, Section, SectionHeader } from "@/components/marketing/landing/ui"

export function SoundFamiliarSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The Challenge"
        eyebrowClassName="bg-rose-100 text-rose-600"
        title="Sound familiar?"
      />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((card) => (
          <IconCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  )
}
