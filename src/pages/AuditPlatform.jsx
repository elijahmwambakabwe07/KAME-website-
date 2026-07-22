import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO.jsx";
import { BreadcrumbSchema } from "../components/schema/SchemaComponents.jsx";
import { useAuditRunner } from "../hooks/useAuditRunner.js";
import { Icon } from "../components/ui/Icon.jsx";
import { Section, Eyebrow } from "../components/ui/Primitives.jsx";
import { siteConfig } from "../data/siteConfig.js";

function StatusBadge({ status }) {
  const map = {
    connected: { label: "Live Data", cls: "bg-green-50 text-green-700" },
    not_configured: { label: "Coming Online", cls: "bg-amber-50 text-amber-700" },
    error: { label: "Temporarily Unavailable", cls: "bg-red-50 text-red-700" },
  };
  const cfg = map[status] || map.not_configured;
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cfg.cls}`}>{cfg.label}</span>;
}

function FreeResultCard({ result }) {
  return (
    <div className="rounded-xl2 border border-navy-50 bg-white p-6 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-navy-700">{result.label}</h3>
        <StatusBadge status={result.status} />
      </div>
      {result.status === "connected" ? (
        <pre className="mt-4 max-h-64 overflow-auto rounded-lg bg-surface-muted p-4 text-xs text-ink-light">
          {JSON.stringify(result.data, null, 2)}
        </pre>
      ) : (
        <p className="mt-3 text-sm text-ink-light">
          {result.status === "not_configured"
            ? "This check is fully built into KAME's audit engine and will show live results as soon as this data source is connected on our end — no action needed from you."
            : result.message}
        </p>
      )}
    </div>
  );
}

function PremiumResultCard({ result }) {
  return (
    <div className="relative overflow-hidden rounded-xl2 border border-gold-200 bg-navy-900 p-6 text-white shadow-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">{result.label}</h3>
        <span className="flex items-center gap-1 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-navy-900">
          <Icon name="lock" className="h-3 w-3" /> Premium
        </span>
      </div>
      <p className="mt-4 text-sm text-navy-200">
        &#128274; Premium Feature — Available with {siteConfig.premium.productName}
      </p>
      <p className="mt-2 text-xs text-navy-300">
        This module goes deeper than a free audit can — real competitor data, ranking history, and AI visibility tracking, prepared by KAME's consulting team rather than generated instantly.
      </p>
      <Link to="/pricing" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-400 hover:text-gold-300">
        Join the Waiting List <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function AuditPlatform() {
  const [url, setUrl] = useState("");
  const { results, loading, run } = useAuditRunner();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    const normalised = url.startsWith("http") ? url : `https://${url}`;
    run(normalised);
  };

  const freeResults = results?.filter((r) => r.tier === "free") ?? [];
  const premiumResults = results?.filter((r) => r.tier === "premium") ?? [];
  const connectedCount = freeResults.filter((r) => r.status === "connected").length;

  return (
    <>
      <SEO
        title="Business Visibility Audit"
        description="Run a real, free Business Visibility Audit — PageSpeed, SSL, metadata, and more — plus a preview of KAME Visibility Pro's premium modules."
        path="/business-visibility-audit"
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Business Visibility Audit", path: "/business-visibility-audit" }]} />

      <Section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>Free Audit</Eyebrow>
          <h1 className="text-4xl text-white md:text-5xl">Business Visibility Audit</h1>
          <p className="mt-4 text-lg text-navy-100">
            Enter a website URL to run KAME's audit engine. Every free result you see is
            either real, live data — or an honest note that the check is still coming
            online. We never fabricate a score.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="yourbusiness.com"
            aria-label="Website URL to audit"
            className="w-full rounded-lg border-0 px-4 py-3 text-ink focus:outline-none focus:ring-4 focus:ring-gold-400/40"
          />
          <button type="submit" disabled={loading} className="btn-primary flex-shrink-0 disabled:opacity-60">
            {loading ? "Running Audit..." : "Run Free Audit"}
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-navy-300">
          Prefer a consultant to walk through it with you? <Link to="/contact" className="font-semibold text-gold-400 hover:underline">Book a consultation</Link> instead.
        </p>
      </Section>

      {results && (
        <>
          <Section>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl">Free Audit Results</h2>
              <p className="text-sm text-ink-light">
                {connectedCount} of {freeResults.length} checks returned live data
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {freeResults.map((r) => (
                <FreeResultCard key={r.id} result={r} />
              ))}
            </div>
          </Section>

          <Section className="bg-navy-800">
            <div className="mb-8 text-center text-white">
              <Eyebrow dark>Go Deeper</Eyebrow>
              <h2 className="text-2xl text-white">Premium Visibility Modules</h2>
              <p className="mx-auto mt-2 max-w-xl text-navy-200">
                Competitor intelligence, keyword gaps, backlink analysis, and AI visibility tracking — available with {siteConfig.premium.productName}, launching soon.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {premiumResults.map((r) => (
                <PremiumResultCard key={r.id} result={r} />
              ))}
            </div>
          </Section>
        </>
      )}

      <Section className="bg-surface-soft">
        <Eyebrow>How This Works</Eyebrow>
        <h2 className="text-2xl">A Modular, Honest Audit Architecture</h2>
        <p className="mt-4 max-w-2xl text-ink-light">
          This platform is built as a set of independent modules — one per data source
          (PageSpeed, SSL, Google Business Profile, and more). Free modules are either
          live today or actively being connected. Premium modules — competitor
          intelligence, keyword gaps, backlink analysis, AI visibility, GEO, and AEO —
          belong to {siteConfig.premium.productName} and are built to feel like a real
          consulting deliverable, not a locked error message.
        </p>
        <Link to="/pricing" className="btn-secondary mt-6 inline-flex">
          See {siteConfig.premium.productName} Pricing
        </Link>
      </Section>
    </>
  );
}
