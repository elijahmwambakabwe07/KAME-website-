import { notConfigured } from "../types.js";

/**
 * GEO (Generative Engine Optimisation) connector — PREMIUM TIER.
 * Checks whether generative AI systems (ChatGPT, Gemini, Perplexity)
 * describe and recommend the business accurately. Part of KAME Visibility
 * Pro — no stable public API exists yet for most of these systems, so this
 * begins as a manual, consultant-led check before any automation.
 */
export async function runGEOAudit(_targetUrl) {
  return notConfigured("geo", "GEO — Generative Engine Optimisation", null);
}

export default runGEOAudit;
