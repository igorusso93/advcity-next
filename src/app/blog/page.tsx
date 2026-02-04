import SiteShell from "@/components/SiteShell";
import BlogFeedClient from "./BlogFeed.client";

export default function BlogPage() {
  return (
    <SiteShell>
      <main>
        <section className="blog__area-6 blog__animation">
          <div className="container g-0 line pt-110 pb-110">
            <span className="line-3"></span>

            <div className="row pb-130">
              <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title-2 animation__char_come">
                    AdvCity <br />
                    News
                  </h2>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                <div className="blog__text">
                  <p>
                    Qui troverai tutte le news dal mondo advcity. Brevi articoli che si leggono nel
                    tempo di un caffè. Oltre ad approfondimenti sulle nostre attività troverai
                    news sul mondo tech, social e della comunicazione.
                  </p>
                </div>
              </div>
            </div>

            <BlogFeedClient />
          </div>
        </section>

        <section className="cta__area">
          <div className="container line pt-100 pb-110 no-p">
            <div className="line-3"></div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="cta__content">
                  <p className="cta__sub-title">Contattaci</p>
                  <h2 className="cta__title title-anim">
                    Scrivici per una consulenza gratuita
                  </h2>
                  <div className="btn_wrapper">
                    <a href="/contact" className="wc-btn-primary btn-item btn-hover">
                      <span></span>Contattaci{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
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
