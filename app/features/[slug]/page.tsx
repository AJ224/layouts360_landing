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
                <div className="container mx-auto px-4 md:px-6 py-20">
                    <Link
                        href="/#features"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Features
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                {service.title}
                            </h1>

                            <div className="space-y-6">
                                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                                    {service.longDescription || service.description}
                                </p>

                                {service.benefits && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-white">Key Advantages</h3>
                                        <ul className="space-y-3">
                                            {service.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start gap-3 text-gray-300">
                                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4">
                                <Button asChild size="lg" className="bg-[#FFB800] hover:bg-[#E5A600] text-black font-bold rounded-full px-8">
                                    <Link href="/contact">
                                        Contact Sales
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative w-[504px] h-[331px] rounded-2xl overflow-hidden">
                            {service.image ? (
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={504}
                                    height={331}
                                    className="object-cover w-full h-full"
                                    priority
                                />
                            ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${service.color}`} />
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <CtaSection />
            <Footer />
        </div>
    )
}
