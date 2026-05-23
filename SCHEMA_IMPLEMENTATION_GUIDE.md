# Schema Markup Implementation Guide

## ✅ Tasks Completed

### 1. Added LLMS Reference in robots.txt
- ✅ Added comment reference to llms.txt in `/app/robots.ts`
- ✅ Follows llmstxt.org standard
- ✅ No TypeScript errors

### 2. Improved llms.txt
- ✅ Enhanced with clearer business model description
- ✅ Added "What We Do vs. What We Don't Do" section
- ✅ Clarified: Focus on SALES, not lease/rental management
- ✅ Added common use cases
- ✅ Added competitive advantages
- ✅ Added technical details
- ✅ Updated page descriptions (removed "lease tracking" mention)

### 3. Created Schema Markup Components
- ✅ Created `/components/seo/schema.tsx` with reusable components:
  - `ArticleSchema` - For article/guide pages
  - `FAQSchema` - For FAQ sections
  - `BreadcrumbSchema` - For navigation breadcrumbs
  - `SoftwareApplicationSchema` - For product pages

---

## 📋 How to Add Schema to Pages

### Step 1: Import Schema Components

Add this to the top of your page file:

```typescript
import { ArticleSchema, FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "@/components/seo/schema";
```

### Step 2: Add Schema to Page Component

Add the schema components inside your page's return statement, typically after the `<Header>` component:

```typescript
export default function YourPage() {
    const faqs = [
        {
            question: "Your question here?",
            answer: "Your answer here."
        },
        // ... more FAQs
    ];

    return (
        <>
            {/* Schema Markup */}
            <ArticleSchema
                headline="Real Estate Asset Management Software | Layouts360"
                description="Track ₹50 Crore+ in plot inventory with real estate asset management software."
                datePublished="2026-01-22"
                dateModified="2026-01-22"
                url="https://layouts360.com/real-estate-asset-management-software"
            />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://layouts360.com" },
                    { name: "Asset Management", url: "https://layouts360.com/real-estate-asset-management-software" }
                ]}
            />
            <SoftwareApplicationSchema
                name="Layouts360 - Real Estate Asset Management"
                description="Plot-level P&L tracking, ROI analysis, and portfolio management for developers"
                url="https://layouts360.com/real-estate-asset-management-software"
                price="2000"
            />

            {/* Header */}
            <div className="relative bg-white">
                <Header theme="light" />
            </div>

            {/* Rest of your page */}
        </>
    );
}
```

---

## 🎯 Schema for Each New Page

### 1. Real Estate Asset Management Software

```typescript
// FAQs array
const faqs = [
    {
        question: "Is asset management only for large developers?",
        answer: "No. Even if you have 50 plots worth ₹5 crores, knowing your true profit per plot is critical. Asset management helps developers of all sizes make smarter financial decisions."
    },
    {
        question: "Can I use Layouts360 just for asset management without the CRM?",
        answer: "Yes! Our Sales Starter plan includes digital layouts and asset tracking. You can upgrade to Growth Suite later if you need CRM and lead management features."
    },
    {
        question: "How do I allocate costs across multiple plots?",
        answer: "Layouts360 lets you allocate costs proportionally (by area, by plot count, or custom allocation). For example, if you spent ₹1 crore on roads, it can split that across all plots automatically."
    },
    {
        question: "Does Layouts360 integrate with accounting software like Tally?",
        answer: "Currently, Layouts360 provides financial reports that you can export to Excel and import into Tally or QuickBooks. Direct integration is on our roadmap."
    },
    {
        question: "Can I track different cost categories for different phases?",
        answer: "Yes. Each phase can have its own cost structure. This is useful if Phase 1 required more infrastructure investment than Phase 2."
    },
    {
        question: "What reports can I generate for investors?",
        answer: "You can generate portfolio summary reports, ROI analysis, sales velocity reports, and profit margin breakdowns. All reports are exportable to PDF or Excel."
    }
];

// Schema components
<ArticleSchema
    headline="Real Estate Asset Management Software | Layouts360"
    description="Track ₹50 Crore+ in plot inventory with real estate asset management software. Manage plot-level P&L, ROI tracking, holding costs, and asset lifecycle for developers."
    datePublished="2026-01-22"
    dateModified="2026-01-22"
    url="https://layouts360.com/real-estate-asset-management-software"
/>
<FAQSchema faqs={faqs} />
<BreadcrumbSchema
    items={[
        { name: "Home", url: "https://layouts360.com" },
        { name: "Asset Management Software", url: "https://layouts360.com/real-estate-asset-management-software" }
    ]}
/>
<SoftwareApplicationSchema
    name="Layouts360 - Real Estate Asset Management"
    description="Plot-level P&L tracking, ROI analysis, and portfolio management for developers"
    url="https://layouts360.com/real-estate-asset-management-software"
    price="2000"
/>
```

### 2. Real Estate Payment Tracking Software

```typescript
const faqs = [
    {
        question: "Can Layouts360 replace Tally or QuickBooks?",
        answer: "Layouts360 handles plot-specific accounting (bookings, installments, payments). For general business accounting (vendor payments, salaries, expenses), you may still use Tally. However, you can export payment data from Layouts360 to import into Tally."
    },
    {
        question: "Does Layouts360 handle GST filing?",
        answer: "Layouts360 calculates GST on transactions and generates GST-compliant invoices. For GST return filing (GSTR-1, GSTR-3B), you'll need to use the GST portal or your accountant's software. We provide the data you need for filing."
    },
    {
        question: "Can I track payments for multiple projects?",
        answer: "Yes! Each project can have its own payment tracking, installment schedules, and financial reports. View consolidated reports across all projects or drill down into individual project finances."
    },
    {
        question: "How do I handle partial payments and installments?",
        answer: "When you book a plot, create a payment schedule (e.g., ₹10 lakhs booking, ₹5 lakhs in 3 months, ₹35 lakhs on registration). As payments come in, record them against the schedule. The system tracks what's paid and what's pending."
    },
    {
        question: "What reports can I generate for my accountant?",
        answer: "You can export payment summaries, outstanding balances, revenue by period, GST reports, and customer payment histories. All reports are available in Excel and PDF formats."
    },
    {
        question: "Can I send payment reminders to customers automatically?",
        answer: "Yes! Layouts360 can send automated email or SMS reminders to customers before installment due dates. This reduces late payments and improves cash flow."
    }
];

<ArticleSchema
    headline="Real Estate Payment Tracking Software | Layouts360"
    description="Stop losing money to manual payment tracking. Track booking amounts, installments, and payments for plot sales with automated payment schedules and GST compliance."
    datePublished="2026-01-22"
    dateModified="2026-01-22"
    url="https://layouts360.com/real-estate-accounting-software"
/>
<FAQSchema faqs={faqs} />
<BreadcrumbSchema
    items={[
        { name: "Home", url: "https://layouts360.com" },
        { name: "Payment Tracking Software", url: "https://layouts360.com/real-estate-accounting-software" }
    ]}
/>
<SoftwareApplicationSchema
    name="Layouts360 - Real Estate Payment Tracking"
    description="Payment tracking, installment management, and GST compliance for plot sales"
    url="https://layouts360.com/real-estate-accounting-software"
    price="2000"
/>
```

### 3. Commercial Plot Management Software

```typescript
const faqs = [
    {
        question: "Can Layouts360 handle both commercial and residential projects?",
        answer: "Yes! You can manage residential plots, commercial units, and mixed-use developments all within the same account. Each project can have its own pricing and layout structure."
    },
    {
        question: "How do I show commercial floor plans to customers?",
        answer: "Upload your floor plan (CAD/PDF/image), and we'll digitize it. Your sales team can then show it on tablets or screens, with each unit clickable to see details like size, price, and availability."
    },
    {
        question: "Can I set different prices for corner shops vs. inner shops?",
        answer: "Yes! You can set custom pricing for each unit. Corner shops, road-facing units, or premium locations can have different prices per sq. ft."
    },
    {
        question: "Is Layouts360 suitable for large commercial complexes like malls?",
        answer: "Absolutely. Layouts360 can handle hundreds of units across multiple floors. Upload floor plans for each level and manage shop-by-shop inventory."
    },
    {
        question: "Does Layouts360 handle lease or rental management?",
        answer: "No. Layouts360 is focused on helping you sell commercial properties, not manage rentals or leases. We track bookings and sales, not monthly rent collection."
    },
    {
        question: "How long does it take to set up a commercial project?",
        answer: "Typically 3-5 days. You provide your floor plans and unit data, and we'll digitize it, configure pricing, and set up the system. Much faster than building custom software!"
    }
];

<ArticleSchema
    headline="Commercial Plot Management Software | Layouts360"
    description="Sell commercial plots, shops, and office spaces faster with digital layouts. Commercial plot management software for developers selling commercial properties."
    datePublished="2026-01-22"
    dateModified="2026-01-22"
    url="https://layouts360.com/commercial-real-estate-software"
/>
<FAQSchema faqs={faqs} />
<BreadcrumbSchema
    items={[
        { name: "Home", url: "https://layouts360.com" },
        { name: "Commercial Plot Management", url: "https://layouts360.com/commercial-real-estate-software" }
    ]}
/>
<SoftwareApplicationSchema
    name="Layouts360 - Commercial Plot Management"
    description="Sell shops, offices, and commercial plots with digital floor plans and inventory tracking"
    url="https://layouts360.com/commercial-real-estate-software"
    price="2000"
/>
```

### 4. Real Estate Client Management Software

```typescript
const faqs = [
    {
        question: "Is the CRM included in all Layouts360 plans?",
        answer: "Basic lead tracking is available in all plans. Full CRM features (follow-up automation, site visit tracking, agent performance) are included in the Growth Suite plan (₹4,000/month)."
    },
    {
        question: "Can I import leads from 99acres or MagicBricks?",
        answer: "Yes! You can manually enter leads or import them from a CSV file. We're working on direct API integrations with major portals."
    },
    {
        question: "How many users can access the CRM?",
        answer: "Layouts360 offers unlimited users on all plans. Unlike generic CRMs that charge per user, you can add your entire sales team at no extra cost."
    },
    {
        question: "Can agents access the CRM on mobile?",
        answer: "Yes! Layouts360 is mobile-first. Agents can capture leads, schedule follow-ups, and update customer status from their phones or tablets."
    },
    {
        question: "Does Layouts360 send automated follow-up emails or SMS?",
        answer: "Currently, Layouts360 sends reminders to agents to follow up with customers. Automated customer emails/SMS are on our roadmap and will be available soon."
    },
    {
        question: "Can I track which marketing channels give the best leads?",
        answer: "Yes! Layouts360 tracks lead source (99acres, MagicBricks, walk-in, referral, etc.) and shows conversion rates by source. You'll know which channels are worth investing in."
    }
];

<ArticleSchema
    headline="Real Estate Client Management Software | Layouts360"
    description="From lead to deed: manage buyers without losing track. Real estate client management software with plot-specific CRM, lead tracking, and customer lifecycle management."
    datePublished="2026-01-22"
    dateModified="2026-01-22"
    url="https://layouts360.com/real-estate-client-management-software"
/>
<FAQSchema faqs={faqs} />
<BreadcrumbSchema
    items={[
        { name: "Home", url: "https://layouts360.com" },
        { name: "Client Management Software", url: "https://layouts360.com/real-estate-client-management-software" }
    ]}
/>
<SoftwareApplicationSchema
    name="Layouts360 - Real Estate Client Management"
    description="Plot-specific CRM with lead tracking and customer lifecycle management for developers"
    url="https://layouts360.com/real-estate-client-management-software"
    price="2000"
/>
```

---

## 🚀 Next Steps

### 1. Add Schema to All 4 New Pages
- Copy the appropriate schema code for each page
- Add it right after the opening `<>` fragment
- Test with Google's Rich Results Test: https://search.google.com/test/rich-results

### 2. Verify Schema Markup
```bash
# Visit each page and view source
# Look for <script type="application/ld+json"> tags
# Copy the JSON and validate at: https://validator.schema.org/
```

### 3. Submit Updated Sitemap
```bash
# After adding schema, submit sitemap to Google Search Console
# Go to: Sitemaps → Add new sitemap → sitemap.xml
```

### 4. Monitor in Google Search Console
- Check "Enhancements" section for rich results
- Look for FAQ rich results
- Monitor for any schema errors

---

## ✅ Benefits of Schema Markup

1. **Rich Snippets**: FAQs may appear directly in search results
2. **Better CTR**: Rich results get 30-40% higher click-through rates
3. **Voice Search**: Schema helps Google understand content for voice queries
4. **Knowledge Graph**: May appear in Google's knowledge panel
5. **Trust Signals**: Structured data shows professionalism

---

## 📊 Expected Results

### Week 1-2:
- Schema detected by Google
- No errors in Search Console

### Month 1:
- FAQ rich results start appearing
- Improved CTR on search results

### Month 3:
- Consistent rich results
- Higher organic traffic
- Better rankings

---

**Status**: Schema components created ✅
**Next Action**: Add schema to all 4 new pages
**Timeline**: 30 minutes to add, 1-2 weeks for Google to process

---

**Created**: January 22, 2026
**Last Updated**: January 22, 2026
