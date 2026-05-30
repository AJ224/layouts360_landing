import { cn } from "@/lib/utils"

interface SeoSectionProps {
  title: string
  children: React.ReactNode
  className?: string
  muted?: boolean
}

export function SeoSection({ title, children, className, muted = false }: SeoSectionProps) {
  return (
    <section className={cn("py-16", muted ? "bg-gray-50" : "bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  )
}
