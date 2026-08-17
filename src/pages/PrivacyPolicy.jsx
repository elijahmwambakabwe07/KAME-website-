import React from "react";
import SEO from "../components/layout/SEO.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { Section } from "../components/ui/Primitives.jsx";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How KAME Digital Marketing Agency collects, uses, and protects your information, in line with Zambia's Data Protection Act, 2021." path="/privacy-policy" noindex />
      <Section className="max-w-3xl">
        <h1>Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-faint">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-ink-light">
          <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
            This policy has been written to reflect Zambia's Data Protection Act, 2021, and
            describes accurately what this website actually does with the information it
            collects. It has not been reviewed by a lawyer and should be checked by one before
            being relied on as a complete legal document — particularly the sections on data
            controller registration and cross-border data transfer, noted below.
          </div>

          <section>
            <h2 className="text-xl text-navy-700">Who We Are</h2>
            <p>
              For the purposes of the Data Protection Act, 2021, the data controller for this
              website is {siteConfig.name}, {siteConfig.contact.address}. For any question about
              this policy, your information, or to exercise any of the rights below, contact us
              at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-navy-700 hover:underline">
                {siteConfig.contact.email}
              </a>{" "}
              — this address is our data protection contact point until a dedicated Data
              Protection Officer is appointed.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Information We Collect</h2>
            <p>We collect information only when you choose to give it to us, specifically:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <strong>Contact form:</strong> your name, email address, phone number (optional),
                business name (optional), and your message.
              </li>
              <li>
                <strong>KAME Visibility Pro waiting list:</strong> your name, email address, and
                business name (optional).
              </li>
              <li>
                <strong>Business Visibility Audit tool:</strong> the website URL you enter to be
                audited. We do not require you to create an account or give personal details to
                use the free audit.
              </li>
            </ul>
            <p className="mt-2">
              None of the information above is sensitive personal data under the Act (it does not
              include, for example, race, health, biometric, or religious information), and we do
              not knowingly collect any such data through this website. We do not collect payment
              information anywhere on this site — no payment processing is active as of this
              version of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Children and Vulnerable Persons</h2>
            <p>
              This website and its services are intended for business owners and adults acting on
              behalf of a business. We do not knowingly collect personal data from children or
              from vulnerable persons without the consent of a parent, legal guardian, or person
              exercising parental responsibility, as required by the Act. If you believe a child
              has submitted personal data to us without appropriate consent, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-navy-700 hover:underline">
                {siteConfig.contact.email}
              </a>{" "}
              and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Cookies</h2>
            <p>
              We use one essential piece of local storage on your device: a record of whether
              you accepted or declined optional cookies, so we don't ask you again on every
              visit. No optional tracking or analytics cookies are active on this version of the
              site. If that changes in future (for example, if we enable Google Analytics), it
              will only run for visitors who have accepted optional cookies via the banner shown
              on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">How We Use Information, and Your Consent</h2>
            <p>
              We use the information you submit only to respond to your enquiry, deliver the
              service you asked about, or contact you when KAME Visibility Pro becomes available
              if you joined the waiting list. We rely on your consent as the legal basis for this
              processing. You may withdraw your consent at any time by emailing{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-navy-700 hover:underline">
                {siteConfig.contact.email}
              </a>
              . Withdrawing consent does not affect the lawfulness of anything we did with your
              information before you withdrew it, and any personal data collected after a
              withdrawal will be deleted. We do not use your information for direct marketing
              unless you have separately agreed to that, and you may object to direct marketing
              at any time using the same contact details. We do not sell your information to
              anyone, and we do not make any decision about you based solely on automated
              processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Data Sharing and Cross-Border Transfer</h2>
            <p>
              Form submissions are processed and stored by Netlify, the platform that hosts this
              website. Netlify's infrastructure is located outside Zambia, which means submitting
              a form on this site involves a cross-border transfer of your personal data. Under
              the Data Protection Act, 2021, this transfer is made on the basis of your explicit
              consent, given when you tick the consent box on our forms. We do not otherwise
              share your information with third parties, except where required by law.
            </p>
            <p className="mt-2">
              We recognise that the Act's general position is that personal data should be
              processed and stored on servers located within Zambia. We are reviewing our hosting
              arrangements against this requirement, and this policy will be updated if that
              changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your
              information, including transmitting all data over encrypted (HTTPS) connections
              and limiting access to form submissions to those who need it to respond to you. If
              a security breach affecting your personal data occurs, we will notify you, and the
              Office of the Data Protection Commissioner, as soon as practicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Data Retention</h2>
            <p>
              We keep your information for as long as it is needed for the purpose you gave it to
              us, and, in line with the Act, for a further minimum period afterward. You can ask
              us to delete your information earlier, and we will do so unless we are legally
              required or entitled to keep it for a period after your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Your Rights</h2>
            <p>Under the Data Protection Act, 2021, you have the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Confirm whether we hold personal data about you, and access it;</li>
              <li>Ask us to correct (rectify) inaccurate or incomplete personal data;</li>
              <li>Ask us to erase your personal data, in the circumstances set out in the Act;</li>
              <li>Ask us to restrict how we process your personal data;</li>
              <li>Object to processing, including for direct marketing;</li>
              <li>Withdraw consent at any time, without affecting processing already carried out;</li>
              <li>Receive your personal data in a structured, commonly used, machine-readable format;</li>
              <li>Not be subject to a decision based solely on automated processing that affects you legally; and</li>
              <li>Lodge a complaint with the Office of the Data Protection Commissioner if you believe we have not complied with the Act.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, email{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-navy-700 hover:underline">
                {siteConfig.contact.email}
              </a>{" "}
              and we will respond directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy-700">Changes to This Policy</h2>
            <p>
              If this policy changes, we will update the date at the top of this page. Continued
              use of the site after a change means you accept the updated policy.
            </p>
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
