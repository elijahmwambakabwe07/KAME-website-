import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO.jsx";
import { BreadcrumbSchema } from "../components/schema/SchemaComponents.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { Section, Eyebrow } from "../components/ui/Primitives.jsx";

export default function About() {
  return (
    <>
      <SEO
        title="About KAME"
        description="KAME Digital Marketing Agency — Zambia's Leading Business Visibility Agency. Learn our story, our framework, and our ecosystem."
        path="/about"
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <Section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>About KAME</Eyebrow>
          <h1 className="text-4xl text-white md:text-5xl">{siteConfig.positioning}</h1>
          <p className="mt-4 text-lg text-navy-100">{siteConfig.tagline}</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-ink-light">
          <p>
            Good businesses lose customers they deserve to keep, for reasons that have
            nothing to do with the quality of what they sell. A tailor with better work than
            anyone on his street. A restaurant whose food people rave about in person. Both
            can be invisible to the one customer actively looking for exactly what they sell
            — simply because a competitor claimed their Google profile and they didn't.
          </p>
          <p>
            That gap is what KAME exists to close — honestly, systematically, and with
            infrastructure that keeps working long after the invoice is paid. We diagnose
            before we prescribe. We build systems, not shortcuts. And we tell clients the
            truth about their digital foundation, even when it costs us the sale.
          </p>
        </div>
      </Section>

      <Section className="bg-surface-soft">
        <div className="text-center">
          <Eyebrow>The Ecosystem</Eyebrow>
          <h2 className="text-3xl md:text-4xl">One Connected System, Three Stages</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="card text-center">
            <h3 className="text-lg">{siteConfig.ecosystem.diagnosis}</h3>
            <p className="mt-2 text-sm text-ink-light">Education, strategy, consulting, and audits — where trust begins.</p>
          </div>
          <div className="card text-center border-2 border-gold-400">
            <h3 className="text-lg">{siteConfig.ecosystem.execution}</h3>
            <p className="mt-2 text-sm text-ink-light">Execution — SEO, GBP, advertising, automation, content, and reporting.</p>
          </div>
          <div className="card text-center">
            <h3 className="text-lg">{siteConfig.ecosystem.education}</h3>
            <p className="mt-2 text-sm text-ink-light">Coming soon — courses, certification, and community, built on everything proven here first.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-navy-700 text-center text-white">
        <h2 className="text-3xl text-white">Ready to see where your business stands?</h2>
        <Link to="/business-visibility-audit" className="btn-primary mt-6 inline-flex">
          Start a Free Audit
        </Link>
      </Section>
    </>
  );
}
