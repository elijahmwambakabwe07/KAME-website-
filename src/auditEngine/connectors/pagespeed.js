import { connected, errored, notConfigured } from "../types.js";

/**
 * Google PageSpeed Insights connector.
 * Calls the Netlify serverless function at /api/pagespeed-audit, which in turn
 * calls Google's real PageSpeed Insights API using VITE_PAGESPEED_API_KEY.
 *
 * This is the one connector KAME should wire up first (see the Practical
 * Recommendation in the project brief) — it's free, has no OAuth flow, and
 * covers Core Web Vitals, mobile-friendliness, and performance in one call.
 */
export async function runPageSpeedAudit(targetUrl) {
  const id = "pagespeed";
  const label = "Google PageSpeed Insights";

  try {
    const res = await fetch(`/api/pagespeed-audit?url=${encodeURIComponent(targetUrl)}`);

    if (res.status === 501) {
      // Function explicitly reports the API key isn't configured yet.
      return notConfigured(id, label, "https://developers.google.com/speed/docs/insights/v5/get-started");
    }
    if (!res.ok) {
      return errored(id, label, `PageSpeed request failed (HTTP ${res.status}). Check the function logs in Netlify.`);
    }

    const json = await res.json();
    return connected(id, label, json);
  } catch (err) {
    return errored(id, label, `Could not reach the audit function: ${err.message}`);
  }
}

export default runPageSpeedAudit;
