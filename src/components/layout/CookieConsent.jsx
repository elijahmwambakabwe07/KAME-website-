import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "kame_cookie_consent";

/**
 * Simple cookie consent banner. Stores the visitor's choice in
 * localStorage so it only shows once. This banner itself does not set
 * any tracking cookies — it exists specifically so that IF analytics or
 * other tracking is added later (see docs/ENVIRONMENT_VARIABLES_GUIDE.md,
 * VITE_GA_MEASUREMENT_ID), that code can check getCookieConsent() first
 * and only run after the visitor has actually accepted.
 *
 * This is engineering scaffolding, not a legal opinion — pair it with a
 * real, lawyer-reviewed Privacy Policy (src/pages/PrivacyPolicy.jsx is
 * currently a placeholder) before relying on it for compliance.
 */
export function getCookieConsent() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(CONSENT_KEY); // "accepted" | "declined" | null
}

/** Shared so Layout.jsx can reposition the WhatsApp button while the banner is showing. */
export function useCookieConsentVisible() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
  }, []);
  return [visible, setVisible];
}

export default function CookieConsent({ visible, onChoose }) {
  if (!visible) return null;

  const choose = (value) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    onChoose();
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-100 bg-white p-4 shadow-elevated sm:p-5"
    >
      <div className="container-kame flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-light">
          We use essential cookies to run this site, and — only with your permission — optional
          cookies to understand how it's used. See our{" "}
          <Link to="/privacy-policy" className="font-semibold text-navy-700 hover:underline">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            onClick={() => choose("declined")}
            className="rounded-lg border-2 border-navy-700 px-4 py-2 text-sm font-semibold text-navy-700 hover:bg-navy-700 hover:text-white"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-lg bg-gold-400 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-gold-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
