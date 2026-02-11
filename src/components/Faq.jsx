import { For } from 'solid-js';
import SectionHeader from './SectionHeader';

const Faq = (props) => {
  const faqs = [
    {
      q: 'Do you include games or system software?',
      a: 'No. BeckerBox provides the controller experience. You use games you already own.',
    },
    {
      q: 'Which phones work?',
      a: 'BeckerBox works with both iOS and Android devices, no special hardware required.',
    },
    {
      q: 'How many players can join?',
      a: 'Up to four phones can connect at once in the Full tier, perfect for couch co-op.',
    },
    {
      q: 'Is setup complicated?',
      a: 'Not at all. Pair with a scan, run a quick calibration, and start playing.',
    },
  ];
  return (
    <section class="section" id="faq">
      <div class="container">
        <SectionHeader
          title="Frequently asked questions"
          lead="Everything you need to know before you hit start."
        />
        <div class="faq">
          <For each={faqs}>
            {(item) => (
              <div class="card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Faq;
