# Environment Variables Guide

All variables are documented in `.env.example` at the project root. Copy it to `.env` for local development:

```bash
cp .env.example .env
```

For production, add each variable in **Netlify → Site Settings → Environment Variables**, then trigger a redeploy.

## Important: `VITE_` Prefix

Vite only exposes environment variables to client-side code if they're prefixed with `VITE_`. Variables without that prefix (like `PAGESPEED_API_KEY` used in the Netlify Function) are only available server-side, inside `netlify/functions/*.js` — which is exactly where API secrets should live, since Netlify Functions run on the server and never expose the key to a visitor's browser.

**Rule of thumb:** if a key is used in `src/` (client code), it must be `VITE_`-prefixed and should be treated as public — never put a real secret there. If a key is used in `netlify/functions/` (server code), it should NOT be `VITE_`-prefixed, and can safely hold a real secret.

## Variable Reference

| Variable | Used By | Required to Deploy? | Notes |
|---|---|---|---|
| `PAGESPEED_API_KEY` | `netlify/functions/pagespeed-audit.js` | No | Free tier available. Without it, the audit tool shows "API Connection Required" for this check only — nothing breaks. |
| `GBP_CLIENT_ID` / `GBP_CLIENT_SECRET` | Future Google Business Profile connector | No | Requires Google Cloud OAuth setup — see `API_INTEGRATION_GUIDE.md`. |
| `GSC_CLIENT_ID` / `GSC_CLIENT_SECRET` | Future Search Console connector | No | Same OAuth pattern as GBP. |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics (not yet wired into the codebase — see note below) | No | |
| `SEMRUSH_API_KEY` | Future Semrush connector | No | Phase 2 — see the project brief's own recommendation to defer this. |
| `AHREFS_API_TOKEN` | Future Ahrefs connector | No | Phase 2, same as above. |
| `CONTACT_FORM_RECIPIENT_EMAIL` | Informational only | No | The contact form currently uses Netlify Forms, which emails the site owner automatically — configurable in Netlify's UI under **Forms → Form notifications**. |
| `VITE_AUTH_PROVIDER` | `src/auth/authService.js` | No | Set to `firebase`, `supabase`, or `auth0` once you've chosen a provider. Defaults to `none`, which makes the Login page display an honest "not configured" notice instead of a fake success. |
| `VITE_FIREBASE_*` | Firebase Authentication (if chosen) | Only if `VITE_AUTH_PROVIDER=firebase` | |
| `VITE_SUPABASE_*` | Supabase Auth (if chosen) | Only if `VITE_AUTH_PROVIDER=supabase` | |

## Note on Google Analytics

`VITE_GA_MEASUREMENT_ID` is reserved in `.env.example` for when you're ready to add analytics. To wire it up: add the standard GA4 script snippet to `index.html`'s `<head>`, using `import.meta.env.VITE_GA_MEASUREMENT_ID` to inject your measurement ID at build time. This is intentionally not pre-installed so the site doesn't load tracking scripts before you've decided on your analytics and privacy policy approach (see `src/pages/PrivacyPolicy.jsx`, which is currently a placeholder).
