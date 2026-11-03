"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { prefersReducedMotion } from "@/engine/env"
import type { HomeContent } from "@/lib/i18n/home-content"
import { SHOTS, type ShotKey } from "@/lib/product-shots"

type Stage = HomeContent["showcase"]["stages"][number]

const VISUAL: Record<string, ShotKey> = {
  layout: "showcaseLayout",
  plot: "showcasePlot",
  freeze: "showcaseSold",
  book: "showcaseBookings",
  collect: "showcasePayments",
}

const DESKTOP_MQ = "(min-width: 1024px)"

export function ProductShowcaseSection({ content }: { content: HomeContent["showcase"] }) {
  const n = content.stages.length
  const [active, setActive] = useState(0)
  const [pin, setPin] = useState(false)
  const [desktop, setDesktop] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  // Enable CSS sticky + scroll scrub after mount (skip if reduced motion).
  useEffect(() => {
    if (prefersReducedMotion()) {
      setPin(false)
      return
    }
    const mq = window.matchMedia(DESKTOP_MQ)
    const sync = () => setDesktop(mq.matches)
    sync()
    setPin(true)
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  // Drive active stage from page scroll through the tall pin track.
  useEffect(() => {
    if (!pin) return
    const el = root.current
    if (!el) return

    let raf = 0
    const update = () => {
      raf = 0
      const total = el.offsetHeight - window.innerHeight
      if (total <= 0) {
        setActive(0)
        return
      }
      const scrolled = Math.min(total, Math.max(0, -el.getBoundingClientRect().top))
      // Keep each stage open for an equal slice; clamp so the last stays open at the end.
      const i = Math.min(n - 1, Math.floor((scrolled / total) * n))
      setActive((prev) => (prev === i ? prev : i))
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pin, n, desktop])

  function scrollToStage(i: number) {
    const el = root.current
    if (!el) return
    const total = Math.max(1, el.offsetHeight - window.innerHeight)
    const top = el.getBoundingClientRect().top + window.scrollY
    // Land in the middle of that stage's scroll slice.
    const target = top + (total * (i + 0.35)) / n
    window.scrollTo({ top: target, behavior: "smooth" })
  }

  return (
    <section className="bg-[#141414] text-ground" aria-labelledby="showcase-heading">
      <div className="container-site pt-[var(--section-y)]">
        <div className="max-w-3xl">
          <h2 id="showcase-heading" className="t-section text-ground" data-split="lines">
            {content.heading}
          </h2>
          <p className="t-body mt-4 max-w-2xl text-ground/70 sm:mt-5" data-reveal="fade" data-delay="0.15">
            {content.body}
          </p>
        </div>
      </div>

      <div
        ref={root}
        className={cn("container-site", pin && "relative")}
        style={
          pin
            ? { height: `calc(100svh + ${(n - 1) * (desktop ? 70 : 90)}svh)` }
            : undefined
        }
      >
        <div
          className={cn(
            pin
              ? "sticky top-0 flex h-[100svh] flex-col justify-center py-4 sm:py-6"
              : "pt-8 pb-[var(--section-y)] sm:pt-12",
          )}
        >
          {pin ? (
            desktop ? (
              <DesktopPinned content={content} active={active} onSelect={scrollToStage} />
            ) : (
              <MobileAccordion content={content} active={active} onSelect={scrollToStage} />
            )
          ) : (
            <StaticStack content={content} active={active} onSelect={setActive} />
          )}
        </div>
      </div>
    </section>
  )
}

function DesktopPinned({
  content,
  active,
  onSelect,
}: {
  content: HomeContent["showcase"]
  active: number
  onSelect: (i: number) => void
}) {
  return (
    <div className="grid w-full grid-cols-12 gap-6 xl:gap-10">
      <ol className="col-span-4 space-y-1.5 xl:space-y-2">
        {content.stages.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-current={active === i ? "step" : undefined}
              className={cn(
                "block w-full rounded-lg border-l-2 py-2.5 pl-3 pr-2 text-left transition-[opacity,border-color] duration-500 xl:py-3 xl:pl-4 xl:pr-3",
                active === i ? "border-brand opacity-100" : "border-white/15 opacity-45 hover:opacity-80",
              )}
            >
              <span className="block text-base font-semibold leading-snug text-ground xl:text-lg">
                {s.title}
              </span>
              <span
                className={cn(
                  "mt-1.5 block text-sm leading-relaxed text-ground/70 transition-[max-height,opacity] duration-500",
                  active === i ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0",
                )}
              >
                {s.body}
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div className="col-span-8 min-w-0">
        <StageFrame content={content} active={active} />
        <p className="mt-3 text-xs text-ground/50">{content.caption}</p>
      </div>
    </div>
  )
}

function MobileAccordion({
  content,
  active,
  onSelect,
}: {
  content: HomeContent["showcase"]
  active: number
  onSelect: (i: number) => void
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      <ol className="space-y-0.5">
        {content.stages.map((s, i) => {
          const open = active === i
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-expanded={open}
                aria-current={open ? "step" : undefined}
                className={cn(
                  "block w-full rounded-lg border-l-2 py-2 pl-3 pr-2 text-left transition-[opacity,border-color,background-color] duration-500",
                  open ? "border-brand bg-white/[0.04] opacity-100" : "border-white/15 opacity-40",
                )}
              >
                <span className="flex items-baseline gap-2">
                  <span className="t-label shrink-0 text-ground/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.975rem] font-semibold leading-snug text-ground">
                    {s.title}
                  </span>
                </span>
                <span
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <span className="overflow-hidden">
                    <span className="mt-1.5 block pl-7 text-sm leading-relaxed text-ground/70">
                      {s.body}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      <div className="min-w-0 shrink-0">
        <StageFrame content={content} active={active} priorityFirst compact />
        <p className="mt-2 text-xs text-ground/50">{content.caption}</p>
      </div>
    </div>
  )
}

function StaticStack({
  content,
  active,
  onSelect,
}: {
  content: HomeContent["showcase"]
  active: number
  onSelect: (i: number) => void
}) {
  return (
    <div className="space-y-2">
      {content.stages.map((s, i) => {
        const open = active === i
        return (
          <article
            key={s.id}
            className={cn(
              "rounded-lg border-l-2 transition-colors",
              open ? "border-brand" : "border-white/15",
            )}
          >
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-expanded={open}
              className="block w-full py-3 pl-3 pr-2 text-left"
            >
              <p className="t-label text-ground/50">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-ground">{s.title}</h3>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 px-3 pb-4">
                  <p className="text-sm leading-relaxed text-ground/70">{s.body}</p>
                  <div
                    className="relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[#0f0f0f]"
                    style={{ aspectRatio: "1024 / 510" }}
                  >
                    <StageImage stage={s} active />
                  </div>
                </div>
              </div>
            </div>
          </article>
        )
      })}
      <p className="pt-2 text-xs text-ground/50">{content.caption}</p>
    </div>
  )
}

function StageFrame({
  content,
  active,
  priorityFirst = false,
  compact = false,
}: {
  content: HomeContent["showcase"]
  active: number
  priorityFirst?: boolean
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)]",
        compact ? "aspect-[16/9] max-h-[38svh]" : "aspect-[1024/510]",
      )}
    >
      {content.stages.map((s, i) => (
        <StageImage
          key={s.id}
          stage={s}
          active={active === i}
          priority={priorityFirst ? i === 0 : i === active}
        />
      ))}
    </div>
  )
}

function StageImage({
  stage,
  active,
  priority = false,
}: {
  stage: Stage
  active: boolean
  priority?: boolean
}) {
  const s = SHOTS[VISUAL[stage.id]]
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        active ? "scale-100 opacity-100" : "pointer-events-none scale-[1.02] opacity-0",
      )}
      aria-hidden={!active}
    >
      <Image
        src={s.src}
        alt={stage.imageAlt}
        fill
        priority={priority}
        loading="eager"
        unoptimized
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="h-full w-full object-contain object-center"
      />
    </div>
  )
}
