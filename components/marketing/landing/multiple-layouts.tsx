import { Section, SectionHeader } from "@/components/marketing/landing/ui"

export function MultipleLayoutsSection() {
  return (
    <Section className="bg-slate-50 py-20">
      <SectionHeader
        eyebrow="Scalability"
        eyebrowClassName="text-blue-600 bg-transparent px-0"
        title={
          <>
            Multiple layouts,
            <br />
            <span className="text-blue-600">one system</span>
          </>
        }
      />
      <div className="mx-auto max-w-5xl">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b820_1px,transparent_1px),linear-gradient(to_bottom,#94a3b820_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur-sm">
              All projects on one map view
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
