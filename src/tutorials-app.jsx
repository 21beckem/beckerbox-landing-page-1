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
      time: '5 min'
    },
    {
      id: 'import-games',
      title: 'Import Games',
      description: 'Bring your game files into BeckerBox so you can play them.',
      icon: 'fa-folder-open',
      tag: 'Library',
      time: '6 min'
    },
    {
      id: 'connect-controller',
      title: 'Connect Controller',
      description: 'Connect your phone as a controller in under a minute.',
      icon: 'fa-mobile-screen-button',
      tag: 'Controllers',
      time: '4 min'
    },
    {
      id: 'change-disc',
      title: 'Insert / Change Game Disc',
      description: 'Swap game discs or change games without losing progress.',
      icon: 'fa-compact-disc',
      tag: 'Library',
      time: '3 min'
    },
    {
      id: 'remote-layout',
      title: 'Change Remote Layout',
      description: 'Customize your remote layout for each game or player.',
      icon: 'fa-sliders',
      tag: 'Controls',
      time: '5 min'
    },
  ];

  let deck;
  window.mountDeck = async (name) => {
    // destroy old deck
    deck?.destroy();
    deck = null;

    // create new deck
    let deckEl = document.createElement('div');
    deckEl.classList.add('reveal');

    // fetch deck html
    let response = await fetch(`/tutorials/${name}.html`);
    if (!response.ok) {
      console.error('Failed to load tutorial:', response.statusText);
      return;
    }
    deckEl.innerHTML = await response.text();
    if (!deckEl.querySelector('.slides')) {
      console.error('Invalid tutorial format: missing .slides container');
      return;
    }

    // mount deck
    document.getElementById('tutorials-hero-panel').innerHTML = '';
    document.getElementById('tutorials-hero-panel').appendChild(deckEl);

    // initialize deck
    deck = new Reveal(deckEl, {
      embedded: true,
      slideNumber: 'c/t',
      width: '100%',
      height: '100%'
    });
    deck.initialize();

    // scroll to deck
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                      <button class="btn light" onclick={() => mountDeck(tutorial.id)}>Launch <i class="fa-solid fa-arrow-right"></i></button>
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