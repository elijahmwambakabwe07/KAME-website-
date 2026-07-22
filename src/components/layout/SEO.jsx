import React from "react";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../data/siteConfig.js";

/**
 * Drop this into any page to control that page's meta tags.
 * Falls back to sensible site-wide defaults if a prop is omitted.
 *
 * Usage:
 *   <SEO title="SEO Services" description="..." path="/services/seo" />
 */
export default function SEO({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/assets/brand/og-image.jpg",
  type = "website",
  noindex = false,
  children,
}) {
  // Long page titles (e.g. article headlines) already use most of the
  // ~60-character budget search engines display before truncating, so they
  // get the short brand suffix. Short titles get the full company name,
  // since there's room for it without truncation.
  const suffix = title && title.length > 35 ? siteConfig.shortName : siteConfig.name;
  const fullTitle = title ? `${title} | ${suffix}` : `${siteConfig.shortName} | ${siteConfig.positioning}`;
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {children}
    </Helmet>
  );
}
