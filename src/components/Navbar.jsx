import { createSignal } from 'solid-js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header class="nav-wrap">
        <div class="container nav">
          <a class="logo" href="/">
            <span aria-hidden="true" />
            BeckerBox
          </a>
          <nav class="nav-links">
            <a href="/#how">How It Works</a>
            <a href="/#features">Features</a>
            <a href="/#faq">FAQ</a>
            <a href="/contact.html">Contact</a>
            <a href="/#pricing">Purchase</a>
          </nav>
          <button
            class="nav-menu-btn"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div class={`nav-mobile-menu ${isMenuOpen() ? 'open' : ''}`}>
        <nav class="nav-mobile-links">
          <a href="#how" onClick={closeMenu}>How It Works</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#pricing" onClick={closeMenu}>Purchase</a>
        </nav>
      </div>
      <div class="nav-spacer"></div>
    </>
  );
};

export default Navbar;
