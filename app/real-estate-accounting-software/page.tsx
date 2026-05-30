import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Calculator, Receipt, FileText } from "lucide-react";
import Header from "@/components/marketing/header";
import Footer from "@/components/marketing/footer";

import { PAGE_KEYWORDS } from "@/lib/seo-keywords";
import { absoluteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
    title: "Real Estate Accounting Software | Payment Tracking | Layouts360",
    description:
        "Real estate accounting software for plot sales—booking amounts, installments, refunds, and GST-friendly payment schedules. Stop losing money to manual tracking.",
    keywords: [...PAGE_KEYWORDS.accounting],
    alternates: {
        canonical: absoluteUrl("/real-estate-accounting-software"),
    },
    openGraph: {
        title: "Real Estate Accounting Software | Layouts360",
        description:
            "Track bookings, installments, and payments for plot sales. Automated payment schedules, GST compliance, and financial reports for developers.",
        type: "website",
        url: absoluteUrl("/real-estate-accounting-software"),
    },
};

export default function RealEstateAccountingSoftwarePage() {
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
                                Real Estate Payment Tracking Software for Plot Sales
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                Stop losing money to manual payment tracking. Track booking amounts, installments, and payments
                                for plot sales with automated payment schedules, GST compliance, and financial reports—all in one place.
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

                {/* What is Real Estate Accounting Software */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What is Real Estate Accounting Software?
                            </h2>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Real estate accounting software is a specialized financial management system designed for property
                                developers and builders. Unlike generic accounting tools like Tally or QuickBooks, real estate
                                accounting software understands the unique payment structures of plot sales:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
                                <li>Booking amounts (token money)</li>
                                <li>Installment plans (monthly, quarterly, milestone-based)</li>
                                <li>Partial payments and outstanding balances</li>
                                <li>Refunds and cancellations</li>
                                <li>GST calculations on property transactions</li>
                                <li>Payment due date reminders</li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Layouts360 combines accounting features with plot inventory management, giving you a complete
                                view of both your sales and finances in one system. No more juggling between Excel, Tally,
                                and WhatsApp to track who paid what.
                            </p>
                            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                                <p className="text-gray-700">
                                    <strong>Managing multiple property types?</strong> Check out our{" "}
                                    <Link href="/real-estate-inventory-management-software" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                                        real estate inventory management software
                                    </Link>
                                    {" "}for plots, flats, and commercial units.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems with Manual Payment Tracking */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                The Problems with Manual Payment Tracking
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Missed Payments</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Without automated reminders, customers forget installment due dates. You lose
                                        cash flow and waste time chasing payments.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Calculation Errors</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Manual Excel calculations lead to mistakes in GST, outstanding balances, and
                                        payment schedules—causing disputes with customers.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">No Audit Trail</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        When a customer says "I already paid," can you instantly prove it? Excel doesn't
                                        maintain a clear payment history with timestamps.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Time-Consuming Reconciliation</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Matching bank deposits to plot bookings takes hours every month. You need someone
                                        dedicated just to reconcile accounts.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">GST Compliance Headaches</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Calculating GST on partial payments, refunds, and cancellations is complex.
                                        Manual tracking increases the risk of compliance errors.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                                    <div className="flex items-start gap-3 mb-3">
                                        <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-semibold text-gray-900">Poor Cash Flow Visibility</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        You don't know how much money is coming in next month. No visibility into
                                        upcoming installments makes financial planning impossible.
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
                                How Layouts360 Simplifies Real Estate Accounting
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Automated Payment Schedules
                                        </h3>
                                        <p className="text-gray-700">
                                            When you book a plot, create a payment schedule with due dates. The system
                                            automatically tracks what's paid, what's pending, and what's overdue.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Installment Tracking
                                        </h3>
                                        <p className="text-gray-700">
                                            Record partial payments instantly. See outstanding balances per customer,
                                            per plot, and across all projects. No more manual calculations.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            GST Calculations
                                        </h3>
                                        <p className="text-gray-700">
                                            Layouts360 automatically calculates GST on plot sales, partial payments,
                                            and refunds. Generate GST-compliant invoices and reports.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Payment Reminders
                                        </h3>
                                        <p className="text-gray-700">
                                            Automated reminders notify customers before installment due dates. Reduce
                                            late payments and improve cash flow.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Financial Reports
                                        </h3>
                                        <p className="text-gray-700">
                                            Generate revenue reports, outstanding payment summaries, and cash flow
                                            projections. Export to Excel or PDF for your accountant.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Complete Audit Trail
                                        </h3>
                                        <p className="text-gray-700">
                                            Every payment is timestamped and logged. See who recorded it, when, and
                                            which payment method was used. Perfect for audits and disputes.
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
                                Accounting Features in Layouts360
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <Calculator className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Amount Tracking</h3>
                                    <p className="text-gray-700">
                                        Record token money, booking amounts, and advance payments with customer details
                                        and plot allocation.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <Receipt className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Installment Management</h3>
                                    <p className="text-gray-700">
                                        Create flexible payment plans: monthly, quarterly, milestone-based, or custom
                                        schedules.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <FileText className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">GST Invoicing</h3>
                                    <p className="text-gray-700">
                                        Generate GST-compliant invoices for bookings, installments, and final payments
                                        automatically.
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
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Due Date Reminders</h3>
                                    <p className="text-gray-700">
                                        Automated email/SMS reminders to customers before installment due dates.
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
                                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Outstanding Balance Reports</h3>
                                    <p className="text-gray-700">
                                        See who owes what at a glance. Track overdue payments and total receivables.
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
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue Analytics</h3>
                                    <p className="text-gray-700">
                                        View revenue by project, by month, by agent. Forecast cash flow based on
                                        upcoming installments.
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
                                                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Refund Management</h3>
                                    <p className="text-gray-700">
                                        Handle cancellations and refunds with proper documentation and GST adjustments.
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
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Payment Methods</h3>
                                    <p className="text-gray-700">
                                        Track cash, cheque, bank transfer, UPI, and card payments with transaction IDs.
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
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Export to Excel/PDF</h3>
                                    <p className="text-gray-700">
                                        Export payment records, financial summaries, and reports for your accountant or auditor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real Estate Accounting vs Generic Accounting */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Real Estate Accounting vs. Generic Accounting Software
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200 bg-gray-50">
                                            <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                                            <th className="text-center p-4 font-semibold text-gray-600">
                                                Tally / QuickBooks
                                            </th>
                                            <th className="text-center p-4 font-semibold text-green-600">
                                                Layouts360
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Plot-Specific Payments</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Installment Schedules</td>
                                            <td className="p-4 text-center text-gray-700">Manual setup</td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Visual Plot Layouts</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Customer Payment Reminders</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Booking to Sale Tracking</td>
                                            <td className="p-4 text-center">
                                                <X className="h-6 w-6 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">Mobile Access for Field Teams</td>
                                            <td className="p-4 text-center text-gray-700">Limited</td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-medium text-gray-900">GST Compliance</td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-gray-900">Learning Curve</td>
                                            <td className="p-4 text-center text-gray-700">Steep (accounting knowledge needed)</td>
                                            <td className="p-4 text-center text-gray-700">Easy (built for real estate)</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                        Can Layouts360 replace Tally or QuickBooks?
                                    </h3>
                                    <p className="text-gray-700">
                                        Layouts360 handles plot-specific accounting (bookings, installments, payments).
                                        For general business accounting (vendor payments, salaries, expenses), you may
                                        still use Tally. However, you can export payment data from Layouts360 to import
                                        into Tally.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Does Layouts360 handle GST filing?
                                    </h3>
                                    <p className="text-gray-700">
                                        Layouts360 calculates GST on transactions and generates GST-compliant invoices.
                                        For GST return filing (GSTR-1, GSTR-3B), you'll need to use the GST portal or
                                        your accountant's software. We provide the data you need for filing.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can I track payments for multiple projects?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! Each project can have its own payment tracking, installment schedules, and
                                        financial reports. View consolidated reports across all projects or drill down
                                        into individual project finances.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        How do I handle partial payments and installments?
                                    </h3>
                                    <p className="text-gray-700">
                                        When you book a plot, create a payment schedule (e.g., booking amount,
                                        milestone payments, and final registration amount). As payments come in, record
                                        them against the schedule. The system tracks what's paid and what's pending.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        What reports can I generate for my accountant?
                                    </h3>
                                    <p className="text-gray-700">
                                        You can export payment summaries, outstanding balances, revenue by period,
                                        GST reports, and customer payment histories. All reports are available in
                                        Excel and PDF formats.
                                    </p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Can I send payment reminders to customers automatically?
                                    </h3>
                                    <p className="text-gray-700">
                                        Yes! Layouts360 can send automated email or SMS reminders to customers before
                                        installment due dates. This reduces late payments and improves cash flow.
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
                                Stop Losing Money to Manual Payment Tracking
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Automate installments, track GST, and get paid on time. See how Layouts360
                                simplifies real estate accounting for plot developers.
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
