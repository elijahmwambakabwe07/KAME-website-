import { notConfigured } from "../types.js";

/**
 * Ahrefs connector — PHASE 2.
 * Per the project's own practical recommendation: do not prioritise this
 * until KAME is generating revenue. Requires a paid Ahrefs API subscription.
 * Docs: https://ahrefs.com/api/documentation
 */
export async function runAhrefsAudit(_targetUrl) {
  return notConfigured("ahrefs", "Ahrefs (Phase 2)", "https://ahrefs.com/api/documentation");
}

export default runAhrefsAudit;
