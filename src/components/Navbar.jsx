const Navbar = () => {
  return (
    <>
      <header class="nav-wrap">
        <div class="container nav">
          <div class="logo">
            <span aria-hidden="true" />
            BeckerBox
          </div>
          <nav class="nav-links">
            <a href="#how">How It Works</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <a href="#pricing">Purchase</a>
          </nav>
        </div>
      </header>
      <div class="nav-spacer"></div>
    </>
  );
};

export default Navbar;
