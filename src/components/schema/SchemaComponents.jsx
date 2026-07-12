import React from "react";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../data/siteConfig.js";

function JsonLd({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ---------------------------------------------------------------
// LocalBusiness schema — put once, on the Home page and Contact page
// ---------------------------------------------------------------
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/brand/kame-logo-512.png`,
    image: `${siteConfig.url}/assets/brand/og-image.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lusaka",
      addressCountry: "ZM",
    },
    sameAs: Object.values(siteConfig.social),
    openingHoursSpecification: siteConfig.contact.hours
      .filter((h) => h.time !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.time.split(" \u2013 ")[0]?.trim(),
        closes: h.time.split(" \u2013 ")[1]?.trim(),
      })),
  };
  return <JsonLd data={data} />;
}

// ---------------------------------------------------------------
// Service schema — one per service detail page
// ---------------------------------------------------------------
export function ServiceSchema({ service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.overview,
    provider: {
      "@type": "MarketingAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Zambia",
    },
  };
  return <JsonLd data={data} />;
}

// ---------------------------------------------------------------
// FAQ schema — pass an array of { question, answer }
// ---------------------------------------------------------------
export function FAQSchema({ faqs }) {
  if (!faqs || faqs.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
  return <JsonLd data={data} />;
}

// ---------------------------------------------------------------
// Article schema — for each Business Insights post
// ---------------------------------------------------------------
export function ArticleSchema({ article }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.featuredImage}`,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/assets/brand/kame-logo-512.png`,
      },
    },
    datePublished: article.publishedAt,
    mainEntityOfPage: `${siteConfig.url}/insights/${article.slug}`,
  };
  return <JsonLd data={data} />;
}

// ---------------------------------------------------------------
// Breadcrumb schema — pass an array of { name, path }
// ---------------------------------------------------------------
export function BreadcrumbSchema({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
  return <JsonLd data={data} />;
}

// ---------------------------------------------------------------
// Review schema — pass an array of real, permissioned reviews.
// Do NOT populate with placeholder testimonials (see src/data/testimonials.js).
// ---------------------------------------------------------------
export function ReviewSchema({ reviews }) {
  if (!reviews || reviews.length === 0 || reviews.some((r) => r.isPlaceholder)) {
    return null; // never emit schema for placeholder/fabricated reviews
  }
  const data = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: siteConfig.name,
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.rating || 5, bestRating: 5 },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.quote,
    })),
  };
  return <JsonLd data={data} />;
}
