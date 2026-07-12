import React from "react";
import { Link } from "react-router-dom";

export function Container({ children, className = "" }) {
  return <div className={`container-kame ${className}`}>{children}</div>;
}

export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, dark = false }) {
  // Light gold (gold-500) only has ~2.7:1 contrast on white/light backgrounds,
  // which fails WCAG AA (needs 4.5:1). On dark navy backgrounds it's fine
  // (~6.2:1). Pass dark={true} when this sits on a bg-navy-700/900 section.
  const toneClass = dark ? "text-gold-400" : "text-gold-700";
  return <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${toneClass}`}>{children}</p>;
}

export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function Badge({ children, tone = "navy" }) {
  const tones = {
    navy: "bg-navy-50 text-navy-700",
    gold: "bg-gold-50 text-gold-700",
    muted: "bg-surface-muted text-ink-light",
  };
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function ButtonLink({ to, href, children, variant = "primary", ...props }) {
  const classes = variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost";
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
}
