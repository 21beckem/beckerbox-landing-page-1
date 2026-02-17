import { createSignal } from 'solid-js';
import './Navbar.css';

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
            <img src="/images/icon/favicon-32.png" alt="BeckerBox Logo" title="BeckerBox Logo" />
            BeckerBox
          </a>
          <nav class="nav-links">
            <a href="/#how">How It Works</a>
            <a href="/#faq">FAQ</a>
            <a href="/tutorials.html">Tutorials</a>
            <a href="/contact.html">Contact</a>
            <a href="/pricing.html" class="btn primary">Download</a>
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
          <a href="/#how" onClick={closeMenu}>How It Works</a>
          <a href="/#features" onClick={closeMenu}>Features</a>
          <a href="/#faq" onClick={closeMenu}>FAQ</a>
          <a href="/tutorials.html" onClick={closeMenu}>Tutorials</a>
          <a href="/contact.html" onClick={closeMenu}>Contact</a>
          <a href="/pricing.html" onClick={closeMenu}>Purchase</a>
        </nav>
      </div>
      <div class="nav-spacer"></div>
    </>
  );
};

export default Navbar;
