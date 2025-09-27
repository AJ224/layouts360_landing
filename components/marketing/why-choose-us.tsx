import type React from "react"
const points = [
  "Digitize and simplify your sales process.",
  "Reduce manual errors and paperwork.",
  "Improve customer trust with transparency.",
  "Scale across multiple layouts easily.",
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Why choose IdeatoLive</h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Confidence through clarity. A platform designed for developers and sales teams.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 rounded-lg border bg-card p-5">
            <ShieldIcon aria-hidden="true" className="mt-1 h-5 w-5 text-primary" />
            <p className="text-sm leading-relaxed">{p}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
    </svg>
  )
}
