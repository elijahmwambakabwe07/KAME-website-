# API Integration Guide

This project ships with a **modular audit engine** (`src/auditEngine/`) and a **pluggable auth interface** (`src/auth/`). Both are fully architected but deliberately connect to zero fabricated data — every integration point either returns real data or an honest "not configured" status.

This guide explains how to connect each one for real.

---

## 1. Audit Engine — How It Works

Every check in the Business Visibility Audit Platform is a "connector" — a small file in `src/auditEngine/connectors/` that resolves to a consistent shape (see `src/auditEngine/types.js`):

```js
{ id, label, status: "connected" | "not_configured" | "error", data, message, docsUrl }
```

`src/auditEngine/index.js` runs every connector in parallel and the UI (`src/pages/AuditPlatform.jsx`) renders whatever comes back — real data if `status: "connected"`, or the honest message otherwise. **You never need to touch the UI to add or connect a data source** — just edit the connector file.

### Recommended order (per the project's own guidance)

1. **Google PageSpeed Insights** — free, no OAuth, highest immediate value. Already fully wired to `netlify/functions/pagespeed-audit.js`; you only need to add an API key.
2. **Google Business Profile** — requires OAuth per business owner; higher effort, very high value for local businesses.
3. **Google Search Console** — same OAuth pattern as GBP.
4. **Google Analytics (GA4)** — read-only reporting API, requires a service account.
5. **SSL, Metadata, Open Graph, Structured Data** — these can all be built as a single Netlify Function that fetches the target page's HTML server-side (avoiding CORS) and parses it. Not yet implemented; connectors are stubbed and documented individually.
6. **Semrush / Ahrefs** — Phase 2, once KAME is generating revenue, per the original project brief.

### Step-by-step: Connecting Google PageSpeed Insights (do this first)

1. Get a free API key: https://developers.google.com/speed/docs/insights/v5/get-started
2. In Netlify: **Site Settings → Environment Variables → Add a variable**
   - Key: `PAGESPEED_API_KEY`
   - Value: your key
3. Redeploy the site (**Deploys → Trigger deploy**).
4. Test: go to `/business-visibility-audit`, enter any URL, click "Run Audit." The PageSpeed card should now show `status: "connected"` with real Lighthouse data instead of "API Connection Required."

No code changes needed — `netlify/functions/pagespeed-audit.js` already checks for this exact variable.

### Step-by-step: Adding a brand-new connector

1. Create `src/auditEngine/connectors/yourSource.js`:
   ```js
   import { connected, errored, notConfigured } from "../types.js";

   export async function runYourSourceAudit(targetUrl) {
     const id = "your-source";
     const label = "Your Source Name";
     // if no key/credential configured:
     if (!hasCredential) return notConfigured(id, label, "https://docs-link.example.com");
     try {
       const data = await fetchYourRealData(targetUrl);
       return connected(id, label, data);
     } catch (err) {
       return errored(id, label, err.message);
     }
   }
   ```
2. Register it in `src/auditEngine/index.js` — add the import and add the function to the `CONNECTORS` array.
3. Done. It automatically appears as a new card on `/business-visibility-audit`.

---

## 2. Authentication — Connecting a Real Provider

`src/auth/authService.js` defines the contract every provider must satisfy: `signIn`, `signOut`, `getCurrentUser`. Until one is wired up, `VITE_AUTH_PROVIDER=none` (the default) makes the Login page show an honest "not yet configured" notice — never a fake successful login.

### Recommended: Firebase Authentication (fastest to set up)

1. Create a project at https://console.firebase.google.com and enable **Authentication → Email/Password** (or another method).
2. `npm install firebase`
3. Create `src/auth/providers/firebase.js`:
   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
   };

   const app = initializeApp(firebaseConfig);
   export const firebaseAuth = getAuth(app);
   ```
4. In `src/auth/authService.js`, uncomment the Firebase example block inside `signIn()` and implement `signOut`/`getCurrentUser` the same way using `firebase/auth`'s `signOut` and `onAuthStateChanged`.
5. Set `VITE_AUTH_PROVIDER=firebase` and the three `VITE_FIREBASE_*` variables in Netlify.
6. Redeploy. The Login page (`/portal/login`) will now perform real authentication.

### Alternative: Supabase Auth

Same pattern — install `@supabase/supabase-js`, create `src/auth/providers/supabase.js` exporting a configured client, implement the three methods using `supabase.auth.signInWithPassword` / `signOut` / `getSession`, set `VITE_AUTH_PROVIDER=supabase` and the two `VITE_SUPABASE_*` variables.

### Alternative: Auth0

Best if you anticipate needing enterprise SSO later. Use `@auth0/auth0-spa-js`; the integration pattern is slightly different (redirect-based rather than direct email/password), so budget more time — see Auth0's React quickstart for the exact flow, then adapt `signIn`/`signOut`/`getCurrentUser` to call it.

---

## 3. Client Dashboard Data

Once authentication is live, `src/pages/ClientPortal/Dashboard.jsx` has eight panels (Visibility Score, Audit History, Project Progress, Monthly Reports, Recommendations, Messages, Downloads, Invoices) currently showing honest empty states. Each panel is a self-contained component ready to receive real data — replace the `EmptyState` in each with a real fetch once you have a backend (Firebase Firestore, Supabase tables, or a custom API) storing that client data. See `docs/FUTURE_EXPANSION_GUIDE.md` for how this connects to the CRM and Reporting System modules.
