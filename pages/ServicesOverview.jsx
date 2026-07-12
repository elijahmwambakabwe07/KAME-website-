import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO.jsx";
import { BreadcrumbSchema } from "../components/schema/SchemaComponents.jsx";
import { services } from "../data/services.js";
import { Icon } from "../components/ui/Icon.jsx";
import { Section, Eyebrow, Card } from "../components/ui/Primitives.jsx";

export default function ServicesOverview() {
  return (
    <>
      <SEO
        title="Services"
        description="Business Visibility Audit, SEO, Google Business Profile, AI Visibility, Website Optimisation, Local SEO, Advertising, Automation, and Monthly Growth Management."
        path="/services"
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <Section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>Our Services</Eyebrow>
          <h1 className="text-4xl text-white md:text-5xl">Complete Business Growth Systems</h1>
          <p className="mt-4 text-lg text-navy-100">
            Every service maps to one of three pillars: Visibility, Trust &amp; Accuracy, or
            Relevance. Start with a free audit to see which one your business needs most.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group">
              <Card className="h-full transition-shadow hover:shadow-elevated">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-700 text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h2 className="text-lg group-hover:text-gold-600">{s.title}</h2>
                <p className="mt-2 text-sm text-ink-light">{s.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-700">
                  Learn more <Icon name="chevronRight" className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
