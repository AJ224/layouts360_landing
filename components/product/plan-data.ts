/**
 * Sample layout for the interactive demo. Geometry is generated deterministically so the
 * server and client render the same plan. Vocabulary mirrors the product: statuses are
 * Available / Freezed / Booked / Sold; plots carry area, facing and dimensions.
 */
export type PlotStatus = "available" | "freezed" | "booked" | "sold"

export type Plot = {
  id: number
  x: number
  y: number
  w: number
  h: number
  status: PlotStatus
  areaSqFt: number
  facing: "East" | "West" | "North" | "South"
  dims: string
  size: "36×25" | "40×30" | "30×50"
}

export type PlanGeometry = {
  width: number
  height: number
  plots: Plot[]
  roads: { x: number; y: number; w: number; h: number }[]
  garden: { x: number; y: number; w: number; h: number; label: string }
  boundary: string
}

export const STATUS_LABEL: Record<PlotStatus, string> = {
  available: "Available",
  freezed: "Freezed",
  booked: "Booked",
  sold: "Sold",
}

const STATUS_PATTERN: PlotStatus[] = [
  "available", "available", "sold", "available", "freezed", "available", "available", "booked",
  "available", "available", "available", "freezed", "sold", "available", "booked", "available",
  "available", "freezed", "available", "available", "booked", "available", "sold", "available",
  "available", "available", "freezed", "available", "available", "booked", "available", "available",
  "sold", "available", "available", "freezed", "available", "booked", "available", "available",
  "available", "available", "sold", "available", "freezed", "available", "booked", "available",
]

export function buildPlan(): PlanGeometry {
  const width = 760
  const height = 500
  const road = 26
  const plots: Plot[] = []
  const roads: PlanGeometry["roads"] = []
  let id = 1

  // Perimeter road
  const pad = 18
  roads.push({ x: pad, y: pad, w: width - pad * 2, h: road }) // top
  roads.push({ x: pad, y: height - pad - road, w: width - pad * 2, h: road }) // bottom
  roads.push({ x: pad, y: pad, w: road, h: height - pad * 2 }) // left
  roads.push({ x: width - pad - road, y: pad, w: road, h: height - pad * 2 }) // right

  const innerX = pad + road
  const innerY = pad + road
  const innerW = width - (pad + road) * 2
  const innerH = height - (pad + road) * 2

  // Vertical road splitting into left block (wide) and right block (narrow)
  const splitX = innerX + Math.round(innerW * 0.62)
  roads.push({ x: splitX, y: innerY, w: road, h: innerH })
  // Horizontal road through the left block
  const midY = innerY + Math.round(innerH * 0.5)
  roads.push({ x: innerX, y: midY - road / 2, w: splitX - innerX, h: road })

  const push = (x: number, y: number, w: number, h: number, size: Plot["size"], facing: Plot["facing"]) => {
    const status = STATUS_PATTERN[(id - 1) % STATUS_PATTERN.length]
    const area = size === "36×25" ? 900 : size === "40×30" ? 1200 : 1500
    const dims = size === "36×25" ? "36 ft × 25 ft" : size === "40×30" ? "40 ft × 30 ft" : "30 ft × 50 ft"
    plots.push({ id: id++, x, y, w, h, status, areaSqFt: area, facing, dims, size })
  }

  // Left block, upper half: two rows back to back
  {
    const bx = innerX
    const by = innerY
    const bw = splitX - innerX
    const bh = midY - road / 2 - innerY
    const cols = 7
    const pw = bw / cols
    const ph = bh / 2
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < cols; c++) {
        push(bx + c * pw, by + r * ph, pw, ph, c % 3 === 2 ? "40×30" : "36×25", r === 0 ? "North" : "South")
      }
    }
  }
  // Left block, lower half: two rows
  {
    const bx = innerX
    const by = midY + road / 2
    const bw = splitX - innerX
    const bh = innerY + innerH - by
    const cols = 7
    const pw = bw / cols
    const ph = bh / 2
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < cols; c++) {
        push(bx + c * pw, by + r * ph, pw, ph, c % 4 === 1 ? "40×30" : "36×25", r === 0 ? "North" : "South")
      }
    }
  }
  // Right block: garden on top, then 3 rows of 3 plots (wider)
  const rbx = splitX + road
  const rbw = innerX + innerW - rbx
  const gardenH = Math.round(innerH * 0.3)
  const garden = { x: rbx, y: innerY, w: rbw, h: gardenH, label: "Garden" }
  {
    const by = innerY + gardenH
    const bh = innerY + innerH - by
    const cols = 3
    const rows = 3
    const pw = rbw / cols
    const ph = bh / rows
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        push(rbx + c * pw, by + r * ph, pw, ph, "30×50", c === 0 ? "West" : "East")
      }
    }
  }

  const boundary = `M${pad} ${pad} H${width - pad} V${height - pad} H${pad} Z`
  return { width, height, plots, roads, garden, boundary }
}

export const SAMPLE_ACTIVITY = [
  { who: "Rohan", what: "froze Plot 14 for a site visit", when: "just now" },
  { who: "Priya", what: "booked Plot 27 after a token payment", when: "4 min ago" },
  { who: "Partner · Shree Realty", what: "requested a booking on Plot 41", when: "11 min ago" },
  { who: "Rohan", what: "marked Plot 8 sold after registration", when: "32 min ago" },
  { who: "Anita", what: "scheduled a site visit for Plot 19", when: "1 hr ago" },
]
