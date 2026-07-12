import { notConfigured } from "../types.js";

/**
 * SSL Analysis connector.
 * Plan: call a Netlify function that runs a TLS handshake against the target
 * domain (or proxies to SSL Labs' free API) and reports certificate validity,
 * expiry, and protocol strength.
 * Docs: https://www.ssllabs.com/projects/ssllabs-apis/
 */
export async function runSSLAudit(_targetUrl) {
  return notConfigured("ssl", "SSL Analysis", "https://www.ssllabs.com/projects/ssllabs-apis/");
}

export default runSSLAudit;
