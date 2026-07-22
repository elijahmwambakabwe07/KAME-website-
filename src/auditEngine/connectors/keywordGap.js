import { notConfigured } from "../types.js";

/**
 * Keyword Gap connector — PREMIUM TIER.
 * Plan: identify keywords competitors rank for that the target business
 * does not — requires a Semrush or Ahrefs subscription. Part of KAME
 * Visibility Pro.
 */
export async function runKeywordGapAudit(_targetUrl) {
  return notConfigured("keyword-gap", "Keyword Gap Analysis", "https://www.semrush.com/api-analytics/");
}

export default runKeywordGapAudit;
