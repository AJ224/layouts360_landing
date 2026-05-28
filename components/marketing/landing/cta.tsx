import Link from "next/link"

const trustPoints = ["No credit card", "14-day trial", "Cancel anytime"]

export function CtaSectionNew() {
  return (
    <section className="relative overflow-hidden bg-[#0B1221] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,#0B1221_100%)]" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
          <span className="text-2xl font-bold">L</span>
        </div>

        <h2 className="mb-6 text-4xl font-bold md:text-6xl">Let&apos;s see it in action</h2>
        <p className="mx-auto mb-10 max-w-lg text-lg text-slate-400">
          Transform your real estate sales process today.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Start for free
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10"
          >
            Talk to sales
          </Link>
        </div>

        <p className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium uppercase tracking-widest text-slate-500">
          {trustPoints.map((point, index) => (
            <span key={point} className="flex items-center gap-6">
              {index > 0 ? <span aria-hidden className="text-slate-600">•</span> : null}
              {point}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
