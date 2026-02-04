// src/lib/wp.ts
// Wrapper "safe" per WordPress REST.
// - Non spacca la build se WP risponde HTML invece di JSON
// - Espone anche wpFetch (compatibilità con page.tsx già scritto)

export const WP_URL = (process.env.NEXT_PUBLIC_WP_URL || "").replace(/\/$/, "");

export type WPPageResult<T> = {
  data: T;
  total?: number;
  totalPages?: number;
  page?: number;
  perPage?: number;
};

function isJsonResponse(contentType: string | null) {
  return !!contentType && contentType.toLowerCase().includes("application/json");
}

/**
 * Fetch JSON da WP. Se WP non risponde JSON (es. HTML), NON lancia errore:
 * ritorna null e un messaggio utile.
 */
export async function wpFetchSafe<T>(
  path: string,
  init?: RequestInit
): Promise<{ json: T | null; error?: string; status?: number }> {
  if (!WP_URL) {
    return { json: null, error: "Missing NEXT_PUBLIC_WP_URL", status: 0 };
  }

  const url = `${WP_URL}${path}`;
  let res: Response;

  try {
    res = await fetch(url, {
      ...init,
      next: { revalidate: 60 },
    });
  } catch (e: any) {
    return { json: null, error: e?.message || "Network error", status: 0 };
  }

  const ct = res.headers.get("content-type");
  const status = res.status;

  if (!isJsonResponse(ct)) {
    const preview = await res.text().catch(() => "");
    return {
      json: null,
      status,
      error: `WP fetch expected JSON but got "${ct}". First chars: ${preview.slice(0, 120)}`,
    };
  }

  if (!res.ok) {
    const preview = await res.text().catch(() => "");
    return {
      json: null,
      status,
      error: `WP fetch failed ${status} ${res.statusText}: ${url}. Body: ${preview.slice(0, 200)}`,
    };
  }

  try {
    const data = (await res.json()) as T;
    return { json: data, status };
  } catch (e: any) {
    return { json: null, status, error: e?.message || "Invalid JSON" };
  }
}

/**
 * Compat: wpFetch<T>() per i page.tsx che già importano wpFetch.
 * Non lancia errori: se WP non risponde, ritorna "null as any" (così la pagina può fare notFound()).
 */
export async function wpFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const { json } = await wpFetchSafe<T>(path, init);
  return (json ?? (null as any)) as T;
}

/**
 * Helper paginato: ritorna data + total/totalPages dai response headers WP.
 * Se fallisce, ritorna data "null as any" e totalPages=0 senza rompere build.
 */
export async function wpFetchPaged<T>(
  pathWithQuery: string,
  init?: RequestInit
): Promise<WPPageResult<T>> {
  if (!WP_URL) return { data: (null as any) as T, total: 0, totalPages: 0 };

  const url = `${WP_URL}${pathWithQuery}`;
  let res: Response;

  try {
    res = await fetch(url, { ...init, next: { revalidate: 60 } });
  } catch {
    return { data: (null as any) as T, total: 0, totalPages: 0 };
  }

  const ct = res.headers.get("content-type");
  if (!isJsonResponse(ct) || !res.ok) {
    return { data: (null as any) as T, total: 0, totalPages: 0 };
  }

  const total = Number(res.headers.get("X-WP-Total") || "0") || 0;
  const totalPages = Number(res.headers.get("X-WP-TotalPages") || "0") || 0;

  const data = (await res.json()) as T;
  return { data, total, totalPages };
}
