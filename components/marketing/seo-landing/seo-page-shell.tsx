import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"

interface SeoPageShellProps {
  children: React.ReactNode
}

export function SeoPageShell({ children }: SeoPageShellProps) {
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
