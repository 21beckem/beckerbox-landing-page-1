import { For } from 'solid-js';
import PricingCard from './Comp';

const App = () => {
  const steps = [
    {
      title: 'Install BeckerBox',
      copy: 'Set up the desktop app and launch the pairing hub on your PC in minutes.',
    },
    {
      title: 'Pair your phones',
      copy: 'Scan once, tap to connect, and each phone becomes a motion remote instantly.',
    },
    {
      title: 'Calibrate & play',
      copy: 'Run a three-gesture calibration and start playing together right away.',
    },
  ];

  const features = [
    'Low-latency motion tracking that keeps play feeling responsive.',
    'Intuitive button mapping with presets for quick setup.',
    'Hotkeys for save/load states so everyone can jump back in.',
    'Family-friendly pairing flow with clear on-screen guidance.',
    'Works with the phones you already have, no extra hardware needed.',
    'No bundled games or firmware; you play the titles you already own.',
  ];

  const tiers = [
    {
      title: 'Demo Mode',
      price: '$0',
      period: 'browser',
      description: 'Try the core experience in your browser and test pairing.',
      bullets: ['One remote connection', 'Basic calibration', 'Instant launch'],
      cta: 'Launch Demo',
      href: 'https://r.box.beckersuite.com/v2/host/',
      external: true,
      highlight: false,
      comingSoon: false,
      tag: 'Free',
    },
    {
      title: 'Free With Ads',
      price: '$0',
      period: 'desktop',
      description: 'Unlock the full desktop hub with short ads between sessions.',
      bullets: ['Up to 2 remotes', 'Ad-supported sessions', 'Cloud pairing profiles'],
      cta: 'Coming Soon',
      href: '#pricing',
      highlight: false,
      comingSoon: true,
      tag: 'Coming Soon',
    },
    {
      title: 'Full',
      price: '$45',
      period: 'one-time',
      description: 'The premium experience for families and couch co-op nights.',
      bullets: ['Up to 4 remotes', 'No ads', 'Priority setup support'],
      cta: 'Purchase',
      href: '#pricing',
      highlight: true,
      comingSoon: false,
      tag: 'Best Value',
    },
  ];

  const testimonials = [
    {
      quote:
        'We were playing within five minutes. Everyone just grabbed their phones and jumped in.',
      name: 'Jenna L. — Family Game Night',
    },
    {
      quote:
        'Calibration was quick and the motion felt smooth. It really feels like a living-room setup.',
      name: 'Marcus T. — Retro Fan',
    },
    {
      quote:
        'No extra controllers to buy, no pile of cables. Just phones and a big screen.',
      name: 'Riley P. — Party Host',
    },
  ];

  const faqs = [
    {
      q: 'Do you include games or system software?',
      a: 'No. BeckerBox provides the controller experience. You use games you already own.',
    },
    {
      q: 'Which phones work?',
      a: 'BeckerBox works with both iOS and Android devices, no special hardware required.',
    },
    {
      q: 'How many players can join?',
      a: 'Up to four phones can connect at once in the Full tier, perfect for couch co-op.',
    },
    {
      q: 'Is setup complicated?',
      a: 'Not at all. Pair with a scan, run a quick calibration, and start playing.',
    },
  ];

  return (
    <div class="page">
      <header class="nav-wrap">
        <div class="container nav">
          <div class="logo">
            <span aria-hidden="true" />
            BeckerBox
          </div>
          <nav class="nav-links">
            <a href="#how">How It Works</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <div class="nav-spacer"></div>

      <section class="container hero">
        <div>
          <h1>Turn every phone into a motion controller.</h1>
          <p>
            BeckerBox makes your PC feel like a living-room console. Pair in a tap,
            calibrate in seconds, and start playing together with the phones you already have.
          </p>
          <div class="hero-cta">
            <a class="btn primary" href="#pricing">Purchase</a>
            <a
              class="btn ghost"
              href="https://r.box.beckersuite.com/v2/host/"
              target="_blank"
              rel="noreferrer"
            >
              Launch Demo
            </a>
          </div>
          <p class="hero-note">
            Works with iOS and Android. No bundled games or firmware — you use the titles you own.
          </p>
        </div>
        <div class="hero-media">
          <img
            src="/images/beckerbox-hero.png"
            alt="BeckerBox app screenshot"
            loading="lazy"
          />
        </div>
      </section>

      <section class="section" id="how">
        <div class="container">
          <div class="section-header">
            <h2>How it works</h2>
            <p class="lead">
              A smooth, guided setup flow makes it easy for everyone to jump in together.
            </p>
          </div>
          <div class="grid-3">
            <For each={steps}>
              {(step, index) => (
                <div class="card how-step">
                  <div class="step-number">{index() + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section" id="features">
        <div class="container">
          <div class="section-header">
            <h2>Built for fast, family-friendly play</h2>
            <p class="lead">
              BeckerBox focuses on the fun with smart tooling, low latency, and a polished UI.
            </p>
          </div>
          <div class="grid-3">
            <For each={features}>
              {(feature) => (
                <div class="card">
                  <h3>{feature.split('.')[0]}.</h3>
                  <p>{feature}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section" id="compatibility">
        <div class="container">
          <div class="section-header">
            <h2>Compatible right away</h2>
            <p class="lead">
              Every player brings their own phone, making multiplayer setup effortless.
            </p>
          </div>
          <div class="badges">
            <div class="badge">iOS & iPhone ready</div>
            <div class="badge">Android devices</div>
            <div class="badge">Up to 4 remotes</div>
            <div class="badge">Instant calibration</div>
          </div>
        </div>
      </section>

      <section class="section" id="pricing">
        <div class="container">
          <div class="section-header">
            <h2>Choose your setup</h2>
            <p class="lead">
              Start free, upgrade when you are ready, and keep the experience tailored to your crew.
            </p>
          </div>
          <div class="pricing-grid">
            <For each={tiers}>
              {(tier) => (
                <PricingCard
                  title={tier.title}
                  price={tier.price}
                  period={tier.period}
                  description={tier.description}
                  bullets={tier.bullets}
                  cta={tier.cta}
                  href={tier.href}
                  external={tier.external}
                  highlight={tier.highlight}
                  comingSoon={tier.comingSoon}
                  tag={tier.tag}
                />
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section" id="testimonials">
        <div class="container">
          <div class="section-header">
            <h2>Families are already playing</h2>
            <p class="lead">
              Designed for parties, couch co-op nights, and multi-generation get-togethers.
            </p>
          </div>
          <div class="testimonials">
            <For each={testimonials}>
              {(entry) => (
                <div class="card">
                  <p class="quote">“{entry.quote}”</p>
                  <p class="person">{entry.name}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section" id="faq">
        <div class="container">
          <div class="section-header">
            <h2>Frequently asked questions</h2>
            <p class="lead">Everything you need to know before you hit start.</p>
          </div>
          <div class="faq">
            <For each={faqs}>
              {(item) => (
                <div class="card">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <p>
            BeckerBox helps you connect the devices you already own for motion-first play on PC.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
