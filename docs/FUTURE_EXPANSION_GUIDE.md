# Future Expansion Guide

This codebase is deliberately architected so that every future KAME module plugs into it rather than requiring a rebuild. This document maps each future module (from the original project brief) to exactly where it connects.

## Client Portal ✅ (architecture in place now)

- `src/auth/` — pluggable auth interface, connect Firebase/Supabase/Auth0 (see `API_INTEGRATION_GUIDE.md`)
- `src/pages/ClientPortal/Login.jsx` and `Dashboard.jsx` — real UI, ready for real data
- `src/auth/ProtectedRoute.jsx` — route guard, already wired to `/portal/dashboard`

**To go live:** connect a real auth provider. No routing or page structure changes needed.

## Business Visibility Audit Platform ✅ (architecture in place now)

- `src/auditEngine/` — modular connector system, 14 connectors stubbed or (for PageSpeed) fully wired
- `src/pages/AuditPlatform.jsx` — renders whatever connectors return, generically

**To expand:** add new connector files. See `API_INTEGRATION_GUIDE.md`.

## Business Visibility Scanner / AI Readiness Scanner

These are natural extensions of the existing audit engine — likely new connector categories (e.g. `runAIReadinessAudit`) that check for structured data completeness, NAP consistency, and AI-mention accuracy together as a composite "readiness" score. Build them as new files in `src/auditEngine/connectors/`, then create a dedicated page (e.g. `src/pages/AIReadinessScanner.jsx`) that calls a filtered subset of the audit engine rather than duplicating the connector logic.

## Proposal Generator

Suggested approach: a new authenticated route under `/portal/proposals/new`, using the Discovery Questionnaire and Client Audit Form data (already defined as real templates in the KAME Business Templates package) as its input structure. Output can render using the same component patterns as the rest of the site, then export to PDF via a Netlify Function using a headless-Chrome PDF library.

## CRM

Recommended: rather than building a CRM from scratch inside this codebase, integrate an existing CRM (HubSpot free tier, per the Business Blueprint's own Power Stack) via API, and surface relevant client data inside the Client Dashboard panels that already exist (`src/pages/ClientPortal/Dashboard.jsx`). The panel architecture (`DashboardPanel` component) is built generically for exactly this — swap `EmptyState` for a real data fetch per panel.

## KAME Academy

Suggested structure: new top-level routes (`/academy`, `/academy/courses/:slug`) following the exact same content-driven pattern as Business Insights (`src/data/insights.js` → `src/pages/Insights.jsx` / `InsightDetail.jsx`). Course content can start as structured data in `src/data/courses.js` exactly like services and insights do now, then migrate to a real backend once course volume justifies it.

## Reporting Dashboard

The Monthly Report template (from the KAME Business Templates package) defines the exact data shape a Reporting Dashboard would visualise. Recommended: a new authenticated route `/portal/reports`, pulling from whatever data store backs the CRM integration above, rendered with a lightweight charting library (e.g. `recharts`) added at that time — deliberately not pre-installed now to keep the initial bundle lean.

## Payment System

Recommended: integrate a payment provider with strong African market support (e.g. Flutterwave, Paystack, or DPO) via a new Netlify Function (`netlify/functions/create-payment.js`), following the exact pattern already established in `pagespeed-audit.js` — an environment-variable-gated, server-side API call that never exposes secrets to the client.

## Mobile Application

Because this site is a standard React + Vite web app (not using any Next.js-specific or server-only features), the same component library, data files, and design tokens (`tailwind.config.js`) can be reused in a React Native project, or the site can be wrapped as a PWA first (a `manifest.json` already exists at `public/manifest.json` as a starting point) before a dedicated native app is built.

## Knowledge Base

This is architecturally identical to Business Insights — reuse the exact same pattern (`src/data/`, list page, detail page) under a new `/knowledge-base` route, likely pulling from the KAME Knowledge Base content already written in the Business Blueprint (Section 19).

## Automation Platform / Analytics Dashboard / Business Intelligence Platform

These are the most speculative future modules and will likely be admin-only, authenticated tools. Follow the same pattern as the Client Dashboard: new protected routes under `/portal/admin/*`, gated by a role check added to `src/auth/ProtectedRoute.jsx` (currently checks only "is authenticated" — extend it to check a `role` field once the auth provider supports custom claims/roles).

---

## The Core Principle

Every module above follows one of two already-proven patterns in this codebase:

1. **Content-driven pages** (Services, Business Insights) — a data file + a list page + a detail page.
2. **Connector-driven systems** (Audit Engine) — a typed contract + independent connector files + a generic renderer.

New modules should extend one of these two patterns rather than introducing a third, so the codebase stays consistent as it grows.
