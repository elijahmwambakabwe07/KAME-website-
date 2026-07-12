import { notConfigured } from "../types.js";

/**
 * Structured Data Validation connector.
 * Plan: fetch the target page HTML server-side (via a Netlify function to
 * avoid CORS), extract JSON-LD/microdata, and validate against schema.org
 * definitions — similar to Google's Rich Results Test.
 * Docs: https://developers.google.com/search/docs/appearance/structured-data
 */
export async function runStructuredDataAudit(_targetUrl) {
  return notConfigured("structured-data", "Structured Data Validation", "https://developers.google.com/search/docs/appearance/structured-data");
}

export default runStructuredDataAudit;
