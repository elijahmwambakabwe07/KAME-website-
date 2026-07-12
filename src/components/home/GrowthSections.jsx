import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services.js";
import { Icon } from "../ui/Icon.jsx";
import { Section, Eyebrow, Card } from "../ui/Primitives.jsx";

export function ServiceHighlights() {
  const featured = services.slice(0, 6);
  return (
    <Section className="bg-surface-soft">
      <div className="text-center">
        <Eyebrow>What We Build</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Complete Business Growth Systems</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-light">
          Every service below serves the same mission: making your business easier to find,
          trust, and choose.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className="group">
            <Card className="h-full transition-shadow hover:shadow-elevated">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-700 text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg group-hover:text-gold-600">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-light">{s.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-700">
                Learn more <Icon name="chevronRight" className="h-4 w-4" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/services" className="btn-secondary">
          View All Services
        </Link>
      </div>
    </Section>
  );
}

export function ClientBenefits() {
  const benefits = [
    { icon: "check", title: "Honest Diagnosis First", text: "We audit before we pitch. You'll always know the truth about your digital foundation." },
    { icon: "zap", title: "Systems, Not Shortcuts", text: "Every deliverable is built to compound over months, not to look good for one campaign." },
    { icon: "bar-chart", title: "Radical Transparency", text: "Real numbers, real comparisons, every month — including when a month underperforms." },
    { icon: "shield", title: "Ethical, Always", text: "No fake reviews, no guaranteed rankings, no manipulative tactics. Ever." },
  ];
  return (
    <Section>
      <div className="text-center">
        <Eyebrow>Why Clients Stay</Eyebrow>
        <h2 className="text-3xl md:text-4xl">What You Can Expect From KAME</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.title} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-50 text-gold-600">
              <Icon name={b.icon} className="h-7 w-7" />
            </div>
            <h3 className="text-lg">{b.title}</h3>
            <p className="mt-2 text-sm text-ink-light">{b.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function WhyChooseKame() {
  const points = [
    "Diagnose before we prescribe — every engagement starts with a real audit",
    "Built specifically for the Zambian market, to a global standard",
    "Human-reviewed AI — fast production, never unreviewed output",
    "One accountable team across strategy, execution, and reporting",
    "Long-term systems thinking over short-term campaign thinking",
  ];
  return (
    <Section className="bg-navy-900 text-white">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow dark>Why Choose KAME</Eyebrow>
          <h2 className="text-3xl text-white md:text-4xl">
            The only agency built entirely around one framework: Visibility, Trust, Relevance.
          </h2>
        </div>
        <ul className="space-y-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400" />
              <span className="text-navy-100">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
