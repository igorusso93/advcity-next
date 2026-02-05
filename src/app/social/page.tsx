import SiteShell from "@/components/SiteShell";

export const metadata = {
  title:
    "Social Media Managment - AdvCity | Pubblicità | Comunicazione | Marketing | Affissioni 6x3",
  description:
    "Ci occupiamo di tutto: contenuti, pubblicazione, ads mirate, interazione con i follower e gestione risposte. Strategia, engagement e analytics per risultati misurabili.",
};

export default function SocialPage() {
  return (
    <SiteShell>
      <main>
        {/* Development area start */}
        <section className="development__area">
          <div className="container g-0 line pt-130 pb-150">
            <div className="line-3"></div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title animation__char_come">
                    Social Media <br />
                    Management
                  </h2>
                </div>
              </div>

              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="development__wrapper">
                  <div className="development__content">
                    <p>
                      Il tempismo sui social è tutto e tu gestisci già un
                      business che richiede grande impegno, per preoccuparti
                      della strategia, della creazione dei contenuti e del
                      miglior momento per postare sui tuoi canali. Lascia che
                      siano i nostri social media manager ad occuparsene!
                      Attraverso il nostro approccio riuscirai a sfruttare al
                      meglio i tuoi canali social, assicurandoti che i tuoi
                      sforzi digitali producano risultati tangibili.
                    </p>
                    <p>
                      Nell&apos;era digitale di oggi, il marketing sui social
                      media è efficace solo se porta risultati misurabili.
                      Comprendere ogni piattaforma social è essenziale affinché
                      il tuo business non sembri un pesce fuor d’acqua, per
                      questo ci immergiamo nella tua azienda per assicurarci che
                      il tuo contenuto risuoni con il pubblico giusto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                <div className="development__img">
                  <img
                    src="/assets/imgs/social/1.jpg"
                    alt="Social Media Management"
                    data-speed="auto"
                  />
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="development__img">
                  <img
                    src="/assets/imgs/social/2.jpg"
                    alt="Social Media"
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Development area end */}

        {/* Service detail area start */}
        <section className="service__detail">
          <div className="container g-0 line pb-140">
            <div className="line-3"></div>

            <div className="row">
              <div className="col-xxl-12">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title title-anim">
                    Parole d’ordine: programmazione, engagement ed analytics
                  </h2>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="service__detail-circle">
                  <span></span>
                </div>
              </div>

              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
                <div className="service__detail-img">
                  <video loop muted autoPlay playsInline>
                    <source
                      src="/assets/imgs/social/social.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div className="service__detail-content">
                  <p>
                    Un&apos;ottica ancora più ampia: esploriamo insieme ai
                    nostri clienti come, attraverso attività sponsorizzate, i
                    social media possano aumentare la consapevolezza del marchio,
                    generare lead qualificati o promuovere determinati tipi di
                    prodotto o abitudini di acquisto.
                  </p>
                  <p>
                    Il nostro team di social media manager e digital strategist
                    saprà aiutarti attraverso analisi e report, a misurare
                    l&apos;engagement sui social media, offrendoti strumenti e
                    spunti per comprendere ancora più profondamente il tuo
                    target.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service detail area end */}

        {/* CTA area start */}
        <section className="cta__area">
          <div className="container line pb-110">
            <div className="line-3"></div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="cta__content">
                  <p className="cta__sub-title">Contattaci</p>
                  <h2 className="cta__title title-anim">
                    Richiedi una consulenza gratuita e senza impegno!
                  </h2>
                  <div className="btn_wrapper">
                    <a
                      href="/contact"
                      className="wc-btn-primary btn-hover btn-item"
                    >
                      <span></span>
                      Scrivici <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA area end */}
      </main>
    </SiteShell>
  );
}
