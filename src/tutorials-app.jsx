import { For, onMount } from 'solid-js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionHeader from './components/SectionHeader';

const App = () => {
  const tutorials = [
    {
      id: 'installation',
      title: 'Installation',
      description: 'Learn how to install BeckerBox after purchasing.',
      icon: 'fa-box-open',
      tag: 'Setup',
      time: '5 min',
      link: '/tutorials/installation',
    },
    {
      id: 'import-games',
      title: 'Import Games',
      description: 'Bring your game files into BeckerBox so you can play them.',
      icon: 'fa-folder-open',
      tag: 'Library',
      time: '6 min',
      link: '/tutorials/import-games',
    },
    {
      id: 'connect-controller',
      title: 'Connect Controller',
      description: 'Connect your phone as a controller in under a minute.',
      icon: 'fa-mobile-screen-button',
      tag: 'Controllers',
      time: '4 min',
      link: '/tutorials/connect-controller',
    },
    {
      id: 'change-disc',
      title: 'Insert / Change Game Disc',
      description: 'Swap game discs or change games without losing progress.',
      icon: 'fa-compact-disc',
      tag: 'Library',
      time: '3 min',
      link: '/tutorials/change-disc',
    },
    {
      id: 'remote-layout',
      title: 'Change Remote Layout',
      description: 'Customize your remote layout for each game or player.',
      icon: 'fa-sliders',
      tag: 'Controls',
      time: '5 min',
      link: '/tutorials/remote-layout',
    },
  ];

  let deck;
  window.mountDeck = async (name) => {
    // destroy old deck
    deck?.destroy();

    // create new deck
    let deckEl = document.createElement('div');
    deckEl.classList.add('reveal');

    // fetch deck html
    let response = await fetch(`/tutorials/${name}.html`);
    deckEl.innerHTML = await response.text();

    // mount deck
    document.getElementById('tutorials-hero-panel').innerHTML = '';
    document.getElementById('tutorials-hero-panel').appendChild(deckEl);

    // initialize deck
    deck = new Reveal(deckEl, {
      embedded: true,
      width: '100%',
      height: '100%'
    });
    deck.initialize();
  };

  onMount(async () => {
    mountDeck('installation');
  });

  return (
    <div class="page">
      <Navbar />
      <main>
        <section class="tutorials-hero">
          <div class="container tutorials-hero-inner">
            <div class="tutorials-hero-copy">
              <p class="tutorials-kicker">Tutorials</p>
              <h1>Get started in minutes.</h1>
              <p>
                Follow clear, step-by-step guides to learn everything you need to know about BeckerBox
              </p>
              <div class="tutorials-hero-actions">
                <a class="btn ghost" href="/contact.html">Need help?</a>
              </div>
            </div>
            <div id="tutorials-hero-panel" class="tutorials-hero-panel">
            </div>
          </div>
        </section>

        <section class="section tutorials-section" id="tutorials">
          <div class="container">
            <SectionHeader
              title="Tutorial library"
              lead="Pick a guide and follow along in minutes. Each walkthrough is written for first-time players."
            />
            <div class="tutorials-grid">
              <For each={tutorials}>
                {(tutorial) => (
                  <article class="tutorial-card" id={tutorial.id}>
                    <div class="tutorial-card-header">
                      <div class="tutorial-card-icon">
                        <i class={`fa-solid ${tutorial.icon}`}></i>
                      </div>
                    </div>
                    <h3>{tutorial.title}</h3>
                    <p>{tutorial.description}</p>
                    <div class="tutorial-card-actions">
                      <a class="btn light" href={tutorial.link}>Launch <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                  </article>
                )}
              </For>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;