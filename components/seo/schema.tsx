import Script from "next/script"
import { DEFAULT_OG_IMAGE } from "@/lib/page-metadata"
import { SITE_URL, absoluteUrl } from "@/lib/site-url"

interface FAQItem {
    question: string;
    answer: string;
}

interface ArticleSchemaProps {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    authorName?: string;
    url: string;
    imageUrl?: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
}

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export function ArticleSchema({
    headline,
    description,
    datePublished,
    dateModified,
    authorName = "Layouts360 Team",
    url,
    imageUrl = absoluteUrl(DEFAULT_OG_IMAGE.url),
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "description": description,
        "image": imageUrl,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "author": {
            "@type": "Organization",
            "name": authorName,
            "url": "https://layouts360.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Layouts360",
            "logo": {
                "@type": "ImageObject",
                "url": "https://layouts360.com/logo-horizontal-on-dark.svg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    };

    return (
        <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * Google Software App rich results require aggregateRating OR review in addition to offers.
 * Only use when you have real, verifiable ratings — do not fabricate values.
 */
export function SoftwareApplicationSchema({
    name,
    description,
    url,
    price,
    priceCurrency = "INR",
    aggregateRating,
    review,
}: {
    name: string
    description: string
    url: string
    price: string
    priceCurrency?: string
    aggregateRating?: { ratingValue: number; ratingCount: number }
    review?: { author: string; reviewBody: string; datePublished: string }
}) {
    if (!aggregateRating && !review) {
        return null
    }

    const schema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name,
        description,
        url,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        offers: {
            "@type": "Offer",
            price,
            priceCurrency,
            availability: "https://schema.org/InStock",
        },
    }

    if (aggregateRating) {
        schema.aggregateRating = {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            ratingCount: aggregateRating.ratingCount,
        }
    }

    if (review) {
        schema.review = {
            "@type": "Review",
            author: { "@type": "Person", name: review.author },
            reviewBody: review.reviewBody,
            datePublished: review.datePublished,
        }
    }

    return (
        <Script
            id="software-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/** Site-wide: valid on every page without ratings/reviews. */
export function OrganizationWebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                name: "Layouts360",
                legalName: "OriginGrey Private Limited",
                url: SITE_URL,
                logo: absoluteUrl("/logo-horizontal-on-dark.svg"),
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-72764-95199",
                    contactType: "sales",
                    areaServed: "IN",
                },
            },
            {
                "@type": "WebSite",
                name: "Layouts360",
                url: SITE_URL,
                description:
                    "Plot and inventory management software with CRM and booking for real estate developers in India.",
                inLanguage: "en-IN",
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
