import { Map } from "lucide-react"
import { TextLink } from "@/components/marketing/landing/ui"

export function RealLocationSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <Map className="h-6 w-6 text-white" />
        </div>
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Build Instant Trust with
          <br />
          <span className="text-teal-400">Satellite Precision</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
          Don&apos;t just show a paper drawing. Show the real land—exactly where their plot sits on the map.
        </p>
        <TextLink href="/features/plot-details" className="text-teal-400 hover:text-teal-300">
          Explore satellite features
        </TextLink>
      </div>
    </section>
  )
}
