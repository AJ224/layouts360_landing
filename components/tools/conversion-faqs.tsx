"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LAND_CONVERTER_FAQS } from "@/lib/tools"

export function ConversionFaqs() {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
        Common conversions
      </h2>
      <Accordion type="multiple" className="rounded-2xl border border-slate-200 bg-white px-4 sm:px-5">
        {LAND_CONVERTER_FAQS.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger className="py-3 text-left text-sm font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
