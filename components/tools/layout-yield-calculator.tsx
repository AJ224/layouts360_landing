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
import { calculateLayoutYield } from "@/lib/layout-yield"

const PLOT_PRESETS = [
  { label: "20 × 30", length: "20", width: "30" },
  { label: "30 × 40", length: "30", width: "40" },
  { label: "30 × 50", length: "30", width: "50" },
  { label: "40 × 60", length: "40", width: "60" },
] as const

export function LayoutYieldCalculator() {
  const [landValue, setLandValue] = useState("5")
  const [landUnit, setLandUnit] = useState<LandUnitId>("acre")
  const [plotLength, setPlotLength] = useState("30")
  const [plotWidth, setPlotWidth] = useState("40")
  const [roadPercent, setRoadPercent] = useState("15")
  const [openSpacePercent, setOpenSpacePercent] = useState("10")
  const [amenityPercent, setAmenityPercent] = useState("0")

  const result = useMemo(() => {
    const land = parseNumericInput(landValue)
    const length = parseNumericInput(plotLength)
    const width = parseNumericInput(plotWidth)
    const road = parseNumericInput(roadPercent)
    const openSpace = parseNumericInput(openSpacePercent)
    const amenity = parseNumericInput(amenityPercent)
    if (land == null || length == null || width == null || road == null || openSpace == null || amenity == null) {
      return { error: "Enter valid numbers for land, plot size, and deductions." }
    }
    return calculateLayoutYield({
      landValue: land,
      landUnit,
      plotLengthFt: length,
      plotWidthFt: width,
      roadPercent: road,
      openSpacePercent: openSpace,
      amenityPercent: amenity,
    })
  }, [amenityPercent, landUnit, landValue, openSpacePercent, plotLength, plotWidth, roadPercent])

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="layout-land">Total land</Label>
            <Input
              id="layout-land"
              type="text"
              inputMode="decimal"
              value={landValue}
              onChange={(event) => setLandValue(event.target.value)}
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="layout-unit">Unit</Label>
            <UnitSelect id="layout-unit" value={landUnit} onChange={setLandUnit} />
          </div>
        </div>

        <div className="mt-5">
          <Label>Plot size (ft)</Label>
          <div className="mt-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <Input
              aria-label="Plot length in feet"
              type="text"
              inputMode="decimal"
              value={plotLength}
              onChange={(event) => setPlotLength(event.target.value)}
              className="h-11"
            />
            <span className="text-sm text-slate-400">×</span>
            <Input
              aria-label="Plot width in feet"
              type="text"
              inputMode="decimal"
              value={plotWidth}
              onChange={(event) => setPlotWidth(event.target.value)}
              className="h-11"
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {PLOT_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => {
                  setPlotLength(preset.length)
                  setPlotWidth(preset.width)
                }}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-slate-300 hover:bg-white"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="space-y-2">
            <Label htmlFor="layout-roads">Roads %</Label>
            <Input
              id="layout-roads"
              type="text"
              inputMode="decimal"
              value={roadPercent}
              onChange={(event) => setRoadPercent(event.target.value)}
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="layout-open">Open %</Label>
            <Input
              id="layout-open"
              type="text"
              inputMode="decimal"
              value={openSpacePercent}
              onChange={(event) => setOpenSpacePercent(event.target.value)}
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="layout-amenity">Amenity %</Label>
            <Input
              id="layout-amenity"
              type="text"
              inputMode="decimal"
              value={amenityPercent}
              onChange={(event) => setAmenityPercent(event.target.value)}
              className="h-11"
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Feasibility estimate. Local layout rules for roads and open space vary.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6" aria-live="polite">
        {"error" in result ? (
          <p className="text-sm text-slate-500">{result.error}</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            <ToolStat
              emphasize
              label="Saleable plots"
              value={result.plotCount.toLocaleString("en-IN")}
              hint={`${plotLength} × ${plotWidth} ft · ${formatLandArea(result.plotSqft)} sq ft each`}
            />
            <ToolStat
              label="Saleable area"
              value={formatLandAreaWithUnit(result.saleableInLandUnit, landUnit)}
              hint={`${formatLandArea(result.saleablePercent)}% of land`}
            />
            <ToolStat label="Roads" value={`${formatLandArea(result.roadSqft)} sq ft`} />
            <ToolStat label="Open space" value={`${formatLandArea(result.openSpaceSqft)} sq ft`} />
            <ToolStat label="Amenity" value={`${formatLandArea(result.amenitySqft)} sq ft`} />
            <ToolStat
              label="Leftover after plots"
              value={formatLandAreaWithUnit(result.leftoverInLandUnit, landUnit)}
              hint={`${formatLandArea(result.leftoverSqft)} sq ft`}
            />
          </div>
        )}
      </div>
    </div>
  )
}
