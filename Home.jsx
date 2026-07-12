import React from "react";
import SEO from "../components/layout/SEO.jsx";
import { LocalBusinessSchema } from "../components/schema/SchemaComponents.jsx";
import Hero from "../components/home/Hero.jsx";
import { ValueProposition, VisibilityFramework, WhyInvisible, KameSolution } from "../components/home/ValueSections.jsx";
import { ServiceHighlights, ClientBenefits, WhyChooseKame } from "../components/home/GrowthSections.jsx";
import { InsightsPreview, TestimonialsPreview, AuditCTA, ContactCTA } from "../components/home/EngagementSections.jsx";

export default function Home() {
  return (
    <>
      <SEO
        description="KAME builds the visibility, trust, and relevance systems that make Zambian businesses easy to find, verify, and choose — on Google and in AI search."
        path="/"
      />
      <LocalBusinessSchema />

      <Hero />
      <ValueProposition />
      <VisibilityFramework />
      <WhyInvisible />
      <KameSolution />
      <ServiceHighlights />
      <ClientBenefits />
      <WhyChooseKame />
      <InsightsPreview />
      <TestimonialsPreview />
      <AuditCTA />
      <ContactCTA />
    </>
  );
}
