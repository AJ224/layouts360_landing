import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist. Browse Layouts360 solutions, blog, or contact us for a demo.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header theme="light" />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-slate-400">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1E3B] sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base text-slate-500">
          The link may be outdated. Try one of these pages instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/solutions">Solutions</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
