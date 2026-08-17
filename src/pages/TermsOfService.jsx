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
          <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
            These terms have not been reviewed by a lawyer and should be checked against
            applicable Zambian law before being relied on as a complete legal document. These
            terms govern use of this website only — they are separate from the Service
            Agreement signed by paying clients before any client engagement begins.
          </div>

          <section>
            <h2 className="text-xl text-navy-700">Use of This Website</h2>
            <p>
              You may browse this website and use the free Business Visibility Audit tool for
              your own business or on behalf of a business you represent. You may not use this
              website to submit false information, attempt to disrupt or gain unauthorised
              access to it, or use the audit tool to send excessive automated requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">The Free Audit Tool</h2>
            <p>
              The Business Visibility Audit tool provides an automated, informational check of a
              website's public visibility signals. Some checks return live data; others may show
              as not yet connected, in which case no result is generated for that check. The
              audit tool is provided for informational purposes and is not a substitute for a
              full consultation.
            </p>
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
            <h2 className="text-xl text-navy-700">KAME Visibility Pro Waiting List</h2>
            <p>
              Joining the KAME Visibility Pro waiting list does not create any payment
              obligation, subscription, or contract. It is a request to be contacted when the
              product becomes available. No payment is collected at the point of joining the
              waiting list.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Data Protection</h2>
            <p>
              Our collection and use of your personal data is governed by our{" "}
              <a href="/privacy-policy" className="font-semibold text-navy-700 hover:underline">
                Privacy Policy
              </a>
              , which has been written to reflect Zambia's Data Protection Act, 2021. By using
              this website, including submitting any form, you agree to that policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Intellectual Property</h2>
            <p>
              The KAME name, logo, and the Digital Visibility Framework (Visibility, Trust &amp;
              Accuracy, Relevance) described on this website belong to {siteConfig.name}. You may
              not reproduce, redistribute, or represent them as your own without our written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Limitation of Liability</h2>
            <p>
              This website and its free tools are provided as-is. To the extent permitted by
              law, {siteConfig.name} is not liable for any loss arising from your use of this
              website or reliance on information found on it, including the free audit tool's
              results.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Changes to These Terms</h2>
            <p>
              If these terms change, we will update the date at the top of this page. Continued
              use of the site after a change means you accept the updated terms.
            </p>
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
