import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Play } from "lucide-react";
import Header from "@/components/marketing/header";
import Footer from "@/components/marketing/footer";

export const metadata: Metadata = {
    title: "Real Estate Plot Management Software | Layouts360",
    description:
        "Layouts360 is a real estate plot management software designed for builders, developers, and real estate companies to manage plots, inventory, bookings, payments, and digital layouts in one place.",
    keywords: [
        "real estate plot management software",
        "plot management system",
        "digital layout software",
        "real estate inventory software",
        "plot booking software",
        "real estate ERP",
        "plot management software for builders",
        "plot management software in India",
    ],
    openGraph: {
        title: "Real Estate Plot Management Software | Layouts360",
        description:
            "Complete plot management solution for builders and developers. Manage inventory, bookings, payments, and digital layouts in one platform.",
        type: "website",
        url: "https://layouts360.com/real-estate-plot-management-software",
    },
};

export default function RealEstatePlotManagementSoftwarePage() {
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
                                Real Estate Plot Management Software for Developers & Builders
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                Layouts360 is a <strong>real estate plot management software</strong> designed for
                                builders, developers, and real estate companies to manage plots,
                                inventory, bookings, payments, and digital layouts in one place.
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

                {/* What is Real Estate Plot Management Software */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What is Real Estate Plot Management Software?
                            </h2>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Real estate plot management software is a specialized digital platform that helps
                                builders, developers, and real estate companies manage their plot inventory,
                                track bookings, process payments, and visualize layouts—all from a single system.
                            </p>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Unlike generic CRM or spreadsheet-based tracking, a dedicated{" "}
                                <strong>plot management system</strong> understands the unique needs of land
                                developers: plot numbers, phases, dimensions, availability status, and real-time
                                synchronization across sales teams.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Layouts360 goes beyond basic inventory tracking by offering interactive digital
                                layouts overlaid on satellite imagery, making it easier to showcase and sell plots
                                to customers on-site or remotely.
                            </p>
                            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                                <p className="text-gray-700">
                                    <strong>Managing multiple property types?</strong> Check out our comprehensive{" "}
                                    <Link href="/real-estate-inventory-management-software" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                                        real estate inventory management software
                                    </Link>
                                    {" "}that handles plots, flats, and commercial units in one platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems with Excel & Manual Tracking */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                The Problems with Excel & Manual Tracking
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Double Bookings</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Multiple sales agents working with different Excel files lead to the same plot
                                        being sold twice—a costly mistake.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">No Real-Time Updates</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        When a plot is booked, the information doesn't sync instantly. Teams work with
                                        outdated data, causing confusion and lost sales.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Poor Customer Experience</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Showing static PDF maps on a phone doesn't impress buyers. They can't zoom,
                                        explore, or visualize the actual location.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Manual Payment Tracking</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Tracking partial payments, due dates, and outstanding balances in spreadsheets
                                        is error-prone and time-consuming.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Version Control Chaos</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        "Final_Layout_v3_FINAL_USE_THIS.xlsx" — which version is correct? Excel files
                                        multiply and create confusion.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">No Analytics or Insights</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        You can't easily see which plots sell fastest, which agents perform best, or
                                        what your inventory turnover rate is.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How Layouts360 Solves This */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                How Layouts360 Solves This
                            </h2>
                            <p className="text-lg text-gray-700 mb-8">
                                Layouts360 is purpose-built for plot developers. It replaces Excel chaos with a
                                modern, cloud-based <strong>real estate inventory software</strong> that your entire
                                team can access from anywhere.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Single Source of Truth
                                        </h3>
                                        <p className="text-gray-700">
                                            All plot data lives in one centralized database. When a plot is booked, every
                                            device updates instantly. No more double bookings.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Interactive Digital Layouts
                                        </h3>
                                        <p className="text-gray-700">
                                            Convert your CAD/PDF maps into beautiful, zoomable layouts overlaid on Google
                                            Satellite imagery. Customers can see exactly where their plot is located.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Real-Time Availability Status
                                        </h3>
                                        <p className="text-gray-700">
                                            Plots are color-coded: Green (Available), Orange (Booked), Red (Sold). Your
                                            sales team always knows what's available.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Built-In CRM & Lead Management
                                        </h3>
                                        <p className="text-gray-700">
                                            Track leads, follow-ups, and customer interactions. Know which agent is
                                            handling which customer and which plot they're interested in.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Payment & Booking Management
                                        </h3>
                                        <p className="text-gray-700">
                                            Record booking amounts, track partial payments, set due dates, and generate
                                            payment schedules—all within the system.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Mobile-First Design
                                        </h3>
                                        <p className="text-gray-700">
                                            Field agents can showcase layouts and close deals on-site using tablets or
                                            phones. No need to carry printed maps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Complete Plot Management Features
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
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Layouts</h3>
                                    <p className="text-gray-700">
                                        Interactive maps with satellite overlay, zoom, pan, and plot-level details.
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
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Plot Inventory Management
                                    </h3>
                                    <p className="text-gray-700">
                                        Centralized database with real-time status updates across all devices.
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
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Booking & Allotment
                                    </h3>
                                    <p className="text-gray-700">
                                        Instant plot booking with customer details, timestamps, and agent tracking.
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
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Tracking</h3>
                                    <p className="text-gray-700">
                                        Manage booking amounts, installments, due dates, and outstanding balances.
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
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Team Dashboard</h3>
                                    <p className="text-gray-700">
                                        Track agent performance, lead conversion rates, and sales velocity.
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
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Device Access</h3>
                                    <p className="text-gray-700">
                                        Works seamlessly on desktop, tablet, and mobile—perfect for field sales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Should Use Layouts360 */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Who Should Use Layouts360?
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-colors">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Plot Developers</h3>
                                    <p className="text-gray-700">
                                        If you're developing open plots or land parcels and need to manage inventory,
                                        bookings, and sales teams efficiently.
                                    </p>
                                </div>

                                <div className="border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-colors">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Builders</h3>
                                    <p className="text-gray-700">
                                        Construction companies managing plotted developments, gated communities, or
                                        layout projects.
                                    </p>
                                </div>

                                <div className="border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-colors">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Estate Agencies</h3>
                                    <p className="text-gray-700">
                                        Agencies with exclusive mandates for layout sales who need professional tools to
                                        showcase and manage inventory.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison: Excel vs Layouts360 */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Excel vs Layouts360: The Real Comparison
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-xl shadow-sm">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                                            <th className="text-center p-4 font-semibold text-red-600">
                                                Excel / Manual
                                            </th>
                                            <th className="text-center p-4 font-semibold text-green-600">Layouts360</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Real-Time Sync</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Prevent Double Bookings</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Interactive Visual Layouts</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Mobile Access for Field Agents</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Automated Payment Tracking</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Built-In CRM</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Sales Analytics & Reports</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Satellite Map Integration</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Unlimited Users</td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-gray-900">Monthly Cost</td>
                                            <td className="p-4 text-center text-gray-700">Free (but costly mistakes)</td>
                                            <td className="p-4 text-center text-gray-700">₹2,000 - ₹4,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-6">
                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        What is the difference between plot management software and a CRM?
                                    </h3>
                                    <p className="text-gray-700">
                                        A generic CRM tracks leads and customers but doesn't understand real estate
                                        inventory. Plot management software like Layouts360 is purpose-built for land
                                        developers—it manages plot-level data (dimensions, status, location), prevents
                                        double bookings, and provides visual layouts, which generic CRMs cannot do.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can Layouts360 handle multiple projects or layouts?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! You can manage multiple projects, phases, and layouts within a single
                                        account. Each layout can have its own inventory, pricing, and sales team.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        How long does it take to set up Layouts360?
                                    </h3>
                                    <p className="text-gray-700">
                                        Typically 3-5 days. You provide your CAD/PDF layout, and we digitize it, upload
                                        your plot data, and configure the system. You'll be live and ready to sell much
                                        faster than building custom software.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Is Layouts360 suitable for small developers with limited plots?
                                    </h3>
                                    <p className="text-gray-700">
                                        Absolutely. Our Sales Starter plan starts at ₹2,000/month and is perfect for
                                        developers with 50-200 plots. Even small projects benefit from professional
                                        presentation and real-time inventory management.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can I try Layouts360 before committing?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! We offer a free demo where we'll show you the platform with a sample layout.
                                        You can also request a trial setup with your actual project data.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        What if I'm already using Excel? Can I migrate to Layouts360?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes, we help you migrate. You can export your Excel data, and we'll import it
                                        into Layouts360. The transition is smooth, and you'll immediately benefit from
                                        real-time sync and visual layouts.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Does Layouts360 work offline?
                                    </h3>
                                    <p className="text-gray-700">
                                        Layouts360 is cloud-based and requires an internet connection for real-time sync.
                                        However, you can view cached layouts offline, and changes will sync once you're
                                        back online.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Is my data secure with Layouts360?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes. We use industry-standard encryption, secure cloud hosting, and regular
                                        backups. Your customer data, payment records, and plot information are protected.
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
                                Ready to Modernize Your Plot Management?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Join hundreds of developers who've replaced Excel with Layouts360. Get a free demo
                                and see how we can transform your sales process.
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
