import { notConfigured } from "../types.js";

/**
 * AI Visibility Analysis connector.
 * Plan: query ChatGPT, Perplexity, and Google AI Overviews (where an API
 * exists) with common customer questions about the business and check
 * whether — and how accurately — the business is mentioned. No official,
 * stable API exists yet for most of these as of this build; expect to
 * start with scheduled manual spot-checks before automating.
 */
export async function runAIVisibilityAudit(_targetUrl) {
  return notConfigured("ai-visibility", "AI Visibility Analysis", null);
}

export default runAIVisibilityAudit;
