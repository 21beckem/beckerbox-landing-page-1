import { For } from 'solid-js';
import SectionHeader from './SectionHeader';

const Features = (props) => {
  const features = [
    {
      icon: 'fa-bolt',
      title: 'Low-Latency Tracking',
      description: 'Low-latency motion tracking that keeps play feeling responsive.',
    },
    {
      icon: 'fa-gamepad',
      title: 'Familiar Controls',
      description: 'Intuitive control layouts that feel familiar.',
    },
    {
      icon: 'fa-keyboard',
      title: 'Save & Load',
      description: 'Your controller remembers your preferences.',
    },
    {
      icon: 'fa-handshake',
      title: 'Easy Pairing',
      description: 'Family-friendly pairing flow with clear on-screen guidance.',
    },
    {
      icon: 'fa-mobile',
      title: 'Your Phones',
      description: 'Works with the phones you already have, no extra hardware needed.',
    },
    {
      icon: 'fa-cube',
      title: 'Your Games',
      description: 'No bundled games or firmware; you play the titles you already own.',
    },
  ];
  return (
    <section class="section" id="features">
      <div class="container">
        <SectionHeader
          title="Built for fast, family-friendly play"
          lead="BeckerBox focuses on the fun with smart tooling, low latency, and a polished UI."
        />
        <div class="features-list">
          <For each={features}>
            {(feature) => (
              <div class="feature-item">
                <div class="feature-item-icon">
                  <i class={`fa-solid ${feature.icon}`}></i>
                </div>
                <div class="feature-item-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Features;
