import { For } from 'solid-js';
import SectionHeader from './SectionHeader';

const Testimonials = (props) => {
  const testimonials = [
    {
      quote:
        'We were playing within five minutes. Everyone just grabbed their phones and jumped in.',
      name: 'Jenna L. — Family Game Night',
    },
    {
      quote:
        'Calibration was quick and the motion felt smooth. It really feels like a living-room setup.',
      name: 'Marcus T. — Retro Fan',
    },
    {
      quote:
        'No extra controllers to buy, no pile of cables. Just phones and a big screen.',
      name: 'Riley P. — Party Host',
    },
  ];
  return (
    <section class="section" id="testimonials">
      <div class="container">
        <SectionHeader
          title="Families are already playing"
          lead="Designed for parties, couch co-op nights, and multi-generation get-togethers."
        />
        <div class="testimonials">
          <For each={testimonials}>
            {(entry) => (
              <div class="card">
                <p class="quote">“{entry.quote}”</p>
                <p class="person">{entry.name}</p>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
