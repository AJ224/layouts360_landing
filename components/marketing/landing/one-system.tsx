import { DashboardImage, Section } from "@/components/marketing/landing/ui"

const highlights = ["Live Layout Status", "Customer Management", "Team Performance Tracking"]

export function OneSystemSection() {
  return (
    <Section className="bg-slate-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
        <div className="space-y-6 lg:w-1/2">
          <span className="text-sm font-medium uppercase tracking-wider text-[#00C29F]">Dashboard</span>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Stop the Confusion
            <br />
            <span className="text-[#00C29F]">Get Control.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-slate-600">
            Stop switching between WhatsApp, Excel, and paper. Put your whole business in one app—everyone
            sees the same thing.
          </p>
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00C29F]/20">
                  <span className="h-2 w-2 rounded-full bg-[#00C29F]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2">
          <DashboardImage alt="Layouts360 dashboard" />
        </div>
      </div>
    </Section>
  )
}
