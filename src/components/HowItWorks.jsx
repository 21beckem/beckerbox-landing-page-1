import { For } from 'solid-js';
import SectionHeader from './SectionHeader';
import './HowItWorks.css';

const HowItWorks = (props) => {
  const steps = [
    {
      title: 'Install BeckerBox',
      copy: 'Set up the desktop app and launch it on your computer.',
    },
    {
      title: 'Pair your phones',
      copy: 'Scan once, tap to connect, and each phone instantly becomes a console remote.',
    },
    {
      title: 'Click Start',
      copy: 'It\'s that easy! Now you can play your games together, no matter where you are.',
    },
  ];
  return (
    <section class={`section ${props.slim ? 'slim' : ''} ${props.slimTTop ? 'slim-top' : ''} ${props.slimBottom ? 'slim-bottom' : ''}`} id="how">
      <div class="container">
        <SectionHeader
          title="How it works"
          lead="A smooth, guided setup flow makes it easy for everyone to jump in together."
        />
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
  );
};

export default HowItWorks;
