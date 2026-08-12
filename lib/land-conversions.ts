export type LandUnitId =
  | "sqft"
  | "sqm"
  | "sqyd"
  | "guntha"
  | "cent"
  | "ground"
  | "acre"
  | "hectare"

export type LandUnit = {
  id: LandUnitId
  label: string
  shortLabel: string
  region?: string
  /** Square feet in one of this unit */
  sqft: number
}

export const LAND_UNITS: readonly LandUnit[] = [
  { id: "sqft", label: "Square Feet", shortLabel: "sq ft", sqft: 1 },
  { id: "sqm", label: "Square Metres", shortLabel: "sq m", sqft: 10.76391041671 },
  { id: "sqyd", label: "Square Yards (Gaj)", shortLabel: "sq yd", sqft: 9 },
  { id: "guntha", label: "Guntha", shortLabel: "guntha", region: "MH, KA, TG, AP", sqft: 1089 },
  { id: "cent", label: "Cent", shortLabel: "cent", region: "South India", sqft: 435.6 },
  { id: "ground", label: "Ground", shortLabel: "ground", region: "Tamil Nadu", sqft: 2400 },
  { id: "acre", label: "Acre", shortLabel: "acre", sqft: 43560 },
  { id: "hectare", label: "Hectare", shortLabel: "ha", sqft: 107639.104167097 },
] as const

export const LAND_UNIT_BY_ID: Record<LandUnitId, LandUnit> = Object.fromEntries(
  LAND_UNITS.map((unit) => [unit.id, unit]),
) as Record<LandUnitId, LandUnit>

export function toSquareFeet(value: number, unitId: LandUnitId): number {
  return value * LAND_UNIT_BY_ID[unitId].sqft
}

export function fromSquareFeet(sqft: number, unitId: LandUnitId): number {
  return sqft / LAND_UNIT_BY_ID[unitId].sqft
}

export function convertLandArea(value: number, from: LandUnitId, to: LandUnitId): number {
  return fromSquareFeet(toSquareFeet(value, from), to)
}

export function parseNumericInput(raw: string): number | null {
  const value = Number.parseFloat(raw.replaceAll(",", "").trim())
  if (!Number.isFinite(value) || value < 0) return null
  return value
}

export function formatLandAreaWithUnit(value: number, unitId: LandUnitId): string {
  return `${formatLandArea(value)} ${LAND_UNIT_BY_ID[unitId].shortLabel}`
}

export function formatLandArea(value: number): string {
  if (!Number.isFinite(value)) return "—"
  if (value === 0) return "0"

  const abs = Math.abs(value)
  let fractionDigits = 6
  if (abs >= 1000) {
    fractionDigits = 2
  } else if (abs >= 1) {
    fractionDigits = 4
  }

  return value.toLocaleString("en-IN", {
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: 0,
  })
}
