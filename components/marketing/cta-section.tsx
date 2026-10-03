"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection({ compact }: { compact?: boolean }) {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
                {compact ? (
                    <>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Book your free demo</h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
                            We’ll open a live map of your project and confirm the right package for your real estate company, quickly.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <Button
                                size="lg"
                                className="bg-[#FFB800] hover:bg-[#E5A600] text-black font-bold rounded-full px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto text-sm sm:text-base"
                                asChild
                            >
                                <Link href="/contact#demo-form">Schedule demo</Link>
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">See your layout live</h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
                            Book a free demo for your real estate company. We’ll walk your project map, show freeze and booking on live inventory, and map the right setup for your projects.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <Button size="lg" className="bg-[#FFB800] hover:bg-[#E5A600] text-black font-bold rounded-full px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto text-sm sm:text-base" asChild>
                                <Link href="/contact#demo-form">Book a free demo</Link>
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
