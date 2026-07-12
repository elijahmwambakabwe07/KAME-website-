# SEO Guide

This site is fully SEO-instrumented from the first commit. Here's how each piece works and how to extend it.

## Per-Page Meta Tags

Every page uses the `<SEO>` component (`src/components/layout/SEO.jsx`):

```jsx
<SEO
  title="SEO Services"
  description="A 150–160 character description specific to this page."
  path="/services/seo"
/>
```

This automatically sets: `<title>`, meta description, canonical URL, Open Graph tags, and Twitter Card tags. Never hardcode `<title>` or meta tags directly in a page — always go through `<SEO>` so canonical/OG/Twitter stay in sync.

## Structured Data (JSON-LD)

All schema components live in `src/components/schema/SchemaComponents.jsx`:

| Component | Used On | Purpose |
|---|---|---|
| `<LocalBusinessSchema />` | Home, Contact | Tells Google this is a real local business with hours, address, contact info |
| `<ServiceSchema service={...} />` | Each service detail page | Marks up the specific service offered |
| `<FAQSchema faqs={[...]} />` | Any page with an FAQ section | Enables FAQ rich results in Google |
| `<ArticleSchema article={...} />` | Each Business Insights post | Enables article rich results |
| `<BreadcrumbSchema items={[...]} />` | Every non-home page | Enables breadcrumb rich results |
| `<ReviewSchema reviews={[...]} />` | Anywhere real reviews exist | **Refuses to render if any review is a placeholder** — see the guard clause in the component. Never remove that guard. |

To add a new schema type (e.g. Product, Event), follow the existing pattern: a small function that returns a schema.org-shaped object, wrapped in the shared `<JsonLd>` helper at the top of the file.

## robots.txt and sitemap.xml

- `public/robots.txt` — allows all crawling except the client portal (`/portal/*`), which is correctly excluded since it's behind authentication.
- `public/sitemap.xml` — currently a static, generated file listing all 23 real routes (home, services, service details, insights, insight details, about, contact). 

**When you add a new service or insight article**, regenerate the sitemap by running the same logic used to build it initially (see the git history / build notes), or maintain it by hand — just make sure every new public route gets an entry.

## Performance (Lighthouse 95+ target)

Techniques already in place:

- **Code splitting**: every page is `lazy()`-loaded in `src/App.jsx`, so visitors only download the JS for the page they're on.
- **Vendor chunking**: `vite.config.js` splits React/React Router into a separate `vendor` chunk for better long-term caching.
- **Image sizing**: logo images are pre-generated at multiple sizes (`public/assets/brand/`) — always use the smallest size that looks correct rather than scaling a large image down in CSS.
- **Long-term caching**: `netlify.toml` sets `Cache-Control: immutable` on all hashed JS/CSS/asset files.
- **No unnecessary animation**: per the brand brief, avoid adding animation libraries — they cost bytes and can hurt Core Web Vitals (specifically CLS) if not handled carefully.

### To verify

Run Lighthouse in Chrome DevTools against the deployed Netlify URL (not `localhost`, which reports differently). Address any specific findings — this codebase is built to score well, but real-world scores depend on final content (image sizes, third-party embeds you add later, etc.).

## Adding a New Page

1. Create the page component in `src/pages/`.
2. Add the route in `src/App.jsx` (as a `lazy()` import, following the existing pattern).
3. Add `<SEO title="..." description="..." path="..." />` at the top of the component.
4. Add a `<BreadcrumbSchema>` if it's not a top-level page.
5. Add the new path to `public/sitemap.xml`.
