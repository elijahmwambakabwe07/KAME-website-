# Deployment Guide — Netlify

This project is pre-configured for Netlify via `netlify.toml` in the project root. That file already sets:

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- SPA redirect rules (so refreshing `/services/seo` doesn't 404)
- API redirect (`/api/*` → `/.netlify/functions/*`)
- Basic security headers and long-term caching for static assets

You do not need to configure any of this manually in the Netlify UI — it's read automatically from `netlify.toml`.

## Option A — Deploy via GitHub (recommended)

1. Create a new, empty repository on GitHub.
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — KAME website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
4. Choose GitHub, authorise Netlify, and select your repository.
5. Netlify will detect `netlify.toml` automatically. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**. First build takes 1–3 minutes.
7. Once live, go to **Site Settings → Environment Variables** and add the variables from `.env.example` that you have real values for (see `ENVIRONMENT_VARIABLES_GUIDE.md`). At minimum, nothing is *required* to deploy — the site works with every integration showing "API Connection Required" until you add keys.
8. Trigger a redeploy after adding environment variables (**Deploys → Trigger deploy → Deploy site**) so the new variables take effect.

## Option B — Deploy via Netlify CLI (no GitHub required)

Useful for a quick first deploy before you've set up a repository.

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Follow the CLI prompts to log in and either create a new site or link to an existing one. Note: with this method, Netlify Functions still deploy correctly as long as you run this command from the project root (where `netlify.toml` points to `netlify/functions`).

## Connecting Your Custom Domain

Once you purchase your domain:

1. In Netlify: **Site Settings → Domain management → Add a domain**.
2. Enter your domain and follow Netlify's instructions to either:
   - Point your domain's nameservers to Netlify (simplest), or
   - Add the specific A/CNAME records Netlify provides, at your domain registrar.
3. Netlify provisions a free SSL certificate automatically (usually within a few minutes).
4. Update `siteConfig.url` in `src/data/siteConfig.js`, and the canonical URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml` to match your real domain.

## Post-Deployment Checklist

- [ ] Visit the live URL and click through every nav link
- [ ] Submit the Contact form and confirm it appears in **Netlify → Forms**
- [ ] Run the Business Visibility Audit tool and confirm it shows "API Connection Required" (expected, until you add a PageSpeed API key)
- [ ] Check `/sitemap.xml` and `/robots.txt` load correctly
- [ ] Run a Lighthouse audit in Chrome DevTools (target: 95+, see `SEO_GUIDE.md`)
- [ ] Add real environment variables progressively as you connect each API (see `ENVIRONMENT_VARIABLES_GUIDE.md`)
