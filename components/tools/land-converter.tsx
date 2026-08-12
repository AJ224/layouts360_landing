"use client"

import { useMemo, useState } from "react"
import { Check, Copy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UnitSelect } from "@/components/tools/unit-select"
import {
  LAND_UNITS,
  convertLandArea,
  formatLandArea,
  parseNumericInput,
  type LandUnitId,
} from "@/lib/land-conversions"
import { cn } from "@/lib/utils"

const PRESETS: Array<{ label: string; value: string; unitId: LandUnitId }> = [
  { label: "1 guntha", value: "1", unitId: "guntha" },
  { label: "1,200 sq ft", value: "1200", unitId: "sqft" },
  { label: "1 acre", value: "1", unitId: "acre" },
]

function toInputValue(value: number): string {
  if (Number.isInteger(value)) return String(value)
  return String(Number(value.toPrecision(8)))
}

export function LandConverter() {
  const [rawValue, setRawValue] = useState("1")
  const [unitId, setUnitId] = useState<LandUnitId>("guntha")
  const [copiedId, setCopiedId] = useState<LandUnitId | null>(null)

  const numericValue = parseNumericInput(rawValue)
  const isValid = numericValue != null

  const results = useMemo(() => {
    if (numericValue == null) return []
    return LAND_UNITS.map((unit) => ({
      ...unit,
      value: convertLandArea(numericValue, unitId, unit.id),
      isSource: unit.id === unitId,
    }))
  }, [numericValue, unitId])

  async function copyResult(id: LandUnitId, formatted: string, shortLabel: string) {
    try {
      await navigator.clipboard.writeText(`${formatted} ${shortLabel}`)
      setCopiedId(id)
      window.setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1500)
    } catch {
      // Value remains visible if clipboard is unavailable.
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          <div className="grid flex-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="land-value">Area</Label>
              <Input
                id="land-value"
                type="text"
                inputMode="decimal"
                value={rawValue}
                onChange={(event) => setRawValue(event.target.value)}
                placeholder="Enter area"
                className="h-11 bg-white text-base"
                aria-invalid={rawValue.length > 0 && !isValid}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="land-unit">Unit</Label>
              <UnitSelect id="land-unit" value={unitId} onChange={setUnitId} className="bg-white" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 lg:pb-0.5">
            {PRESETS.map((preset) => {
              const active = rawValue === preset.value && unitId === preset.unitId
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setRawValue(preset.value)
                    setUnitId(preset.unitId)
                  }}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                    active
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                  )}
                >
                  {preset.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6" aria-live="polite">
        {!isValid ? (
          <p className="text-sm text-slate-500">Enter a number to convert.</p>
        ) : (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {results.map((unit) => {
              const formatted = formatLandArea(unit.value)
              const copied = copiedId === unit.id
              return (
                <li key={unit.id} className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setRawValue(toInputValue(unit.value))
                      setUnitId(unit.id)
                    }}
                    className={cn(
                      "flex h-full min-h-[6.75rem] w-full flex-col rounded-xl border p-3.5 pr-9 text-left transition-colors",
                      unit.isSource
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50/80 hover:border-slate-300 hover:bg-white",
                    )}
                  >
                    <p
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-wide",
                        unit.isSource ? "text-slate-300" : "text-slate-500",
                      )}
                    >
                      {unit.shortLabel}
                    </p>
                    <p className="mt-2 text-xl font-semibold tabular-nums tracking-tight sm:text-2xl">
                      {formatted}
                    </p>
                    <p className={cn("mt-auto pt-1 text-xs", unit.isSource ? "text-slate-400" : "text-slate-500")}>
                      {unit.label}
                      {unit.region ? ` · ${unit.region}` : ""}
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => copyResult(unit.id, formatted, unit.shortLabel)}
                    className={cn(
                      "absolute top-2.5 right-2.5 rounded-md p-1.5 transition-colors",
                      unit.isSource
                        ? "text-slate-400 hover:bg-white/10 hover:text-white"
                        : "text-slate-400 hover:bg-white hover:text-slate-700",
                    )}
                    aria-label={`Copy ${unit.label}`}
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
        <p className="mt-4 text-xs leading-relaxed text-slate-400">
          1 guntha = 1,089 sq ft · 1 acre = 40 guntha = 43,560 sq ft · 1 hectare ≈ 2.471 acre · 1 sq yd = 9 sq ft · 1
          cent = 435.6 sq ft · 1 ground = 2,400 sq ft
        </p>
      </div>
    </div>
  )
}
