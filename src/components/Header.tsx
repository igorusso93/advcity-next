export default function Header() {
  return (
    <header className="header__area">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            <img
              className="logo-primary"
              src="/assets/imgs/logo/site-logo-white.png"
              alt="Site Logo"
            />
            <img
              className="logo-secondary"
              src="/assets/logo-white.png"
              alt="Mobile Logo"
            />
          </a>
        </div>

        <div className="header__nav-icon">
          <button
            id="open_offcanvas"
            type="button"
            aria-label="Apri menu"
          >
            <img src="/assets/imgs/icon/menu-white.png" alt="Menubar Icon" />
          </button>
        </div>

        <div className="header__support">
          <p>
            Contattaci <br />
            <a href="tel:+39089461601">+39 089461601</a>
          </p>
        </div>
      </div>
    </header>
  );
}
