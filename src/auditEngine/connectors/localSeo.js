import { notConfigured } from "../types.js";

/**
 * Local SEO Analysis connector.
 * Plan: combine GBP data, citation consistency, and local keyword ranking
 * (via a rank-tracking API such as Local Falcon or a Google Maps scraping
 * service) into one local-search health score.
 */
export async function runLocalSEOAudit(_targetUrl) {
  return notConfigured("local-seo", "Local SEO Analysis", null);
}

export default runLocalSEOAudit;
