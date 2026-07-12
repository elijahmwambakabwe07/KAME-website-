# Content Editing Guide

Most day-to-day content changes don't require touching any page logic — just edit the relevant data file.

## Adding or Editing a Service

Edit `src/data/services.js`. Each service is one object in the `services` array:

```js
{
  slug: "your-new-service",       // becomes the URL: /services/your-new-service
  title: "Your New Service",
  shortDescription: "...",         // shown on cards
  icon: "target",                  // any key from src/components/ui/Icon.jsx
  overview: "...",
  benefits: ["...", "..."],
  deliverables: ["...", "..."],
  idealClients: ["...", "..."],
  process: ["Step 1", "Step 2", "Step 3", "Step 4"],
},
```

Add a new entry and it automatically appears on `/services` and gets its own page at `/services/your-new-service` — no other code changes needed. Remember to also add the new path to `public/sitemap.xml`.

## Adding a Business Insights Article

Edit `src/data/insights.js`. Each article is one object in the `insights` array — see the existing five for the expected format. `content` supports a lightweight format:

- Blank lines separate paragraphs
- A line wrapped in `**double asterisks**` on its own becomes a sub-heading
- Lines starting with `- ` become a bullet list
- Lines starting with `1. ` (etc.) become a numbered list

## Updating Contact Info, Social Links, or Navigation

Edit `src/data/siteConfig.js` — phone numbers, email, address, hours, social media URLs, and the main navigation menu all live here in one place.

## Adding Real Testimonials

Edit `src/data/testimonials.js`. **Important:** only add a testimonial once you have the client's actual words and permission to publish them — never edit the placeholder text into a fabricated quote. Set `isPlaceholder: false` (or remove that field) once it's real, so the styling changes from the dashed "placeholder" look to a normal testimonial card, and so `<ReviewSchema>` will include it in structured data.

## Changing Brand Colours

Edit the `colors` section of `tailwind.config.js`. The `navy` and `gold` palettes are used throughout the site by name (`bg-navy-700`, `text-gold-400`, etc.) — changing the hex values here updates every usage across the whole site at once.

## Replacing the Logo

Replace the files in `public/assets/brand/` (keep the same filenames) and re-generate the different sizes if you replace `kame-logo-master.png` — see the image-generation notes in the project's build history, or simply resize the new master into each of: `kame-logo-512.png`, `kame-logo-256.png`, `kame-logo-192.png`, `apple-touch-icon.png` (180×180), `favicon-32x32.png`, `favicon-16x16.png`.
