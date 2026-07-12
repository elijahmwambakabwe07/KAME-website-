import { notConfigured } from "../types.js";

/**
 * Google Business Profile connector.
 * Requires a Google Cloud project with the Business Profile API enabled and
 * OAuth consent from the business owner (KAME cannot pull another business's
 * GBP data without their explicit authorisation).
 * Docs: https://developers.google.com/my-business
 */
export async function runGBPAudit(_targetUrl) {
  return notConfigured("gbp", "Google Business Profile", "https://developers.google.com/my-business");
}

export default runGBPAudit;
