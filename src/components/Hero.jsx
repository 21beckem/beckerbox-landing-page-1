import { createSignal } from "solid-js";
import PurchaseBtn from "./PurchaseBtn";
import Overlay from "./Overlay";
import './Hero.css';

const Hero = (props) => {
  const [isDemoOpen, setIsDemoOpen] = createSignal(false);

  const handleOpenDemo = () => {
    setIsDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <>
      <section class="container hero">
      <div class="hero-copy">
        <h1>Bring back the console games many families grew up with</h1>
        <p>
          Turn your <b>computer</b> into the <b>console</b>, turn your <b>phones</b> into the <b>controllers</b>.
          <br />
          Play your favorite games just how you remember them
        </p>
        <div class="hero-cta">
          <a class="btn primary" href="/pricing.html">Download</a>
          <button class="btn ghost demo-btn" type="button" onClick={handleOpenDemo}>
            Demo Video
          </button>
          {/* <a class="btn ghost demo-btn" type="button" href="#how">
            Learn More
          </a> */}
        </div>
        {/* <p class="hero-note">
          Works with iOS and Android. No bundled games or firmware — you use the titles you own.
        </p> */}
      </div>
        <div class="hero-media">
          {/* <video src="/videos/console-to-pc.mp4" title="BeckerBox Hero video" alt="BeckerBox app screenshot" loading="lazy" autoplay loop></video> */}
          <img src="/images/beckerbox-hero.png" title="BeckerBox Hero Image" alt="BeckerBox app screenshot" loading="lazy" />
        </div>
      </section>
      <Overlay
        isOpen={isDemoOpen()}
        onClose={handleCloseDemo}
        // kicker="Video Demo"
        title="Becker Box Demo"
        demoHref="https://www.youtube.com/embed/qd2TMkiKaPE?autoplay=1&rel=0"
      />
    </>
  );
};

export default Hero;
