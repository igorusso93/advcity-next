import SiteShell from "@/components/SiteShell";

export const metadata = {
  title:
    "Branding & Graphic Design - AdvCity | Pubblicità | Comunicazione | Marketing | Affissioni 6x3",
  description:
    "Se stai cercando di creare un'identità visiva forte per la tua azienda, il servizio di branding e graphic design offerto dalla nostra agenzia di comunicazione è proprio ciò di cui hai bisogno.",
};

export default function BrandingGraphicDesignPage() {
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
                    Branding & <br />
                    Graphic Design
                  </h2>
                </div>
              </div>

              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="development__wrapper">
                  <div className="development__content">
                    <p>
                      Rendi unica l&apos;identità visiva della tua azienda con il
                      nostro servizio di branding e graphic design. Siamo il tuo
                      partner ideale per dar vita a nuove linee grafiche
                      mozzafiato che riflettano l&apos;anima della tua azienda.
                      Sappiamo quanto sia importante trasmettere i valori, la
                      personalità e il messaggio della tua azienda al tuo
                      pubblico di riferimento, e lavoreremo a stretto contatto
                      con te per realizzare la tua visione.
                    </p>
                    <p>
                      Ti ascolteremo e plasmeremo sulle tue esigenze e sui tuoi
                      obiettivi il tuo brand. Dalla creazione di loghi che
                      lasciano il segno alla selezione di una palette cromatica
                      che parla dei tuoi obiettivi, del tuo settore, dei tuoi
                      valori. Il nostro team di graphic design lavorerà per
                      creare materiali di comunicazione visivamente accattivanti
                      e coerenti che non solo catturano lo sguardo, ma raccontano
                      anche la tua storia con efficacia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                <div className="development__img">
                  <img
                    src="/assets/imgs/serizio%20brand/1.jpg"
                    alt="Branding & Graphic Design"
                    data-speed="auto"
                  />
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="development__img">
                  <img
                    src="/assets/imgs/serizio%20brand/2.jpg"
                    alt="Graphic Design"
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
                    <source
                      src="/assets/imgs/serizio%20brand/3.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div className="service__detail-content">
                  <p>
                    Sia che tu abbia bisogno di brochure, opuscoli, volantini,
                    biglietti da visita, siti web o banner pubblicitari, ci
                    assicureremo che ogni elemento sia progettato con cura per
                    trasmettere il messaggio che desideri e che catturi
                    l&apos;attenzione del tuo pubblico target. La nostra
                    attenzione ai dettagli e la cura nella realizzazione dei
                    materiali ti garantiranno un risultato di qualità.
                  </p>
                  <p>
                    Inoltre, garantiremo che l&apos;immagine di marca che creiamo
                    per te sia perfettamente coerente su tutte le piattaforme e i
                    canali di comunicazione che utilizzi: dalle tue pagine social
                    alle pubblicità stampate, passando per gli eventi aziendali.
                    Conservando quella coerenza visiva e di messaggio essenziale
                    per creare un&apos;idea positiva e duratura nella mente del tuo
                    pubblico.
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
