import { runPageSpeedAudit } from "./connectors/pagespeed.js";
import { runGBPAudit } from "./connectors/gbp.js";
import { runSearchConsoleAudit } from "./connectors/searchConsole.js";
import { runAnalyticsAudit } from "./connectors/analytics.js";
import { runStructuredDataAudit } from "./connectors/structuredData.js";
import { runSSLAudit } from "./connectors/ssl.js";
import { runOpenGraphAudit } from "./connectors/openGraph.js";
import { runMetadataAudit } from "./connectors/metadata.js";
import { runCitationAudit } from "./connectors/citations.js";
import { runReviewAudit } from "./connectors/reviews.js";
import { runLocalSEOAudit } from "./connectors/localSeo.js";
import { runAIVisibilityAudit } from "./connectors/aiVisibility.js";
import { runSemrushAudit } from "./connectors/semrush.js";
import { runAhrefsAudit } from "./connectors/ahrefs.js";

// The full set of checks the Business Visibility Audit Platform runs.
// Add a new connector here and it automatically appears in the UI —
// no changes needed in src/pages/AuditPlatform.jsx.
const CONNECTORS = [
  runPageSpeedAudit,
  runSSLAudit,
  runMetadataAudit,
  runOpenGraphAudit,
  runStructuredDataAudit,
  runGBPAudit,
  runSearchConsoleAudit,
  runAnalyticsAudit,
  runCitationAudit,
  runReviewAudit,
  runLocalSEOAudit,
  runAIVisibilityAudit,
  runSemrushAudit,
  runAhrefsAudit,
];

/**
 * Runs every connector for the given URL and returns the full set of
 * AuditResult objects (see src/auditEngine/types.js). Connectors run in
 * parallel and never throw — each failure is captured as an "error" result
 * so one bad connector can't break the whole audit.
 */
export async function runFullAudit(targetUrl) {
  const settled = await Promise.allSettled(CONNECTORS.map((fn) => fn(targetUrl)));
  return settled.map((result, i) =>
    result.status === "fulfilled"
      ? result.value
      : { id: CONNECTORS[i].name, label: CONNECTORS[i].name, status: "error", data: null, message: String(result.reason) }
  );
}

export default runFullAudit;
