import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"
import { FEATURES_PAGE } from "@/lib/features-page"
import { LANDING_IMAGES } from "@/lib/media"

const accent = "#00C29F"
const navy = "#0B1E3B"

export function FeaturesPageContent() {
  const page = FEATURES_PAGE

  return (
    <div className="min-h-screen bg-white">
      <Header theme="light" />

      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0B1E3B08_1px,transparent_1px),linear-gradient(to_bottom,#0B1E3B08_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#00C29F]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00A884] sm:text-sm">
              {page.eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl md:leading-[1.15]">
              {page.headline}{" "}
              <span className="text-[#00A884]">{page.headlineAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {page.subhead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact#demo-form"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#FFB800] px-7 text-base font-bold text-black transition-colors hover:bg-[#E5A600] sm:w-auto"
              >
                {page.primaryCta}
              </Link>
              <Link
                href="/solutions"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-base font-semibold text-slate-800 transition-colors hover:bg-slate-50 sm:w-auto"
              >
                {page.secondaryCta}
              </Link>
            </div>
            <nav
              aria-label="On this page"
              className="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
            >
              {page.jump.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:border-[#00C29F]/40 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="relative mx-auto w-full max-w-[260px] lg:col-span-5 lg:max-w-none">
            <div className="relative mx-auto aspect-[9/16] max-h-[420px] w-full max-w-[240px] overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl shadow-slate-900/25">
              <Image
                src={LANDING_IMAGES.productMobile.src}
                alt={LANDING_IMAGES.productMobile.alt}
                fill
                className="object-cover object-top"
                sizes="240px"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">
              Site team view — enquiries, bookings, money in
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50/70 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {page.steps.headline}
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {page.steps.items.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: navy }}
                >
                  {step.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <Image
              src={LANDING_IMAGES.productPlatform.src}
              alt={LANDING_IMAGES.productPlatform.alt}
              width={1024}
              height={500}
              className="h-auto w-full"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
        </div>
      </section>

      <div>
        {page.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 border-b border-slate-100 py-12 sm:py-16 ${
              index % 2 === 1 ? "bg-slate-50/60" : "bg-white"
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="text-sm font-medium leading-snug text-[#00A884]">{section.problem}</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{section.body}</p>
              </div>
              <ul className="space-y-3 lg:col-span-7">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${accent}1a` }}
                    >
                      <Check className="h-3 w-3 text-[#00A884]" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-slate-800 sm:text-[15px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {page.compare.headline}
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-2 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
              <div className="border-r border-slate-200 px-4 py-3 sm:px-5">{page.compare.beforeLabel}</div>
              <div className="px-4 py-3 sm:px-5">{page.compare.afterLabel}</div>
            </div>
            {page.compare.rows.map((row) => (
              <div
                key={row.before}
                className="grid grid-cols-2 border-t border-slate-200 text-sm sm:text-[15px]"
              >
                <p className="border-r border-slate-200 px-4 py-3.5 leading-snug text-slate-600 sm:px-5">
                  {row.before}
                </p>
                <p className="px-4 py-3.5 font-medium leading-snug text-slate-900 sm:px-5">
                  {row.after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl bg-[#0B1E3B] px-5 py-8 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">{page.midCta.headline}</h2>
            <p className="mt-1 text-sm text-slate-300 sm:text-base">{page.midCta.body}</p>
          </div>
          <Link
            href="/contact#demo-form"
            className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFB800] px-6 text-base font-bold text-black hover:bg-[#E5A600] sm:w-auto"
          >
            {page.midCta.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  )
}
