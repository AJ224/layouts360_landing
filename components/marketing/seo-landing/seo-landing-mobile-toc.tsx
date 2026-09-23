"use client"

import { useState } from "react"
import { List } from "lucide-react"
import type { LandingHeading } from "@/lib/landing-display"
import { cn } from "@/lib/utils"

interface SeoLandingMobileTocProps {
  headings: LandingHeading[]
}

export function SeoLandingMobileToc({ headings }: SeoLandingMobileTocProps) {
  const [open, setOpen] = useState(false)

  if (headings.length === 0) return null

  return (
    <div className="mb-6 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2">
          <List className="h-4 w-4 text-teal-600" aria-hidden />
          Jump to section
        </span>
        <span className="text-slate-500">{open ? "Hide" : "Show"}</span>
      </button>
      <nav
        className={cn(
          "mt-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm",
          !open && "hidden",
        )}
        aria-label="On this page"
      >
        <ul className="max-h-48 space-y-0.5 overflow-y-auto text-sm">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-slate-600 hover:bg-teal-50 hover:text-teal-900"
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
