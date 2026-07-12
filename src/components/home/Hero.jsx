import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig.js";
import { Icon } from "../ui/Icon.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Subtle geometric background accent — no distracting animation */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F4A623 0, #F4A623 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="container-kame relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            {siteConfig.positioning}
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            We Don&rsquo;t Just Do Marketing.
            <br />
            <span className="text-gold-400">We Build Systems That Grow Business.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-100 md:text-xl">
            KAME builds the visibility, trust, and relevance systems that make good Zambian
            businesses impossible to miss, easy to verify, and effortless to choose — on
            Google, in AI search, and everywhere your customers are already looking.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/business-visibility-audit" className="btn-primary w-full sm:w-auto">
              Get Your Free Business Visibility Audit
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services" className="w-full rounded-lg border-2 border-white/30 px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
