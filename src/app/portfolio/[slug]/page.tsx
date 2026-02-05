import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import { notFound } from "next/navigation";
import { wpFetchSafe } from "@/lib/wp";
import { cache } from "react";

type WPMedia = {
  id?: number;
  source_url?: string;
  alt_text?: string;
  mime_type?: string;
  media_details?: {
    sizes?: Record<string, { source_url: string }>;
  };
};

type WPTerm = { id: number; name: string; slug: string; taxonomy?: string };

type WPPortfolio = {
  id: number;
  slug: string;
  title?: { rendered?: string };
  acf?: any;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
  };
};

type HeroMedia = {
  url: string | null;
  alt: string;
  mime?: string;
  kind?: "image" | "video";
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function htmlSafe(html?: string) {
  return { __html: html || "" };
}

/**
 * Normalizza URL media:
 * - se è relativo (/wp-content/...) => aggiunge base WP
 * - se è protocol-relative (//...) => aggiunge https:
 */
function normalizeMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  const clean = String(url).trim();
  if (!clean) return null;

  if (clean.startsWith("//")) return `https:${clean}`;

  if (clean.startsWith("/")) {
    const wpBase =
      process.env.NEXT_PUBLIC_WP_URL ||
      process.env.WP_URL ||
      process.env.NEXT_PUBLIC_WORDPRESS_URL ||
      "";

    const base = wpBase.replace(/\/+$/, "");
    return base ? `${base}${clean}` : clean;
  }

  return clean;
}

function detectKindFromUrl(url: string | null, mime?: string): "image" | "video" | null {
  if (!url) return null;

  const m = (mime || "").toLowerCase();
  if (m.startsWith("video/")) return "video";
  if (m.startsWith("image/")) return "image";

  const clean = url.split("?")[0].toLowerCase();
  if (clean.endsWith(".mp4") || clean.endsWith(".webm") || clean.endsWith(".ogg")) return "video";
  if (
    clean.endsWith(".jpg") ||
    clean.endsWith(".jpeg") ||
    clean.endsWith(".png") ||
    clean.endsWith(".webp") ||
    clean.endsWith(".gif")
  )
    return "image";

  return null;
}

function pickIndustry(post: WPPortfolio): string | null {
  const termsGroups = post._embedded?.["wp:term"] || [];
  for (const group of termsGroups) {
    const t = group?.find((x) => x.taxonomy === "industry");
    if (t) return t.name;
  }
  return null;
}

function pickFeaturedFromEmbed(post: WPPortfolio): { url: string | null; alt: string } {
  const fm = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!fm) return { url: null, alt: "" };

  const rawUrl =
    fm.media_details?.sizes?.large?.source_url ||
    fm.media_details?.sizes?.full?.source_url ||
    fm.source_url ||
    null;

  return { url: normalizeMediaUrl(rawUrl), alt: fm.alt_text || "" };
}

/** ✅ fetch media per ID (immagine o video) */
async function fetchMediaById(id: number): Promise<HeroMedia> {
  const { json } = await wpFetchSafe<any>(`/wp-json/wp/v2/media/${id}`);
  if (!json) return { url: null, alt: "", mime: undefined, kind: undefined };

  const rawUrl =
    json?.media_details?.sizes?.large?.source_url ||
    json?.media_details?.sizes?.full?.source_url ||
    json?.source_url ||
    null;

  const url = normalizeMediaUrl(rawUrl);
  const alt = json?.alt_text || "";
  const mime = json?.mime_type || undefined;
  const kind = (detectKindFromUrl(url, mime) || undefined) as any;

  return { url, alt, mime, kind };
}

/** ✅ Risolve un campo ACF immagine che può essere: URL string, Array/object, oppure ID number */
async function resolveAcfImage(field: any): Promise<{ url: string | null; alt: string }> {
  if (!field) return { url: null, alt: "" };

  // Se è stringa URL
  if (typeof field === "string") {
    const u = field.trim();
    if (!u) return { url: null, alt: "" };
    return { url: normalizeMediaUrl(u), alt: "" };
  }

  // Se è ID
  if (typeof field === "number") {
    const m = await fetchMediaById(field);
    return { url: m.url, alt: m.alt || "" };
  }

  // Se è object/array (return format array)
  if (typeof field === "object") {
    const rawUrl =
      field?.sizes?.large ||
      field?.sizes?.medium_large ||
      field?.url ||
      field?.source_url ||
      field?.guid ||
      null;

    const alt = field?.alt || field?.alt_text || field?.title || "";
    return { url: normalizeMediaUrl(rawUrl), alt };
  }

  return { url: null, alt: "" };
}

/** ✅ Risolve hero_media (file) che nel tuo JSON è ID (es: 42) */
async function resolveHeroMedia(field: any): Promise<HeroMedia> {
  if (!field) return { url: null, alt: "", mime: undefined, kind: undefined };

  if (typeof field === "number") {
    return await fetchMediaById(field);
  }

  if (typeof field === "string") {
    const url = normalizeMediaUrl(field);
    return { url, alt: "", mime: undefined, kind: detectKindFromUrl(url, undefined) || undefined };
  }

  if (typeof field === "object") {
    const rawUrl = field?.url || field?.source_url || field?.guid || null;
    const url = normalizeMediaUrl(rawUrl);
    const alt = field?.alt || field?.alt_text || field?.title || "";
    const mime = field?.mime_type || field?.mime || field?.type || undefined;
    const kind = (detectKindFromUrl(url, mime) || undefined) as any;
    return { url, alt, mime, kind };
  }

  return { url: null, alt: "", mime: undefined, kind: undefined };
}

/* =========================
   FETCH (CACHED)
========================= */
const fetchPortfolioBySlug = cache(async (slug: string): Promise<WPPortfolio | null> => {
  const { json } = await wpFetchSafe<WPPortfolio[]>(
    `/wp-json/wp/v2/portfolio?slug=${encodeURIComponent(slug)}&_embed=1`
  );
  return json?.[0] || null;
});

const fetchPortfolioIndex = cache(async (): Promise<{ slug: string }[]> => {
  try {
    const tryMenuOrder = await wpFetchSafe<WPPortfolio[]>(
      `/wp-json/wp/v2/portfolio?per_page=100&_fields=slug,menu_order,date&orderby=menu_order&order=asc`
    );
    if (Array.isArray(tryMenuOrder.json) && tryMenuOrder.json.length) {
      return tryMenuOrder.json.map((x) => ({ slug: x.slug }));
    }
  } catch {}

  try {
    const fallback = await wpFetchSafe<WPPortfolio[]>(
      `/wp-json/wp/v2/portfolio?per_page=100&_fields=slug,date&orderby=date&order=asc`
    );
    return (fallback.json || []).map((x) => ({ slug: x.slug }));
  } catch {
    return [];
  }
});

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await fetchPortfolioBySlug(slug);
  if (!post) return notFound();

  const acf = post.acf || {};
  const title = post.title?.rendered ? stripHtml(post.title.rendered) : slug;

  const year = acf.year ?? "";
  const client = acf.client ?? "";
  const intro = acf.intro ?? "";
  const headline = acf.headline ?? "";
  const finalText = acf.final_text ?? "";

  const industry = pickIndustry(post) || acf.industry_text || null;

  // ✅ Services list (nel tuo JSON è array stringhe)
  const servicesFromSelect: string[] = Array.isArray(acf.services_list) ? acf.services_list : [];

  // ✅ Hero media (ID -> fetch media)
  const featured = pickFeaturedFromEmbed(post);
  const hero = await resolveHeroMedia(acf.hero_media);

  const bannerUrl = hero.url || featured.url || null;
  const bannerKind: "image" | "video" =
    (hero.kind || detectKindFromUrl(bannerUrl, hero.mime) || "image") as any;

  // ✅ Gallery: nel tuo JSON sono ID (es: 71) -> fetch media
  const gA = await resolveAcfImage(acf.gallery_a_image);
  const gB1 = await resolveAcfImage(acf.gallery_b_image_1);
  const gB2 = await resolveAcfImage(acf.gallery_b_image_2);
  const gC = await resolveAcfImage(acf.gallery_c_image);
  const gD1 = await resolveAcfImage(acf.gallery_d_image_1);
  const gD2 = await resolveAcfImage(acf.gallery_d_image_2);

  // Prev/Next
  const indexList = await fetchPortfolioIndex();
  const currentIndex = indexList.findIndex((x) => x.slug === slug);
  const prevSlug = currentIndex > 0 ? indexList[currentIndex - 1]?.slug : null;
  const nextSlug =
    currentIndex >= 0 && currentIndex < indexList.length - 1
      ? indexList[currentIndex + 1]?.slug
      : null;

  return (
    <SiteShell>
      <main>
        <section className="portfolio__detail">
          {/* Top */}
          <div className="portfolio__detail-top">
            <div className="container g-0 line pt-110 pb-130">
              <span className="line-3"></span>

              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-title animation__char_come">
                      {title.split(" ").slice(0, 2).join(" ")}
                      <br />
                      {title.split(" ").slice(2).join(" ")}
                    </h2>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                  <div className="portfolio__detail-info">
                    <ul>
                      {industry ? (
                        <li>
                          Industria <span>{industry}</span>
                        </li>
                      ) : null}
                      {client ? (
                        <li>
                          Cliente <span>{client}</span>
                        </li>
                      ) : null}
                      {year ? (
                        <li>
                          Anno <span>{year}</span>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner (IMG o VIDEO) */}
          {bannerUrl ? (
            <div className="portfolio__detail-thumb">
              {bannerKind === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <source src={bannerUrl} />
                </video>
              ) : (
                <img src={bannerUrl} alt={hero.alt || featured.alt || title} data-speed="auto" />
              )}
            </div>
          ) : null}

          {/* Content */}
          <div className="portfolio__detail-content">
            <div className="container g-0 line pt-140">
              <span className="line-3"></span>

              {/* Intro + servizi */}
              <div className="block-content">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    <h2 className="portfolio__detail-title title-anim">
                      {headline ? String(headline) : "Il progetto"}
                    </h2>
                  </div>

                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="portfolio__detail-text">
                      {intro ? <p>{String(intro)}</p> : null}

                      {servicesFromSelect.length > 0 ? (
                        <ul>
                          {servicesFromSelect.map((s, i) => (
                            <li key={`srv-${i}`}>{String(s)}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* 1 immagine */}
              {gA.url ? (
                <div className="block-thumb">
                  <img src={gA.url} alt={gA.alt || "Portfolio Image"} data-speed="auto" />
                </div>
              ) : null}

              {/* 2 immagini */}
              {gB1.url || gB2.url ? (
                <div className="block-gallery">
                  {gB1.url ? <img src={gB1.url} alt={gB1.alt || "Portfolio Image"} /> : null}
                  {gB2.url ? <img src={gB2.url} alt={gB2.alt || "Portfolio Image"} /> : null}
                </div>
              ) : null}

              {/* 1 immagine */}
              {gC.url ? (
                <div className="block-thumb">
                  <img src={gC.url} alt={gC.alt || "Portfolio Image"} data-speed="auto" />
                </div>
              ) : null}

              {/* 2 immagini */}
              {gD1.url || gD2.url ? (
                <div className="block-gallery">
                  {gD1.url ? <img src={gD1.url} alt={gD1.alt || "Portfolio Image"} /> : null}
                  {gD2.url ? <img src={gD2.url} alt={gD2.alt || "Portfolio Image"} /> : null}
                </div>
              ) : null}

              {/* Testo finale */}
              {finalText ? (
                <div className="block-content">
                  {typeof finalText === "string" && finalText.includes("<") ? (
                    <div dangerouslySetInnerHTML={htmlSafe(finalText)} />
                  ) : (
                    <p>{String(finalText)}</p>
                  )}
                </div>
              ) : null}

              {/* Prev/Next */}
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="portfolio__detail-btns pt-150 pb-150">
                    {prevSlug ? (
                      <Link href={`/portfolio/${prevSlug}`} className="wc-btn-primary btn-hover">
                        <span></span> Prev Work
                      </Link>
                    ) : (
                      <span />
                    )}

                    {nextSlug ? (
                      <Link href={`/portfolio/${nextSlug}`} className="wc-btn-primary btn-hover">
                        <span></span> Next Work
                      </Link>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

// SSG params
export async function generateStaticParams() {
  const { json } = await wpFetchSafe<{ slug: string }[]>(
    `/wp-json/wp/v2/portfolio?per_page=100&_fields=slug`
  );
  return (json || []).map((x) => ({ slug: x.slug }));
}
