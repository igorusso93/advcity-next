// src/app/portfolio/page.tsx
import SiteShell from "@/components/SiteShell";
import { wpFetchSafe } from "@/lib/wp";

type WPMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: Record<string, { source_url: string }>;
  };
};

type WPPortfolio = {
  id: number;
  slug: string;
  title?: { rendered?: string };
  date?: string;
  menu_order?: number;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
  };
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

/** forza sempre URL assoluto wordpress */
function normalizeMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const clean = String(url).trim();
  if (!clean) return null;

  // evita mixed content
  const httpsUrl = clean.replace(/^http:\/\//i, "https://");

  // se WP ritorna path relativo, lo prefisso con base WP
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

async function fetchPortfolioList(): Promise<
  { slug: string; title: string; year: string; img: string | null }[]
> {
  // ⚠️ IMPORTANTISSIMO: niente _fields qui, altrimenti _embedded può arrivare “monco”
  // Provo menu_order, se non va o torna vuoto vado a date.
  let items: WPPortfolio[] = [];

  try {
    const res = await wpFetchSafe<WPPortfolio[]>(
      `/wp-json/wp/v2/portfolio?per_page=100&_embed=1&orderby=menu_order&order=asc`
    );
    if (Array.isArray(res.json) && res.json.length) items = res.json;
  } catch {
    // ignore
  }

  if (!items.length) {
    try {
      const res = await wpFetchSafe<WPPortfolio[]>(
        `/wp-json/wp/v2/portfolio?per_page=100&_embed=1&orderby=date&order=desc`
      );
      if (Array.isArray(res.json)) items = res.json;
    } catch {
      items = [];
    }
  }

  return items.map((p) => {
    const title = p.title?.rendered ? stripHtml(p.title.rendered) : p.slug;
    const year = p.date ? new Date(p.date).getFullYear().toString() : "";
    const featured = pickFeaturedFromEmbed(p);

    return {
      slug: p.slug,
      title,
      year,
      img: featured.url, // ✅ sempre URL WP normalizzato
    };
  });
}

export default async function PortfolioPage() {
  const list = await fetchPortfolioList();

  return (
    <SiteShell>
      {/* Portfolio area start */}
      <section className="portfolio__area-6">
        <div className="container line pt-100 pb-140">
          <span className="line-3"></span>

          <div className="zi-9">
            <div className="row">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                <div className="sec-title-wrapper portfolio__title-wrap-6">
                  <div>
                    <h2 className="sec-sub-title animation__char_come">I nostri progetti</h2>
                    <h3 className="sec-title animation__char_come_long">Works</h3>
                    <p>Scopri cosa abbiamo realizzato per i nostri clienti!</p>
                  </div>

                  <div className="portfolio__pagination-6">
                    <span className="portfolio__current">01</span> / 0
                    <span className="portfolio__total"></span>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
                <div className="portfolio__wrapper-6">
                  <div className="portfolio__list-6">
                    {list.map((p, idx) => {
                      const item = String(idx + 1);

                      // Se manca l'immagine in evidenza, puoi:
                      // - nascondere l'item, oppure
                      // - mostrare placeholder.
                      // Qui: se manca, lo mostro comunque (senza <img>) per non “sparire”.
                      return (
                        <div className="portfolio__item-6" data-portfitem={item} key={p.slug}>
                          <a href={`/portfolio/${p.slug}`}>
                            {p.img ? (
                              <img src={p.img} alt={p.title || "Portfolio Image"} data-speed="0.4" />
                            ) : null}

                            <div className="portfolio__content-6">
                              <h4 className="portfolio__title-6">{p.title}</h4>
                              <h5 className="portfolio__date">{p.year}</h5>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio area end */}

      {/* CTA area start */}
      <section className="cta__area">
        <div className="container line pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Contattaci</p>
                <h2 className="cta__title title-anim">
                  Hai un progetto in mente? <br /> non esitare a contattarci!
                </h2>
                <div className="btn_wrapper">
                  <a href="/contact" className="wc-btn-primary btn-hover btn-item">
                    <span></span>Scrivici <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA area end */}
    </SiteShell>
  );
}
