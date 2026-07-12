import { notConfigured } from "../types.js";

/**
 * Metadata Analysis connector.
 * Plan: fetch the target page HTML via a Netlify function and check title
 * length, meta description presence/length, heading structure (H1 count),
 * and canonical tag correctness.
 */
export async function runMetadataAudit(_targetUrl) {
  return notConfigured("metadata", "Metadata Analysis", null);
}

export default runMetadataAudit;
