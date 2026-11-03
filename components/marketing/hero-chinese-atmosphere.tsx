"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { prefersReducedMotion } from "@/engine/env"

/**
 * Chinese Black hero with a faded realistic drone view of a plotted development.
 */
export function HeroChineseAtmosphere() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el || prefersReducedMotion()) return
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14
      const y = (e.clientY / window.innerHeight - 0.5) * 9
      el.style.setProperty("--ax", `${x}px`)
      el.style.setProperty("--ay", `${y}px`)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  return (
    <div
      ref={root}
      className="hero-chinese pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="hero-chinese-base" />
      <div className="hero-chinese-terrain">
        <Image
          src="/images/marketing/hero-plotted-satellite-bw.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] brightness-[0.72] contrast-[1.05] saturate-[0.85]"
        />
      </div>
      <div className="hero-chinese-vignette" />
    </div>
  )
}
