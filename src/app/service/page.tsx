import SiteShell from "@/components/SiteShell";

export default function ServicePage() {
  return (
    <SiteShell>
      {/* Hero area start */}
      <section className="solution__area">
        <div className="container hero-line"></div>

        <div className="solution__wrapper">
          <div className="solution__left">
            <div className="solution__img-1">
              <img
                src="/assets/imgs/service/social home.png"
                alt="Solution Image"
              />
            </div>
            <div className="solution__img-2">
              <img src="/assets/imgs/service/ads.png" alt="Solution Image" />
            </div>
          </div>

          <div className="solution__mid">
            <h1 className="solution__title animation__char_come">
              Mondo Digitale
            </h1>
            <p>
              Una comunicazione chiara e coerente è alla base di ogni brand di
              successo.
            </p>
          </div>

          <div className="solution__right">
            <div className="solution__img-3">
              <img src="/assets/imgs/service/logo.png" alt="Solution Image" />
            </div>
          </div>
        </div>

        <div className="container pb-130">
          <div className="row">
            <div className="col-xxl-12">
              <div className="solution__btm">
                <ul>
                  <li>Metodo</li>
                  <li>Creatività</li>
                  <li>Esperienza</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="solution__shape">
          <img
            src="/assets/imgs/icon/1.png"
            alt="Shape Image"
            className="shape-1"
          />
          <img
            src="/assets/imgs/icon/2.png"
            alt="Shape Image"
            className="shape-2"
          />
          <img
            src="/assets/imgs/icon/3.png"
            alt="Shape Image"
            className="shape-3"
          />
          <img
            src="/assets/imgs/icon/4.png"
            alt="Shape Image"
            className="shape-4"
          />
          <img
            src="/assets/imgs/icon/5.png"
            alt="Shape Image"
            className="shape-5"
          />
        </div>
      </section>
      {/* Hero area end */}

      {/* Service area start */}
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li className="active">
                      <a href="#service_1">
                        UI/UX <br />
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Web &amp; Mobile <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">Social Media Management</a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Healthcare <br /> Maketing
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                        Graphic &amp; Motion <br />
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#service_6">
                        Media
                        <br /> Outdoor
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <img src="/assets/imgs/service/2.jpg" alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <img src="/assets/imgs/service/1.jpg" alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <img src="/assets/imgs/service/3.jpg" alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <img src="/assets/imgs/service/4.jpg" alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <img src="/assets/imgs/service/5.jpg" alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <img src="/assets/imgs/service/6.jpg" alt="Service Image" />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <img
                          src="/assets/imgs/service/1.jpg"
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">UI/UX Design</h2>
                        <p>
                          Creiamo design accattivanti e coinvolgenti che
                          catturano l&apos;attenzione dei visitatori e li
                          invitano ad esplorare il tuo sito web. Il nostro
                          servizio di Web Design è dedicato alla creazione di
                          esperienze visive straordinarie che rappresentano al
                          meglio il tuo marchio e comunicano efficacemente il
                          tuo messaggio. Dal layout all&apos;uso dei colori,
                          dalle immagini alla tipografia, prendiamo in
                          considerazione ogni dettaglio per offrire
                          un&apos;esperienza utente straordinaria. Il nostro
                          obiettivo è creare un design intuitivo che renda la
                          navigazione del tuo sito semplice e piacevole per i
                          visitatori.
                        </p>

                        <div className="btn_wrapper">
                          <a
                            href="/web-design"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Scopri <br />
                            di più <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="service__item-6" id="service_2" data-secid="2">
                      <div className="image-tab">
                        <img
                          src="/assets/imgs/service/2.jpg"
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Web &amp; Mobile Development
                        </h2>
                        <p>
                          Sfruttando il nostro know-how tecnico, creiamo siti web
                          scalabili e flessibili, in grado di crescere con il tuo
                          business. Oltre a fornire un&apos;interfaccia utente
                          intuitiva, ci concentriamo anche sull&apos;ottimizzazione
                          per i motori di ricerca (SEO) per garantire che il tuo
                          sito sia facilmente trovabile dai tuoi potenziali
                          clienti. Oltre all&apos;aspetto estetico, ci concentriamo
                          anche sull&apos;usabilità e sull&apos;ottimizzazione per i
                          dispositivi mobili. Il tuo sito sarà completamente
                          responsive, adattandosi perfettamente a schermi di
                          diverse dimensioni e garantendo una visualizzazione
                          ottimale su desktop, tablet e smartphone. Affidaci il
                          tuo progetto e vedrai la differenza che una solida
                          presenza online può fare per il tuo marchio.
                          Contattaci oggi stesso per discutere delle tue esigenze
                          di Web Development e iniziare a creare una presenza
                          online di successo.
                        </p>

                        <ul>
                          <li>+ Integrazioni API</li>
                          <li>+ WordPress</li>
                          <li>+ Migrazioni</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Prestashop</li>
                        </ul>

                        <div className="btn_wrapper">
                          <a
                            href="/web-design"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Scopri <br />
                            di più <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="service__item-6" id="service_3" data-secid="3">
                      <div className="image-tab">
                        <img
                          src="/assets/imgs/service/3.jpg"
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Social Media Management
                        </h2>
                        <p>
                          Ci occupiamo di tutto, dalla creazione e pubblicazione
                          di contenuti coinvolgenti, alla gestione degli annunci
                          pubblicitari mirati, all&apos;interazione con i follower
                          e alla gestione delle risposte. Utilizziamo le migliori
                          pratiche per aumentare la tua visibilità online,
                          generare coinvolgimento e creare una community fedele
                          di clienti. Che tu stia cercando di aumentare la
                          consapevolezza del marchio, generare lead qualificati o
                          promuovere i tuoi prodotti/servizi, il nostro servizio
                          di Social Media Management è qui per aiutarti a
                          raggiungere i tuoi obiettivi.
                        </p>

                        <ul>
                          <li>+ Facebook</li>
                          <li>+ Instagram</li>
                          <li>+ TikTok</li>
                          <li>+ Linkedin</li>
                          <li>+ YouTube</li>
                        </ul>

                        <div className="btn_wrapper">
                          <a
                            href="/social"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Scopri <br />
                            di più <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="service__item-6" id="service_4" data-secid="4">
                      <div className="image-tab">
                        <img
                          src="/assets/imgs/service/4.jpg"
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">Healthcare Marketing</h2>
                        <p>
                          Negli anni ci siamo specializzati nell’ambito
                          dell’Healtcare Marketing, affiancando centri sanitari e
                          farmacie nella gestione del proprio business e dei
                          propri ambienti di cura, partendo dallo studio delle
                          peculiarità di questo settore particolarmente delicato
                          e strutturato.
                        </p>

                        <ul>
                          <li>+ E-commerce</li>
                          <li>+ Facebook</li>
                          <li>+ Instagram</li>
                          <li>+ TikTok</li>
                        </ul>

                        <div className="btn_wrapper">
                          <a
                            href="/healthcare-marketing"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Scopri <br />
                            di più <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="service__item-6" id="service_5" data-secid="5">
                      <div className="image-tab">
                        <img
                          src="/assets/imgs/service/5.jpg"
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Graphic &amp; Motion <br />
                          Design
                        </h2>
                        <p>
                          Attraverso l&apos;utilizzo di design innovativi e tecnologie
                          all&apos;avanguardia, creiamo grafiche e animazioni
                          coinvolgenti che si adattano perfettamente alle tue
                          esigenze. Dal design di loghi e branding, alla creazione
                          di immagini accattivanti per i tuoi canali social, alle
                          animazioni dinamiche per i tuoi video, siamo qui per
                          trasformare la tua visione in realtà.
                        </p>

                        <ul>
                          <li>+ AfterEffects</li>
                          <li>+ Premiere Pro</li>
                          <li>+ Photoshop</li>
                          <li>+ Illustrator</li>
                        </ul>

                        <div className="btn_wrapper">
                          <a
                            href="/branding-e-graphic-design"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Scopri <br />
                            di più <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="service__item-6" id="service_6" data-secid="6">
                      <div className="image-tab">
                        <img
                          src="/assets/imgs/service/4.jpg"
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">Media Outdoor</h2>
                        <p>
                          Da oltre 15 anni offriamo strategie e supporto per
                          campagne di comunicazione di successo in ogni settore.
                          Rafforza la tua brand awareness sul territorio, grazie
                          ad un servizio di consulenza dedicato alle campagne
                          affissionali.
                        </p>

                        <ul>
                          <li>+ Affissioni 6x3</li>
                          <li>+ Affissioni 3x2</li>
                          <li>+ Vetrine</li>
                          <li>+ Display Ledwall</li>
                        </ul>

                        <div className="btn_wrapper">
                          <a
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Contattaci{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* service__items-6 */}
                </div>
                {/* right-content */}
              </div>
              {/* content-wrapper */}
            </div>
          </div>
        </div>
      </section>
      {/* Service area end */}

      {/* Brand area start */}
      <section className="brand__area">
        <div className="container line pt-140 pb-100">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim">Si sono affidati a noi</h2>

              <div className="brand__list brand-gap">
                {Array.from({ length: 24 }, (_, i) => {
                  const n = String(i + 1).padStart(2, "0");
                  return (
                    <div className="brand__item-2 fade_bottom" key={n}>
                      <img src={`/assets/imgs/brand/${n}.png`} alt="Brand Logo" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand area end */}

      {/* CTA area start */}
      <section className="cta__area">
        <div className="container line pt-100 pb-110 no-p">
          <span className="line-3"></span>

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
      {/* CTA area end */}
    </SiteShell>
  );
}
