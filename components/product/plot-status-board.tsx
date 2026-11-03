"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Status = "available" | "hold" | "booked" | "sold"

const CYCLE: Status[] = ["available", "hold", "booked", "sold"]

const LABELS: Record<Status, string> = {
  available: "Available",
  hold: "Hold",
  booked: "Booked",
  sold: "Sold",
}

const FILL: Record<Status, string> = {
  available: "bg-available",
  hold: "bg-freezed",
  booked: "bg-booked",
  sold: "bg-sold",
}

/** Seeded mini layout — click a plot to cycle status (product-performs live thing). */
const PLOTS: { id: string; col: number; row: number; w: number; h: number; status: Status }[] = [
  { id: "A-12", col: 1, row: 1, w: 2, h: 2, status: "available" },
  { id: "A-13", col: 3, row: 1, w: 2, h: 2, status: "hold" },
  { id: "A-14", col: 5, row: 1, w: 2, h: 2, status: "available" },
  { id: "B-21", col: 1, row: 3, w: 3, h: 2, status: "booked" },
  { id: "B-22", col: 4, row: 3, w: 3, h: 2, status: "available" },
  { id: "C-31", col: 1, row: 5, w: 2, h: 2, status: "sold" },
  { id: "C-32", col: 3, row: 5, w: 2, h: 2, status: "available" },
  { id: "C-33", col: 5, row: 5, w: 2, h: 2, status: "hold" },
]

type PlotStatusBoardProps = {
  className?: string
  compact?: boolean
}

export function PlotStatusBoard({ className, compact }: PlotStatusBoardProps) {
  const [plots, setPlots] = useState(PLOTS)
  const [selected, setSelected] = useState(PLOTS[0].id)
  const active = plots.find((p) => p.id === selected) ?? plots[0]

  function cycle(id: string) {
    setSelected(id)
    setPlots((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p
        const i = CYCLE.indexOf(p.status)
        return { ...p, status: CYCLE[(i + 1) % CYCLE.length] }
      }),
    )
  }

  return (
    <div
      data-ui
      className={cn(
        /* taste-skill-ignore: hairline — product fragment chrome (data-ui) */
        "flex flex-col overflow-hidden rounded-[4px] border border-line bg-white text-[13px] text-ink",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-line px-3 py-2"> {/* taste-skill-ignore */}
        <span className="font-semibold">Layout · Phase 2</span>
        <span className="text-subtle">Click a plot</span>
      </div>
      <div className={cn("grid grid-cols-6 gap-1.5 bg-ground p-3", compact ? "min-h-[180px]" : "min-h-[240px]")}>
        {plots.map((plot) => (
          <button
            key={plot.id}
            type="button"
            onClick={() => cycle(plot.id)}
            aria-label={`${plot.id}, ${LABELS[plot.status]}. Activate to change status.`}
            aria-pressed={selected === plot.id}
            className={cn(
              FILL[plot.status],
              "rounded-[2px] text-[11px] font-semibold text-white transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              selected === plot.id ? "ring-2 ring-ink ring-offset-1 ring-offset-ground" : "opacity-90 hover:opacity-100",
            )}
            style={{
              gridColumn: `${plot.col} / span ${plot.w}`,
              gridRow: `${plot.row} / span ${plot.h}`,
            }}
          >
            {plot.id}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-line px-3 py-2.5"> {/* taste-skill-ignore */}
        <div>
          <p className="font-semibold">{active.id}</p>
          <p className="text-subtle">{LABELS[active.status]}</p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-hidden>
          {CYCLE.map((s) => (
            <li key={s} className="inline-flex items-center gap-1 text-[11px] text-subtle">
              <span className={cn("h-2 w-2 rounded-[1px]", FILL[s])} />
              {LABELS[s]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
