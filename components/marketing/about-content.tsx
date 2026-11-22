import fs from "fs"
import path from "path"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/marketing/header"
import { COMPANY, SITE_STATS } from "@/lib/company"
import { CompanyEmailLink } from "@/components/marketing/company-email-link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

/**
 * Prefer dedicated about assets when present; fall back to existing site photography.
 * Save new files under public/images/about/ using the prompts below.
 */
const IMG = {
  hero: {
    preferred: "/images/about/vision-hero.jpg",
    fallback: "/images/sales-walkthrough-realistic.jpg",
  },
  business: {
    preferred: "/images/about/focus-business.jpg",
    fallback: "/images/built-for/plotted-development.png",
  },
  simpleTech: {
    preferred: "/images/about/focus-simple-tech.jpg",
    fallback: "/images/marketing/hero-live-layout-map-hq.jpg",
  },
  noChaos: {
    preferred: "/images/about/focus-no-chaos.jpg",
    fallback: "/images/before-after-inventory.png",
  },
} as const

function aboutSrc(key: keyof typeof IMG) {
  const { preferred, fallback } = IMG[key]
  const abs = path.join(process.cwd(), "public", preferred.replace(/^\//, ""))
  return fs.existsSync(abs) ? preferred : fallback
}

const PILLARS = [
  {
    key: "business" as const,
    eyebrow: "You",
    title: "Focus on business",
    line: "Sell. Collect. Grow partners.",
    alt: "Handshake between developer and channel partner on a land development site",
  },
  {
    key: "simpleTech" as const,
    eyebrow: "Layouts360",
    title: "We keep tech simple",
    line: "One live map. Tap. Book.",
    alt: "Hand selecting a plot on a tablet layout map with the site visible outside",
  },
  {
    key: "noChaos" as const,
    eyebrow: "Result",
    title: "No ops hazards",
    line: "No Excel fights. No double booking.",
    alt: "Clean digital layout on a tablet beside outdated paper maps and sticky notes",
  },
] as const

const SHIFT = [
  { from: "Excel + WhatsApp", to: "One live inventory" },
  { from: "Babysit software", to: "Close the deal" },
  { from: "Verbal holds", to: "Timed locks" },
  { from: "PDF map blasts", to: "Partner portal" },
] as const

export function AboutContent() {
  return (
    <div className="bg-white">
      {/* Full-bleed vision hero — image under the nav, edge to edge */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-slate-950 text-white">
        <Image
          src={aboutSrc("hero")}
          alt="Developer and partner reviewing a site plan at a plotted layout during sunset"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/25" />
        <div className="absolute inset-x-0 top-0 z-20">
          <Header theme="dark" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFB800]">
            About {COMPANY.productName}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
            {COMPANY.vision}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
            You run the business. We keep the tech out of the way.
          </p>
        </div>
      </section>

      {/* Mission — three words people can remember */}
      <section className="border-b border-slate-100 bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Mission</p>
          <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl md:leading-snug">
            Business people should sell.
            <span className="mt-2 block text-slate-500">Not fight spreadsheets and chat chaos.</span>
          </p>
        </div>
      </section>

      {/* Three pillars — mostly image */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            How we translate that vision
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {PILLARS.map((item) => (
              <li key={item.key} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={aboutSrc(item.key)}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB800]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{item.line}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before → after — scannable, almost no prose */}
      <section className="border-y border-slate-100 bg-slate-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">The shift</h2>
          <ul className="mt-10 space-y-4">
            {SHIFT.map((row) => (
              <li
                key={row.from}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 sm:gap-6 sm:px-6"
              >
                <span className="text-sm text-white/55 line-through decoration-white/30 sm:text-base">
                  {row.from}
                </span>
                <ArrowRight className="h-4 w-4 text-[#FFB800]" aria-hidden />
                <span className="text-sm font-semibold text-white sm:text-base">{row.to}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats — proof without paragraphs */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-3 text-center sm:gap-6">
            {SITE_STATS.map((stat) => (
              <div key={stat.key}>
                <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {stat.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who + CTA — short */}
      <section className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Built for layout teams in India</h2>
          <p className="mt-3 text-slate-600">
            Developers · builders · sales desks · channel partners
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Not rental software. Not another spreadsheet. Not tech homework.
          </p>
          <Link
            href="/contact#demo-form"
            className="mt-8 inline-flex rounded-full bg-[#FFB800] px-7 py-3.5 text-sm font-bold text-black hover:bg-[#E5A600]"
          >
            See it on your layout
          </Link>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900">Talk to us</h2>
            <p className="mt-1 text-sm text-slate-500">
              {COMPANY.legalName} · {COMPANY.headquarters}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]" aria-hidden />
                <span>
                  {COMPANY.headquarters} {COMPANY.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#FFB800]" aria-hidden />
                <a href={`tel:${COMPANY.phoneTel}`} className="font-medium text-blue-600 hover:underline">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#FFB800]" aria-hidden />
                <CompanyEmailLink className="font-medium text-blue-600 hover:underline" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
