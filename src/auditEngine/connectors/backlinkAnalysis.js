import { notConfigured } from "../types.js";

/**
 * Backlink Analysis connector — PREMIUM TIER.
 * Plan: assess the quantity and quality of external sites linking to the
 * business's website — a core Ahrefs capability. Part of KAME Visibility Pro.
 */
export async function runBacklinkAnalysisAudit(_targetUrl) {
  return notConfigured("backlink-analysis", "Backlink Analysis", "https://ahrefs.com/api/documentation");
}

export default runBacklinkAnalysisAudit;
