import {
  fromSquareFeet,
  toSquareFeet,
  type LandUnitId,
} from "@/lib/land-conversions"

export type LayoutYieldInput = {
  landValue: number
  landUnit: LandUnitId
  plotLengthFt: number
  plotWidthFt: number
  roadPercent: number
  openSpacePercent: number
  amenityPercent: number
}

export type LayoutYieldResult = {
  totalSqft: number
  roadSqft: number
  openSpaceSqft: number
  amenitySqft: number
  reservedSqft: number
  saleableSqft: number
  saleablePercent: number
  plotSqft: number
  plotCount: number
  plotsAreaSqft: number
  leftoverSqft: number
  saleableInLandUnit: number
  leftoverInLandUnit: number
}

export function calculateLayoutYield(input: LayoutYieldInput): LayoutYieldResult | { error: string } {
  const reservedPercent = input.roadPercent + input.openSpacePercent + input.amenityPercent
  if (input.landValue <= 0) return { error: "Enter a land area greater than zero." }
  if (input.plotLengthFt <= 0 || input.plotWidthFt <= 0) {
    return { error: "Enter plot length and width greater than zero." }
  }
  if (reservedPercent < 0) return { error: "Deductions cannot be negative." }
  if (reservedPercent >= 100) return { error: "Roads, open space, and amenity must total less than 100%." }

  const totalSqft = toSquareFeet(input.landValue, input.landUnit)
  const roadSqft = totalSqft * (input.roadPercent / 100)
  const openSpaceSqft = totalSqft * (input.openSpacePercent / 100)
  const amenitySqft = totalSqft * (input.amenityPercent / 100)
  const reservedSqft = roadSqft + openSpaceSqft + amenitySqft
  const saleableSqft = totalSqft - reservedSqft
  const plotSqft = input.plotLengthFt * input.plotWidthFt
  const plotCount = Math.floor(saleableSqft / plotSqft)
  const plotsAreaSqft = plotCount * plotSqft
  const leftoverSqft = saleableSqft - plotsAreaSqft

  return {
    totalSqft,
    roadSqft,
    openSpaceSqft,
    amenitySqft,
    reservedSqft,
    saleableSqft,
    saleablePercent: 100 - reservedPercent,
    plotSqft,
    plotCount,
    plotsAreaSqft,
    leftoverSqft,
    saleableInLandUnit: fromSquareFeet(saleableSqft, input.landUnit),
    leftoverInLandUnit: fromSquareFeet(leftoverSqft, input.landUnit),
  }
}
