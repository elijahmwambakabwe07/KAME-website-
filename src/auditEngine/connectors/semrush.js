import { notConfigured } from "../types.js";

/**
 * Semrush connector — PHASE 2.
 * Per the project's own practical recommendation: do not prioritise this
 * until KAME is generating revenue. Requires a paid Semrush API subscription.
 * Docs: https://www.semrush.com/api-analytics/
 */
export async function runSemrushAudit(_targetUrl) {
  return notConfigured("semrush", "Semrush (Phase 2)", "https://www.semrush.com/api-analytics/");
}

export default runSemrushAudit;
