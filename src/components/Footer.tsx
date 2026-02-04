export default function Footer() {
  return (
    <footer className="footer__area">
      <div className="footer__top">
        <div className="container footer-line"></div>
        <img
          src="/assets/imgs/footer.jpg"
          alt="La nostra agenzia"
          data-speed="0.75"
        />
      </div>

      <div className="footer__btm">
        <div className="container">
          <div className="row footer__row">
            <div className="col-xxl-12">
              <div className="footer__inner">

                <div className="footer__widget">
                  <img
                    className="footer__logo"
                    src="/assets/logo-white.png"
                    alt="Logo AdvCity"
                  />
                  <ul className="footer__social">
                    {[
                      ["facebook", "https://www.facebook.com/advcity"],
                      ["instagram", "https://www.instagram.com/advcity/"],
                      ["tiktok", "https://www.tiktok.com/@advcitycava"],
                      ["youtube", "https://www.youtube.com/@advcity"],
                      ["linkedin", "https://www.linkedin.com/company/advcity-agenzia-pubblicitaria/"],
                    ].map(([icon, url]) => (
                      <li key={icon}>
                        <a href={url} target="_blank" rel="noreferrer">
                          <span>
                            <i className={`fa-brands fa-${icon}`}></i>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer__widget-3">
                  <h2 className="footer__widget-title">Contatti utili</h2>
                  <ul className="footer__contact">
                    <li>Via XXV Luglio, 44, 84013 Cava de&apos; Tirreni SA</li>
                    <li>
                      <a href="tel:+39089461601" className="phone">
                        +39-089461601
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@advcity.com">info@advcity.com</a>
                    </li>
                  </ul>
                </div>

                <div className="footer__widget-4">
                  <h2 className="project-title">Hai un progetto in mente?</h2>
                  <div className="btn_wrapper">
                    <a href="/contact" className="wc-btn-primary btn-hover btn-item">
                      <span></span> Scrivici <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                  <h3 className="contact-time">09:00 - 13:00<br />14:00 - 18:00</h3>
                  <h4 className="contact-day">Lunedì - Venerdì</h4>
                </div>

                <div className="footer__copyright">
                  <p>
                    © 2023 | Proprietà esclusiva di{" "}
                    <a href="https://urbanadv.net/" target="_blank" rel="noreferrer">
                      Urban Adv Srl
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
