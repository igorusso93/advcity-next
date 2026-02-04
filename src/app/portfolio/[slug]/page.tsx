// src/app/portfolio/[slug]/page.tsx
import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import { notFound } from "next/navigation";
import { wpFetchSafe } from "@/lib/wp";
import { cache } from "react";

type WPMedia = {
  id?: number;
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: Record<string, { source_url: string }>;
  };
};

type WPTerm = { id: number; name: string; slug: string; taxonomy?: string };

type WPPortfolio = {
  id: number;
  slug: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  date?: string;
  menu_order?: number;
  acf?: any;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
  };
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function htmlSafe(html?: string) {
  return { __html: html || "" };
}

/**
 * Normalizza URL immagini:
 * - se è relativo (/wp-content/...) => aggiunge base WP
 * - se è http => forza https (per evitare mixed content)
 */
function normalizeMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  const clean = String(url).trim();
  if (!clean) return null;

  const httpsUrl = clean.replace(/^http:\/\//i, "https://");

  if (httpsUrl.startsWith("/")) {
    const wpBase =
      process.env.NEXT_PUBLIC_WP_URL ||
      process.env.WP_URL ||
      process.env.NEXT_PUBLIC_WORDPRESS_URL ||
      "";

    const base = wpBase.replace(/\/+$/, "");
    return base ? `${base}${httpsUrl}` : httpsUrl;
  }

  return httpsUrl;
}

/**
 * ACF Image può tornare:
 * - oggetto/array (Return Format = Array)
 * - ID numero (Return Format = ID)
 * - stringa URL (Return Format = URL)
 *
 * Qui NON risolviamo l'ID (lo facciamo dopo con fetchMediaById).
 */
function pickAcfImage(imageField: any): { url: string | null; alt: string } {
  if (!imageField) return { url: null, alt: "" };

  // Return format: URL (stringa)
  if (typeof imageField === "string") {
    return { url: normalizeMediaUrl(imageField), alt: "" };
  }

  // Return format: ID (numero)
  if (typeof imageField === "number") {
    return { url: null, alt: "" };
  }

  // Return format: Object / Array
  if (typeof imageField === "object") {
    const rawUrl =
      imageField?.sizes?.large ||
      imageField?.sizes?.medium_large ||
      imageField?.url ||
      imageField?.source_url ||
      null;

    const alt = imageField?.alt || imageField?.alt_text || imageField?.title || "";
    return { url: normalizeMediaUrl(rawUrl), alt };
  }

  return { url: null, alt: "" };
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

function pickIndustry(post: WPPortfolio): string | null {
  const termsGroups = post._embedded?.["wp:term"] || [];
  for (const group of termsGroups) {
    const t = group?.find((x) => x.taxonomy === "industry");
    if (t) return t.name;
  }
  return null;
}

/** ✅ RISOLVE UNA MEDIA WP PARTENDO DA ID (ACF Return Format = ID) */
async function fetchMediaById(id: number): Promise<{ url: string | null; alt: string }> {
  try {
    const { json } = await wpFetchSafe<any>(`/wp-json/wp/v2/media/${id}`);
    const rawUrl = json?.media_details?.sizes?.large?.source_url || json?.source_url || null;
    const alt = json?.alt_text || "";
    return { url: normalizeMediaUrl(rawUrl), alt };
  } catch {
    return { url: null, alt: "" };
  }
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

function renderBlocks(blocks: any[]) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null;

  return blocks.map((b, idx) => {
    const layout = b?.acf_fc_layout;

    // 1) Immagine singola
    if (layout === "single_image" || layout === "immagine_singola" || layout === "image_single") {
      const { url, alt } = pickAcfImage(b.image);
      if (!url) return null;
      const speed = b.speed || "0.5";

      return (
        <div className="block-thumb" key={`blk-${idx}`}>
          <img src={url} alt={alt || "Portfolio Image"} data-speed={speed} />
        </div>
      );
    }

    // 2) Gallery 2 immagini
    if (layout === "gallery_two" || layout === "gallery_2" || layout === "gallery_two_images") {
      const i1 = pickAcfImage(b.image_1);
      const i2 = pickAcfImage(b.image_2);
      if (!i1.url && !i2.url) return null;

      return (
        <div className="block-gallery" key={`blk-${idx}`}>
          {i1.url ? <img src={i1.url} alt={i1.alt || "Portfolio Image"} /> : null}
          {i2.url ? <img src={i2.url} alt={i2.alt || "Portfolio Image"} /> : null}
        </div>
      );
    }

    // 3) 2 immagini + testo
    if (layout === "two_images_text" || layout === "img_text" || layout === "two_images_plus_text") {
      const i1 = pickAcfImage(b.image_1);
      const i2 = pickAcfImage(b.image_2);
      const text = b.text;

      return (
        <div className="block-img-text" key={`blk-${idx}`}>
          {i1.url ? <img src={i1.url} alt={i1.alt || "Portfolio Image"} /> : null}
          {i2.url ? <img src={i2.url} alt={i2.alt || "Portfolio Image"} /> : null}
          {text ? (
            typeof text === "string" && text.includes("<") ? (
              <p dangerouslySetInnerHTML={htmlSafe(text)} />
            ) : (
              <p>{String(text)}</p>
            )
          ) : null}
        </div>
      );
    }

    // 4) Testo
    if (layout === "text" || layout === "testo" || layout === "rich_text") {
      const title = b.title;
      const text = b.text;

      return (
        <div className="block-content" key={`blk-${idx}`}>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              {title ? (
                <h2 className="portfolio__detail-title title-anim">
                  {typeof title === "string" ? title : String(title)}
                </h2>
              ) : null}
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="portfolio__detail-text">
                {text ? (
                  typeof text === "string" && text.includes("<") ? (
                    <div dangerouslySetInnerHTML={htmlSafe(text)} />
                  ) : (
                    <p>{String(text)}</p>
                  )
                ) : null}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  });
}

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
  const servicesList: any[] = Array.isArray(acf.services_list) ? acf.services_list : [];

  const industry = pickIndustry(post) || acf.industry_text || null;

  // ✅ Banner: risolvo hero_image anche se è ID
  const featured = pickFeaturedFromEmbed(post);

  let hero = pickAcfImage(acf.hero_image);
  if (!hero.url && typeof acf.hero_image === "number") {
    hero = await fetchMediaById(acf.hero_image);
  }

  const bannerUrl = hero.url || featured.url || null;

  // Prev/Next
  const indexList = await fetchPortfolioIndex();
  const currentIndex = indexList.findIndex((x) => x.slug === slug);
  const prevSlug = currentIndex > 0 ? indexList[currentIndex - 1]?.slug : null;
  const nextSlug =
    currentIndex >= 0 && currentIndex < indexList.length - 1
      ? indexList[currentIndex + 1]?.slug
      : null;

  const blocks = Array.isArray(acf.content_blocks) ? acf.content_blocks : [];

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

          {/* Banner */}
          {bannerUrl ? (
            <div className="portfolio__detail-thumb">
              <img src={bannerUrl} alt={hero.alt || featured.alt || title} data-speed="auto" />
            </div>
          ) : null}

          {/* Content */}
          <div className="portfolio__detail-content">
            <div className="container g-0 line pt-140">
              <span className="line-3"></span>

              {/* Intro */}
              <div className="block-content">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    <h2 className="portfolio__detail-title title-anim">
                      {acf.headline ? String(acf.headline) : "Il progetto"}
                    </h2>
                  </div>

                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="portfolio__detail-text">
                      {intro ? <p>{String(intro)}</p> : null}

                      {servicesList.length > 0 ? (
                        <ul>
                          {servicesList.map((s, i) => {
                            const val = typeof s === "string" ? s : s?.item;
                            return <li key={`srv-${i}`}>{String(val || "")}</li>;
                          })}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {renderBlocks(blocks)}

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
