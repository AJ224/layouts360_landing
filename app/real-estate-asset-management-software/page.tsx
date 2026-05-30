import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import Header from "@/components/marketing/header";
import Footer from "@/components/marketing/footer";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";
import { absoluteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
    title: "Real Estate Asset Management Software | Layouts360",
    description:
        "Track 50 Crore+ in plot inventory with real estate asset management software. Manage plot-level P&L, ROI tracking, holding costs, and asset lifecycle for developers.",
    keywords: [...PAGE_KEYWORDS.asset],
    alternates: {
        canonical: absoluteUrl("/real-estate-asset-management-software"),
    },
    openGraph: {
        title: "Real Estate Asset Management Software | Layouts360",
        description:
            "Manage plot inventory as assets with P&L tracking, ROI analysis, and lifecycle management. Purpose-built for land developers.",
        type: "website",
        url: absoluteUrl("/real-estate-asset-management-software"),
    },
};

export default function RealEstateAssetManagementSoftwarePage() {
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
                                Real Estate Asset Management Software for Developers
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                Track 50 Crore+ in plot inventory with <strong>real estate asset management software</strong>.
                                Manage plot-level P&L, ROI tracking, holding costs, and asset lifecycle—all in one platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" className="text-lg px-8 py-6">
                                        Get Free Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                        Contact / Enquiry
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Real Estate Asset Management Software */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What is Real Estate Asset Management Software?
                            </h2>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Real estate asset management software is a specialized platform that treats each plot as a
                                financial asset with its own lifecycle, costs, revenue, and ROI. Unlike basic inventory systems
                                that only track "Available" or "Sold," asset management software helps you understand the
                                financial performance of every plot in your portfolio.
                            </p>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                For land developers managing multiple projects worth crores, this means tracking:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
                                <li>Acquisition cost per plot</li>
                                <li>Development and infrastructure costs</li>
                                <li>Holding costs (property tax, maintenance)</li>
                                <li>Sales price and profit margins</li>
                                <li>Time to sale and inventory turnover</li>
                                <li>ROI per plot, phase, and project</li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Layouts360 combines <strong>asset management</strong> with visual plot tracking, giving you
                                both financial insights and operational control in one system.
                            </p>
                            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                                <p className="text-gray-700">
                                    <strong>Need broader inventory management?</strong> Check out our{" "}
                                    <Link href="/real-estate-inventory-management-software" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                                        real estate inventory management software
                                    </Link>
                                    {" "}that handles plots, flats, and commercial units.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Asset Management vs Inventory Management */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                                Asset Management vs. Inventory Management
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                                Both are important, but they serve different purposes. Here's how they differ:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-xl shadow-sm">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left p-4 font-semibold text-gray-900">Aspect</th>
                                            <th className="text-center p-4 font-semibold text-blue-600">
                                                Inventory Management
                                            </th>
                                            <th className="text-center p-4 font-semibold text-green-600">Asset Management</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Primary Focus</td>
                                            <td className="p-4 text-center text-gray-700">Availability & Status</td>
                                            <td className="p-4 text-center text-gray-700">Financial Performance</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Key Question</td>
                                            <td className="p-4 text-center text-gray-700">"Is it available?"</td>
                                            <td className="p-4 text-center text-gray-700">"Is it profitable?"</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Tracks</td>
                                            <td className="p-4 text-center text-gray-700">Plot numbers, status, bookings</td>
                                            <td className="p-4 text-center text-gray-700">Costs, revenue, ROI, holding time</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Best For</td>
                                            <td className="p-4 text-center text-gray-700">Sales teams</td>
                                            <td className="p-4 text-center text-gray-700">Finance teams & owners</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-gray-900">Layouts360 Approach</td>
                                            <td className="p-4 text-center text-gray-700">✅ Included</td>
                                            <td className="p-4 text-center text-gray-700">✅ Included</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                                <p className="text-gray-700 text-lg">
                                    <strong>The Layouts360 Advantage:</strong> You don't have to choose. Our platform
                                    gives you both inventory tracking (for sales) and asset management (for finance)
                                    in one unified system.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Developers Need Asset Management */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Why Land Developers Need Asset Management
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                                        <DollarSign className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Track True Profitability Per Plot
                                        </h3>
                                        <p className="text-gray-700">
                                            You might sell a plot for 50 lakhs, but after acquisition cost, development,
                                            taxes, and holding costs, what's your actual profit? Asset management shows
                                            you the real numbers, not just the sale price.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <TrendingUp className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Optimize Pricing Strategy
                                        </h3>
                                        <p className="text-gray-700">
                                            Know which plots have been sitting unsold for 6+ months. Identify slow-moving
                                            inventory and adjust pricing or marketing strategies to improve turnover.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                                        <BarChart3 className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Make Data-Driven Decisions
                                        </h3>
                                        <p className="text-gray-700">
                                            Should you launch Phase 2 or focus on selling Phase 1? Asset-level data shows
                                            you which phases are most profitable, helping you allocate resources wisely.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Investor & Lender Reporting
                                        </h3>
                                        <p className="text-gray-700">
                                            Banks and investors want to see portfolio performance. Generate professional
                                            reports showing asset value, sales velocity, and projected returns.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Reduce Holding Costs
                                        </h3>
                                        <p className="text-gray-700">
                                            Every month a plot sits unsold, you're paying property tax, security, and
                                            maintenance. Asset management helps you identify and move slow inventory faster.
                                        </p>
                                    </div>
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
                                Asset Management Features in Layouts360
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <DollarSign className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Plot-Level P&L</h3>
                                    <p className="text-gray-700">
                                        Track acquisition cost, development expenses, and sale price for each plot.
                                        See profit margins instantly.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <TrendingUp className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Tracking</h3>
                                    <p className="text-gray-700">
                                        Calculate return on investment per plot, phase, and project. Identify your
                                        best-performing assets.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <BarChart3 className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Holding Cost Analysis</h3>
                                    <p className="text-gray-700">
                                        Track property tax, security, maintenance, and other costs that accumulate
                                        while plots remain unsold.
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
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Time-to-Sale Metrics</h3>
                                    <p className="text-gray-700">
                                        See how long each plot takes to sell. Identify patterns and optimize your
                                        sales strategy.
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
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Analytics</h3>
                                    <p className="text-gray-700">
                                        View total asset value, sold vs. unsold inventory, and overall portfolio
                                        performance across all projects.
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
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Reports</h3>
                                    <p className="text-gray-700">
                                        Generate professional reports for investors, lenders, and internal review.
                                        Export to Excel or PDF.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How Layouts360 Works */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                How Layouts360 Handles Asset Management
                            </h2>

                            <div className="space-y-8">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Input Costs</h3>
                                    <p className="text-gray-700 mb-2">
                                        When you set up a project, you enter:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>Land acquisition cost (total or per plot)</li>
                                        <li>Development costs (roads, electricity, water)</li>
                                        <li>Approval and legal fees</li>
                                        <li>Marketing and sales expenses</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">2. Track Sales</h3>
                                    <p className="text-gray-700">
                                        When a plot is sold, Layouts360 automatically calculates profit by subtracting
                                        allocated costs from the sale price. You see real-time P&L for each transaction.
                                    </p>
                                </div>

                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Monitor Holding Costs</h3>
                                    <p className="text-gray-700">
                                        Record ongoing expenses like property tax, security, and maintenance. The system
                                        tracks how much each unsold plot is costing you per month.
                                    </p>
                                </div>

                                <div className="border-l-4 border-yellow-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">4. Analyze Performance</h3>
                                    <p className="text-gray-700">
                                        View dashboards showing ROI, profit margins, sales velocity, and asset turnover.
                                        Compare performance across phases and projects.
                                    </p>
                                </div>

                                <div className="border-l-4 border-red-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">5. Generate Reports</h3>
                                    <p className="text-gray-700">
                                        Export financial reports for stakeholders. Show investors your portfolio's
                                        performance with professional, data-backed presentations.
                                    </p>
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
                                        Is asset management only for large developers?
                                    </h3>
                                    <p className="text-gray-700">
                                        No. Even if you have 50 plots worth 5 crores, knowing your true profit per plot
                                        is critical. Asset management helps developers of all sizes make smarter financial
                                        decisions.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can I use Layouts360 just for asset management without the CRM?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! Our Sales Starter plan includes digital layouts and asset tracking. You can
                                        upgrade to Growth Suite later if you need CRM and lead management features.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        How do I allocate costs across multiple plots?
                                    </h3>
                                    <p className="text-gray-700">
                                        Layouts360 lets you allocate costs proportionally (by area, by plot count, or
                                        custom allocation). For example, if you spent 1 crore on roads, it can split
                                        that across all plots automatically.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Does Layouts360 integrate with accounting software like Tally?
                                    </h3>
                                    <p className="text-gray-700">
                                        Currently, Layouts360 provides financial reports that you can export to Excel and
                                        import into Tally or QuickBooks. Direct integration is on our roadmap.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can I track different cost categories for different phases?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes. Each phase can have its own cost structure. This is useful if Phase 1 required
                                        more infrastructure investment than Phase 2.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        What reports can I generate for investors?
                                    </h3>
                                    <p className="text-gray-700">
                                        You can generate portfolio summary reports, ROI analysis, sales velocity reports,
                                        and profit margin breakdowns. All reports are exportable to PDF or Excel.
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
                                Start Managing Your Plots as Assets
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                See the true profitability of your portfolio. Get real-time ROI tracking, cost analysis,
                                and financial reports—all in one platform.
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
