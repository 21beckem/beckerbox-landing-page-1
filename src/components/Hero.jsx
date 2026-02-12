import PurchaseBtn from "./PurchaseBtn";

const Hero = (props) => {
  return (
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
          <PurchaseBtn product="ilf1s" />
          <a
            class="btn ghost"
            href={props.demoHref}
            target="_blank"
            rel="noreferrer"
          >
            Launch Demo
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
  );
};

export default Hero;
