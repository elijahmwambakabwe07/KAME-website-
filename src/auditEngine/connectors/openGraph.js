import { notConfigured } from "../types.js";

/**
 * Open Graph Analysis connector.
 * Plan: fetch the target page HTML via a Netlify function and check for
 * required og:* tags (title, description, image, url) and validate image
 * dimensions meet platform minimums.
 */
export async function runOpenGraphAudit(_targetUrl) {
  return notConfigured("open-graph", "Open Graph Analysis", "https://ogp.me/");
}

export default runOpenGraphAudit;
