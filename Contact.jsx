import React, { useState } from "react";
import SEO from "../components/layout/SEO.jsx";
import { BreadcrumbSchema, LocalBusinessSchema } from "../components/schema/SchemaComponents.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { Icon } from "../components/ui/Icon.jsx";
import { Section, Eyebrow } from "../components/ui/Primitives.jsx";

function encodeForNetlify(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForNetlify({ "form-name": "contact", ...form }),
      });
      setStatus("success");
      setForm({ name: "", email: "", phone: "", business: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with KAME Digital Marketing Agency — WhatsApp, phone, email, or the contact form below." path="/contact" />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <LocalBusinessSchema />

      <Section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>Get In Touch</Eyebrow>
          <h1 className="text-4xl text-white md:text-5xl">Let's Talk About Your Business</h1>
          <p className="mt-4 text-lg text-navy-100">
            The fastest way to reach us is WhatsApp. For anything formal, email works too.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <form onSubmit={handleSubmit} name="contact" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold">Name</label>
                <input id="contact-name" required name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold">Email</label>
                <input id="contact-email" required type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold">Phone / WhatsApp</label>
                <input id="contact-phone" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="contact-business" className="mb-1 block text-sm font-semibold">Business Name</label>
                <input id="contact-business" name="business" value={form.business} onChange={handleChange} className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold">Message</label>
              <textarea id="contact-message" required name="message" rows="5" value={form.message} onChange={handleChange} className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none" />
            </div>
            <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto disabled:opacity-60">
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="text-sm font-semibold text-green-700">Thank you — we'll be in touch shortly.</p>}
            {status === "error" && <p className="text-sm font-semibold text-red-700">Something went wrong. Please try WhatsApp or email instead.</p>}
          </form>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center gap-3">
                <Icon name="message-circle" className="h-6 w-6 text-navy-700" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-light hover:text-navy-700">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3">
                <Icon name="phone" className="h-6 w-6 text-navy-700" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-ink-light">{siteConfig.contact.phone} &middot; {siteConfig.contact.phoneAlt}</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3">
                <Icon name="mail" className="h-6 w-6 text-navy-700" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-ink-light hover:text-navy-700">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <Icon name="clock" className="mt-0.5 h-6 w-6 text-navy-700" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  {siteConfig.contact.hours.map((h) => (
                    <p key={h.days} className="text-sm text-ink-light">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder — swap the src once a real Google Maps embed URL / API key exists */}
            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="pin" className="h-6 w-6 text-navy-700" />
                <p className="font-semibold">{siteConfig.contact.address}</p>
              </div>
              <div className="flex h-48 items-center justify-center rounded-lg bg-surface-muted text-sm text-ink-faint">
                Google Maps embed placeholder — add VITE_GOOGLE_MAPS_EMBED_URL once available
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
