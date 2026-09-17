import { painPoints } from "@/components/marketing/landing/data"
import { IconCard, Section, SectionHeader } from "@/components/marketing/landing/ui"

export function SoundFamiliarSection() {
  return (
    <Section id="problems">
      <SectionHeader
        eyebrow="The problem"
        eyebrowClassName="bg-rose-100 text-rose-600"
        title="Your inventory shouldn't live in 5 different places"
        description="Your team is constantly juggling static PDFs, Excel sheets, WhatsApp updates, and manual status changes. When inventory moves, someone has to update everything again. Layouts360 brings it together."
      />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((card) => (
          <IconCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  )
}
