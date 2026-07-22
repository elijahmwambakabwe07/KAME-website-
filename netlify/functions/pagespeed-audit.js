// Netlify Function: /api/pagespeed-audit?url=https://example.com
//
// Real integration with Google PageSpeed Insights v5. Requires
// VITE_PAGESPEED_API_KEY (or PAGESPEED_API_KEY) to be set in Netlify's
// environment variables. Get a free key at:
// https://developers.google.com/speed/docs/insights/v5/get-started
//
// If no key is configured, responds with HTTP 501 and a clear message —
// it never fabricates a score.

export async function handler(event) {
  const targetUrl = event.queryStringParameters?.url;

  if (!targetUrl) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required query parameter: url" }),
    };
  }

  const apiKey = process.env.PAGESPEED_API_KEY || process.env.VITE_PAGESPEED_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 501,
      body: JSON.stringify({
        error: "API_CONNECTION_REQUIRED",
        message:
          "PAGESPEED_API_KEY is not configured in this environment. Add it in Netlify → Site Settings → Environment Variables, then redeploy.",
      }),
    };
  }

  const endpoint =
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` +
    `?url=${encodeURIComponent(targetUrl)}` +
    `&key=${apiKey}` +
    `&strategy=mobile` +
    `&category=performance&category=accessibility&category=seo&category=best-practices`;

  try {
    const res = await fetch(endpoint);
    const json = await res.json();

    if (!res.ok) {
      // Log the full third-party error server-side only (visible in Netlify's
      // function logs), but never forward a raw external API response to the
      // client — it's not this function's contract to guarantee what Google
      // does or doesn't include in an error body.
      console.error("PageSpeed API error:", JSON.stringify(json));
      return {
        statusCode: res.status,
        body: JSON.stringify({
          error: "PAGESPEED_API_ERROR",
          message: "The PageSpeed check could not complete for this URL. It may be unreachable, blocking automated requests, or the API quota may be temporarily exceeded.",
        }),
      };
    }

    // Return a trimmed, UI-friendly shape rather than Google's full (very large) payload.
    const lighthouse = json.lighthouseResult;
    const summary = {
      finalUrl: lighthouse?.finalUrl,
      fetchTime: lighthouse?.fetchTime,
      scores: {
        performance: lighthouse?.categories?.performance?.score,
        accessibility: lighthouse?.categories?.accessibility?.score,
        seo: lighthouse?.categories?.seo?.score,
        bestPractices: lighthouse?.categories?.["best-practices"]?.score,
      },
      coreWebVitals: {
        lcp: lighthouse?.audits?.["largest-contentful-paint"]?.displayValue,
        cls: lighthouse?.audits?.["cumulative-layout-shift"]?.displayValue,
        tbt: lighthouse?.audits?.["total-blocking-time"]?.displayValue,
        fcp: lighthouse?.audits?.["first-contentful-paint"]?.displayValue,
      },
      mobileFriendly: lighthouse?.audits?.["viewport"]?.score === 1,
    };

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(summary),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "FETCH_FAILED", message: err.message }),
    };
  }
}
