import { runPageSpeedAudit } from "./connectors/pagespeed.js";
import { runSSLAudit } from "./connectors/ssl.js";
import { runMetadataAudit } from "./connectors/metadata.js";
import { runOpenGraphAudit } from "./connectors/openGraph.js";
import { runStructuredDataAudit } from "./connectors/structuredData.js";
import { runSitemapAudit } from "./connectors/sitemap.js";
import { runRobotsTxtAudit } from "./connectors/robotsTxt.js";
import { runGBPAudit } from "./connectors/gbp.js";
import { runSearchConsoleAudit } from "./connectors/searchConsole.js";
import { runAnalyticsAudit } from "./connectors/analytics.js";
import { runReviewAudit } from "./connectors/reviews.js";

import { runSemrushAudit } from "./connectors/semrush.js";
import { runAhrefsAudit } from "./connectors/ahrefs.js";
import { runLocalSEOAudit } from "./connectors/localSeo.js";
import { runAIVisibilityAudit } from "./connectors/aiVisibility.js";
import { runCitationAudit } from "./connectors/citations.js";
import { runGEOAudit } from "./connectors/geo.js";
import { runAEOAudit } from "./connectors/aeo.js";
import { runCompetitorIntelligenceAudit } from "./connectors/competitorIntelligence.js";
import { runKeywordGapAudit } from "./connectors/keywordGap.js";
import { runBacklinkAnalysisAudit } from "./connectors/backlinkAnalysis.js";
import { runBusinessVisibilityReportsAudit } from "./connectors/businessVisibilityReports.js";

// The Business Visibility Audit Platform runs two tiers of checks:
//
// FREE — real, genuinely useful checks available to any visitor today.
// Several (PageSpeed) are already live; others are architected and will
// light up as their connections are completed, per docs/API_INTEGRATION_GUIDE.md.
//
// PREMIUM — part of KAME Visibility Pro (launching soon). These are never
// presented as broken or "API Connection Required" — see the locked-feature
// treatment in src/pages/AuditPlatform.jsx.
//
// Add a new connector here (with its tier) and it automatically appears in
// the correct section of the UI — no other changes needed.
const CONNECTORS = [
  { fn: runPageSpeedAudit, tier: "free" },
  { fn: runSSLAudit, tier: "free" },
  { fn: runMetadataAudit, tier: "free" },
  { fn: runOpenGraphAudit, tier: "free" },
  { fn: runStructuredDataAudit, tier: "free" },
  { fn: runSitemapAudit, tier: "free" },
  { fn: runRobotsTxtAudit, tier: "free" },
  { fn: runGBPAudit, tier: "free" },
  { fn: runSearchConsoleAudit, tier: "free" },
  { fn: runAnalyticsAudit, tier: "free" },
  { fn: runReviewAudit, tier: "free" },

  { fn: runAIVisibilityAudit, tier: "premium" },
  { fn: runGEOAudit, tier: "premium" },
  { fn: runAEOAudit, tier: "premium" },
  { fn: runLocalSEOAudit, tier: "premium" },
  { fn: runCitationAudit, tier: "premium" },
  { fn: runCompetitorIntelligenceAudit, tier: "premium" },
  { fn: runKeywordGapAudit, tier: "premium" },
  { fn: runBacklinkAnalysisAudit, tier: "premium" },
  { fn: runSemrushAudit, tier: "premium" },
  { fn: runAhrefsAudit, tier: "premium" },
  { fn: runBusinessVisibilityReportsAudit, tier: "premium" },
];

/**
 * Runs every connector for the given URL and returns the full set of
 * AuditResult objects (see src/auditEngine/types.js), each tagged with
 * its tier. Connectors run in parallel and never throw — each failure is
 * captured as an "error" result so one bad connector can't break the
 * whole audit.
 */
export async function runFullAudit(targetUrl) {
  const settled = await Promise.allSettled(CONNECTORS.map((c) => c.fn(targetUrl)));
  return settled.map((result, i) => {
    const { tier, fn } = CONNECTORS[i];
    if (result.status === "fulfilled") {
      return { ...result.value, tier };
    }
    return { id: fn.name, label: fn.name, status: "error", data: null, message: String(result.reason), tier };
  });
}

export default runFullAudit;
