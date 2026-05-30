import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Users, MessageSquare, Target } from "lucide-react";
import Header from "@/components/marketing/header";
import Footer from "@/components/marketing/footer";

import { PAGE_KEYWORDS } from "@/lib/seo-keywords";
import { absoluteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
    title: "Real Estate CRM Software & Client Management | Layouts360",
    description:
        "Real estate CRM software and client management for plot developers—from lead to deed. Plot-specific leads, follow-ups, bookings, and buyer lifecycle in one system.",
    keywords: [...PAGE_KEYWORDS.client],
    alternates: {
        canonical: absoluteUrl("/real-estate-client-management-software"),
    },
    openGraph: {
        title: "Real Estate Client Management Software | Layouts360",
        description:
            "Manage leads, follow-ups, and customer relationships tied to specific plots. Purpose-built CRM for real estate developers.",
        type: "website",
        url: absoluteUrl("/real-estate-client-management-software"),
    },
};

export default function RealEstateClientManagementSoftwarePage() {
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
                                Real Estate Client Management Software for Developers
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                From lead to deed: manage buyers without losing track. <strong>Real estate client management software</strong> that
                                connects leads to specific plots, tracks follow-ups, and manages the entire customer lifecycle.
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

                {/* What is Real Estate Client Management Software */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What is Real Estate Client Management Software?
                            </h2>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Real estate client management software (also called a real estate CRM) is a specialized system
                                designed to manage customer relationships throughout the property buying journey. Unlike generic
                                CRMs like HubSpot or Zoho, real estate client management software understands the unique sales
                                cycle of plot and property developers:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
                                <li>Lead capture from multiple sources (99acres, MagicBricks, walk-ins, referrals)</li>
                                <li>Plot-specific interest tracking (which plot is the customer interested in?)</li>
                                <li>Follow-up scheduling and reminders</li>
                                <li>Site visit coordination</li>
                                <li>Booking and payment tracking</li>
                                <li>Post-sale communication and handover</li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Layouts360 combines client management with plot inventory, giving you a complete view of
                                <strong> who's interested in what</strong>, which agent is handling them, and where they are
                                in the sales pipeline.
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

                {/* Problems with Generic CRMs */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Why Generic CRMs Fail for Real Estate
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">No Inventory Context</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        HubSpot doesn't know "Plot 42, Phase 1" exists. You can't link leads to specific
                                        plots or see which plots are generating the most interest.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Disconnected from Sales</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        When a plot is booked, you have to manually update the CRM AND the inventory
                                        system. Double work, double the chance of errors.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">No Visual Context</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        You can't show a customer the layout while logging their interest. Generic CRMs
                                        don't integrate with maps or floor plans.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Complex Setup</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Setting up Salesforce or Zoho for real estate requires custom fields, workflows,
                                        and integrations. It takes weeks and costs thousands.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">No Site Visit Tracking</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Real estate sales involve site visits. Generic CRMs don't have built-in features
                                        to schedule and track on-site meetings.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Expensive Per-User Pricing</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Generic CRMs charge per user per month. For a 10-person sales team, costs add up fast.
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
                                How Layouts360 Handles Client Management
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Plot-Aware CRM
                                        </h3>
                                        <p className="text-gray-700">
                                            Every lead is linked to a specific plot. You can see which plots are getting
                                            the most inquiries and which are sitting idle.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Lead Source Tracking
                                        </h3>
                                        <p className="text-gray-700">
                                            Know where each lead came from: 99acres, MagicBricks, walk-in, referral, or
                                            social media. Track which channels give you the best ROI.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Follow-Up Automation
                                        </h3>
                                        <p className="text-gray-700">
                                            Set reminders for follow-ups. The system alerts agents when it's time to
                                            contact a lead. No more "I forgot to call them back."
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Site Visit Scheduling
                                        </h3>
                                        <p className="text-gray-700">
                                            Schedule site visits directly in the system. Track which customers visited,
                                            when, and with which agent.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Sales Pipeline Visibility
                                        </h3>
                                        <p className="text-gray-700">
                                            See where each lead is: Inquiry → Site Visit → Negotiation → Booking → Sold.
                                            Identify bottlenecks and coach your team.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Agent Performance Tracking
                                        </h3>
                                        <p className="text-gray-700">
                                            Track which agents are converting leads, how many follow-ups they're doing,
                                            and their average time to close.
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
                                Client Management Features in Layouts360
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Capture</h3>
                                    <p className="text-gray-700">
                                        Capture leads from portals, walk-ins, referrals, and social media. Store contact
                                        details, source, and initial interest.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <Target className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Plot-Specific Interest</h3>
                                    <p className="text-gray-700">
                                        Link each lead to the plot(s) they're interested in. See which plots are hot
                                        and which need more marketing.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <MessageSquare className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Communication Log</h3>
                                    <p className="text-gray-700">
                                        Record every call, email, and WhatsApp conversation. See the complete history
                                        of interactions with each customer.
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
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-Up Reminders</h3>
                                    <p className="text-gray-700">
                                        Set follow-up dates and get automated reminders. Never miss a callback or
                                        lose a hot lead.
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
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Site Visit Tracking</h3>
                                    <p className="text-gray-700">
                                        Schedule and track site visits. Know which customers visited, when, and their
                                        feedback.
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
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Pipeline</h3>
                                    <p className="text-gray-700">
                                        Visualize your sales funnel: Inquiry → Visit → Negotiation → Booking.
                                        Identify where leads are dropping off.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-pink-600"
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
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Agent Assignment</h3>
                                    <p className="text-gray-700">
                                        Assign leads to specific agents. Track agent workload and ensure no lead
                                        falls through the cracks.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-teal-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Conversion Analytics</h3>
                                    <p className="text-gray-700">
                                        See lead-to-booking conversion rates by source, agent, and plot. Optimize
                                        your marketing and sales strategy.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-orange-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Integration</h3>
                                    <p className="text-gray-700">
                                        Send plot details, layouts, and payment schedules directly via WhatsApp.
                                        Track message delivery and responses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Customer Lifecycle */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Complete Customer Lifecycle Management
                            </h2>

                            <div className="space-y-8">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Lead Capture</h3>
                                    <p className="text-gray-700">
                                        Customer inquires about a plot via 99acres, walk-in, or referral. Agent captures
                                        their details, source, and which plot they're interested in.
                                    </p>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">2. Follow-Up & Nurturing</h3>
                                    <p className="text-gray-700">
                                        Agent schedules follow-up calls, sends plot details via WhatsApp, and answers
                                        questions. All interactions are logged in the system.
                                    </p>
                                </div>

                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Site Visit</h3>
                                    <p className="text-gray-700">
                                        Customer visits the site. Agent shows them the plot on a tablet using Layouts360's
                                        interactive map. Site visit is recorded with feedback notes.
                                    </p>
                                </div>

                                <div className="border-l-4 border-yellow-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">4. Negotiation & Booking</h3>
                                    <p className="text-gray-700">
                                        Customer decides to book. Agent records booking amount, payment schedule, and
                                        customer documents. Plot status changes to "Booked" automatically.
                                    </p>
                                </div>

                                <div className="border-l-4 border-red-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">5. Payment & Handover</h3>
                                    <p className="text-gray-700">
                                        Customer makes installment payments. System tracks payments and sends reminders
                                        for due dates. Once fully paid, plot is marked "Sold" and handover is scheduled.
                                    </p>
                                </div>

                                <div className="border-l-4 border-indigo-500 pl-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">6. Post-Sale Relationship</h3>
                                    <p className="text-gray-700">
                                        Customer receives updates on project development, possession dates, and documentation.
                                        Happy customers become referral sources for future sales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Generic CRM vs Layouts360 */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Generic CRM vs. Layouts360 Real Estate CRM
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200 bg-gray-50">
                                            <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                                            <th className="text-center p-4 font-semibold text-gray-600">
                                                HubSpot / Zoho / Salesforce
                                            </th>
                                            <th className="text-center p-4 font-semibold text-green-600">
                                                Layouts360
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Plot-Specific Lead Tracking</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Visual Layouts Integration</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Inventory Sync</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Site Visit Tracking</td>
                                            <td className="p-4 text-center text-gray-700">Manual custom fields</td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Payment Tracking</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Setup Time</td>
                                            <td className="p-4 text-center text-gray-700">2-4 weeks</td>
                                            <td className="p-4 text-center text-gray-700">3-5 days</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Learning Curve</td>
                                            <td className="p-4 text-center text-gray-700">Steep</td>
                                            <td className="p-4 text-center text-gray-700">Easy (built for real estate)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-gray-900">Monthly Cost (10 users)</td>
                                            <td className="p-4 text-center text-gray-700">High (per-user pricing)</td>
                                            <td className="p-4 text-center text-gray-700">Contact / Enquiry</td>
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
                                        Is the CRM included in all Layouts360 plans?
                                    </h3>
                                    <p className="text-gray-700">
                                        Basic lead tracking is available in all plans. Full CRM features (follow-up automation,
                                        site visit tracking, agent performance) are included in the Business Plan. Contact us for pricing.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can I import leads from 99acres or MagicBricks?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! You can manually enter leads or import them from a CSV file. We're working on
                                        direct API integrations with major portals.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        How many users can access the CRM?
                                    </h3>
                                    <p className="text-gray-700">
                                        Layouts360 offers unlimited users on all plans. Unlike generic CRMs that charge per
                                        user, you can add your entire sales team at no extra cost.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can agents access the CRM on mobile?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! Layouts360 is mobile-first. Agents can capture leads, schedule follow-ups, and
                                        update customer status from their phones or tablets.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Does Layouts360 send automated follow-up emails or SMS?
                                    </h3>
                                    <p className="text-gray-700">
                                        Currently, Layouts360 sends reminders to agents to follow up with customers. Automated
                                        customer emails/SMS are on our roadmap and will be available soon.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can I track which marketing channels give the best leads?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! Layouts360 tracks lead source (99acres, MagicBricks, walk-in, referral, etc.)
                                        and shows conversion rates by source. You'll know which channels are worth investing in.
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
                                Stop Losing Leads. Start Closing Deals.
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Manage every customer from first inquiry to final handover. See how Layouts360's
                                real estate CRM helps you convert more leads.
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
