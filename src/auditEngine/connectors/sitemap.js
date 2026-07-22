import { notConfigured } from "../types.js";

/**
 * Sitemap Check connector — FREE TIER.
 * Plan: fetch /sitemap.xml from the target domain via a Netlify function
 * (avoiding CORS) and confirm it exists, parses as valid XML, and contains
 * at least one URL entry.
 */
export async function runSitemapAudit(_targetUrl) {
  return notConfigured("sitemap", "Sitemap Check", null);
}

export default runSitemapAudit;
