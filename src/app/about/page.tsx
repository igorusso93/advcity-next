import SiteShell from "@/components/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell>
      {/* Hero area start */}
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come">
                  Ci piace finire <br />
                  quello che cominciamo
                </h1>

                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <a
                        href="https://advcity.com/company-profile.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Company Profile{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="hero__about-text title-anim">
                    <p>
                      Studiamo il settore, i competitor, il target di riferimento
                      e attraverso l’analisi di dati rilevanti, sviluppiamo la
                      strategia più adatta al raggiungimento dei tuoi obiettivi.
                      Ti affiancheremo nello sviluppo dei tuoi progetti a 360°,
                      dalla comunicazione online alle iniziative sul territorio.
                    </p>
                  </div>

                  <div className="hero__about-award">
                    <img
                      src="/assets/favicon.png"
                      alt="Best Studio Award"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline>
                  <source src="/assets/video/about.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area end */}

      {/* Story area start */}
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>

          <div className="sec-title-wrapper">
            <div className="from-text">
              dal <span>2005</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Agenzia</h2>
                <h3 className="sec-title title-anim">La storia</h3>
              </div>

              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    AdvCity, nata nel 2005 da un’idea di Franco, Alfonso, Roberto
                    Vitale e Dino Noviello, ha rappresentato fin dalla sua
                    nascita una grossa innovazione nel settore della pubblicità
                    e della comunicazione per la provincia di Salerno. Seppur
                    nata come azienda proprietaria e concessionaria di spazi
                    outdoor, dal 2009, grazie alla lungimiranza dei fondatori,
                    avvia un processo di ricerca ed integrazione di risorse e
                    servizi al cliente dando vita nel 2010 alla divisione
                    grafica per lo sviluppo e la progettazione creativa.
                  </p>

                  <p>
                    Gli anni successivi sono costellati di successi e traguardi,
                    permettendo un completamento dell’evoluzione con
                    l’integrazione di servizi di gestione web e social media.
                    L’obiettivo, nonostante il tempo, è rimasto identico:
                    garantire ai clienti strategie di comunicazione studiate per
                    essere efficaci e congeniali al raggiungimento degli
                    obiettivi prefissati.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <img
                  src="/assets/imgs/about/1/storia.jpg"
                  alt="Storia Advcity"
                  className="w-100"
                />
              </div>
            </div>

            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <img
                  src="/assets/imgs/about/1/storia3.jpg"
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <img
                  src="/assets/imgs/about/1/storia4.jpg"
                  alt="Story Thumbnail"
                />
                <img
                  src="/assets/imgs/about/1/storia2.jpg"
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Story area end */}

      {/* Team area start */}
      <section className="team__area pt-140 pb-140">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">Team</h2>
          <h3 className="sec-title title-anim">Conosciamoci</h3>
        </div>

        <div className="swiper team__slider">
          <div className="swiper-wrapper">
            {[
              ["franco.jpg", "Franco", "Franco Vitale", "Founder"],
              ["alfonso.jpg", "Alfonso Vitale", "Alfonso Vitale", "Founder & Project Manager"],
              ["dino.jpg", "Dino Noviello", "Dino Noviello", "Founder & Sales Manager"],
              ["roberto.jpg", "Roberto Vitale", "Roberto Vitale", "Founder & Media Planner"],
              ["guido.jpg", "Giudo Guarino", "Giudo Guarino", "Social Media Manager"],
              ["assunta.jpg", "Assunta Pizzani", "Assunta Pizzani", "Social Media Manager & Videomaker"],
              ["silvio.jpg", "Silvio Squillante", "Silvio Squillante", "Digital & Web Designer"],
              ["igor.jpg", "Igor Bazhan", "Igor Bazhan", "Front & Back End Developer"],
              ["francesco.jpg", "Francesco Noviello", "Francesco Noviello", "Sale Assistant"],
              ["donatella.jpg", "Donatella Vitale", "Donatella Vitale", "Amministrazione"],
            ].map(([img, alt, name, role]) => (
              <div className="swiper-slide team__slide" key={img}>
                <img src={`/assets/imgs/team/${img}`} alt={alt} />
                <div className="team__info">
                  <h4 className="team__member-name">{name}</h4>
                  <h5 className="team__member-role">{role}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team area end */}

      {/* Brand area start */}
      <section className="brand__area">
        <div className="container g-0 line pt-140 pb-130">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Brands</h2>
                <h3 className="sec-title title-anim">Si sono affidati a noi</h3>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="brand__list">
                {Array.from({ length: 24 }, (_, i) => {
                  const n = String(i + 1).padStart(2, "0");
                  return (
                    <div className="brand__item fade_bottom" key={n}>
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
        <div className="container line pb-110 dark-p">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Contattaci</p>
                <h2 className="cta__title title-anim">
                  Discutiamo insieme del tuo progetto
                </h2>
                <div className="btn_wrapper">
                  <a href="/contact" className="wc-btn-primary btn-hover btn-item">
                    <span></span>Parliamone{" "}
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
