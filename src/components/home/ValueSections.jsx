import React from "react";
import { siteConfig } from "../../data/siteConfig.js";
import { Icon } from "../ui/Icon.jsx";
import { Section, Eyebrow } from "../ui/Primitives.jsx";

export function ValueProposition() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Why We Exist</Eyebrow>
        <h2 className="text-3xl md:text-4xl">
          Good businesses shouldn&rsquo;t struggle simply because customers can&rsquo;t find them,
          verify them, or trust them online.
        </h2>
        <p className="mt-6 text-lg text-ink-light">
          That gap has nothing to do with the quality of what a business sells. It's a
          structural, solvable problem — and closing it, systematically and honestly, is
          the entire reason KAME exists.
        </p>
      </div>
    </Section>
  );
}

export function VisibilityFramework() {
  return (
    <Section className="bg-surface-soft">
      <div className="text-center">
        <Eyebrow>The KAME Framework</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Visibility → Trust &amp; Accuracy → Relevance</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-light">
          Every service KAME provides serves one of three pillars — in this order, because
          each one depends on the last.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {siteConfig.pillars.map((pillar, i) => (
          <div key={pillar.name} className="card text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-700 text-xl font-bold text-white">
              {i + 1}
            </div>
            <h3 className="text-xl">{pillar.name}</h3>
            <p className="mt-2 text-ink-light">{pillar.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-ink-light">
          The result: a business that is <strong className="text-navy-700">easier to find</strong>,{" "}
          <strong className="text-navy-700">easier to trust</strong>, and{" "}
          <strong className="text-navy-700">easier to choose</strong>.
        </p>
      </div>
    </Section>
  );
}

export function WhyInvisible() {
  const reasons = [
    { icon: "map-pin", title: "Unclaimed or Incomplete Google Profile", text: "Customers searching right now find a competitor instead — simply because that competitor claimed their listing." },
    { icon: "alert", title: "Inconsistent Information", text: "A different phone number on Facebook than on Google quietly erodes the trust Google and customers place in a business." },
    { icon: "eye", title: "Zero or Scattered Reviews", text: "No social proof for the moment a customer is deciding between you and a competitor." },
    { icon: "sparkles", title: "Invisible to AI Search", text: "Customers increasingly ask AI tools for recommendations directly — and inconsistent information means being described inaccurately, or not at all." },
  ];
  return (
    <Section>
      <div className="text-center">
        <Eyebrow>The Problem</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Why Good Businesses Become Invisible</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 rounded-xl2 border border-navy-50 bg-white p-6 shadow-card">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-600">
              <Icon name={r.icon} className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg">{r.title}</h3>
              <p className="mt-1 text-sm text-ink-light">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function KameSolution() {
  return (
    <Section className="bg-navy-700 text-white">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow dark>The KAME Solution</Eyebrow>
          <h2 className="text-3xl text-white md:text-4xl">
            We diagnose before we prescribe — then build the system, not just the campaign.
          </h2>
          <p className="mt-4 text-navy-100">
            Every engagement starts with a full Business Visibility Audit. From there, we
            build the specific visibility, trust, and relevance infrastructure your business
            is missing — and keep it running, measured, and reported every month.
          </p>
        </div>
        <div className="space-y-4">
          {["Foundation Check", "Visibility Systems", "Trust & Accuracy Systems", "Relevance & Growth Systems"].map((step, i) => (
            <div key={step} className="flex items-center gap-4 rounded-xl2 bg-navy-800 p-5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-400 font-bold text-navy-900">
                {i + 1}
              </span>
              <span className="font-semibold">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
