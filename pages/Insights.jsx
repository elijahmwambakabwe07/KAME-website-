import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO.jsx";
import { BreadcrumbSchema } from "../components/schema/SchemaComponents.jsx";
import { insights, insightCategories } from "../data/insights.js";
import { Icon } from "../components/ui/Icon.jsx";
import { Section, Eyebrow, Card, Badge } from "../components/ui/Primitives.jsx";

const PAGE_SIZE = 6;

export default function Insights() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return insights.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <SEO
        title="Business Insights"
        description="Practical, honest insights on SEO, Google Business Profile, AI Visibility, GEO, AEO, automation, and business growth for Zambian businesses."
        path="/insights"
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Business Insights", path: "/insights" }]} />

      <Section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>Business Insights</Eyebrow>
          <h1 className="text-4xl text-white md:text-5xl">Learn With KAME</h1>
          <p className="mt-4 text-lg text-navy-100">
            Practical, no-fluff writing on visibility, trust, and growth — for Zambian
            business owners who want to understand the &ldquo;why,&rdquo; not just the &ldquo;what.&rdquo;
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-xs">
            <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search articles..."
              className="w-full rounded-lg border border-navy-100 py-2.5 pl-10 pr-4 text-sm focus:border-navy-700 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...insightCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setPage(1);
                }}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  category === cat ? "bg-navy-700 text-white" : "bg-surface-muted text-ink-light hover:bg-navy-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {pageItems.length === 0 ? (
          <p className="py-16 text-center text-ink-light">No articles match your search yet. Try a different term or category.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pageItems.map((post) => (
              <Link key={post.slug} to={`/insights/${post.slug}`}>
                <Card className="h-full overflow-hidden !p-0">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                  <div className="p-6">
                    <Badge tone="gold">{post.category}</Badge>
                    <h2 className="mt-3 text-lg">{post.title}</h2>
                    <p className="mt-2 text-sm text-ink-light">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-ink-faint">
                      <span>{post.author}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-9 w-9 rounded-lg text-sm font-semibold ${
                  page === p ? "bg-navy-700 text-white" : "bg-surface-muted text-ink-light hover:bg-navy-50"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
