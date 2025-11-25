import Hero from "@/components/marketing/hero"
import Stats from "@/components/marketing/stats"
// import CaseStudies from "@/components/marketing/case-studies"
// import Testimonials from "@/components/marketing/testimonials"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"

export default function Page() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      {/* <Stats /> */}
      {/* <CaseStudies />
      <Testimonials /> */}
      <CtaSection />
      <Footer />
    </main>
  )
}
