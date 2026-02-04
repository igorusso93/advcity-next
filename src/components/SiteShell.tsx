import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Offcanvas from "@/components/Offcanvas";



export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Cursor Animation */}
      <div className="cursor1"></div>
      <div className="cursor2"></div>

      {/* Testimonial Play Cursor */}
      <div className="cursor" id="client_cursor">
        Riproduci
      </div>

      {/* Preloader */}
      <div className="preloader">
        <div className="loading">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
          <div className="bar bar7"></div>
          <div className="bar bar8"></div>
        </div>
      </div>

      {/* Switcher */}
      <div className="switcher__area">
        <div className="switcher__icon">
          <button id="switcher_open">
            <i className="fa-solid fa-gear"></i>
          </button>
          <button id="switcher_close">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="switcher__items">
          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title">Mouse</h2>
            </div>
            <div className="switcher__btn">
              <select name="cursor-style" id="cursor_style" defaultValue="2">
                <option value="1">statico</option>
                <option value="2">animato</option>
              </select>
            </div>
          </div>

          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title">colori</h2>
            </div>
            <div className="switcher__btn mode-type wc-col-2">
              <button className="active" data-mode="light">
                chiaro
              </button>
              <button data-mode="dark">scuro</button>
            </div>
          </div>

          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title">Tipo Lingua</h2>
            </div>
            <div className="switcher__btn lang_dir wc-col-2">
              <button className="active" data-mode="ltr">
                LTR
              </button>
              <button data-mode="rtl">RTL</button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll smoother placeholder */}
      <div className="has-smooth" id="has_smooth"></div>

      {/* Go Top Button */}
      <button id="scroll_top" className="scroll-top">
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      {/* Offcanvas (lo stesso che hai in Home: copialo qui dal tuo page.tsx) */}
      {/* 🔥 CONSIGLIO: spostiamo l’offcanvas qui dentro per tutte le pagine */}
      {/* Per non allungarti troppo adesso, puoi lasciarlo nelle singole pagine e lo spostiamo dopo */}

      <Header />
      <Offcanvas />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
