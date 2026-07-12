import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/layout/SEO.jsx";
import { ServiceSchema, BreadcrumbSchema } from "../components/schema/SchemaComponents.jsx";
import { getServiceBySlug, services } from "../data/services.js";
import { Icon } from "../components/ui/Icon.jsx";
import { Section, Eyebrow } from "../components/ui/Primitives.jsx";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO title={service.title} description={service.shortDescription} path={`/services/${service.slug}`} />
      <ServiceSchema service={service} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />

      <Section className="bg-navy-900 text-white">
        <Link to="/services" className="mb-6 inline-flex items-center gap-1 text-sm text-navy-200 hover:text-white">
          &larr; All Services
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold-400 text-navy-900">
            <Icon name={service.icon} className="h-7 w-7" />
          </div>
          <h1 className="text-3xl text-white md:text-5xl">{service.title}</h1>
        </div>
        <p className="mt-6 max-w-2xl text-lg text-navy-100">{service.overview}</p>
        <Link to="/contact" className="btn-primary mt-8 inline-flex">
          Get Started
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Benefits</Eyebrow>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>What You'll Get</Eyebrow>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-700" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-soft">
        <Eyebrow>Ideal Clients</Eyebrow>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {service.idealClients.map((c) => (
            <div key={c} className="rounded-xl2 border border-navy-50 bg-white p-5 shadow-card">
              {c}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Our Process</Eyebrow>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <div key={step} className="relative rounded-xl2 border border-navy-50 bg-white p-6 shadow-card">
              <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="text-sm text-ink-light">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-700 text-white">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl text-white">Ready to talk about {service.title.toLowerCase()}?</h2>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">
            Contact KAME
          </Link>
        </div>
      </Section>

      {otherServices.length > 0 && (
        <Section>
          <Eyebrow>Explore More Services</Eyebrow>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="rounded-xl2 border border-navy-50 bg-white p-5 shadow-card hover:shadow-elevated">
                <h3 className="text-base">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-light">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
