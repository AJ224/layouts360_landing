import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/marketing/footer"
import Header from "@/components/marketing/header"
import CtaSection from "@/components/marketing/cta-section"
import { servicesConfig } from "@/lib/services-config"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
    return servicesConfig.map((service) => ({
        slug: service.id,
    }))
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
    const service = servicesConfig.find((s) => s.id === params.slug || s.href.endsWith(`/${params.slug}`))

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <Header theme="dark" />

            {/* Main Content */}
            <main className="flex-grow">
                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
                    <Link
                        href="/#features"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Features
                    </Link>

                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
                        {/* Image - Show first on mobile */}
                        <div className="relative w-full lg:w-[504px] lg:h-[331px] aspect-[504/331] rounded-xl sm:rounded-2xl overflow-hidden order-1 lg:order-2">
                            {service.image ? (
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={504}
                                    height={331}
                                    className="object-contain w-full h-full rounded-xl sm:rounded-2xl"
                                    priority
                                />
                            ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl`} />
                            )}
                        </div>

                        {/* Content */}
                        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 w-full">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {service.title}
                            </h1>

                            <div className="space-y-4 sm:space-y-6">
                                <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                                    {service.longDescription || service.description}
                                </p>

                                {service.benefits && (
                                    <div className="space-y-3 sm:space-y-4">
                                        <h3 className="text-base sm:text-lg font-semibold text-white">Key Advantages</h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {service.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="pt-2 sm:pt-4">
                                <Button asChild size="lg" className="bg-[#FFB800] hover:bg-[#E5A600] text-black font-bold rounded-full px-6 sm:px-8 w-full sm:w-auto">
                                    <Link href="/contact">
                                        Contact Sales
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <CtaSection />
            <Footer />
        </div>
    )
}
