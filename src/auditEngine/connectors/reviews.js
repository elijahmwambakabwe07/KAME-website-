import { notConfigured } from "../types.js";

/**
 * Review Analysis connector.
 * Plan: pull review count, average rating, and response rate from Google
 * Business Profile (once that connector is live) — this connector reads
 * from the same underlying data rather than duplicating an integration.
 */
export async function runReviewAudit(_targetUrl) {
  return notConfigured("reviews", "Review Analysis", null);
}

export default runReviewAudit;
