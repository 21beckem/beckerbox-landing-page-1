import { For, Show } from 'solid-js';
import SectionHeader from './SectionHeader';
import './PartyGamesPage.css';

const gameCategories = [
  {
    title: 'Competitive Parties',
    description: 'Games where people want to win and everyone\'s trying hard. Expect trash talk and close calls.',
    games: [
      {
        name: 'Super Smash Bros. Brawl',
        desc: 'A fast multiplayer fighter that works for both casual play and serious competition.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._Brawl',
      },
      {
        name: 'Mario Kart Wii',
        desc: 'Simple to learn racing with enough depth to stay interesting over many rounds.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
      },
      {
        name: 'Mario Party 8',
        desc: 'Board-game structure plus mini-games keeps competition fun even for mixed skill groups.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Party_8',
      },
      {
        name: 'Wii Sports Resort',
        desc: 'Motion sports events that feel intuitive and still get competitive quickly.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports_Resort',
      },
    ],
  },
  {
    title: 'Casual Hangouts',
    description: 'Games you can play while talking with friends. No pressure, low stakes, pure fun.',
    games: [
      {
        name: 'Wii Sports',
        desc: 'Bowling and tennis are still some of the easiest games to hand to new players.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports',
      },
      {
        name: 'Wii Play',
        desc: 'Mini-games with very low learning curve, good for short turns and mixed groups.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Play',
      },
      {
        name: 'Just Dance (series)',
        desc: 'Good fit for groups that want movement, music, and a relaxed atmosphere.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Just_Dance_(video_game_series)',
      },
      {
        name: 'Mario Kart Wii',
        desc: 'Still works well in casual mode when you want shorter, lower-stress rounds.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
      },
    ],
  },
  {
    title: 'Games for 4 Players',
    description: 'These games handle the full 4-player count and stay fun the entire time.',
    games: [
      {
        name: 'Mario Party 8',
        desc: 'Designed around rotation and mini-games, so 4-player sessions stay active.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Party_8',
      },
      {
        name: 'Mario Kart Wii',
        desc: 'Quick race length makes it easy to run tournament-style 4-player sets.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
      },
      {
        name: 'Super Smash Bros. Brawl',
        desc: '4-player free-for-all and team options keep everyone involved each match.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._Brawl',
      },
      {
        name: 'Wii Party',
        desc: 'Party-focused structure built for full groups and repeated rounds.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Party',
      },
    ],
  },
  {
    title: 'Date Night - 2 Players',
    description: 'Games where you and one other person can actually have fun without a crowd.',
    games: [
      {
        name: 'Mario Kart Wii',
        desc: 'Solid head-to-head racing for a direct two-player session.',
        players: '2 players (recommended)',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
      },
      {
        name: 'Wii Sports (Tennis/Bowling)',
        desc: 'Straightforward two-player matches with very little setup or explanation.',
        players: '2 players (recommended)',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports',
      },
      {
        name: 'Kirby\'s Return to Dream Land',
        desc: 'Co-op platforming that works well when both players want a shared run.',
        players: '2 players (recommended)',
        wiki: 'https://en.wikipedia.org/wiki/Kirby%27s_Return_to_Dream_Land',
      },
      {
        name: 'Donkey Kong Country Returns',
        desc: 'A good cooperative option if you want challenge and teamwork.',
        players: '2 players',
        wiki: 'https://en.wikipedia.org/wiki/Donkey_Kong_Country_Returns',
      },
    ],
  },
  {
    title: 'The Classics - Most Popular Wii Games',
    description: 'These games are popular for a reason. They\'re the ones everyone remembers playing.',
    games: [
      {
        name: 'Wii Sports',
        desc: 'A baseline recommendation because nearly everyone understands it instantly.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports',
      },
      {
        name: 'Mario Kart Wii',
        desc: 'One of the most replayable Wii games with broad appeal for all skill levels.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
      },
      {
        name: 'Super Smash Bros. Brawl',
        desc: 'A long-standing favorite that supports both competitive and casual styles.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._Brawl',
      },
      {
        name: 'Wii Sports Resort',
        desc: 'Expanded sports set with tighter motion controls than the original.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports_Resort',
      },
      {
        name: 'Mario Party 8',
        desc: 'Still one of the easiest ways to run a full, social game night.',
        players: '1-4 players',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Party_8',
      },
    ],
  },
];

const whyBeckerbox = [
  {
    icon: 'fa-phone-alt',
    title: 'Everyone Already Has a Phone',
    description: 'No need to buy extra controllers. Phones work as controllers.',
  },
  {
    icon: 'fa-bolt',
    title: 'Setup Takes Minutes',
    description: 'Scan a QR code, phones connect. You\'re playing in under 5 minutes.',
  },
  {
    icon: 'fa-compact-disc',
    title: 'Huge Game Library',
    description: 'Access to all your favorite Wii games. Everything from sports to party games.',
  },
  {
    icon: 'fa-wallet',
    title: 'Actually Affordable',
    description: 'One software cost beats buying a $300 console and $60+ per controller.',
  },
  {
    icon: 'fa-gamepad',
    title: 'Familiar Controls',
    description: 'Motion controls and button inputs work like the original. No learning curve.',
  },
  {
    icon: 'fa-users-cog',
    title: 'Built for Groups',
    description: 'Up to 4 players on phones. Each person controls their own game.',
  },
];

const gameNightSteps = [
  {
    title: 'Download & Install',
    copy: 'Get BeckerBox on your PC and launch it.',
  },
  {
    title: 'Connect Your Phones',
    copy: 'Everyone scans the QR code. Their phone becomes a controller.',
  },
  {
    title: 'Pick a Game',
    copy: 'Choose from your library and start playing.',
  },
  {
    title: 'That\'s It',
    copy: 'No setup menus, no configuration. Just play.',
  },
];

const partyFaqs = [
  {
    q: 'How many players can actually play at the same time?',
    a: '<b>4 players maximum</b> with smartphone controllers connected at once. That\'s the Wii limit.'
  },
  {
    q: 'What if someone doesn\'t have a smartphone?',
    a: 'Most people will have phones. If not, you can also use traditional USB controllers alongside the phone controllers.'
  },
  {
    q: 'How long does it take to learn these games?',
    a: 'Most of these games are designed to be picked up immediately. Wii Sports, Mario Kart - you can play them competently in minutes.'
  },
  {
    q: 'Can we switch games quickly?',
    a: 'Yes. You can switch between games in seconds once everyone is connected.'
  },
  {
    q: 'What does BeckerBox cost?',
    a: 'One software purchase. Compare that to a $300 console plus $60 per extra controller, and it\'s worth it.'
  },
  {
    q: 'What\'s the actual time from download to playing?',
    a: 'Realistically, 5-10 minutes. Download, launch, scan QR codes, pick a game.'
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
              <p class="party-kicker">Party Games Made Simple</p>
              <h1>The Best Wii Games for Game Night</h1>
              <p class="lead">
                Wii games are still the best for getting people together to play. BeckerBox lets you play them on your PC using phones as controllers. No console, no expensive controllers, no complicated setup.
              </p>
              <div class="party-hero-cta">
                <a class="btn primary" href="/download.html">Get Started</a>
                <a class="btn ghost" href="#games">See the Games</a>
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
                <div class="visual-label">4 players on phones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories Section */}
      <section class="section" id="games">
        <div class="container">
          <SectionHeader 
            title="Best Wii Games for Different Situations" 
            lead="Wii games work best when you pick the right one for the moment. Here's what works."
          />
          <div class="party-game-comparison-wrap">
            <For each={gameCategories}>
              {(category, index) => (
                <section class={`party-game-comparison ${index() % 2 === 1 ? 'reverse' : ''}`}>
                  <div class="party-game-comparison-content">
                    <div class="party-game-text">
                      <div class="party-game-header">
                        <h3>{category.title}</h3>
                        <p class="category-description">{category.description}</p>
                      </div>

                      <div class="party-game-list">
                        <For each={category.games}>
                          {(game) => (
                            <article class="party-game-row">
                              <h4>{game.name}</h4>
                              <p class="game-desc">{game.desc}</p>
                              <div class="game-meta">
                                <span><strong>Players:</strong> {game.players}</span>
                                <a href={game.wiki} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                              </div>
                            </article>
                          )}
                        </For>
                      </div>
                    </div>

                    <div class="party-game-media">
                      <div class="cover-fan" aria-label={`Cover art fan for ${category.title}`}>
                        <For each={category.games}>
                          {(game, gameIndex) => (
                            <img
                              src="https://art.gametdb.com/wii/cover3D/US/RSPE01.png"
                              alt={`${game.name} cover art placeholder`}
                              class="fan-cover"
                              style={{ '--fan-index': gameIndex() }}
                            />
                          )}
                        </For>
                      </div>
                      <p class="cover-disclaimer">
                        Cover images shown are placeholders for layout preview only. I do not own rights to these images.
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Why BeckerBox for Parties */}
      <section class="section party-features">
        <div class="container">
          <SectionHeader 
            title="Why Use BeckerBox Instead of a Wii" 
            lead="You probably don't have a Wii anymore. Here's why BeckerBox is a better solution than tracking one down."
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
            title="How to Get Started" 
            lead="Simple process from download to playing."
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
            title="How BeckerBox Compares" 
            lead=""
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
            title="Common Questions" 
            lead=""
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
            <h2>Ready to Try It?</h2>
            <p>
              Download BeckerBox and give it a shot. No console required, no expensive controllers. Just your PC and phones.
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
