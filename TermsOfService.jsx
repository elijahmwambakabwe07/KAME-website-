import React from "react";
import SEO from "../components/layout/SEO.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { Section } from "../components/ui/Primitives.jsx";

export default function TermsOfService() {
  return (
    <>
      <SEO title="Terms of Service" description="Terms governing use of the KAME Digital Marketing Agency website and services." path="/terms-of-service" noindex />
      <Section className="max-w-3xl">
        <h1>Terms of Service</h1>
        <p className="mt-2 text-sm text-ink-faint">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-ink-light">
          <p>
            <strong className="text-ink">Placeholder document.</strong> Replace this page with
            terms reviewed by a qualified lawyer before formal launch. This is separate from the
            client Service Agreement template used for paid engagements.
          </p>
          <section>
            <h2 className="text-xl text-navy-700">Use of This Website</h2>
            <p>[Describe acceptable use of the website and audit tool.]</p>
          </section>
          <section>
            <h2 className="text-xl text-navy-700">Results Disclaimer</h2>
            <p>
              Marketing results depend on multiple factors, including the quality of a
              client's product or service, their responsiveness to leads, and market
              conditions — not solely the quality of KAME's work. KAME does not guarantee
              specific rankings, lead volumes, or revenue outcomes.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-navy-700">Intellectual Property</h2>
            <p>[State ownership of the KAME name, logo, and Digital Visibility Framework.]</p>
          </section>
          <section>
            <h2 className="text-xl text-navy-700">Contact</h2>
            <p>Questions about these terms: {siteConfig.contact.email}</p>
          </section>
        </div>
      </Section>
    </>
  );
}
