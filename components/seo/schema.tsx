import Script from 'next/script';

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
    imageUrl = "https://layouts360.com/og-image.jpg",
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
                "url": "https://layouts360.com/logo.png"
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

export function SoftwareApplicationSchema({
    name,
    description,
    url,
    price,
    priceCurrency = "INR",
}: {
    name: string;
    description: string;
    url: string;
    price: string;
    priceCurrency?: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": name,
        "description": description,
        "url": url,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": price,
            "priceCurrency": priceCurrency,
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "50"
        }
    };

    return (
        <Script
            id="software-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
