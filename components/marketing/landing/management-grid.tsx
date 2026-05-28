import Image from "next/image"
import { managementStats } from "@/components/marketing/landing/data"
import { Section, SectionHeader, TextLink } from "@/components/marketing/landing/ui"

export function ManagementGridSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Dashboard"
        eyebrowClassName="rounded-full bg-blue-50 px-3 py-1 text-blue-500"
        title={
          <>
            See Your <span className="text-blue-500">Whole Business</span>
          </>
        }
        description="Everything happening in your business, on one screen."
      />
      <div className="mb-10 text-center">
        <TextLink href="/features/availability">
          <span className="text-indigo-600 hover:text-indigo-700">See management tools</span>
        </TextLink>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <div className="grid w-full grid-cols-2 gap-4 md:w-1/3">
          {managementStats.map((item) => (
            <div
              key={item.label}
              className="flex aspect-[1.2/1] flex-col justify-between rounded-3xl bg-white p-5 shadow-lg shadow-slate-200/40"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.bg}`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div>
                <span className="mb-1 block text-sm font-medium text-slate-500">{item.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">{item.count}</span>
                  <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-xs font-bold text-emerald-500">
                    {item.growth}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl md:w-2/3">
          <Image
            src="/assets/images/DashboardPreview.png"
            alt="Management dashboard"
            fill
            className="object-contain bg-slate-50"
          />
        </div>
      </div>
    </Section>
  )
}
