import { notConfigured } from "../types.js";

/**
 * AEO (Answer Engine Optimisation) connector — PREMIUM TIER.
 * Checks whether the business's content is structured well enough for
 * Google AI Overviews and other answer engines to extract and cite
 * directly. Part of KAME Visibility Pro.
 */
export async function runAEOAudit(_targetUrl) {
  return notConfigured("aeo", "AEO — Answer Engine Optimisation", null);
}

export default runAEOAudit;
