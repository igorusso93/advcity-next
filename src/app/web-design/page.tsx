import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "Web Design - AdvCity | Pubblicità | Comunicazione | Marketing | Affissioni 6x3",
  description: "AdvCity | Pubblicità | Comunicazione | Marketing | Affissioni 6x3",
};

export default function WebDesignPage() {
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
                    Web & <br />
                    E-commerce
                  </h2>
                </div>
              </div>

              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="development__wrapper">
                  <div className="development__content">
                    <p>
                      Se stai cercando di creare un&apos;identità visiva forte per la tua
                      azienda, il servizio di branding e graphic design offerto dalla nostra
                      agenzia di comunicazione è proprio ciò di cui hai bisogno. Sappiamo
                      quanto sia importante trasmettere i valori, la personalità e il
                      messaggio della tua azienda al tuo pubblico di riferimento, e
                      lavoreremo a stretto contatto con te per realizzare la tua visione.
                    </p>
                    <p>
                      Il nostro approccio orientato al cliente significa che ascolteremo
                      attentamente le tue esigenze e i tuoi obiettivi, in modo da poter
                      creare un&apos;immagine di marca che rappresenti al meglio
                      l&apos;essenza e l&apos;identità della tua azienda. Dal design di un
                      logo distintivo alla scelta di una palette di colori appropriata e
                      alla selezione di font accattivanti, il nostro team di graphic design
                      lavorerà per creare materiali di comunicazione visivamente
                      accattivanti e coerenti.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                <div className="development__img">
                  <img
                    src="/assets/imgs/web/1.jpg"
                    alt="Web & E-commerce"
                    data-speed="auto"
                  />
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="development__img">
                  <img
                    src="/assets/imgs/web/2.jpg"
                    alt="Web Design"
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
                    Parole d’ordine: unicità, efficacia ed appeal.
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
                    <source src="/assets/imgs/web/3.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="service__detail-content">
                  <p>
                    Sia che tu abbia bisogno di brochure, opuscoli, volantini,
                    biglietti da visita, siti web o banner pubblicitari, ci
                    assicureremo che ogni elemento sia progettato con cura per
                    trasmettere il tuo messaggio desiderato e attirare
                    l&apos;attenzione del tuo pubblico target. La nostra
                    attenzione ai dettagli e la cura nella realizzazione dei
                    materiali ti garantiranno un risultato di qualità.
                  </p>
                  <p>
                    Inoltre, ci assicureremo che l&apos;immagine di marca che
                    creiamo per te sia coerente su tutte le piattaforme e i
                    canali di comunicazione che utilizzi. Che si tratti dei tuoi
                    profili social media, delle pubblicità stampate o degli
                    eventi aziendali, la coerenza è fondamentale per creare
                    un&apos;impressione duratura nella mente del tuo pubblico.
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
                  <p className="cta__sub-title">Lavora con noi</p>
                  <h2 className="cta__title title-anim">
                    Vorresti lavorare con noi?
                    <br />
                    non esitare ad inviarci il tuo Curriculum
                  </h2>
                  <div className="btn_wrapper">
                    <a href="/contact" className="wc-btn-primary btn-hover btn-item">
                      <span></span>
                      Invia il tuo CV <i className="fa-solid fa-arrow-right"></i>
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
