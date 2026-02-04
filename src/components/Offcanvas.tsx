export default function Offcanvas() {
  return (
    <div className="offcanvas__area">
      <div className="offcanvas__body">
        <div className="offcanvas__left">
          <div className="offcanvas__logo">
            <a href="/">
              <img
                src="/assets/imgs/logo/site-logo-white-2.png"
                alt="AdvCity Logo"
              />
            </a>
          </div>

          <div className="offcanvas__social">
            <h3 className="social-title">Follow Us</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/advcity-agenzia-pubblicitaria/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@advcitycava"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/advcity/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/advcity"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@advcity"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="offcanvas__links">
            <ul>
              <li>
                <a href="/about">Azienda</a>
              </li>
              <li>
                <a href="/contact">Contatti</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="offcanvas__mid">
          <div className="offcanvas__menu-wrapper">
            <nav className="offcanvas__menu">
              <ul className="menu-anim">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">Chi Siamo</a>
                </li>
                <li>
                  <a href="/service">Servizi</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a
                    href="https://affissioni.advcity.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Spazi Outdoor
                  </a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contatti</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="offcanvas__right">
          <div className="offcanvas__search">
            <form action="#">
              <input type="text" name="Cerca" placeholder="Cerca" />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className="offcanvas__contact">
            <h3>Restiamo in contatto</h3>
            <ul>
              <li>
                <a href="tel:+39089461601">+39-089461601</a>
              </li>
              <li>
                <a href="mailto:info@advcity.com">info@advcity.com</a>
              </li>
              <li>Via XXV Luglio, 44, 84013 Cava de&apos; Tirreni SA</li>
            </ul>
          </div>

          <img src="/assets/imgs/shape/11.png" alt="shape" className="shape-1" />
          <img src="/assets/imgs/shape/12.png" alt="shape" className="shape-2" />
        </div>

        <div className="offcanvas__close">
          {/* ✅ ID CRITICO */}
          <button type="button" id="close_offcanvas">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
