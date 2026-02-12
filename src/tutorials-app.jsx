import { For } from 'solid-js';
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

  return (
    <div class="page">
      <Navbar />
      <main>
        <section class="tutorials-hero">
          <div class="container tutorials-hero-inner">
            <div class="tutorials-hero-copy">
              <p class="tutorials-kicker">Tutorials</p>
              <h1>Set up BeckerBox in minutes.</h1>
              <p>
                Follow clear, step-by-step guides for installing BeckerBox, importing
                games, and customizing controllers for everyone in the room.
              </p>
              <div class="tutorials-hero-actions">
                <a class="btn primary" href="#tutorials">Browse tutorials</a>
                <a class="btn ghost" href="/contact.html">Need help?</a>
              </div>
            </div>
            <div class="tutorials-hero-panel">
              <div class="tutorials-hero-card">
                <div class="tutorials-hero-icon">
                  <i class="fa-solid fa-circle-play"></i>
                </div>
                <div class="tutorials-hero-card-body">
                  <p class="tutorials-hero-label">Start here</p>
                  <h3>Installation + first pairing</h3>
                  <p>Get BeckerBox installed and connect your first phone.</p>
                  <a class="btn light" href="/tutorials/installation">Open guide</a>
                </div>
              </div>
              <div class="tutorials-hero-stats">
                <div>
                  <span>5</span>
                  <p>Guides ready</p>
                </div>
                <div>
                  <span>15</span>
                  <p>Minutes total</p>
                </div>
              </div>
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
                      <span class="tutorial-tag">{tutorial.tag}</span>
                    </div>
                    <h3>{tutorial.title}</h3>
                    <p>{tutorial.description}</p>
                    <div class="tutorial-card-meta">
                      <span>
                        <i class="fa-regular fa-clock"></i>
                        {tutorial.time}
                      </span>
                      <span>
                        <i class="fa-solid fa-list-check"></i>
                        Step-by-step
                      </span>
                    </div>
                    <div class="tutorial-card-actions">
                      <a class="btn light" href={tutorial.link}>View tutorial</a>
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