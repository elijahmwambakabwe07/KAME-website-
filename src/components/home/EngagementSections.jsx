import React from "react";
import { Link } from "react-router-dom";
import { insights } from "../../data/insights.js";
import { testimonials } from "../../data/testimonials.js";
import { siteConfig } from "../../data/siteConfig.js";
import { Icon } from "../ui/Icon.jsx";
import { Section, Eyebrow, Card, Badge } from "../ui/Primitives.jsx";

export function InsightsPreview() {
  const latest = insights.slice(0, 3);
  return (
    <Section className="bg-surface-soft">
      <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <Eyebrow>Business Insights</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Learn With Us</h2>
        </div>
        <Link to="/insights" className="btn-secondary flex-shrink-0">
          View All Insights
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {latest.map((post) => (
          <Link key={post.slug} to={`/insights/${post.slug}`}>
            <Card className="h-full overflow-hidden !p-0">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="h-36 w-full object-cover"
                loading="lazy"
                width="800"
                height="450"
              />
              <div className="p-6">
                <Badge tone="gold">{post.category}</Badge>
                <h3 className="mt-3 text-lg">{post.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{post.excerpt}</p>
                <p className="mt-4 text-xs text-ink-faint">{post.readingTime}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function TestimonialsPreview() {
  return (
    <Section>
      <div className="text-center">
        <Eyebrow>Client Results</Eyebrow>
        <h2 className="text-3xl md:text-4xl">What Our Clients Say</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i} className={t.isPlaceholder ? "border-dashed opacity-70" : ""}>
            <p className="italic text-ink-light">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 font-semibold text-navy-700">{t.author}</p>
            <p className="text-sm text-ink-faint">{t.business}</p>
            {t.isPlaceholder && (
              <p className="mt-3 text-xs uppercase tracking-wide text-gold-600">Placeholder — pending real client permission</p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function AuditCTA() {
  return (
    <Section className="bg-gold-400">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl text-navy-900 md:text-4xl">See Exactly Where You're Losing Customers</h2>
        <p className="mt-4 text-lg text-navy-800">
          Get a free, honest Business Visibility Audit — no obligation, no sales pressure.
          Just a clear picture of where your business stands today.
        </p>
        <Link to="/business-visibility-audit" className="btn-secondary mt-8 inline-flex border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
          Start My Free Audit
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

export function ContactCTA() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl rounded-xl2 border border-navy-50 bg-surface-soft p-10 text-center shadow-card">
        <h2 className="text-3xl md:text-4xl">Ready to Build Your Growth System?</h2>
        <p className="mt-4 text-lg text-ink-light">
          Tell us about your business. We'll start with an honest diagnosis — not a sales pitch.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Icon name="message-circle" className="h-4 w-4" />
            Message Us on WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
