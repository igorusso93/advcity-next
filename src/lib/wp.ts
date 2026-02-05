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

/* -------------------------------------------------------------------------- */
/*                               BLOG HELPERS                                  */
/* -------------------------------------------------------------------------- */

export type WPPost = {
  id: number;
  date: string;
  link: string;
  slug: string;
  title: { rendered: string };
  featured_media?: number;
};

type WPMedia = {
  id: number;
  source_url: string;
};

export type LatestPostCard = {
  href: string;
  date: string; // già formattata
  title: string;
  img: string;
  external?: boolean;
};

function stripHtml(input: string) {
  return (input || "").replace(/<[^>]*>/g, "").trim();
}

function formatDateIT(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/**
 * Prende gli ultimi post pubblicati (default 3), ordinati per data DESC.
 * - include featured image (se presente)
 * - non rompe build: se WP non risponde, torna [].
 *
 * useInternalRouting:
 *  - true  => href: /blog/[slug]
 *  - false => href: link WP e external:true
 */
export async function getLatestPosts(options?: {
  limit?: number;
  useInternalRouting?: boolean;
  fallbackImage?: string;
}): Promise<LatestPostCard[]> {
  const limit = options?.limit ?? 3;
  const useInternalRouting = options?.useInternalRouting ?? true;
  const fallbackImage = options?.fallbackImage ?? "/assets/imgs/blog/default.jpg";

  // 1) ultimi post
  const { json: posts, error } = await wpFetchSafe<WPPost[]>(
    `/wp-json/wp/v2/posts?per_page=${limit}&orderby=date&order=desc&_fields=id,date,link,slug,title,featured_media`
  );

  if (!posts || error) return [];

  // 2) media map (featured images)
  const mediaIds = posts
    .map((p) => p.featured_media)
    .filter((id): id is number => typeof id === "number" && id > 0);

  const mediaMap = new Map<number, string>();

  if (mediaIds.length) {
    const { json: media } = await wpFetchSafe<WPMedia[]>(
      `/wp-json/wp/v2/media?include=${mediaIds.join(",")}&per_page=100&_fields=id,source_url`
    );

    if (media && Array.isArray(media)) {
      for (const m of media) mediaMap.set(m.id, m.source_url);
    }
  }

  // 3) normalizzo per la UI
  return posts.map((p) => {
    const title = stripHtml(p.title?.rendered || "");
    const img = (p.featured_media && mediaMap.get(p.featured_media)) || fallbackImage;

    const href = useInternalRouting ? `/blog/${p.slug}` : p.link;

    return {
      href,
      date: formatDateIT(p.date),
      title,
      img,
      external: useInternalRouting ? false : true,
    };
  });
}
