import { notConfigured } from "../types.js";

/**
 * Robots.txt Check connector — FREE TIER.
 * Plan: fetch /robots.txt from the target domain via a Netlify function
 * and confirm it exists and does not accidentally block search engines
 * from crawling the whole site.
 */
export async function runRobotsTxtAudit(_targetUrl) {
  return notConfigured("robots-txt", "Robots.txt Check", null);
}

export default runRobotsTxtAudit;
