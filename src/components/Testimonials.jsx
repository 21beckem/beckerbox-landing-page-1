import { For } from 'solid-js';
import SectionHeader from './SectionHeader';

const Testimonials = (props) => {
  const testimonials = [
    {
      quote: 'This is literally so much fun! Where has this been all my life?',
      name: 'Susannah',
    },
    {
      quote: 'Once I got used to holding a phone instead of a controller, it felt just like I remembered!',
      name: 'Josh',
    },
    {
      quote: 'How has no one else made this yet?',
      name: 'Trey',
    },
    {
      quote: 'Oh my gosh, this brings back so many good memories.',
      name: 'Price',
    }
  ];
  return (
    <section class={`section ${props.slim ? 'slim' : ''} ${props.slimTTop ? 'slim-top' : ''} ${props.slimBottom ? 'slim-bottom' : ''}`} id="testimonials">
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
                <p class="person">— {entry.name}</p>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
