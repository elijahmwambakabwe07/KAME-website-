// Central site configuration — the single source of truth for brand details,
// contact info, and navigation. Update here and it propagates everywhere.

export const siteConfig = {
  name: "KAME Digital Marketing Agency",
  shortName: "KAME",
  tagline: "We don't just market businesses. We build systems that grow businesses.",
  positioning: "Zambia's Leading Business Visibility Agency",
  url: "https://kamedma.com",
  description:
    "KAME builds the visibility, trust, and relevance systems that make good Zambian businesses easy to find, easy to verify, and effortless to choose — online, in Google, and in AI search.",
  founder: "Elijah Kabwe",
  ecosystem: {
    diagnosis: "Kabwe's Family Digital Consultant",
    execution: "KAME Digital Marketing Agency",
    education: "KAME Academy",
  },
  contact: {
    phone: "+260 965 958 100",
    phoneDial: "+260965958100",
    whatsapp: "260965958100",
    email: "hello@kamedma.com",
    auditEmail: "audit@kamedma.com",
    address: "Lusaka, Zambia",
    hours: [
      { days: "Monday \u2013 Friday", time: "08:00 \u2013 17:00" },
      { days: "Saturday", time: "09:00 \u2013 13:00" },
      { days: "Sunday", time: "Closed" },
    ],
  },
  social: {
    facebook: "https://facebook.com/kamedma",
    tiktok: "https://tiktok.com/@kamedma",
    instagram: "https://instagram.com/kamedma",
    linkedin: "https://linkedin.com/company/kamedma",
    youtube: "https://youtube.com/@kamedma",
  },
  // KAME Visibility Pro — premium tier, architecture-only per V1.0 scope.
  // No payment processing, no billing, no subscriptions are implemented.
  // This config exists purely to drive the "coming soon" waiting-list UI.
  premium: {
    productName: "KAME Visibility Pro",
    status: "launching_soon",
    waitingListEnabled: true,
    futurePaymentMethods: ["MTN MoMo", "Airtel Money", "Zamtel Kwacha", "Visa", "Mastercard"],
  },
  pillars: [
    {
      name: "Visibility",
      description: "Can the customer find the business at all — on Google, Maps, and social platforms?",
    },
    {
      name: "Trust & Accuracy",
      description: "Is the information consistent and credible once the customer finds it?",
    },
    {
      name: "Relevance",
      description: "Does the business's content and offer actually speak to what the customer wants right now?",
    },
  ],
  navigation: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Business Visibility Audit", path: "/business-visibility-audit" },
    { label: "Business Insights", path: "/insights" },
    { label: "Pricing", path: "/pricing" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  footerLinks: {
    company: [
      { label: "About KAME", path: "/about" },
      { label: "Business Insights", path: "/insights" },
      { label: "Pricing", path: "/pricing" },
      { label: "Contact", path: "/contact" },
      { label: "Client Portal", path: "/portal/login" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms of Service", path: "/terms-of-service" },
    ],
  },
};

export default siteConfig;
