export type FsiCoverageInput = {
  plotArea: number
  coverageArea: number
  builtUpArea: number
  allowedFsi?: number | null
  allowedCoveragePercent?: number | null
}

export type FsiCoverageResult = {
  coveragePercent: number
  fsiUsed: number
  remainingFsi: number | null
  remainingCoveragePercent: number | null
  maxBuildable: number | null
  maxGroundCoverage: number | null
}

export function calculateFsiCoverage(input: FsiCoverageInput): FsiCoverageResult | { error: string } {
  if (input.plotArea <= 0) return { error: "Enter a plot area greater than zero." }
  if (input.coverageArea < 0 || input.builtUpArea < 0) {
    return { error: "Coverage and built-up cannot be negative." }
  }

  const coveragePercent = (input.coverageArea / input.plotArea) * 100
  const fsiUsed = input.builtUpArea / input.plotArea
  const allowedFsi = input.allowedFsi
  const allowedCoveragePercent = input.allowedCoveragePercent
  const hasAllowedFsi = allowedFsi != null && allowedFsi > 0
  const hasAllowedCoverage = allowedCoveragePercent != null && allowedCoveragePercent > 0

  return {
    coveragePercent,
    fsiUsed,
    remainingFsi: hasAllowedFsi && allowedFsi != null ? allowedFsi - fsiUsed : null,
    remainingCoveragePercent:
      hasAllowedCoverage && allowedCoveragePercent != null
        ? allowedCoveragePercent - coveragePercent
        : null,
    maxBuildable: hasAllowedFsi && allowedFsi != null ? allowedFsi * input.plotArea : null,
    maxGroundCoverage:
      hasAllowedCoverage && allowedCoveragePercent != null
        ? (allowedCoveragePercent / 100) * input.plotArea
        : null,
  }
}
