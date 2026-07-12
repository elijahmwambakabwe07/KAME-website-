/**
 * ============================================================
 * KAME AUDIT ENGINE — CONNECTOR CONTRACT
 * ============================================================
 * Every connector in src/auditEngine/connectors/ must resolve to an object
 * shaped exactly like AuditResult below. This is what makes it safe to
 * render results generically in the UI without ever fabricating a score.
 *
 * @typedef {"connected" | "not_configured" | "error"} AuditStatus
 *
 * @typedef {Object} AuditResult
 * @property {string} id              - Connector id, e.g. "pagespeed"
 * @property {string} label           - Human-readable name, e.g. "Google PageSpeed Insights"
 * @property {AuditStatus} status     - "connected" only if real data was returned
 * @property {Object|null} data       - Real data if status is "connected", otherwise null
 * @property {string} message         - User-facing explanation (esp. for not_configured/error)
 * @property {string} [docsUrl]       - Where to go to configure this connector
 */

export const AUDIT_STATUS = Object.freeze({
  CONNECTED: "connected",
  NOT_CONFIGURED: "not_configured",
  ERROR: "error",
});

/** Helper every connector uses to guarantee a consistent shape. */
export function notConfigured(id, label, docsUrl) {
  return {
    id,
    label,
    status: AUDIT_STATUS.NOT_CONFIGURED,
    data: null,
    message: "API Connection Required — this check is architected but not yet connected to a live data source.",
    docsUrl,
  };
}

export function connected(id, label, data) {
  return { id, label, status: AUDIT_STATUS.CONNECTED, data, message: "Live data retrieved successfully.", docsUrl: null };
}

export function errored(id, label, message) {
  return { id, label, status: AUDIT_STATUS.ERROR, data: null, message, docsUrl: null };
}
