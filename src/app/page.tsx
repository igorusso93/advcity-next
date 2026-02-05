import SiteShell from "@/components/SiteShell";
import { getLatestPosts } from "@/lib/wp";

export default async function Home() {
  const posts = await getLatestPosts({
    limit: 3,
    useInternalRouting: true, // <-- metti false se vuoi aprire il link WP
    fallbackImage: "/assets/imgs/blog/default.jpg",
  });

  return (
    <SiteShell>
      {/* Hero */}
      <section className="hero__area ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content animation__hero_one">
                <a href="/service">
                  Strategia, Design, Progettazione e Sviluppo{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>

                <div className="hero__title-wrapper">
                  <h3 className="hero__title">
                    WE ARE <br />
                    <span style={{ color: "#d36316" }}>
                      <br />
                      CREATIVE{" "}
                      <span>
                        <br />
                        AGENCY
                      </span>
                    </span>
                  </h3>
                </div>

                <img src="/assets/imgs/icon/arrow-down-big.png" alt="Freccia" />
              </div>
            </div>
          </div>
        </div>

        <img
          src="/assets/imgs/hero/1/adv.png"
          alt="AdvCity Creative Agency"
          className="hero1_bg"
        />
      </section>

      {/* Roll */}
      <section className="roll__area">
        <div className="swiper roll__slider">
          <div className="swiper-wrapper roll__wrapper">
            {[
              "Graphic Design",
              "Branding",
              "Web Developer",
              "E-Commerce",
              "Social Media",
              "Communication",
              "Advertising",
              "SEO",
              "Google Analytics",
              "Copywriting",
              "Story telling",
            ].map((t) => (
              <div className="swiper-slide roll__slide" key={t}>
                <h2>{t}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about__area">
        <div className="container line g-0 pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__title-wrapper">
                <h3 className="sec-title title-anim">
                  Una comunicazione chiara e coerente è alla base di ogni brand
                  di successo.
                </h3>
              </div>

              <div className="about__content-wrapper">
                <div className="about__img">
                  <div className="img-anim">
                    <img
                      src="/assets/imgs/about/home.png"
                      alt="I ragazzi di adv"
                      data-speed="0.3"
                    />
                  </div>

                  <div className="about__img-right">
                    <img
                      src="/assets/imgs/about/cosa facciamo.png"
                      alt="Notizie web"
                      data-speed="0.5"
                    />
                    <div className="shape">
                      <div className="secondary" data-speed="0.9"></div>
                      <div className="primary"></div>
                    </div>
                  </div>
                </div>

                <div className="about__content text-anim">
                  <p>
                    Strutturiamo un’identità visiva su misura per ogni progetto:
                    dalla brand identity ai flyer, ai cataloghi, ai manifesti, al
                    packaging, alla scelta di un determinato font e colori. Una
                    volta creata una solida identità che rispecchia la
                    personalità del brand, ti affiancheremo in tutte le attività
                    di comunicazione online e nella gestione ottimale dei tuoi
                    canali social, suggerendoti le giuste campagne pubblicitarie
                    per incrementare la popolarità del tuo business e la
                    riconoscibilità del brand. Parole d’ordine: unicità,
                    efficacia ed appeal.
                  </p>

                  <div className="cursor-btn btn_wrapper">
                    <a className="btn-item wc-btn-primary btn-hover" href="/about">
                      <span></span> Scopri di più{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service (online) */}
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">servizi</h2>
                <h3 className="sec-title title-anim">
                  Cosa <br />
                  sappiamo fare
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  Ogni cliente rappresenta una nuova avventura, nuove sfide e
                  nuove scoperte.{" "}
                  <span>
                    Come ormai avrai capito siamo dei reali appassionati
                    <br /> di universi creativi,
                  </span>{" "}
                  amiamo metterci in gioco ed affrontare con nuovo entusiasmo
                  ogni missione.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__top-btn">
                <div className="btn_wrapper">
                  <a href="/service" className="btn-item wc-btn-secondary btn-hover">
                    <span></span> Tutti <br />
                    servizi <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  <img
                    src="/assets/imgs/service/brand.jpg"
                    alt="Branding"
                    className="service__img img-1 active"
                  />
                  <img
                    src="/assets/imgs/service/web.jpg"
                    alt="Web Design"
                    className="service__img img-2"
                  />
                  <img
                    src="/assets/imgs/service/social.jpg"
                    alt="Social Media Managment"
                    className="service__img img-3"
                  />
                  <img
                    src="/assets/imgs/service/adv.jpg"
                    alt="Google Ads e Facebook Ads"
                    className="service__img img-4"
                  />

                  <span className="shape-box-1 current"></span>
                  <span className="shape-box-2"></span>
                  <span className="shape-box-3"></span>
                  <span className="shape-box-4"></span>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div className="service__list">
                  <a href="/branding-e-graphic-design">
                    <div className="service__item animation_home1_service" data-service="1">
                      <div className="service__number">
                        <span>01</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">Branding &amp; Graphic Design</h4>
                      </div>
                      <div className="service__text">
                        <p>Brand Identity Brand Strategy Foto e Video</p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </a>

                  <a href="/web-design">
                    <div className="service__item animation_home1_service" data-service="2">
                      <div className="service__number">
                        <span>02</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Web &amp; <br />
                          E-commerce
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>Sviluppo siti web Landing page E-commerce</p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </a>

                  <a href="/social">
                    <div className="service__item animation_home1_service" data-service="3">
                      <div className="service__number">
                        <span>03</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Social <br />
                          Media Management
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>Social Media Strategy Contenuti grafici Copywriting</p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </a>

                  <a href="/healthcare-marketing">
                    <div className="service__item animation_home1_service" data-service="4">
                      <div className="service__number">
                        <span>04</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Healthcare
                          <br /> Marketing
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          Markeing Strategy Media online ed offline Visual Comunication
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow__area">
        <div className="container g-0 line pt-140 pb-140">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Il nostro metodo</h2>
                <h3 className="sec-title title-anim">Metodo ADVCITY</h3>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="swiper workflow__slider ">
                <div className="swiper-wrapper">
                  {[
                    ["01", "Brief", "Ascoltiamo l'esigenza del cliente"],
                    ["02", "Piano & Competitor", "Visioniamo i competitor ed elaboriamo un piano d'azione"],
                    ["03", "Realizzazione", "Realizziamo la Brand Identity"],
                    ["04", "Revisione", "Revisioniamo il materiale valutandone l’efficacia sul target"],
                    ["05", "Realizzazione", "Materiale per la prima consegna al cliente"],
                    ["06", "Consegna", "Si va in scena: Social, Web, Advertising"],
                  ].map(([num, title, text]) => (
                    <div key={num} className="swiper-slide workflow__slide fade_left">
                      <h4 className="workflow__step">step {num}</h4>
                      <h5 className="workflow__number">{num}</h5>
                      <h6 className="workflow__title">{title}</h6>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="workflow__area">
        <div className="container g-0 line pt-140 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h3 className="sec-title title-anim">Siamo Partner</h3>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="brand__list">
                {[
                  ["/assets/imgs/partner/ads1.png", "Certificazione Google Rete Ricerca"],
                  ["/assets/imgs/partner/ads2.png", "Certificazione Google Shopping"],
                  ["/assets/imgs/partner/ads3.png", "Certificazione Google Display"],
                  ["/assets/imgs/partner/meta.png", "Meta Business Partner"],
                  ["/assets/imgs/partner/prestashop.png", "Prestashop Expert"],
                ].map(([src, alt]) => (
                  <div className="brand__item fade_bottom" key={src}>
                    <img src={src} alt={alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service (offline) */}
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">servizi</h2>
                <h3 className="sec-title title-anim">
                  Non solo <br />
                  online
                </h3>
              </div>
            </div>

            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  Da oltre 15 anni offriamo strategie e supporto per campagne di comunicazione
                  di successo in ogni settore.{" "}
                  <span>Rafforza la tua brand awareness sul territorio</span>{" "}
                  grazie ad un servizio di consulenza dedicato alle campagne
                  affissionali.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3"></div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  <img
                    src="/assets/imgs/service/6x3.png"
                    alt="Affissioni 6x3"
                    className="service__img img-1 active"
                  />
                  <img
                    src="/assets/imgs/service/3x2.png"
                    alt="Affissioni 3x2"
                    className="service__img img-2"
                  />
                  <img
                    src="/assets/imgs/service/vetrine.png"
                    alt="Vetrine"
                    className="service__img img-3"
                  />
                  <img
                    src="/assets/imgs/service/display.png"
                    alt="Ledwall Display"
                    className="service__img img-4"
                  />
                  <img
                    src="/assets/imgs/service/display.png"
                    alt="Circuito Ledwall"
                    className="service__img img-5"
                  />

                  <span className="shape-box-1 current" style={{ backgroundColor: "#0079A7" }}></span>
                  <span className="shape-box-2" style={{ backgroundColor: "#0079A7" }}></span>
                  <span className="shape-box-3" style={{ backgroundColor: "#0079A7" }}></span>
                  <span className="shape-box-4" style={{ backgroundColor: "#0079A7" }}></span>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div className="service__list">
                  {[
                    ["01", "Affissioni 6x3", "https://affissioni.advcity.com", "1"],
                    ["02", "Affissioni 3x2", "https://affissioni.advcity.com", "2"],
                    ["03", "Vetrine", "https://affissioni.advcity.com", "3"],
                    ["04", "Display ledwall", "https://affissioni.advcity.com", "4"],
                    ["05", "Circuito ledwall", "https://advcity.com/circuito.html", "5"],
                  ].map(([num, title, url, ds]) => (
                    <a href={url} target="_blank" rel="noreferrer" key={num}>
                      <div className="service__item animation_home1_service" data-service={ds}>
                        <div className="service__number">
                          <span>{num}</span>
                        </div>
                        <div className="service__title-wrapper">
                          <h4 className="service__title">{title}</h4>
                        </div>
                        <div className="service__text">
                          <p></p>
                        </div>
                        <div className="service__link">
                          <p>
                            <i className="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio__area pb-140">
        <div className="container">
          <div className="row top_row">
            <h2 className="portfolio__text">Portfolio</h2>

            <div className="portfolio__list-1">
              {[
                ["orogiallo", "Orogiallo Pastificio", "2021", "/assets/imgs/portfolio/orogiallo.jpg"],
                ["salvatore-sorrentino", "Salvatore Sorrentino", "2021", "/assets/imgs/portfolio/sorrentino.jpg"],
                ["cavoto", "Cavoto", "2021", "/assets/imgs/portfolio/cavoto.jpg"],
                ["borgo-alto", "Borgo Alto", "2022", "/assets/imgs/portfolio/borgoalto.jpg"],
                ["martorelli", "Martorelli", "2022", "/assets/imgs/portfolio/martorelli.jpg"],
                ["elf", "ELF", "2021", "/assets/imgs/portfolio/elf.jpg"],
                ["green-gusto", "Green Gusto", "2024", "/assets/imgs/portfolio/green.jpg"],
                ["sere-destate", "Sere D'Estate", "2024", "/assets/imgs/portfolio/sere.jpg"],
                ["metellia", "Metellia Servizi", "2024", "/assets/imgs/portfolio/copertina.jpg"],
              ].map(([slug, title, year, img]) => (
                <div className="portfolio__item" key={slug}>
                  <a href={`/portfolio/${slug}`}>
                    <img className={slug === "orogiallo" ? "mover" : undefined} src={img} alt={title} />
                  </a>
                  <div className="portfolio__info">
                    <h3 className="portfolio__title">{title}</h3>
                    <p>{year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row row_bottom">
            <div className="col-xxl-12">
              <div className="portfolio__btn btn_wrapper" data-speed="1" data-lag="0.2">
                <a className="wc-btn-secondary btn-hover btn-item" href="/portfolio">
                  <span></span>Vedi <br />
                  tutti progetti <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
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

      {/* Blog (DINAMICO da WP) */}
      <section className="blog__area no-pb blog__animation">
        <div className="container g-0 line pt-150 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title">il nostro blog</h2>
                <h3 className="sec-title">News</h3>
              </div>
            </div>

            {posts.map((p) => (
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4" key={p.href}>
                <article className="blog__item">
                  <div className="blog__img-wrapper">
                    <a
                      href={p.href}
                      target={p.external ? "_blank" : undefined}
                      rel={p.external ? "noreferrer" : undefined}
                    >
                      <div className="img-box">
                        <img className="image-box__item" src={p.img} alt={p.title} />
                        <img className="image-box__item" src={p.img} alt={p.title} />
                      </div>
                    </a>
                  </div>

                  <h2 className="blog__detail-date animation__word_come">
                    Blog <span>{p.date}</span>
                  </h2>

                  <h5>
                    <a
                      href={p.href}
                      className="blog__title"
                      target={p.external ? "_blank" : undefined}
                      rel={p.external ? "noreferrer" : undefined}
                    >
                      {p.title}
                    </a>
                  </h5>

                  <a
                    href={p.href}
                    className="blog__btn"
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noreferrer" : undefined}
                  >
                    Leggi di più{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </article>
              </div>
            ))}

            <div className="portfolio__btn btn_wrapper" data-speed="1" data-lag="0.2">
              <a className="wc-btn-secondary btn-hover btn-item" href="/blog">
                <span></span>Vedi <br />
                tutti <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta__area">
        <div className="container line pb-110">
          <span className="line-3"></span>
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
                    <span></span>Invia il tuo CV{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
