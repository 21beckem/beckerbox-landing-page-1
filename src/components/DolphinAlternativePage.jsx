import ComparisonSection from './ComparisonSection';
import SectionHeader from './SectionHeader';
import './DolphinAlternativePage.css';

const comparisons = [
  {
    title: 'Initial Setup & Installation',
    description: 'Getting your system ready to play games for the first time.',
    icon: 'fa-download',
    imageLabel: 'Setup Process',
    dolphinPoints: [
      { type: 'con', text: 'Download and configure Dolphin manually' },
      { type: 'con', text: 'Configure graphics, audio, and controller settings from scratch' },
      { type: 'neutral', text: 'Requires understanding of emulator concepts' },
      { type: 'con', text: 'Trial and error to find optimal settings' },
    ],
    beckerboxPoints: [
      { type: 'pro', text: 'One-click installer with guided setup wizard' },
      { type: 'pro', text: 'Pre-configured optimal settings for typical hardware' },
      { type: 'pro', text: 'Setup focused on "getting to game night fast"' },
      { type: 'pro', text: 'No emulator knowledge required to start' },
    ],
  },
  {
    title: 'Controller Configuration',
    description: 'Setting up controllers so your friends can actually play with you.',
    icon: 'fa-gamepad',
    imageLabel: 'Controller Setup',
    dolphinPoints: [
      { type: 'con', text: 'Need physical controllers or manual input mapping' },
      { type: 'con', text: 'Bluetooth requires re-pairing every time' },
      { type: 'con', text: 'Different configuration for each input device type' },
      { type: 'con', text: 'Motion controls require additional hardware or workarounds' },
      { type: 'pro', text: 'Advanced customization available for power users' },
    ],
    beckerboxPoints: [
      { type: 'pro', text: 'Any smartphone becomes a console controller instantly' },
      { type: 'pro', text: 'Simple QR code scan to connect—no Bluetooth required' },
      { type: 'pro', text: 'Works with iOS and Android, no app required' },
      { type: 'pro', text: 'Full motion and pointer support built in' },
      { type: 'pro', text: 'Everyone can use their own phone they already own' },
    ],
  },
//   {
//     title: 'Game Library Management',
//     description: 'Organizing and launching your game collection.',
//     icon: 'fa-th-large',
//     imageLabel: 'Game Library',
//     dolphinPoints: [
//       { type: 'neutral', text: 'Manual file browser navigation to games' },
//       { type: 'con', text: 'No built-in game art or metadata' },
//       { type: 'con', text: 'Requires understanding file paths and formats' },
//       { type: 'neutral', text: 'Works with any file structure' },
//       { type: 'con', text: 'No streamlined game night launch experience' },
//     ],
//     beckerboxPoints: [
//       { type: 'pro', text: 'Visual game library with cover art' },
//       { type: 'pro', text: 'Automatic game detection and organization' },
//       { type: 'pro', text: 'Quick-launch interface designed for living room TV' },
//       { type: 'pro', text: 'Recently played and favorites tracking' },
//       { type: 'pro', text: 'Family-friendly browsing experience' },
//     ],
//   },
  {
    title: 'Daily Usage & Session Startup',
    description: 'The experience of starting a game when friends come over.',
    icon: 'fa-play-circle',
    imageLabel: 'Starting Games',
    dolphinPoints: [
      { type: 'con', text: 'Navigate through emulator menus and settings' },
      { type: 'con', text: 'Verify controller connections before each session' },
      { type: 'con', text: 'May need to adjust per-game settings' },
      { type: 'neutral', text: 'Direct access to all emulation options' },
      { type: 'con', text: 'Not designed for non-technical users to operate alone' },
    ],
    beckerboxPoints: [
      { type: 'pro', text: 'Launch by clicking "Start"' },
      { type: 'pro', text: 'Controllers reconnect automatically via QR code' },
      { type: 'pro', text: 'Consistent experience across all titles' },
      { type: 'pro', text: 'Non-technical family members can start games without help' },
      { type: 'pro', text: 'Minimal clicks from desktop to playing' },
    ],
  },
  {
    title: 'Multiplayer Setup',
    description: 'Getting multiple people playing together in the same room.',
    icon: 'fa-users',
    imageLabel: 'Multiplayer',
    dolphinPoints: [
      { type: 'con', text: 'Need multiple physical controllers' },
      { type: 'con', text: 'Configure each controller port individually' },
      { type: 'con', text: 'Can be expensive if buying multiple controllers' },
      { type: 'con', text: 'Controller reconnection often requires game restart' },
      { type: 'neutral', text: 'Supports original hardware if you have it' },
    ],
    beckerboxPoints: [
      { type: 'pro', text: 'Each player uses their own smartphone' },
      { type: 'pro', text: 'Support for up to 4 players instantly' },
      { type: 'pro', text: 'No additional hardware purchases needed' },
      { type: 'pro', text: 'New players can join with a quick QR scan' },
      { type: 'pro', text: 'Perfect for spontaneous game nights' },
    ],
  },
  {
    title: 'Performance & Graphics Tuning',
    description: 'Getting games to run smoothly on your system.',
    icon: 'fa-sliders-h',
    imageLabel: 'Performance',
    dolphinPoints: [
      { type: 'neutral', text: 'Deep control over graphics backend and enhancements' },
      { type: 'con', text: 'Requires technical knowledge to optimize' },
      { type: 'neutral', text: 'Best for users who want maximum customization' },
      { type: 'con', text: 'Takes time to find the right balance' },
    ],
    beckerboxPoints: [
      { type: 'pro', text: 'Optimized defaults that just work for most games' },
      { type: 'pro', text: 'Advanced settings still accessible if wanted' },
      { type: 'pro', text: 'Focus on playability over maximum enhancements' },
      { type: 'pro', text: 'Less troubleshooting, more playing' },
    ],
  },
  // {
  //   title: 'Updates & Maintenance',
  //   description: 'Keeping your system current and fixing issues.',
  //   icon: 'fa-sync-alt',
  //   imageLabel: 'Updates',
  //   dolphinPoints: [
  //     { type: 'neutral', text: 'Manual download and installation of updates' },
  //     { type: 'con', text: 'Settings may need reconfiguration after updates' },
  //     { type: 'con', text: 'Need to track Dolphin development versions' },
  //     { type: 'neutral', text: 'Can choose when to update' },
  //     { type: 'con', text: 'Troubleshooting requires community forums and wikis' },
  //   ],
  //   beckerboxPoints: [
  //     { type: 'pro', text: 'Automatic update notifications and installation' },
  //     { type: 'pro', text: 'Settings preserved across updates' },
  //     { type: 'pro', text: 'Built-in troubleshooting guides and help' },
  //     { type: 'pro', text: 'Dedicated support channel for issues' },
  //     { type: 'pro', text: 'Less time maintaining, more time playing' },
  //   ],
  // },
];

const faqItems = [
  {
    question: 'Can I still use Dolphin features?',
    answer:
      '<b>Yes!</b> BeckerBox is built around Dolphin and keeps compatibility while reducing setup complexity for regular play.',
  },
  {
    question: 'Will this work for non-technical family members?',
    answer:
      'That is the goal. The default flow is designed so someone can start a session without digging through emulator settings.',
  },
  {
    question: 'Do I need special hardware?',
    answer:
      'No extra console hardware is required for the standard BeckerBox phone-controller flow beyond a compatible PC and phones.',
  },
];

const DolphinAlternativePage = () => {
  return (
    <>
      <section class="dolphin-alt-hero section slim-bottom">
        <div class="container">
          <div class="dolphin-hero-content">
            <div class="dolphin-hero-text">
              <p class="dolphin-alt-kicker">Dolphin Alternative</p>
              <h1>A simpler way to play</h1>
              <p class="lead">
                The Dolphin Emulator is <b>great!</b> In fact, BeckerBox is built as a wrapper around the Dolphin Emulator. But Dolphin's learning curve is steep to get the most out of it. BeckerBox is designed to allow literally anyone with a computer and phone go from zero to gaming in minutes!
              </p>
              <div class="dolphin-alt-cta">
                <a class="btn primary" href="/download.html">Get BeckerBox</a>
                <a class="btn ghost" href="#comparison">See the Differences</a>
              </div>
            </div>
            
            <div class="dolphin-hero-visual">
              <div class="logo-comparison">
                <div class="logo-item dolphin-logo">
                  <img src="/images/dolphin-emu.png" alt="Dolphin Emulator" />
                  <span class="logo-label">Complex Setup</span>
                </div>
                
                <div class="vs-divider">
                  <span>VS</span>
                  <div class="arrow-transition">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
                
                <div class="logo-item beckerbox-logo">
                  <img src="/images/icon/favicon-500.png" alt="BeckerBox" />
                  <span class="logo-label">Simple & Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="dolphin-comparisons-wrap" id="comparison">
        <div class="container">
          {comparisons.map((comparison, index) => (
            <ComparisonSection
              title={comparison.title}
              description={comparison.description}
              icon={comparison.icon}
              imageLabel={comparison.imageLabel}
              dolphinPoints={comparison.dolphinPoints}
              beckerboxPoints={comparison.beckerboxPoints}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>

      <section class="section" id="faq">
        <div class="container">
          <SectionHeader title="Common Questions" lead="Quick answers for users considering the switch." />
          <div class="dolphin-faq-grid">
            {faqItems.map((item) => (
              <article class="card">
                <h3>{item.question}</h3>
                <p innerHTML={item.answer}></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section class="section slim" id="get-started">
        <div class="container">
          <div class="dolphin-final-cta card">
            <h2>Ready to switch to a simpler setup?</h2>
            <p>
              Start with BeckerBox now and run your first session with less setup overhead and clearer defaults.
            </p>
            <a class="btn primary" href="/download.html">Download BeckerBox</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DolphinAlternativePage;
