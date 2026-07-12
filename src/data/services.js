// Full service catalogue. Each service page (src/pages/ServiceDetail.jsx) renders
// from this single data source — add a new service by adding an entry here,
// no new page/route code required.

export const services = [
  {
    slug: "business-visibility-audit",
    title: "Business Visibility Audit",
    shortDescription: "Diagnose exactly where a business is losing customers online before any work begins.",
    icon: "search",
    overview:
      "Every KAME engagement starts here. The Business Visibility Audit assesses a business across the three pillars — Visibility, Trust & Accuracy, and Relevance — and produces a clear, prioritised roadmap for what to fix first.",
    benefits: [
      "See exactly where customers are failing to find or trust the business online",
      "A prioritised, honest roadmap instead of a generic marketing pitch",
      "The foundation every other service is built on",
    ],
    deliverables: [
      "Full Visibility, Trust & Accuracy, and Relevance assessment",
      "Google Business Profile, NAP consistency, and review audit",
      "Website, technical SEO, and content audit",
      "A prioritised action plan with recommended next steps",
    ],
    idealClients: ["Any new client, at the start of the relationship", "Businesses unsure why leads aren't converting"],
    process: [
      "Discovery call to understand your business and goals",
      "Full audit across all three pillars",
      "Findings documented and explained in plain language",
      "Recommended package matched to your actual foundation",
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimisation (SEO)",
    shortDescription: "Rank for the searches your customers are already making.",
    icon: "trending-up",
    overview:
      "SEO at KAME starts with foundational accuracy, not keyword tricks. We build topic clusters, fix technical issues, and target the searches that actually convert for your business.",
    benefits: [
      "Higher organic rankings for keywords with real buyer intent",
      "Technical health fixes that compound over time",
      "Content built around what your customers actually search for",
    ],
    deliverables: [
      "Technical SEO audit and fixes (speed, mobile, crawlability)",
      "Keyword mapping and on-page optimisation",
      "Ongoing content strategy aligned to search intent",
      "Monthly ranking and traffic reporting",
    ],
    idealClients: ["Businesses with a website looking for consistent organic leads", "Businesses competing for local search terms"],
    process: ["Technical and on-page audit", "Keyword and topic mapping", "Implementation and content production", "Monthly tracking and iteration"],
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile Optimisation",
    shortDescription: "The single highest-leverage visibility asset for most Zambian businesses.",
    icon: "map-pin",
    overview:
      "A complete, verified, actively-managed Google Business Profile is often the fastest way for a local business to become visible. We set it up right, then keep it active every week.",
    benefits: [
      "Show up in Google Maps and local search results",
      "Build trust through consistent photos, posts, and review responses",
      "Convert nearby searchers into calls, messages, and visits",
    ],
    deliverables: [
      "Full profile setup, verification, and category optimisation",
      "Photo and description optimisation",
      "Weekly posting and review response management",
      "Monthly performance report (views, calls, direction requests)",
    ],
    idealClients: ["Businesses with a physical location or defined service area", "Businesses with an unclaimed or incomplete profile"],
    process: ["Claim and verify the profile", "Complete every field and add media", "Establish a weekly posting and review rhythm", "Report and refine monthly"],
  },
  {
    slug: "ai-visibility",
    title: "AI Visibility Optimisation",
    shortDescription: "Be found and accurately represented when customers ask AI tools instead of Google.",
    icon: "sparkles",
    overview:
      "Customers increasingly ask ChatGPT, Perplexity, and Google's AI Overviews for recommendations directly. AI Visibility ensures your business's information is consistent and structured enough to be surfaced — and described accurately.",
    benefits: [
      "Get recommended by AI assistants, not just search engines",
      "Protect against AI tools describing your business inaccurately",
      "Stay ahead of a shift most competitors haven't noticed yet",
    ],
    deliverables: [
      "AEO (Answer Engine Optimisation) content structuring",
      "GEO (Generative Engine Optimisation) consistency audit across the web",
      "Structured data and schema markup implementation",
      "Quarterly AI mention monitoring",
    ],
    idealClients: ["Forward-looking businesses wanting a durable competitive edge", "Businesses already strong on traditional SEO"],
    process: ["Audit current AI mentions and accuracy", "Fix inconsistent information across the web", "Structure content for direct AI extraction", "Monitor and adjust quarterly"],
  },
  {
    slug: "website-optimisation",
    title: "Website Optimisation",
    shortDescription: "A fast, mobile-first site that turns visitors into enquiries.",
    icon: "monitor",
    overview:
      "Your website is only as useful as it is visible, trustworthy, and relevant to the visitor's question. We optimise for speed, mobile experience, and a conversion path that ends in a WhatsApp message or call.",
    benefits: [
      "Faster load times that keep visitors from leaving",
      "A clear, single call to action on every page",
      "A site that works properly on the mobile phones your customers actually use",
    ],
    deliverables: [
      "Speed and Core Web Vitals optimisation",
      "Mobile responsiveness fixes",
      "Conversion path redesign (clear CTA, WhatsApp integration)",
      "Basic on-page SEO and structured data",
    ],
    idealClients: ["Businesses with a slow, outdated, or non-mobile-friendly website", "Businesses with no website yet"],
    process: ["Website audit", "Prioritised fix list", "Implementation", "Speed and conversion re-test"],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortDescription: "Win the searches your neighbourhood is already making.",
    icon: "compass",
    overview:
      "Local SEO combines Google Business Profile management, citation consistency, and area-specific content to make sure a business ranks for the exact searches nearby customers use — like 'salon Kabulonga' or 'hardware Chelston'.",
    benefits: [
      "Rank for area-based searches your competitors are ignoring",
      "Consistent business information across every directory and platform",
      "More foot traffic and local calls without paid ads",
    ],
    deliverables: [
      "NAP consistency audit and correction across all platforms",
      "Local citation building",
      "Area-specific landing pages and content",
      "Local ranking tracking",
    ],
    idealClients: ["Businesses serving a specific neighbourhood or city", "Multi-location businesses"],
    process: ["NAP and citation audit", "Correction across all platforms", "Local content build-out", "Ranking tracking and reporting"],
  },
  {
    slug: "facebook-advertising",
    title: "Facebook Advertising",
    shortDescription: "Generate qualified leads through paid Meta campaigns.",
    icon: "megaphone",
    overview:
      "Facebook remains the highest-reach platform for adult Zambian buyers. We build structured campaigns — not boosted posts — with clear goals, audiences, and success metrics.",
    benefits: [
      "Predictable, measurable lead flow at a sustainable cost per lead",
      "Creative that's tested and refined, not guessed at",
      "Full transparency on spend and results, every month",
    ],
    deliverables: [
      "Campaign strategy and audience targeting",
      "Ad creative (static and video)",
      "Ongoing optimisation and A/B testing",
      "Monthly ad performance report",
    ],
    idealClients: ["Businesses with a marketing budget ready for paid customer acquisition"],
    process: ["Strategy and audience definition", "Creative production", "Campaign launch", "Weekly optimisation and monthly reporting"],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortDescription: "Capture high-intent searches the moment someone is ready to buy.",
    icon: "target",
    overview:
      "Google Ads puts a business in front of customers actively searching for exactly what they sell. We manage campaigns built on real keyword intent, not guesswork.",
    benefits: [
      "Reach customers at the exact moment of search intent",
      "Full control over budget and cost per lead",
      "Clear reporting tied to real business outcomes",
    ],
    deliverables: ["Keyword research and campaign structure", "Ad copywriting and landing page alignment", "Bid management and optimisation", "Monthly performance report"],
    idealClients: ["Businesses with clear, searchable services or products", "Businesses ready to complement organic SEO with paid search"],
    process: ["Keyword and intent research", "Campaign build", "Launch and monitor", "Monthly optimisation"],
  },
  {
    slug: "whatsapp-business",
    title: "WhatsApp Business Systems",
    shortDescription: "Turn conversations into customers, reliably.",
    icon: "message-circle",
    overview:
      "WhatsApp is where Zambian deals actually close. We set up and manage a structured WhatsApp Business system — catalogues, quick replies, labels, and follow-up sequences — so no lead goes cold.",
    benefits: [
      "Sub-15-minute response times that win the sale before a competitor does",
      "A structured sales pipeline instead of a chaotic chat thread",
      "Automated follow-up for leads who go quiet",
    ],
    deliverables: ["WhatsApp Business setup and catalogue", "Quick replies and labelling system", "Automated follow-up sequences", "Response time and conversion tracking"],
    idealClients: ["Any business currently relying on WhatsApp for sales without a system behind it"],
    process: ["WhatsApp Business setup", "Chat flow and labelling design", "Follow-up automation build", "Ongoing monitoring"],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortDescription: "Remove manual work from lead capture, follow-up, and reporting.",
    icon: "workflow",
    overview:
      "We build automations that connect ads, WhatsApp, CRM, and reporting into one system — so leads are captured, followed up, and tracked without anyone having to remember to do it manually.",
    benefits: [
      "Faster response times without more staff",
      "Fewer leads lost to human error or forgetfulness",
      "Time freed up for the parts of the business only a human can do",
    ],
    deliverables: ["Lead capture automation", "Appointment booking and reminder flows", "Review request automation", "Sales tracking automation"],
    idealClients: ["Growing businesses with repetitive manual processes", "Businesses losing leads between systems"],
    process: ["Map the current manual process", "Design the automated workflow", "Build and test on dummy data", "Launch and monitor"],
  },
  {
    slug: "digital-strategy",
    title: "Digital Strategy & Consulting",
    shortDescription: "The diagnostic, educational relationship behind every KAME engagement.",
    icon: "compass",
    overview:
      "Delivered through Kabwe's Family Digital Consultant, this is the strategic layer above execution — audits, positioning, and training that make every subsequent KAME service more effective.",
    benefits: ["An honest, expert diagnosis before any execution begins", "A clear roadmap tailored to your business, not a generic package", "Ongoing strategic guidance as your business grows"],
    deliverables: ["Full business and competitive audit", "Positioning and strategy documentation", "Quarterly strategy review sessions"],
    idealClients: ["Business owners who want to understand the 'why' behind their digital strategy"],
    process: ["Discovery and audit", "Strategy documentation", "Quarterly review and adjustment"],
  },
  {
    slug: "monthly-growth-management",
    title: "Monthly Growth Management",
    shortDescription: "The full, ongoing system — content, ads, automation, and reporting — managed every month.",
    icon: "bar-chart",
    overview:
      "This is KAME's flagship, ongoing engagement: your visibility, trust, and relevance systems run and improved every month, with full transparency and a fixed reporting rhythm.",
    benefits: ["One team accountable for your entire digital growth system", "Consistent, compounding results instead of one-off campaigns", "Complete monthly transparency — good months and bad ones"],
    deliverables: ["Monthly content calendar and production", "Ad campaign management", "WhatsApp and automation management", "Monthly performance report with next-month plan"],
    idealClients: ["Businesses ready for an ongoing growth partner rather than a single project"],
    process: ["Onboarding and foundation check", "Month 1 baseline and setup", "Monthly execution cycle (plan, execute, optimise, report)", "Quarterly strategy review"],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export default services;
