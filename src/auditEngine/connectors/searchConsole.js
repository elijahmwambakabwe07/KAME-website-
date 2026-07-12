import { notConfigured } from "../types.js";

/**
 * Google Search Console connector.
 * Requires OAuth authorisation from the property owner and the Search
 * Console API enabled in Google Cloud.
 * Docs: https://developers.google.com/webmaster-tools/search-console-api-original
 */
export async function runSearchConsoleAudit(_targetUrl) {
  return notConfigured("search-console", "Google Search Console", "https://developers.google.com/webmaster-tools/search-console-api-original");
}

export default runSearchConsoleAudit;
