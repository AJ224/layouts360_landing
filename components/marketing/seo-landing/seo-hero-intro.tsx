"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SeoHeroIntroProps {
  paragraphs: string[]
}

export function SeoHeroIntro({ paragraphs }: SeoHeroIntroProps) {
  const [expanded, setExpanded] = useState(false)

  if (paragraphs.length === 0) return null

  const [lead, ...rest] = paragraphs

  return (
    <div className="max-w-2xl">
      <p className="text-lg leading-relaxed text-slate-700">{lead}</p>
      {rest.length > 0 && (
        <>
          <div
            className={cn(
              "mt-4 space-y-3 border-l-2 border-teal-200 pl-4 md:hidden",
              !expanded && "hidden",
            )}
          >
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-base leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:text-teal-900 md:hidden"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : `Read ${rest.length} more`}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
            />
          </button>
          <div className="mt-4 hidden space-y-3 border-l-2 border-teal-200 pl-4 md:block">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-base leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
