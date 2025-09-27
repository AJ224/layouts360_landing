import Image from "next/image"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote: "We moved our entire booking workflow online. Our team saves hours every week.",
    author: "Kavya R.",
    role: "Sales Lead, UrbanScape",
  },
  {
    quote: "Customers love exploring plots on their own. Transparency builds trust.",
    author: "Arun M.",
    role: "Director, Greenfield Estates",
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Trusted by modern developers</h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Teams delivering layouts faster and more transparently.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <Card key={t.author} className="p-6">
            <blockquote className="text-pretty text-base leading-relaxed">“{t.quote}”</blockquote>
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{t.author}</span> — {t.role}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-10 opacity-80">
        <Logo alt="Client 1" />
        <Logo alt="Client 2" />
        <Logo alt="Client 3" />
        <Logo alt="Client 4" />
      </div>
    </section>
  )
}

function Logo({ alt }: { alt: string }) {
  return (
    <Image src="/placeholder-logo.svg" alt={alt} width={120} height={28} className="h-7 w-[120px] object-contain" />
  )
}
