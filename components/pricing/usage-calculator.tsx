"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  estimateUsagePricing,
  formatInr,
  pricingConfig,
  type BillingPeriod,
  type InventoryUnitType,
} from "@/lib/pricing-config"

const PRESET_LABELS: Record<number, string> = {
  50: "50",
  100: "100",
  500: "500",
  1000: "1,000",
  5000: "5,000+",
}

function AnimatedAmount({ value, className }: Readonly<{ value: number; className?: string }>) {
  const [display, setDisplay] = useState(value)
  const displayRef = useRef(value)

  useEffect(() => {
    const start = displayRef.current
    const delta = value - start
    if (delta === 0) {
      setDisplay(value)
      displayRef.current = value
      return
    }
    const duration = 280
    const startTime = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration)
      const eased = 1 - (1 - t) ** 3
      const next = Math.round(start + delta * eased)
      setDisplay(next)
      displayRef.current = next
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <span className={className}>{formatInr(display)}</span>
}

export default function UsageCalculator() {
  const customId = useId()
  const [unitType, setUnitType] = useState<InventoryUnitType>("plot")
  const [billing, setBilling] = useState<BillingPeriod>("monthly")
  const [preset, setPreset] = useState<number | "custom">(100)
  const [customCount, setCustomCount] = useState(250)

  const unitCount = preset === "custom" ? Math.max(1, customCount || 1) : preset
  const estimate = estimateUsagePricing(unitCount, unitType, billing)
  const unitLabel = unitType === "flat" ? "flat" : "plot"

  return (
    <div
      id="calculate"
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-[#E8E2D9] bg-white shadow-[0_24px_80px_-40px_rgba(11,30,59,0.35)]"
    >
      <div className="border-b border-[#E8E2D9] bg-gradient-to-br from-[#F7F4EF] via-white to-white px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#00A88E]">
          Cost calculator
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0B1E3B] sm:text-3xl">
          How many properties do you manage?
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
          Your price changes with your usage, not with arbitrary feature limits.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8 border-b border-[#E8E2D9] p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Inventory type</p>
            <div className="mt-3 grid grid-cols-2 gap-2 rounded-full bg-[#F7F4EF] p-1">
              {(
                [
                  { id: "plot", label: "Plots" },
                  { id: "flat", label: "Flats" },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setUnitType(option.id)}
                  className={[
                    "rounded-full px-4 py-2.5 text-sm font-medium transition-all",
                    unitType === option.id
                      ? "bg-white text-[#0B1E3B] shadow-sm"
                      : "text-slate-500 hover:text-[#0B1E3B]",
                  ].join(" ")}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Inventory size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {pricingConfig.inventoryPresets.map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setPreset(count)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    preset === count
                      ? "border-[#00C29F] bg-[#00C29F]/10 text-[#0B1E3B]"
                      : "border-[#E8E2D9] bg-white text-slate-600 hover:border-[#00C29F]/40",
                  ].join(" ")}
                >
                  {PRESET_LABELS[count]}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPreset("custom")}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  preset === "custom"
                    ? "border-[#00C29F] bg-[#00C29F]/10 text-[#0B1E3B]"
                    : "border-[#E8E2D9] bg-white text-slate-600 hover:border-[#00C29F]/40",
                ].join(" ")}
              >
                Custom
              </button>
            </div>

            {preset === "custom" ? (
              <div className="mt-4 max-w-xs">
                <label htmlFor={customId} className="sr-only">
                  Custom inventory count
                </label>
                <Input
                  id={customId}
                  type="number"
                  min={1}
                  value={customCount}
                  onChange={(e) => setCustomCount(Math.max(1, Number.parseInt(e.target.value, 10) || 1))}
                  className="h-11 rounded-xl border-[#E8E2D9] bg-[#F7F4EF]/50"
                />
              </div>
            ) : null}
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Platform billing</p>
            <div className="mt-3 grid grid-cols-2 gap-2 rounded-full bg-[#F7F4EF] p-1">
              {(
                [
                  { id: "monthly", label: "Monthly" },
                  { id: "annual", label: "Annual · 10% off" },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setBilling(option.id)}
                  className={[
                    "rounded-full px-4 py-2.5 text-sm font-medium transition-all",
                    billing === option.id
                      ? "bg-white text-[#0B1E3B] shadow-sm"
                      : "text-slate-500 hover:text-[#0B1E3B]",
                  ].join(" ")}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#0B1E3B] p-6 text-white sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#5eead4]">
            Estimated cost
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-white/55">Inventory activation · one-time</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                <AnimatedAmount value={estimate.activationOneTime} />
              </p>
              <p className="mt-1 text-xs text-white/45">
                {formatInr(estimate.ratePerUnit)} per {unitLabel} · {unitCount.toLocaleString("en-IN")}{" "}
                {unitLabel}
                {unitCount === 1 ? "" : "s"}
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <p className="text-sm text-white/55">
                Platform access · {billing === "annual" ? "billed annually" : "per month"}
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                <AnimatedAmount value={estimate.platformBilled} />
                <span className="ml-1 text-lg font-medium text-white/50">
                  {billing === "annual" ? "/ year" : "/ mo"}
                </span>
              </p>
              {billing === "annual" ? (
                <p className="mt-1 text-xs text-white/45">
                  Effective {formatInr(estimate.platformMonthly)}/mo with annual billing
                </p>
              ) : (
                <p className="mt-1 text-xs text-white/45">
                  Or {formatInr(calculatePlatformAnnualHint())}/year with 10% off
                </p>
              )}
            </div>
          </div>

          {estimate.isEnterpriseScale ? (
            <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-white/70">
              At 5,000+ units we often tailor onboarding. Use this as a starting estimate, then talk to us.
            </p>
          ) : null}

          <div className="mt-auto flex flex-col gap-2 pt-8">
            <Button
              className="h-11 rounded-full bg-[#EAB308] text-sm font-medium text-[#0B1E3B] hover:bg-[#f0c43a]"
              asChild
            >
              <Link href={`/contact?units=${unitCount}&type=${unitType}#demo-form`}>
                Talk through this estimate
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-full border-white/20 bg-transparent text-sm text-white hover:bg-white/5"
              asChild
            >
              <Link href="/contact#demo-form">Book a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function calculatePlatformAnnualHint() {
  return estimateUsagePricing(1, "plot", "annual").platformBilled
}
