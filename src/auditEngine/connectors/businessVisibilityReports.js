import { notConfigured } from "../types.js";

/**
 * Business Visibility Reports connector — PREMIUM TIER.
 * Plan: a consolidated, branded, downloadable PDF report combining every
 * free and premium module into a single Business Visibility Score with
 * month-over-month tracking. Part of KAME Visibility Pro.
 */
export async function runBusinessVisibilityReportsAudit(_targetUrl) {
  return notConfigured("visibility-reports", "Business Visibility Reports", null);
}

export default runBusinessVisibilityReportsAudit;
