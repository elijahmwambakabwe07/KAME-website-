import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO.jsx";
import { Section } from "../components/ui/Primitives.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" noindex />
      <Section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">404</p>
        <h1 className="mt-2 text-4xl">Page Not Found</h1>
        <p className="mt-4 text-ink-light">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          Back to Home
        </Link>
      </Section>
    </>
  );
}
