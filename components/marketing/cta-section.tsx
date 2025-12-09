"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
                    Don't wait to transform your real estate business. Contact us today and take the first step towards digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <Button size="lg" className="bg-[#FFB800] hover:bg-[#E5A600] text-black font-bold rounded-full px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto text-sm sm:text-base" asChild>
                        <Link href="/contact#demo-form">Schedule Demo</Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/5 border-white/20 hover:bg-white/10 text-white text-sm sm:text-base font-semibold rounded-full px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        asChild
                    >
                        <Link href="/pricing">View Pricing</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
