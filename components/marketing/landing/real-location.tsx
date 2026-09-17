import Image from "next/image"
import { LANDING_IMAGES } from "@/lib/media"
import { TextLink } from "@/components/marketing/landing/ui"

export function RealLocationSection() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Show the unit.
            <br />
            <span className="text-[#00C29F]">Not just a spreadsheet row.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Interactive layouts for plots and clear building, floor, and unit views for apartments, so buyers
            and brokers see what&apos;s actually available.
          </p>
          <div className="mt-6">
            <TextLink href="/features">Explore platform features</TextLink>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
            <Image
              src={LANDING_IMAGES.multiBuilding.src}
              alt={LANDING_IMAGES.multiBuilding.alt}
              fill
              className="object-contain object-center p-2 sm:p-4"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
