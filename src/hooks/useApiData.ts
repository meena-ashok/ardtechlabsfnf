import { useState, useEffect } from "react";

/**
 * Hook that fetches data from an API endpoint and falls back to static data on failure.
 * This ensures the site works even when the backend is offline.
 */
export function useApiData<T>(fetcher: () => Promise<T>, fallback: T): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetcher()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch(() => {
        // Use fallback data silently
        if (!cancelled) setData(fallback);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading };
}
