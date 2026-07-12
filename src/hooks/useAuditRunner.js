import { useState, useCallback } from "react";
import { runFullAudit } from "../auditEngine/index.js";

export function useAuditRunner() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");

  const run = useCallback(async (url) => {
    setLoading(true);
    setTargetUrl(url);
    try {
      const data = await runFullAudit(url);
      setResults(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResults(null);
    setTargetUrl("");
  }, []);

  return { results, loading, targetUrl, run, reset };
}

export default useAuditRunner;
