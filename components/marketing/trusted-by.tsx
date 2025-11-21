"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"

const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Spotify",
    "Netflix",
    "Adobe",
    "Salesforce",
    "Slack",
    "Uber",
    "Airbnb",
]

export default function TrustedBy() {
    return (
        <section className="w-full pt-40 md:pt-60 pb-12 bg-black border-b border-white/10">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                    Trusted by industry leaders
                </p>
            </div>

            <Marquee gradient={false} speed={40} className="py-4">
                {companies.map((company, i) => (
                    <div key={i} className="mx-8 md:mx-16 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-2xl font-bold text-white/80">{company}</span>
                    </div>
                ))}
            </Marquee>
        </section>
    )
}
