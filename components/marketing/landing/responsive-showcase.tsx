import Image from "next/image"
import { Monitor, Smartphone, Tablet } from "lucide-react"
import { Section, TextLink } from "@/components/marketing/landing/ui"

const devices = [
  { label: "Mobile", icon: Smartphone, width: "w-36 sm:w-44", aspect: "aspect-[16/9]", border: "rounded-xl border-[6px]" },
  { label: "Tablet", icon: Tablet, width: "w-52 sm:w-60", aspect: "aspect-[4/3]", border: "rounded-2xl border-[8px]" },
  { label: "Desktop", icon: Monitor, width: "w-72 sm:w-96", aspect: "aspect-[16/10]", border: "rounded-lg border-[10px]" },
] as const

export function ResponsiveShowcaseSection() {
  return (
    <Section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-[#00C29F]">Accessibility</span>
        <h2 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
          Close deals
          <br />
          <span className="text-[#00C29F]">from anywhere</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
          At the site, in the office, or at home—your inventory is always in your pocket.
        </p>
        <div className="mt-6">
          <TextLink href="/features/cross-platform">View mobile capabilities</TextLink>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-center gap-10 md:gap-16">
        {devices.map((device) => (
          <div key={device.label} className="flex flex-col items-center gap-3">
            <div
              className={`relative ${device.width} ${device.aspect} overflow-hidden border-slate-900 bg-slate-900 shadow-xl ${device.border}`}
            >
              <Image
                src="/assets/images/DashboardPreview.png"
                alt={`${device.label} dashboard`}
                fill
                className="object-contain bg-slate-100"
                sizes="(max-width: 768px) 40vw, 20vw"
              />
            </div>
            <span className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <device.icon className="h-4 w-4" />
              {device.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
