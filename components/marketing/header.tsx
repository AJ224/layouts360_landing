import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const

type HeaderProps = {
  theme?: "light" | "dark"
}

export default function Header({ theme = "light" }: HeaderProps) {
  const isDark = theme === "dark"

  return (
    <header className="relative z-50 w-full pt-4 sm:pt-6 md:pt-8">
      <input id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 shadow-sm backdrop-blur-md sm:px-6 sm:py-3",
            isDark ? "border-white/10 bg-white/10 text-white" : "border-gray-200 bg-white/80 text-gray-900",
          )}
        >
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="Layouts360 logo"
              width={28}
              height={28}
              className="rounded-lg sm:h-8 sm:w-8"
              priority
            />
            <span className={cn("text-base font-semibold sm:text-lg", isDark ? "text-white" : "text-gray-900")}>
              Layouts360
            </span>
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8",
              isDark ? "text-gray-300" : "text-gray-700",
            )}
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[#FFB800]">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact#demo-form"
            className="hidden rounded-full bg-[#FFB800] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[#E5A600] md:inline-flex md:px-6 md:text-base"
          >
            Get Started
          </Link>

          <label
            htmlFor="mobile-nav-toggle"
            className={cn(
              "cursor-pointer p-1 md:hidden",
              isDark ? "text-white" : "text-gray-900",
            )}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </label>
        </div>
      </div>

      <label
        htmlFor="mobile-nav-toggle"
        className="fixed inset-0 z-[60] hidden cursor-pointer bg-black/60 backdrop-blur-sm peer-checked:block md:hidden"
        aria-label="Close menu"
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[80%] max-w-sm translate-x-full flex-col bg-white shadow-2xl transition-transform duration-300 peer-checked:translate-x-0 md:hidden",
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b p-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Layouts360 logo" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-semibold text-gray-900">Layouts360</span>
          </Link>
          <label htmlFor="mobile-nav-toggle" className="cursor-pointer rounded-full p-2 text-gray-500 hover:bg-gray-100" aria-label="Close menu">
            <X className="h-6 w-6" />
          </label>
        </div>

        <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6 text-lg font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#FFB800]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t bg-gray-50 p-6">
          <Link
            href="/contact#demo-form"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#FFB800] text-lg font-bold text-black transition-colors hover:bg-[#E5A600]"
          >
            Get Started
          </Link>
        </div>
      </aside>
    </header>
  )
}
