import { Show } from 'solid-js';

const AboutSection = () => {
  return (
    <section class="contact-section contact-about">
      <div class="container">
        <div class="contact-card">
          <div class="contact-avatar" aria-hidden="true">
              <img src="/images/me.jpg" alt="Michael Becker" loading="lazy" />
          </div>
          <div class="contact-about-copy">
            <p class="contact-kicker">About me :)</p>
            <h2>Hi, I'm Michael Becker.</h2>
            <p>
              I love God, I love life, and I love my family. I believe technology is
              meant to be used, not abused.
            </p>
            <p>
              Here at BeckerSuite LLC, I focus on creating tools that help you connect
              with your loved ones, God, and the world around you. That includes
              simple multiplayer games, tools to help you be more productive and
              informed, and experiences that help you come closer to God.
            </p>
            <div class="contact-actions">
              <a class="btn ghost" target="_blank" href="https://www.linkedin.com/in/michaelgrantbecker/">Follow</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
