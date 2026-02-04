import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contatti - AdvCity",
  description:
    "Contatta AdvCity per progetti di comunicazione, marketing, web e advertising.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      {/* Contact area start */}
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come">
                  Contattaci
                </h2>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  Grande! Siamo entusiasti di sentire la tua opinione e di
                  iniziare qualcosa di speciale insieme. Chiamaci per qualsiasi
                  richiesta.
                </p>
              </div>
            </div>
          </div>

          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3 className="sub-title-anim-top animation__word_come">
                  Non esitare ! <br />
                  Scrivici
                </h3>

                <ul>
                  <li>
                    <a href="tel:+39089461601">+39 089 461601</a>
                  </li>
                  <li>
                    <a href="mailto:info@advcity.com">info@advcity.com</a>
                  </li>
                  <li>
                    <span>
                      Via XXV Luglio, 44 <br />
                      84013 Cava de&apos; Tirreni (SA)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form action="/mail.php" method="POST" id="form">
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nome e Cognome *"
                        required
                      />
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Telefono *"
                        required
                      />
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Oggetto *"
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Messaggio *"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <input
                          type="hidden"
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                        />
                        <button
                          type="submit"
                          className="wc-btn-primary btn-hover btn-item"
                        >
                          <span></span> Invia <br />
                          Messaggio{" "}
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact area end */}
    </SiteShell>
  );
}
