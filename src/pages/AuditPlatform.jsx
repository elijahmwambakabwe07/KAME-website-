import React, { useState } from "react";
import SEO from "../components/layout/SEO.jsx";
import { BreadcrumbSchema } from "../components/schema/SchemaComponents.jsx";
import { useAuditRunner } from "../hooks/useAuditRunner.js";
import { Icon } from "../components/ui/Icon.jsx";
import { Section, Eyebrow } from "../components/ui/Primitives.jsx";

function StatusBadge({ status }) {
  const map = {
    connected: { label: "Live Data", cls: "bg-green-50 text-green-700" },
    not_configured: { label: "API Connection Required", cls: "bg-amber-50 text-amber-700" },
    error: { label: "Error", cls: "bg-red-50 text-red-700" },
  };
  const cfg = map[status] || map.not_configured;
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cfg.cls}`}>{cfg.label}</span>;
}

function ResultCard({ result }) {
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
        <p className="mt-3 text-sm text-ink-light">{result.message}</p>
      )}
      {result.docsUrl && (
        <a href={result.docsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-navy-700 hover:underline">
          View setup docs →
        </a>
      )}
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

  const connectedCount = results?.filter((r) => r.status === "connected").length ?? 0;

  return (
    <>
      <SEO
        title="Business Visibility Audit"
        description="Run a real Business Visibility Audit — Google PageSpeed Insights, SSL, metadata, structured data, and more, with no fabricated scores."
        path="/business-visibility-audit"
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Business Visibility Audit", path: "/business-visibility-audit" }]} />

      <Section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>Free Audit</Eyebrow>
          <h1 className="text-4xl text-white md:text-5xl">Business Visibility Audit</h1>
          <p className="mt-4 text-lg text-navy-100">
            Enter a website URL to run KAME's audit engine. Every result you see is either
            real, live data — or an honest &ldquo;API Connection Required&rdquo; notice.
            We never fabricate a score.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="yourbusiness.com"
            className="w-full rounded-lg border-0 px-4 py-3 text-ink focus:outline-none focus:ring-4 focus:ring-gold-400/40"
          />
          <button type="submit" disabled={loading} className="btn-primary flex-shrink-0 disabled:opacity-60">
            {loading ? "Running Audit..." : "Run Audit"}
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </form>
      </Section>

      {results && (
        <Section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl">Audit Results</h2>
            <p className="text-sm text-ink-light">
              {connectedCount} of {results.length} checks returned live data
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {results.map((r) => (
              <ResultCard key={r.id} result={r} />
            ))}
          </div>
        </Section>
      )}

      <Section className="bg-surface-soft">
        <Eyebrow>How This Works</Eyebrow>
        <h2 className="text-2xl">A Modular, Honest Audit Architecture</h2>
        <p className="mt-4 max-w-2xl text-ink-light">
          This platform is built as a set of independent connectors — one per data source
          (PageSpeed, SSL, Google Business Profile, Search Console, and more). Each connector
          is either fully connected to a live API, or clearly marked{" "}
          <strong>&ldquo;API Connection Required&rdquo;</strong> until it is. As KAME connects
          more data sources — starting with PageSpeed Insights, then progressively Google
          Business Profile, Search Console, and eventually premium tools like Semrush and
          Ahrefs — this same page automatically shows richer results. No rebuild required.
        </p>
      </Section>
    </>
  );
}
