import { notConfigured } from "../types.js";

/**
 * Business Citation Analysis connector.
 * Plan: check NAP (Name, Address, Phone) consistency across major
 * directories (Google, Facebook, Yelp-equivalents, local Zambian
 * directories). Likely requires a paid citation-tracking API (e.g. Moz
 * Local, BrightLocal) or a custom scraper built once volume justifies it.
 */
export async function runCitationAudit(_targetUrl) {
  return notConfigured("citations", "Business Citation Analysis", "https://www.brightlocal.com/");
}

export default runCitationAudit;
