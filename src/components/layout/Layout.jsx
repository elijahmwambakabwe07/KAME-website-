import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CookieConsent, { useCookieConsentVisible } from "./CookieConsent.jsx";
import { siteConfig } from "../../data/siteConfig.js";
import { Icon } from "../ui/Icon.jsx";

export default function Layout({ children }) {
  const [consentVisible, setConsentVisible] = useCookieConsentVisible();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent visible={consentVisible} onChoose={() => setConsentVisible(false)} />

      {/* Persistent WhatsApp CTA — the highest-converting contact channel.
          Lifted above the cookie banner while it's showing so the two never overlap. */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KAME on WhatsApp"
        className={`fixed right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-all hover:scale-105 ${
          consentVisible ? "bottom-28 sm:bottom-24" : "bottom-6"
        }`}
      >
        <Icon name="message-circle" className="h-7 w-7" />
      </a>
    </div>
  );
}
