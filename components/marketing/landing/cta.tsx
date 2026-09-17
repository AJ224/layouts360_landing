import Link from "next/link"
import { ArrowRight } from "lucide-react"

const trustPoints = ["Plots, flats & apartments", "Live inventory", "Book a walkthrough"]

export function CtaSectionNew() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C29F]/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-[#FFB800]/10 blur-[80px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-800/80 to-slate-900/90 px-6 py-12 text-center shadow-2xl shadow-black/40 backdrop-blur-sm sm:px-12 sm:py-14">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Your inventory is more than a{" "}
            <span className="bg-gradient-to-r from-[#00C29F] to-emerald-300 bg-clip-text text-transparent">
              spreadsheet
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Turn it into a live, interactive sales system, whether you sell plots, flats, apartments,
            villas or entire projects.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/contact#demo-form"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFB800] px-8 text-base font-bold text-slate-900 transition-colors hover:bg-[#E5A600]"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/50 bg-white/5 px-8 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/15"
            >
              See Your Project on Layouts360
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-wide text-slate-400 sm:gap-x-8 sm:text-sm">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00C29F]" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
