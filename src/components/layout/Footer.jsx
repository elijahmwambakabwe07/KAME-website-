import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig.js";
import { services } from "../../data/services.js";
import { Icon } from "../ui/Icon.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-50 bg-navy-900 text-navy-100">
      <div className="container-kame py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/assets/brand/kame-logo-192.png" alt="KAME logo" className="h-12 w-12" width="48" height="48" loading="lazy" />
              <span className="text-lg font-bold text-white">KAME</span>
            </div>
            <p className="text-sm text-navy-200">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-navy-300">{siteConfig.positioning}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-navy-200 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">Company</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerLinks.company.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-navy-200 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">Contact</h3>
            <ul className="space-y-3 text-sm text-navy-200">
              <li className="flex items-center gap-2">
                <Icon name="phone" className="h-4 w-4 text-gold-400" /> {siteConfig.contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 text-gold-400" /> {siteConfig.contact.email}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 text-gold-400" /> {siteConfig.contact.address}
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-navy-300 hover:text-white">
                <Icon name="facebook" className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-navy-300 hover:text-white">
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-navy-300 hover:text-white">
                <Icon name="linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl2 border border-navy-700 bg-navy-800 p-6 text-center text-sm text-navy-200">
          <span className="font-semibold text-white">{siteConfig.ecosystem.diagnosis}</span> maps the road.{" "}
          <span className="font-semibold text-white">{siteConfig.ecosystem.execution}</span> drives the vehicle.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 text-xs text-navy-400 md:flex-row">
          <p>&copy; {year} KAME Digital Marketing Agency. All rights reserved.</p>
          <div className="flex gap-4">
            {siteConfig.footerLinks.legal.map((l) => (
              <Link key={l.path} to={l.path} className="hover:text-navy-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
