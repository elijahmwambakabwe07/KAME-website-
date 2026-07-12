import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig.js";
import { Icon } from "../ui/Icon.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-50 bg-white/95 backdrop-blur">
      <div className="container-kame flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/assets/brand/kame-logo-192.png"
            alt="KAME Digital Marketing Agency logo"
            className="h-12 w-12"
            width="48"
            height="48"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-lg font-bold text-navy-700">KAME</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-ink-faint">
              Digital Marketing Agency
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-navy-700" : "text-ink-light hover:text-navy-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Icon name="message-circle" className="h-4 w-4" />
            WhatsApp
          </a>
          <Link to="/business-visibility-audit" className="btn-primary">
            Get a Free Audit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-navy-700 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-navy-50 bg-white lg:hidden">
          <div className="container-kame flex flex-col gap-1 py-4">
            {siteConfig.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-semibold ${
                    isActive ? "bg-navy-50 text-navy-700" : "text-ink-light"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/business-visibility-audit" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
              Get a Free Audit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
