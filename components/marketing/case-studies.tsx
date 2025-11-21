"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const cases = [
    {
        title: "Smart City Integration",
        category: "IoT & Analytics",
        image: "/placeholder-user.jpg", // Using placeholder for now
        description: "Managed 500+ units with integrated IoT sensors for energy management and security using our centralized dashboard.",
        href: "/work/smart-city",
    },
    {
        title: "Luxury Villa Sales",
        category: "Booking Platform",
        image: "/placeholder-user.jpg",
        description: "Streamlined bookings for a premium villa complex with virtual tours, seamless payments, and concierge services.",
        href: "/work/luxury-villa",
    },
    {
        title: "Commercial Portfolio",
        category: "PropTech SaaS",
        image: "/placeholder-user.jpg",
        description: "Automated lease management for 1M+ sqft of commercial space, ensuring compliance and timely payments.",
        href: "/work/lease-manager",
    },
]

export default function CaseStudies() {
    return (
        <section className="py-24 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-medium mb-6">Success Stories</h2>
                        <p className="text-gray-400 text-lg">
                            See how leading developers use IdeatoLive to transform their business.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="hidden md:flex border-white/20 hover:bg-white/10 text-white"
                        asChild
                    >
                        <Link href="/work">
                            View All Projects
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group block space-y-4"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-800">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-medium group-hover:text-[#FFB800] transition-colors flex items-center gap-2">
                                    {item.title}
                                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </h3>
                                <p className="text-gray-400 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Button
                        variant="outline"
                        className="w-full border-white/20 hover:bg-white/10 text-white"
                        asChild
                    >
                        <Link href="/work">
                            View All Projects
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
