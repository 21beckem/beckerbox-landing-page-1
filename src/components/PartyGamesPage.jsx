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
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._Brawl',
        id: 'RSBE01'
      },
      {
        name: 'Mario Kart Wii',
        desc: 'Simple to learn racing with enough depth to stay interesting over many rounds.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
        id: 'RMCE01'
      },
      {
        name: 'Mario Party 8',
        desc: 'Board-game structure plus mini-games keeps competition fun even for mixed skill groups.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Party_8',
        id: 'RM8E01'
      },
      {
        name: 'Wii Sports Resort',
        desc: 'Motion sports events that feel intuitive and still get competitive quickly.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports_Resort',
        id: 'RZTE01'
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
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports',
        id: 'RSPE01'
      },
      {
        name: 'Wii Play',
        desc: 'Mini-games with very low learning curve, good for short turns and mixed groups.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Play',
        id: 'RHAE01'
      },
      {
        name: 'Just Dance (series)',
        desc: 'Good fit for groups that want movement, music, and a relaxed atmosphere.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Just_Dance_(video_game_series)',
        id: 'SJDE41'
      },
      {
        name: 'Mario Kart Wii',
        desc: 'Still works well in casual mode when you want shorter, lower-stress rounds.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
        id: 'RMCE01'
      },
    ],
  },
  {
    title: 'Games for 4',
    description: 'These games handle the full 4-player count and stay fun the entire time.',
    games: [
      {
        name: 'Mario Party 8',
        desc: 'Designed around rotation and mini-games, so 4-player sessions stay active.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Party_8',
        id: 'RM8E01'
      },
      {
        name: 'Mario Kart Wii',
        desc: 'Quick race length makes it easy to run tournament-style 4-player sets.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
        id: 'RMCE01'
      },
      {
        name: 'Super Smash Bros. Brawl',
        desc: '4-player free-for-all and team options keep everyone involved each match.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._Brawl',
        id: 'RSBE01'
      },
      {
        name: 'Wii Party',
        desc: 'Party-focused structure built for full groups and repeated rounds.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Party',
        id: 'SUPE01'
      },
    ],
  },
  {
    title: 'Date Night - 2',
    description: 'Games where you and one other person can actually have fun without a crowd.',
    games: [
      {
        name: 'Mario Kart Wii',
        desc: 'Solid head-to-head racing for a direct two-player session.',
        players: '2 players (recommended)',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
        id: 'RMCE01'
      },
      {
        name: 'Wii Sports (Tennis/Bowling)',
        desc: 'Straightforward two-player matches with very little setup or explanation.',
        players: '2 players (recommended)',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports',
        id: 'RSPE01'
      },
      {
        name: 'Kirby\'s Return to Dream Land',
        desc: 'Co-op platforming that works well when both players want a shared run.',
        players: '2 players (recommended)',
        wiki: 'https://en.wikipedia.org/wiki/Kirby%27s_Return_to_Dream_Land',
        id: 'SUKE01'
      },
      {
        name: 'Donkey Kong Country Returns',
        desc: 'A good cooperative option if you want challenge and teamwork.',
        players: '2',
        wiki: 'https://en.wikipedia.org/wiki/Donkey_Kong_Country_Returns',
        id: 'SF8E01'
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
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports',
        id: 'RSPE01'
      },
      {
        name: 'Mario Kart Wii',
        desc: 'One of the most replayable Wii games with broad appeal for all skill levels.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
        id: 'RMCE01'
      },
      {
        name: 'Super Smash Bros. Brawl',
        desc: 'A long-standing favorite that supports both competitive and casual styles.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._Brawl',
        id: 'RSBE01'
      },
      {
        name: 'Wii Sports Resort',
        desc: 'Expanded sports set with tighter motion controls than the original.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Wii_Sports_Resort',
        id: 'RZTE01'
      },
      {
        name: 'Mario Party 8',
        desc: 'Still one of the easiest ways to run a full, social game night.',
        players: '1-4',
        wiki: 'https://en.wikipedia.org/wiki/Mario_Party_8',
        id: 'RM8E01'
      },
    ],
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
        <div class="container" id="games">
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
                                <img src={`https://art.gametdb.com/wii/cover3D/US/${game.id}.png`} alt={`${game.name} cover art placeholder`} />
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
                              src={`https://art.gametdb.com/wii/cover3D/US/${game.id}.png`}
                              alt={`${game.name} cover art placeholder`}
                              class="fan-cover"
                              style={{ '--fan-index': gameIndex() }}
                            />
                          )}
                        </For>
                      </div>
                      <p class="cover-disclaimer">
                        Game titles and cover artwork are property of their respective publishers. BeckerBox is not affiliated with or endorsed by these companies.
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </For>
          </div>
        </div>

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
              <div class="comparison-cell label"><i class="fas fa-dollar-sign comparison-icon cost-icon"></i> Initial Cost</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> Low</div>
              <div class="comparison-cell"><i class="fas fa-times-circle quality-icon bad"></i> $400+</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon neutral"></i> Moderate</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label"><i class="fas fa-clock comparison-icon time-icon"></i> Setup Time</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> Minutes</div>
              <div class="comparison-cell"><i class="fas fa-minus-circle quality-icon neutral"></i> 30 mins</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> 15-20 mins</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label"><i class="fas fa-gamepad comparison-icon library-icon"></i> Game Library</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> Huge</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> Huge</div>
              <div class="comparison-cell"><i class="fas fa-minus-circle quality-icon neutral"></i> Moderate</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label"><i class="fas fa-mobile-alt comparison-icon hardware-icon"></i> Extra Hardware?</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> Uses phones</div>
              <div class="comparison-cell"><i class="fas fa-times-circle quality-icon bad"></i> $30+ per controller</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> Yes</div>
            </div>
            <div class="comparison-row">
              <div class="comparison-cell label"><i class="fas fa-bolt comparison-icon action-icon"></i> Action/Interactive</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> High</div>
              <div class="comparison-cell"><i class="fas fa-check-circle quality-icon good"></i> High</div>
              <div class="comparison-cell"><i class="fas fa-minus-circle quality-icon neutral"></i> Moderate</div>
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
      <section class="section slim" id="get-started">
        <div class="container">
          <div class="dolphin-final-cta card">
            <h2>Ready to Try It?</h2>
            <p>
              Download BeckerBox and give it a shot. No console required, no expensive controllers. Just your PC and phones.
            </p>
            <div class="buttons">
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
