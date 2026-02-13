import { createSignal } from "solid-js";
import PurchaseBtn from "./PurchaseBtn";
import DemoOverlay from "./DemoOverlay";

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
        <h1>Turn every phone into a motion controller.</h1>
        {/* <p>
          Bring back the motion-controlled living-room games many families grew up with — now powered by your PC and controlled by smartphones.
        </p>
        <p>
          BeckerBox makes your PC feel like a living-room console. Pair in a tap,
          calibrate in seconds, and start playing together with the phones you already have.
        </p> */}
        <div class="hero-cta">
          <a class="btn primary" href="/pricing.html">Download</a>
          {/* <button class="btn ghost demo-btn" type="button" onClick={handleOpenDemo}>
            Launch Demo
          </button> */}
          <a class="btn ghost demo-btn" type="button" href="#how">
            Learn More
          </a>
        </div>
        {/* <p class="hero-note">
          Works with iOS and Android. No bundled games or firmware — you use the titles you own.
        </p> */}
      </div>
        <div class="hero-media">
          <img src={props.imageSrc} alt="BeckerBox app screenshot" loading="lazy" />
        </div>
      </section>
      <DemoOverlay
        isOpen={isDemoOpen()}
        onClose={handleCloseDemo}
        demoHref={props.demoHref}
      />
    </>
  );
};

export default Hero;
