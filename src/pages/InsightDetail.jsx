import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/layout/SEO.jsx";
import { ArticleSchema, BreadcrumbSchema } from "../components/schema/SchemaComponents.jsx";
import { getInsightBySlug, insights } from "../data/insights.js";
import ArticleBody from "../components/ui/ArticleBody.jsx";
import { Badge } from "../components/ui/Primitives.jsx";
import { Section } from "../components/ui/Primitives.jsx";

export default function InsightDetail() {
  const { slug } = useParams();
  const post = getInsightBySlug(slug);

  if (!post) return <Navigate to="/insights" replace />;

  const related = insights.filter((i) => i.slug !== slug && i.category === post.category).slice(0, 3);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/insights/${post.slug}`} type="article" />
      <ArticleSchema article={post} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Business Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ]}
      />

      <Section className="bg-navy-900 text-white">
        <Link to="/insights" className="mb-6 inline-flex items-center gap-1 text-sm text-navy-200 hover:text-white">
          &larr; All Insights
        </Link>
        <Badge tone="gold">{post.category}</Badge>
        <h1 className="mt-4 text-3xl text-white md:text-5xl">{post.title}</h1>
        <div className="mt-6 flex items-center gap-4 text-sm text-navy-200">
          <span>{post.author}</span>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
          <span>&middot;</span>
          <span>{new Date(post.publishedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
      </Section>

      <div className="container-kame -mt-8 mb-8">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full rounded-xl2 shadow-elevated"
          width="1200"
          height="630"
        />
      </div>

      <Section className="max-w-3xl !pt-0">
        <ArticleBody content={post.content} />
        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-surface-muted px-3 py-1 text-xs text-ink-light">
              #{tag}
            </span>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-surface-soft">
          <h2 className="text-2xl">Related Articles</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/insights/${r.slug}`} className="rounded-xl2 border border-navy-50 bg-white p-5 shadow-card hover:shadow-elevated">
                <Badge tone="gold">{r.category}</Badge>
                <h3 className="mt-3 text-base">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
