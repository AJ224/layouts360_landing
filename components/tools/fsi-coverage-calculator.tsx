"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToolStat } from "@/components/tools/tool-stat"
import { UnitSelect } from "@/components/tools/unit-select"
import {
  formatLandArea,
  formatLandAreaWithUnit,
  parseNumericInput,
  type LandUnitId,
} from "@/lib/land-conversions"
import { calculateFsiCoverage } from "@/lib/fsi-coverage"

function formatRatio(value: number): string {
  return value.toLocaleString("en-IN", { maximumFractionDigits: 3, minimumFractionDigits: 0 })
}

export function FsiCoverageCalculator() {
  const [unitId, setUnitId] = useState<LandUnitId>("sqft")
  const [plotArea, setPlotArea] = useState("2400")
  const [coverageArea, setCoverageArea] = useState("1200")
  const [builtUpArea, setBuiltUpArea] = useState("2400")
  const [allowedFsi, setAllowedFsi] = useState("1.1")
  const [allowedCoverage, setAllowedCoverage] = useState("50")

  const result = useMemo(() => {
    const plot = parseNumericInput(plotArea)
    const coverage = parseNumericInput(coverageArea)
    const builtUp = parseNumericInput(builtUpArea)
    const fsiLimit = allowedFsi.trim() === "" ? null : parseNumericInput(allowedFsi)
    const coverageLimit = allowedCoverage.trim() === "" ? null : parseNumericInput(allowedCoverage)
    if (plot == null || coverage == null || builtUp == null) {
      return { error: "Enter plot area, ground coverage, and total built-up." }
    }
    if (allowedFsi.trim() !== "" && fsiLimit == null) {
      return { error: "Allowed FSI must be a valid number, or left blank." }
    }
    if (allowedCoverage.trim() !== "" && coverageLimit == null) {
      return { error: "Allowed coverage must be a valid number, or left blank." }
    }
    return calculateFsiCoverage({
      plotArea: plot,
      coverageArea: coverage,
      builtUpArea: builtUp,
      allowedFsi: fsiLimit,
      allowedCoveragePercent: coverageLimit,
    })
  }, [allowedCoverage, allowedFsi, builtUpArea, coverageArea, plotArea])

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="fsi-unit">Area unit</Label>
            <UnitSelect id="fsi-unit" value={unitId} onChange={setUnitId} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fsi-plot">Plot area</Label>
            <Input
              id="fsi-plot"
              type="text"
              inputMode="decimal"
              value={plotArea}
              onChange={(event) => setPlotArea(event.target.value)}
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fsi-coverage">Ground coverage</Label>
            <Input
              id="fsi-coverage"
              type="text"
              inputMode="decimal"
              value={coverageArea}
              onChange={(event) => setCoverageArea(event.target.value)}
              className="h-11"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="fsi-built">Total built-up (all floors)</Label>
            <Input
              id="fsi-built"
              type="text"
              inputMode="decimal"
              value={builtUpArea}
              onChange={(event) => setBuiltUpArea(event.target.value)}
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fsi-allowed">Allowed FSI (optional)</Label>
            <Input
              id="fsi-allowed"
              type="text"
              inputMode="decimal"
              value={allowedFsi}
              onChange={(event) => setAllowedFsi(event.target.value)}
              className="h-11"
              placeholder="e.g. 1.1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fsi-cov-limit">Allowed coverage % (optional)</Label>
            <Input
              id="fsi-cov-limit"
              type="text"
              inputMode="decimal"
              value={allowedCoverage}
              onChange={(event) => setAllowedCoverage(event.target.value)}
              className="h-11"
              placeholder="e.g. 50"
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          FSI = total built-up ÷ plot area. Coverage = ground floor footprint ÷ plot area. Limits differ by city.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6" aria-live="polite">
        {"error" in result ? (
          <p className="text-sm text-slate-500">{result.error}</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            <ToolStat
              emphasize
              label="FSI used"
              value={formatRatio(result.fsiUsed)}
              hint={
                result.remainingFsi != null
                  ? `${formatRatio(result.remainingFsi)} remaining`
                  : "Enter allowed FSI to see remaining"
              }
            />
            <ToolStat
              label="Plot coverage"
              value={`${formatLandArea(result.coveragePercent)}%`}
              hint={
                result.remainingCoveragePercent != null
                  ? `${formatLandArea(result.remainingCoveragePercent)}% remaining`
                  : "Enter allowed coverage to see remaining"
              }
            />
            {result.maxBuildable != null ? (
              <ToolStat
                label="Max buildable"
                value={formatLandAreaWithUnit(result.maxBuildable, unitId)}
              />
            ) : null}
            {result.maxGroundCoverage != null ? (
              <ToolStat
                label="Max ground coverage"
                value={formatLandAreaWithUnit(result.maxGroundCoverage, unitId)}
              />
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
