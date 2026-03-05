import { For, Show } from 'solid-js';
import SectionHeader from './SectionHeader';
import './PartyGamesPage.css';

const gameCategories = [
  {
    title: 'Competitive Chaos',
    icon: 'fa-trophy',
    description: 'Games that bring out the rivalry and competitive spirit',
    games: [
      { name: 'Super Smash Bros. Brawl', type: 'Fighting' },
      { name: 'Mario Kart Wii', type: 'Racing' },
      { name: 'Mario Party 8', type: 'Party' },
      { name: 'Super Smash Bros. Melee', type: 'Fighting' },
      { name: 'Wii Sports Resort', type: 'Sports' },
    ],
  },
  {
    title: 'Casual Hangout Vibes',
    icon: 'fa-heart',
    description: 'Easy-to-jump-into games perfect for just hanging out',
    games: [
      { name: 'Wii Sports', type: 'Sports' },
      { name: 'Bowling', type: 'Sports' },
      { name: 'Wii Fit Plus', type: 'Fitness' },
      { name: 'Mario Party 9', type: 'Party' },
      { name: 'Just Dance series', type: 'Rhythm' },
    ],
  },
  {
    title: 'Team Battle Royale',
    icon: 'fa-users',
    description: 'Cooperative and team-based matches for groups',
    games: [
      { name: 'Kirby\'s Return to Dream Land', type: 'Co-op' },
      { name: 'Donkey Kong Country Returns', type: 'Co-op' },
      { name: 'New Super Mario Bros. Wii', type: 'Co-op' },
      { name: 'Wii Sports Team Mode', type: 'Sports' },
      { name: 'Four Swords Adventures', type: 'Co-op' },
    ],
  },
  {
    title: 'Crowd Pleasers',
    icon: 'fa-star',
    description: 'Games that work for mixed skill levels and ages',
    games: [
      { name: 'Wii Sports Resort', type: 'Sports' },
      { name: 'Mario Party 8', type: 'Party' },
      { name: 'Wii Play', type: 'Mini-games' },
      { name: 'Mario Kart: Double Dash', type: 'Racing' },
      { name: 'Wii U Nintendo Land', type: 'Party' },
    ],
  },
];

const whyBeckerbox = [
  {
    icon: 'fa-phone-alt',
    title: 'Everyone Uses Their Own Phone',
    description: 'No need to buy multiple controllers ($60 each). Everyone already has a smartphone.',
  },
  {
    icon: 'fa-flash',
    title: 'Setup in Minutes, Playing in Minutes',
    description: 'Scan a QR code and you\'re in. From download to first game: under 10 minutes.',
  },
  {
    icon: 'fa-compact-disc',
    title: 'Hundreds of Games Ready to Play',
    description: 'Access to a massive library of classic games. Something for every crowd and skill level.',
  },
  {
    icon: 'fa-wallet',
    title: 'Save Hundreds on Hardware',
    description: 'One software purchase beats$300+ console + $60 per controller. Game smart.',
  },
  {
    icon: 'fa-gamepad',
    title: 'Intuitive Controls Anyone Can Use',
    description: 'Familiar motion and button controls. Your non-gamer friends will understand immediately.',
  },
  {
    icon: 'fa-users-cog',
    title: 'Perfect for Large Groups',
    description: 'Supports up to 4 players, instant game switching, and everyone stays engaged.',
  },
];

const gameNightSteps = [
  {
    title: 'Download & Install',
    copy: 'Get BeckerBox on your PC. Installation takes less than 2 minutes.',
  },
  {
    title: 'Friends Show Up',
    copy: 'Invite people over. Have them bring their phones (everyone has one).',
  },
  {
    title: 'Scan & Connect',
    copy: 'Each friend scans the QR code. Phones connect instantly as controllers.',
  },
  {
    title: 'Pick a Game',
    copy: 'Choose from your library and hit start. No complicated setup menus.',
  },
  {
    title: 'Play Together',
    copy: 'Enjoy instant, responsive gameplay. Switch games between rounds in seconds.',
  },
];

const partyFaqs = [
  {
    q: 'How many people can play at once?',
    a: 'BeckerBox supports up to <b>4 simultaneous players</b> with smartphone controllers. You can easily rotate players between games, so larger groups can all participate throughout the night.'
  },
  {
    q: 'What if someone doesn\'t have a smartphone?',
    a: 'Most people will have phones, but if needed, you can mix smartphone controllers with traditional USB controllers or Wii controllers. BeckerBox supports multiple input types so everyone can join.'
  },
  {
    q: 'Do the games have tutorials or learning curves?',
    a: 'Most games in the party library are <b>designed to be picked up immediately</b>. Wii Sports, Mario Kart, and other party classics have minimal learning curves. You\'ll be playing within seconds.'
  },
  {
    q: 'Can we switch games quickly between rounds?',
    a: '<b>Yes!</b> Game switching is instant. Pick a new game and you\'re ready to play in seconds. No lengthy load times or complicated menu navigation.'
  },
  {
    q: 'How much does it cost total?',
    a: 'You pay a one-time software cost for BeckerBox. <b>No additional controller purchases needed</b> (everyone uses their phone). Compare that to a $300 console + $240+ for four controllers, and the savings are huge.'
  },
  {
    q: 'What\'s the actual setup time from zero to first game?',
    a: 'Typically <b>under 10 minutes</b>. Download BeckerBox, friends arrive, scan QR codes to connect phones, pick a game, and play. We designed it for fast game nights, not troubleshooting.'
  },
];

const PartyGamesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section class="party-hero section slim-bottom">
        <div class="container">
          <div class="party-hero-content">
            <div class="party-hero-text">
              <p class="party-kicker">🎮 Game Night Made Simple</p>
              <h1>The Ultimate Party Game Solution</h1>
              <p class="lead">
                Forget complicated setups and expensive hardware. BeckerBox turns your computer and smartphones into the ultimate group gaming experience. Host epic game nights where everyone plays together at the same time.
              </p>
              <div class="party-hero-cta">
                <a class="btn primary" href="/download.html">Start Your Game Night</a>
                <a class="btn ghost" href="#games">See Games</a>
              </div>
            </div>
            
            <div class="party-hero-visual">
              <div class="visual-element">
                <div class="phones-group">
                  <div class="phone-mock phone-1">📱</div>
                  <div class="phone-mock phone-2">📱</div>
                  <div class="phone-mock phone-3">📱</div>
                  <div class="phone-mock phone-4">📱</div>
                </div>
                <div class="visual-label">4 Players, 4 Phones, 1 Game</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories Section */}
      <section class="section" id="games">
        <div class="container">
          <SectionHeader 
            title="Games Built for Parties" 
            lead="Every category has something everyone will love. Pick one, hit start, and let the fun begin."
          />
          <div class="game-categories-grid">
            <For each={gameCategories}>
              {(category) => (
                <div class="game-category-card">
                  <div class="category-header">
                    <div class="category-icon">
                      <i class={`fa-solid ${category.icon}`}></i>
                    </div>
                    <h3>{category.title}</h3>
                  </div>
                  <p class="category-description">{category.description}</p>
                  <div class="games-list">
                    <For each={category.games}>
                      {(game) => (
                        <div class="game-item">
                          <span class="game-name">{game.name}</span>
                          <span class="game-type">{game.type}</span>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Why BeckerBox for Parties */}
      <section class="section party-features">
        <div class="container">
          <SectionHeader 
            title="Why BeckerBox Wins for Parties" 
            lead="We built this specifically for group gaming. Here's what makes it special."
          />
          <div class="party-features-grid">
            <For each={whyBeckerbox}>
              {(feature) => (
                <div class="party-feature-card">
                  <div class="feature-icon">
                    <i class={`fa-solid ${feature.icon}`}></i>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* How a Game Night Works */}
      <section class="section party-flow slim-top">
        <div class="container">
          <SectionHeader 
            title="Your Game Night Timeline" 
            lead="From zero to playing together in under 10 minutes."
          />
          <div class="game-night-steps">
            <For each={gameNightSteps}>
              {(step, index) => (
                <div class="step-card">
                  <div class="step-number">{index() + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  <Show when={index() < gameNightSteps.length - 1}>
                    <div class="step-arrow">
                      <i class="fa-solid fa-arrow-down"></i>
                    </div>
                  </Show>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Comparison vs Alternatives */}
      <section class="section party-comparison">
        <div class="container">
          <SectionHeader 
            title="This vs That" 
            lead="See how BeckerBox compares to other ways to host game nights."
          />
          <div class="comparison-table">
            <div class="comparison-row header-row">
              <div class="comparison-cell"></div>
              <div class="comparison-cell">BeckerBox</div>
              <div class="comparison-cell">Console + Controllers</div>
              <div class="comparison-cell">Board Games</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label">Initial Cost</div>
              <div class="comparison-cell">💚 Low</div>
              <div class="comparison-cell">💔 $400+</div>
              <div class="comparison-cell">💚 Low</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label">Setup Time</div>
              <div class="comparison-cell">✨ Minutes</div>
              <div class="comparison-cell">⏰ 30 mins</div>
              <div class="comparison-cell">⏰ 15-20 mins</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label">Game Library</div>
              <div class="comparison-cell">🔥 Huge</div>
              <div class="comparison-cell">📦 Limited</div>
              <div class="comparison-cell">📚 Moderate</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label">Player Limit</div>
              <div class="comparison-cell">👥 4 simultaneous</div>
              <div class="comparison-cell">👥 2-4</div>
              <div class="comparison-cell">👥 2-4+ (varies)</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label">No Extra Hardware?</div>
              <div class="comparison-cell">✅ Uses phones</div>
              <div class="comparison-cell">❌ $60+ per controller</div>
              <div class="comparison-cell">✅ Yes</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label">Action/Interactive</div>
              <div class="comparison-cell">🎮 High</div>
              <div class="comparison-cell">🎮 High</div>
              <div class="comparison-cell">🛋️ Moderate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Party FAQs */}
      <section class="section party-faq" id="faq">
        <div class="container">
          <SectionHeader 
            title="Party Game Questions" 
            lead="Everything you need to know to throw the best game night."
          />
          <div class="party-faq-grid">
            <For each={partyFaqs}>
              {(item) => (
                <article class="card">
                  <h3>{item.q}</h3>
                  <p innerHTML={item.a}></p>
                </article>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="section slim party-final-cta">
        <div class="container">
          <div class="card cta-card">
            <h2>Ready to Host Your Best Game Night?</h2>
            <p>
              Download BeckerBox now and get your friends together. We've designed everything to be fast, fun, and hassle-free. Your game night starts today.
            </p>
            <div class="cta-buttons">
              <a class="btn primary" href="/download.html">Download BeckerBox</a>
              <a class="btn ghost" href="/about.html">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartyGamesPage;
