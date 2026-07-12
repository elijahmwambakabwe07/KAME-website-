import React from "react";
import SEO from "../components/layout/SEO.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { Section } from "../components/ui/Primitives.jsx";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How KAME Digital Marketing Agency collects, uses, and protects your information." path="/privacy-policy" noindex />
      <Section className="max-w-3xl">
        <h1>Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-faint">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-ink-light">
          <p>
            <strong className="text-ink">Placeholder document.</strong> Replace this page with a
            privacy policy reviewed by a qualified lawyer before collecting any real visitor or
            client data. At minimum, it should cover the sections below.
          </p>
          <section>
            <h2 className="text-xl text-navy-700">Information We Collect</h2>
            <p>[Describe what's collected via the contact form, audit tool, and analytics.]</p>
          </section>
          <section>
            <h2 className="text-xl text-navy-700">How We Use Information</h2>
            <p>[Describe use for responding to enquiries, delivering services, and improving the site.]</p>
          </section>
          <section>
            <h2 className="text-xl text-navy-700">Data Sharing</h2>
            <p>[State whether data is shared with third parties, e.g. analytics or email providers, and under what terms.]</p>
          </section>
          <section>
            <h2 className="text-xl text-navy-700">Your Rights</h2>
            <p>[Describe how visitors can request access to, correction of, or deletion of their data.]</p>
          </section>
          <section>
            <h2 className="text-xl text-navy-700">Contact</h2>
            <p>Questions about this policy: {siteConfig.contact.email}</p>
          </section>
        </div>
      </Section>
    </>
  );
}
