export const insightCategories = [
  "SEO",
  "Google Business Profile",
  "AI Visibility",
  "GEO",
  "AEO",
  "Digital Marketing",
  "Business Growth",
  "Automation",
  "Business Systems",
  "Zambian Business",
];

// Seed articles. Each has enough real, useful content to publish as-is;
// add new entries here and they automatically appear in listing, search,
// category filters, and get a detail page via /insights/:slug.
export const insights = [
  {
    slug: "why-good-businesses-stay-invisible-online",
    title: "Why Good Businesses Stay Invisible Online",
    excerpt:
      "Quality of product and quality of digital visibility are two separate things. Here's why that gap costs Zambian businesses customers every day.",
    category: "Business Growth",
    tags: ["visibility", "foundations", "zambia"],
    author: "KAME Team",
    readingTime: "5 min read",
    publishedAt: "2026-05-12",
    featuredImage: "/assets/insights/placeholder-1.svg",
    content: `Good businesses lose customers they deserve to keep, for reasons that have nothing to do with the quality of what they sell. A tailor with better work than anyone on his street. A restaurant whose food people rave about in person. A hardware store that's earned twenty years of neighbourhood trust.

All of them can still be invisible to the one customer who is actively looking for exactly what they sell — searching on a phone, right now, and finding a competitor instead, simply because that competitor claimed their Google Business Profile and this business didn't.

This is not a marketing problem in the way most people mean it. It's not about being loud, clever, or having a big advertising budget. It's about being findable, accurate, and trustworthy in the exact moment a customer is deciding.

**The three things that make a business invisible**

1. An unclaimed or incomplete Google Business Profile
2. Inconsistent contact details across platforms (a different phone number on Facebook than on Google)
3. Zero or scattered reviews, split across duplicate listings

Fixing these three things, in this order, is almost always the highest-leverage thing a small business can do before spending a single Kwacha on advertising.`,
  },
  {
    slug: "google-business-profile-checklist",
    title: "The Complete Google Business Profile Checklist",
    excerpt:
      "Claimed, verified, and complete isn't enough. Here's the full checklist KAME runs before recommending any paid advertising.",
    category: "Google Business Profile",
    tags: ["gbp", "local seo", "checklist"],
    author: "KAME Team",
    readingTime: "6 min read",
    publishedAt: "2026-05-28",
    featuredImage: "/assets/insights/placeholder-2.svg",
    content: `Before any KAME client runs a single advert, we confirm their Google Business Profile passes this checklist. Skipping it means paying to send traffic to a foundation that can't hold it.

**Foundation**
- Profile claimed and verified
- Correct primary and secondary categories
- Business name matches your signage exactly (no keyword stuffing)
- Hours accurate, including holidays

**Trust signals**
- At least 10 genuine reviews before ad spend begins
- Every review responded to, positive or negative
- Photos updated within the last 30 days

**Consistency**
- Name, address, and phone number identical across Google, Facebook, and WhatsApp
- Website URL correct and working

**Ongoing activity**
- At least one post per week
- Questions & Answers section monitored and answered

A profile that passes all of this is ready for paid traffic. One that doesn't will make a good ad campaign look like it failed — when the real problem was upstream all along.`,
  },
  {
    slug: "ai-search-is-already-here",
    title: "AI Search Is Already Here — Is Your Business Ready?",
    excerpt:
      "Customers are starting to ask ChatGPT and Google's AI Overviews for recommendations directly. Here's what that means for how you show up online.",
    category: "AI Visibility",
    tags: ["ai visibility", "aeo", "geo"],
    author: "KAME Team",
    readingTime: "7 min read",
    publishedAt: "2026-06-10",
    featuredImage: "/assets/insights/placeholder-3.svg",
    content: `A growing share of customer research no longer starts with a Google search bar — it starts with a question typed into ChatGPT, Perplexity, or Google's own AI Overviews. That shift rewards businesses whose information is accurate and consistent everywhere it appears, and quietly penalises businesses that are inconsistent or absent.

**Two new disciplines worth understanding**

AEO (Answer Engine Optimisation) is about structuring your content so AI tools can extract a direct answer from it — clear questions, clear answers, no burying the point under three paragraphs of preamble.

GEO (Generative Engine Optimisation) is about making sure the evidence about your business across the web — reviews, citations, your own site — is accurate enough that when an AI system generates a description of your business, it gets it right.

Neither of these replace traditional SEO. They sit on top of the same foundation: an accurate, consistent, well-reviewed business is already most of the way to being AI-visible too.`,
  },
  {
    slug: "the-15-minute-whatsapp-rule",
    title: "The 15-Minute WhatsApp Rule That Wins Sales",
    excerpt:
      "In Zambia, a lead that doesn't get a reply within 15 minutes often moves to a competitor. Here's how to build a system that never misses that window.",
    category: "Automation",
    tags: ["whatsapp", "automation", "sales"],
    author: "KAME Team",
    readingTime: "4 min read",
    publishedAt: "2026-06-22",
    featuredImage: "/assets/insights/placeholder-4.svg",
    content: `Speed wins the sale. A lead who messages a business on WhatsApp and doesn't hear back within about 15 minutes during business hours frequently just messages the next business on their list instead.

The fix isn't necessarily "hire someone to watch WhatsApp all day." It's a system: an instant auto-reply that acknowledges the message, a clear internal SLA for a human follow-up, and — once the manual version is running reliably — automation that handles the predictable parts (after-hours acknowledgement, lead qualification questions, follow-up for leads who go quiet) so the speed doesn't depend on any one person's attention.`,
  },
  {
    slug: "why-zambian-businesses-need-both-seo-and-social",
    title: "Why Social Media Presence Alone Isn't Enough",
    excerpt:
      "A strong Facebook page feels like proof of a strong online presence. It usually isn't — here's what's still missing.",
    category: "Digital Marketing",
    tags: ["seo", "social media", "zambian business"],
    author: "KAME Team",
    readingTime: "5 min read",
    publishedAt: "2026-06-30",
    featuredImage: "/assets/insights/placeholder-5.svg",
    content: `Many Zambian businesses have invested real effort into their Facebook or Instagram presence, and it shows — genuinely good content, real engagement, an audience that knows and likes the brand.

But social media presence and digital visibility are not the same thing. A customer who has never seen your Facebook page but searches "hardware store Chelston" on Google will never see your excellent Instagram grid — because that search happens on a completely different platform, governed by completely different rules: Google Business Profile completeness, website presence, reviews, and local SEO.

Social media builds relationships with people who already know you exist. Search visibility is what determines whether a stranger with a need can find you in the first place. A serious digital growth system needs both — and most businesses we meet have invested heavily in only one.`,
  },
];

export const getInsightBySlug = (slug) => insights.find((i) => i.slug === slug);

export default insights;
