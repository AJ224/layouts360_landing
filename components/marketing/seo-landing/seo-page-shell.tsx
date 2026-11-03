import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"

interface SeoPageShellProps {
  children: React.ReactNode
  /**
   * `immersive` — page owns the header (e.g. dark full-bleed hero).
   * Avoids a white header band above a dark stage.
   */
  variant?: "default" | "immersive"
}

export function SeoPageShell({ children, variant = "default" }: SeoPageShellProps) {
  if (variant === "immersive") {
    return (
      <>
        {children}
        <Footer />
      </>
    )
  }

  return (
    <>
      <div className="relative bg-white">
        <Header theme="light" />
      </div>
      <div className="min-h-screen bg-white">{children}</div>
      <Footer />
    </>
  )
}
