"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { SeoFaqItem } from "@/types/seo-landing"

interface SeoFaqProps {
  items: SeoFaqItem[]
  heading?: string
  subhead?: string
}

function FaqColumn({
  columnItems,
  idOffset,
}: {
  columnItems: SeoFaqItem[]
  idOffset: number
}) {
  return (
    <Accordion
      type="multiple"
      className="rounded-2xl border border-slate-200 bg-white px-3 shadow-sm sm:px-5"
    >
      {columnItems.map((item, index) => {
        const value = `faq-${idOffset + index}`
        return (
          <AccordionItem key={item.question} value={value} className="border-slate-200">
            <AccordionTrigger className="py-3 text-left text-sm font-semibold sm:text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export function SeoFaq({
  items,
  heading = "Frequently asked questions",
  subhead = "Tap any question to expand. Answers stay on this page for search and reference.",
}: SeoFaqProps) {
  const splitAt = Math.ceil(items.length / 2)
  const leftColumn = items.slice(0, splitAt)
  const rightColumn = items.slice(splitAt)

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-14">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {heading}
        </h2>
        <p className="mb-8 text-center text-sm text-slate-600">{subhead}</p>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <FaqColumn columnItems={leftColumn} idOffset={0} />
          <FaqColumn columnItems={rightColumn} idOffset={splitAt} />
        </div>
      </div>
    </section>
  )
}
