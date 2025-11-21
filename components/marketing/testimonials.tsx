"use client"

import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        quote: "IdeatoLive transformed our property management. The platform has reduced administrative time by 40% and delighted our tenants with its ease of use.",
        author: "Sarah Johnson",
        role: "Director of Operations",
        company: "EstatePrime Developers",
        image: "/placeholder-user.jpg",
    },
    {
        quote: "The best investment we've made for our sales team. The built-in CRM and automated lead scoring helped us close 2x more deals this quarter.",
        author: "Michael Chen",
        role: "VP of Sales",
        company: "Urban Heights Realty",
        image: "/placeholder-user.jpg",
    },
    {
        quote: "The platform is incredibly robust. Migrating our portfolio data was seamless and the analytics dashboard gives us insights we never had before.",
        author: "Emily Rodriguez",
        role: "Asset Manager",
        company: "Skyline Commercial",
        image: "/placeholder-user.jpg",
    },
]

export default function Testimonials() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">Client Testimonials</h2>
                    <p className="text-gray-400 text-lg">
                        Don't just take our word for it. Here's what industry leaders have to say about working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFB800]/30 transition-colors"
                        >
                            <div className="flex gap-1 text-[#FFB800] mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{item.author}</div>
                                    <div className="text-sm text-gray-500">{item.role}, {item.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
