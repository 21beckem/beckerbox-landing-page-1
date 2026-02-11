import { For } from 'solid-js';
import SectionHeader from './SectionHeader';

const Features = (props) => {
  const features = [
    'Low-latency motion tracking that keeps play feeling responsive.',
    'Intuitive button mapping with presets for quick setup.',
    'Hotkeys for save/load states so everyone can jump back in.',
    'Family-friendly pairing flow with clear on-screen guidance.',
    'Works with the phones you already have, no extra hardware needed.',
    'No bundled games or firmware; you play the titles you already own.',
  ];
  return (
    <section class="section" id="features">
      <div class="container">
        <SectionHeader
          title="Built for fast, family-friendly play"
          lead="BeckerBox focuses on the fun with smart tooling, low latency, and a polished UI."
        />
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
  );
};

export default Features;
