import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Building2, Store, MapPin } from "lucide-react";
import Header from "@/components/marketing/header";
import Footer from "@/components/marketing/footer";

import { PAGE_KEYWORDS } from "@/lib/seo-keywords";
import { absoluteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
    title: "Commercial Real Estate Software | Plot & Shop Sales | Layouts360",
    description:
        "Commercial real estate software for selling shops, office plots, and commercial layouts in India. Digital maps, live inventory, and sales CRM in one platform.",
    keywords: [...PAGE_KEYWORDS.commercial],
    alternates: {
        canonical: absoluteUrl("/commercial-real-estate-software"),
    },
    openGraph: {
        title: "Commercial Real Estate Software | Layouts360",
        description:
            "Manage and sell commercial plots, shops, and office spaces with digital layouts and real-time inventory tracking.",
        type: "website",
        url: absoluteUrl("/commercial-real-estate-software"),
    },
};

export default function CommercialRealEstateSoftwarePage() {
    return (
        <>
            {/* Header */}
            <div className="relative bg-white">
                <Header theme="light" />
            </div>

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8 pb-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Commercial Plot Management Software for Developers
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                Sell commercial plots, shops, and office spaces faster with digital layouts.
                                <strong> Commercial plot management software</strong> that helps you showcase and sell
                                commercial properties without Excel or paper maps.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" className="text-lg px-8 py-6">
                                        Get Free Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/pricing">
                                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                        View Pricing
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Commercial Plot Management Software */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What is Commercial Plot Management Software?
                            </h2>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Commercial plot management software is a specialized platform for developers selling
                                commercial properties—shops, office spaces, commercial plots, and mixed-use developments.
                                Just like residential plot management, but designed for commercial inventory with:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
                                <li>Digital floor plans for malls, markets, and commercial complexes</li>
                                <li>Unit-level tracking (shop numbers, office spaces, commercial plots)</li>
                                <li>Square footage and pricing per sq. ft.</li>
                                <li>Real-time availability status (Available, Frozen, Booked, Sold)</li>
                                <li>Customer tracking and booking management</li>
                                <li>Payment tracking for commercial property sales</li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Layouts360 helps you showcase commercial properties on tablets or screens, allowing
                                your sales team to show customers exactly which shop or office space is available—
                                without carrying printed floor plans or Excel sheets.
                            </p>
                            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                                <p className="text-gray-700">
                                    <strong>Managing both residential and commercial?</strong> Our{" "}
                                    <Link href="/real-estate-inventory-management-software" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                                        real estate inventory management software
                                    </Link>
                                    {" "}handles plots, flats, and commercial units in one unified system.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Commercial Properties */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Types of Commercial Properties You Can Manage
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Store className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Retail Shops & Showrooms</h3>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        Manage shop inventory in malls, markets, or commercial complexes. Show customers
                                        which shops are available, their size, and location on the floor plan.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li>Shop-by-shop digital floor plans</li>
                                        <li>Square footage and pricing display</li>
                                        <li>Corner shop vs. inner shop differentiation</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                            <Building2 className="h-6 w-6 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Office Spaces</h3>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        Sell office units in IT parks, business centers, or commercial towers. Track
                                        floor-wise availability and show customers the exact unit location.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li>Floor-wise unit mapping</li>
                                        <li>Built-up area vs. carpet area tracking</li>
                                        <li>Parking allocation per unit</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <MapPin className="h-6 w-6 text-purple-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Commercial Plots</h3>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        Sell commercial land parcels for businesses, petrol pumps, restaurants, or
                                        mixed-use developments with satellite-overlaid layouts.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li>Plot-level inventory management</li>
                                        <li>Road-facing vs. internal plot differentiation</li>
                                        <li>Zoning and usage information</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-yellow-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Mixed-Use Developments</h3>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        Manage projects with both residential and commercial components. Track different
                                        unit types in one platform.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li>Separate pricing for residential vs. commercial</li>
                                        <li>Multi-phase project management</li>
                                        <li>Unified customer and payment tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Commercial Plot Management Features
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Floor Plans</h3>
                                    <p className="text-gray-700">
                                        Upload floor plans for malls, office buildings, or commercial complexes. Show
                                        unit availability visually on tablets or screens.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Unit Inventory Tracking</h3>
                                    <p className="text-gray-700">
                                        Track each shop, office, or commercial plot with unit number, square footage,
                                        pricing, and real-time availability status.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Pricing</h3>
                                    <p className="text-gray-700">
                                        Set pricing per sq. ft., per unit, or custom pricing. Track corner shops,
                                        road-facing units, and premium locations separately.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-yellow-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Management</h3>
                                    <p className="text-gray-700">
                                        Record bookings with customer details, booking amount, and payment schedules.
                                        Unit status updates automatically.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Tracking</h3>
                                    <p className="text-gray-700">
                                        Track which customers are interested in which units. Manage follow-ups and
                                        site visit schedules.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-indigo-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
                                    <p className="text-gray-700">
                                        Sales teams can showcase commercial properties on tablets or phones. No need
                                        for printed floor plans or Excel sheets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commercial vs Residential */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Commercial vs. Residential Plot Management
                            </h2>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                                <p className="text-gray-700 text-lg">
                                    <strong>Good news:</strong> Layouts360 works the same way for both! The core features
                                    (digital layouts, inventory tracking, booking management) are identical. The only
                                    differences are in pricing structure and unit types.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border-2 border-blue-200 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential Plots</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Priced per sq. yard or per plot</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Satellite map overlay</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Phase-wise layouts</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Amenities and nearby places</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-2 border-green-200 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Properties</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Priced per sq. ft. or per unit</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Floor plan layouts</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Floor-wise or block-wise organization</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Location premium (corner, road-facing)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-6">
                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can Layouts360 handle both commercial and residential projects?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! You can manage residential plots, commercial units, and mixed-use developments
                                        all within the same account. Each project can have its own pricing and layout structure.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        How do I show commercial floor plans to customers?
                                    </h3>
                                    <p className="text-gray-700">
                                        Upload your floor plan (CAD/PDF/image), and we'll digitize it. Your sales team can
                                        then show it on tablets or screens, with each unit clickable to see details like
                                        size, price, and availability.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can I set different prices for corner shops vs. inner shops?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! You can set custom pricing for each unit. Corner shops, road-facing units,
                                        or premium locations can have different prices per sq. ft.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Is Layouts360 suitable for large commercial complexes like malls?
                                    </h3>
                                    <p className="text-gray-700">
                                        Absolutely. Layouts360 can handle hundreds of units across multiple floors. Upload
                                        floor plans for each level and manage shop-by-shop inventory.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Does Layouts360 handle lease or rental management?
                                    </h3>
                                    <p className="text-gray-700">
                                        No. Layouts360 is focused on helping you <strong>sell</strong> commercial properties,
                                        not manage rentals or leases. We track bookings and sales, not monthly rent collection.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        How long does it take to set up a commercial project?
                                    </h3>
                                    <p className="text-gray-700">
                                        Typically 3-5 days. You provide your floor plans and unit data, and we'll digitize
                                        it, configure pricing, and set up the system. Much faster than building custom software!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Sell Commercial Properties Faster?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Showcase shops, offices, and commercial plots with digital floor plans. See how
                                Layouts360 helps you close commercial deals faster.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                                        Schedule Free Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/pricing">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600"
                                    >
                                        View Pricing Plans
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
