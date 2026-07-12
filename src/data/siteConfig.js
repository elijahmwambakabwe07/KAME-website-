// Central site configuration — the single source of truth for brand details,
// contact info, and navigation. Update here and it propagates everywhere.

export const siteConfig = {
  name: "KAME Digital Marketing Agency",
  shortName: "KAME",
  tagline: "We don't just do Marketing. We Build Systems that Grow Business.",
  positioning: "Zambia's Leading Business Visibility Agency",
  url: "https://www.kamedigital.co.zm",
  description:
    "KAME builds the visibility, trust, and relevance systems that make good Zambian businesses easy to find, easy to verify, and effortless to choose — online, in Google, and in AI search.",
  founder: "Elijah Kabwe",
  ecosystem: {
    diagnosis: "Kabwe's Family Digital Consultant",
    execution: "KAME Digital Marketing Agency",
    education: "KAME Academy",
  },
  contact: {
    phone: "+260 770 151 514",
    phoneAlt: "+260 976 737 755",
    whatsapp: "260770151514",
    email: "hello@kamedigital.co.zm",
    address: "Lusaka, Zambia",
    hours: [
      { days: "Monday \u2013 Friday", time: "08:00 \u2013 17:00" },
      { days: "Saturday", time: "09:00 \u2013 13:00" },
      { days: "Sunday", time: "Closed" },
    ],
  },
  social: {
    facebook: "https://facebook.com/kamedigitalagency",
    tiktok: "https://tiktok.com/@kame.j3",
    instagram: "https://instagram.com/kf.digitalconsultant",
    linkedin: "https://linkedin.com/company/kame-digital",
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
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  footerLinks: {
    company: [
      { label: "About KAME", path: "/about" },
      { label: "Business Insights", path: "/insights" },
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
