import Image from "next/image"
import { LANDING_IMAGES } from "@/lib/media"
import { Section } from "@/components/marketing/landing/ui"

const highlights = [
  "Visualize, manage, share, book, and track in one place",
  "Plots, flats, apartments, villas in one system",
  "Live status for every salesperson",
]

export function OneSystemSection() {
  return (
    <Section className="bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
        <div className="space-y-6 lg:w-1/2">
          <span className="text-sm font-medium uppercase tracking-wider text-[#00C29F]">
            The transformation
          </span>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Before: PDF → Excel → WhatsApp
            <br />
            <span className="text-[#00C29F]">After: one live inventory</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-slate-600">
            Stop the chain of outdated files and manual updates. Put your whole inventory and sales
            workflow in one place. Everyone sees the same thing.
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
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <Image
              src={LANDING_IMAGES.beforeAfter.src}
              alt={LANDING_IMAGES.beforeAfter.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
