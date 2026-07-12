import { notConfigured } from "../types.js";

/**
 * Google Analytics (GA4) connector.
 * Requires a GA4 property, a service account with Analytics Data API access,
 * and the client's authorisation to read their property.
 * Docs: https://developers.google.com/analytics/devguides/reporting/data/v1
 */
export async function runAnalyticsAudit(_targetUrl) {
  return notConfigured("analytics", "Google Analytics", "https://developers.google.com/analytics/devguides/reporting/data/v1");
}

export default runAnalyticsAudit;
