import { notConfigured } from "../types.js";

/**
 * Competitor Intelligence connector — PREMIUM TIER.
 * Plan: compare the target business's visibility, ranking, and review
 * profile against named competitors — built on top of the Semrush and
 * Ahrefs connectors once those are live. Part of KAME Visibility Pro.
 */
export async function runCompetitorIntelligenceAudit(_targetUrl) {
  return notConfigured("competitor-intelligence", "Competitor Intelligence", "https://www.semrush.com/api-analytics/");
}

export default runCompetitorIntelligenceAudit;
