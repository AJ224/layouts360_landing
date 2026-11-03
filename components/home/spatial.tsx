"use client"

import dynamic from "next/dynamic"

const TownshipScene = dynamic(
  () => import("@/components/product/township-scene").then((m) => m.TownshipScene),
  {
    ssr: false,
    loading: () => (
      <div
        className="animate-pulse rounded-xl border border-slate-200 bg-[#d9e2dc]"
        style={{ aspectRatio: "16 / 10" }}
        aria-hidden
      />
    ),
  },
)

const SPATIAL = {
  heading: "The layout, lifted into space.",
  body: "The real project model — base layout and site stream loaded together. Drag to orbit, hover a plot, and read live Available / Freezed / Booked / Sold colour on the ground.",
} as const

export function Spatial() {
  return (
    <section
      id="layout-3d"
      className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20"
      aria-labelledby="spatial-heading"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2
            id="spatial-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
            data-split="lines"
          >
            {SPATIAL.heading}
          </h2>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
            data-reveal="fade"
            data-delay="0.15"
          >
            {SPATIAL.body}
          </p>
        </div>
        <div className="mt-10 lg:mt-14" style={{ aspectRatio: "16 / 10" }} data-reveal="up">
          <TownshipScene className="h-full w-full" />
        </div>
      </div>
    </section>
  )
}
