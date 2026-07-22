import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO.jsx";
import { BreadcrumbSchema } from "../components/schema/SchemaComponents.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { Icon } from "../components/ui/Icon.jsx";
import { Section, Eyebrow, Card } from "../components/ui/Primitives.jsx";

function encodeForNetlify(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function WaitingListForm() {
  const [form, setForm] = useState({ name: "", email: "", business: "", plan: "", "bot-field": "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form["bot-field"]) {
      setStatus("success");
      return;
    }
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForNetlify({ "form-name": "waiting-list", ...form }),
      });
      setStatus("success");
      setForm({ name: "", email: "", business: "", plan: "", "bot-field": "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl2 bg-green-50 p-6 text-center text-green-800">
        <p className="font-semibold">You're on the list.</p>
        <p className="mt-1 text-sm">We'll reach out personally as soon as {siteConfig.premium.productName} opens — no spam, no payment taken today.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} name="waiting-list" className="space-y-4">
      <input type="hidden" name="form-name" value="waiting-list" />
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this field blank
          <input tabIndex={-1} autoComplete="off" name="bot-field" value={form["bot-field"]} onChange={handleChange} />
        </label>
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wl-name" className="mb-1 block text-sm font-semibold">Name</label>
          <input id="wl-name" required name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="wl-email" className="mb-1 block text-sm font-semibold">Email</label>
          <input id="wl-email" required type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none" />
        </div>
      </div>
      <div>
        <label htmlFor="wl-business" className="mb-1 block text-sm font-semibold">Business Name</label>
        <input id="wl-business" name="business" value={form.business} onChange={handleChange} className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none" />
      </div>
      <input type="hidden" name="plan" value={form.plan} />
      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
        {status === "submitting" ? "Joining..." : "Join the Waiting List"}
      </button>
      {status === "error" && <p className="text-sm font-semibold text-red-700">Something went wrong — please try again or WhatsApp us directly.</p>}
      <p className="text-xs text-ink-faint">No payment is collected today. We'll contact you personally when {siteConfig.premium.productName} is ready to launch.</p>
    </form>
  );
}

const plans = [
  {
    name: "Visibility Starter",
    price: "Free",
    period: "",
    description: "The free Business Visibility Audit — real checks, honest results.",
    features: ["Google PageSpeed & Core Web Vitals", "SSL, metadata, and Open Graph checks", "Sitemap and robots.txt validation", "Structured data review"],
    cta: "Run Free Audit",
    to: "/business-visibility-audit",
    highlight: false,
  },
  {
    name: "Visibility Pro",
    price: "ZMW —",
    period: "/month",
    description: "Full premium audit suite plus ongoing monitoring — pricing confirmed at launch.",
    features: ["Everything in Starter", "Competitor Intelligence", "Keyword Gap Analysis", "Backlink Analysis (Ahrefs / Semrush)", "AI Visibility, GEO & AEO tracking", "Monthly Business Visibility Report"],
    cta: "Join Waiting List",
    to: "#waiting-list",
    highlight: true,
  },
  {
    name: "Managed Growth",
    price: "Custom",
    period: "",
    description: "The full KAME monthly retainer — audits, execution, and reporting handled end to end.",
    features: ["Everything in Visibility Pro", "Dedicated account manager", "Content, ads & automation execution", "Monthly strategy call"],
    cta: "Book a Consultation",
    to: "/contact",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description={`${siteConfig.premium.productName} is launching soon. See KAME's pricing structure and join the waiting list for premium visibility features.`}
        path="/pricing"
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />

      <Section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>Pricing</Eyebrow>
          <h1 className="text-4xl text-white md:text-5xl">{siteConfig.premium.productName} Is Launching Soon</h1>
          <p className="mt-4 text-lg text-navy-100">
            Free, honest audits today. A premium visibility suite — built for businesses ready to go deeper — coming soon.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl2 border p-8 shadow-card ${plan.highlight ? "border-gold-400 bg-navy-900 text-white ring-2 ring-gold-400" : "border-navy-50 bg-white"}`}
            >
              {plan.highlight && (
                <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-navy-900">
                  <Icon name="crown" className="h-3 w-3" /> Coming Soon
                </span>
              )}
              <h2 className={plan.highlight ? "text-white" : ""}>{plan.name}</h2>
              <p className={`mt-2 text-sm ${plan.highlight ? "text-navy-200" : "text-ink-light"}`}>{plan.description}</p>
              <p className="mt-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={plan.highlight ? "text-navy-300" : "text-ink-faint"}> {plan.period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Icon name="check" className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlight ? "text-gold-400" : "text-navy-700"}`} />
                    <span className={plan.highlight ? "text-navy-100" : "text-ink-light"}>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.to.startsWith("#") ? (
                <a href={plan.to} className={`mt-8 block rounded-lg px-6 py-3 text-center font-semibold ${plan.highlight ? "bg-gold-400 text-navy-900 hover:bg-gold-500" : "border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"}`}>
                  {plan.cta}
                </a>
              ) : (
                <Link to={plan.to} className={`mt-8 block rounded-lg px-6 py-3 text-center font-semibold ${plan.highlight ? "bg-gold-400 text-navy-900 hover:bg-gold-500" : "border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"}`}>
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="waiting-list" className="bg-surface-soft">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <Eyebrow>Be First</Eyebrow>
            <h2 className="text-3xl md:text-4xl">Join the {siteConfig.premium.productName} Waiting List</h2>
            <p className="mt-4 text-ink-light">
              Be the first to know when premium modules — competitor intelligence, keyword gaps, backlink analysis, and AI visibility tracking — go live.
            </p>
          </div>
          <Card className="mt-8">
            <WaitingListForm />
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Eyebrow>Future Payment Options</Eyebrow>
          <h2 className="text-2xl">Built for How Zambia Actually Pays</h2>
          <p className="mx-auto mt-2 max-w-xl text-ink-light">
            {siteConfig.premium.productName} is being built to support the payment methods our clients already use. None of these are active yet — they're on the roadmap for launch.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {siteConfig.premium.futurePaymentMethods.map((method) => (
            <span key={method} className="rounded-full border border-navy-100 bg-white px-5 py-2 text-sm font-medium text-ink-light shadow-card">
              {method} <span className="text-ink-faint">(coming soon)</span>
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
