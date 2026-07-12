# KAME Digital Marketing Agency — Official Website

The production-ready website and digital operating system for **KAME Digital Marketing Agency** — Zambia's Leading Business Visibility Agency.

> "We don't just do Marketing. We Build Systems that Grow Business."

This is not a template or a demo. It is architected to become the permanent digital headquarters of KAME — every future system (Client Portal, Audit Platform, CRM, KAME Academy, and more) is designed to plug into this codebase rather than exist as a separate product. See `docs/FUTURE_EXPANSION_GUIDE.md` for how.

---

## Tech Stack

- **React 18** + **Vite** — fast builds, instant dev server
- **React Router v6** — client-side routing, code-split per page
- **Tailwind CSS** — utility-first styling, KAME brand colours pre-configured
- **react-helmet-async** — per-page SEO meta tags
- **lucide-react** — icon set
- **Netlify Functions** — serverless backend (starting with the PageSpeed Insights audit connector)

## Quick Start (Local Development)

```bash
npm install
cp .env.example .env      # fill in what you have; everything works with defaults
npm run dev                # starts at http://localhost:5173
```

## Build for Production

```bash
npm run build              # outputs to /dist
npm run preview             # preview the production build locally
```

## Deploy to Netlify

See `docs/DEPLOYMENT_GUIDE.md` for full step-by-step instructions. Short version:

1. Push this project to a GitHub repository
2. In Netlify: **Add new site → Import an existing project** → select the repo
3. Build command: `npm run build` · Publish directory: `dist` (both already set in `netlify.toml`)
4. Add environment variables from `.env.example` under **Site Settings → Environment Variables**
5. Deploy — Netlify Functions in `netlify/functions/` deploy automatically

## Project Structure

```
src/
  components/
    layout/       Header, Footer, Layout, SEO component
    home/         Home page section components
    ui/           Reusable primitives (Button, Card, Icon, etc.)
    schema/        JSON-LD structured data components
    audit/         Audit-platform-specific UI pieces
  pages/           One file per route (see src/App.jsx for the route map)
    ClientPortal/  Login + Dashboard (auth-ready, see src/auth/)
  data/            Site content: services, insights, testimonials, siteConfig
  auditEngine/     Modular audit connector architecture (see docs/API_INTEGRATION_GUIDE.md)
    connectors/    One file per data source (PageSpeed, GBP, SSL, etc.)
  auth/            Pluggable authentication interface (no fake login)
  hooks/           Custom React hooks
  config/          Reserved for future environment/runtime config

netlify/functions/ Serverless functions (PageSpeed Insights integration lives here)
public/            Static assets, favicon, logo, robots.txt, sitemap.xml
docs/              This documentation suite
```

## Documentation Index

- `docs/DEPLOYMENT_GUIDE.md` — Netlify deployment, step by step
- `docs/ENVIRONMENT_VARIABLES_GUIDE.md` — every variable explained
- `docs/API_INTEGRATION_GUIDE.md` — connecting real APIs to the audit engine and auth
- `docs/SEO_GUIDE.md` — how the SEO system works and how to extend it
- `docs/FUTURE_EXPANSION_GUIDE.md` — how every future KAME module plugs into this codebase
- `docs/CONTENT_EDITING_GUIDE.md` — how to add services, articles, and edit site copy without touching code logic

## Brand

Logo, colours, and typography are sourced from the official KAME brand assets in `public/assets/brand/`. Brand colours are defined once in `tailwind.config.js` (`navy`, `gold`, `ink`, `surface`) — change them there and they propagate across the entire site.

## Honesty Note on the Audit Platform

Per the project brief, this build **never fabricates audit results**. Every check in the Business Visibility Audit Platform (`/business-visibility-audit`) either returns real, live data or clearly displays "API Connection Required." See `docs/API_INTEGRATION_GUIDE.md` to connect real data sources, starting with the free Google PageSpeed Insights API.
