import { For, createSignal, onMount } from 'solid-js';
import SectionHeader from './SectionHeader';

const Faq = (props) => {
  const [openIndex, setOpenIndex] = createSignal(-1);
  const faqs = [
    {
      q: 'Is BeckerBox compatible with Wii games?',
      a: `<b>Yes</b> — BeckerBox works with the Dolphin Emulator, which supports <b>most games originally released for the Nintendo Wii.</b>
          <br><br>
          <i>BeckerBox is not affiliated with or endorsed by Nintendo.</i>`
    },
    {
      q: 'What kinds of games can I play with BeckerBox?',
      a: 'BeckerBox is designed for motion-controlled console-style games — the ones where you swing, point, tilt, or bowl rather than just press buttons. It works with games that are compatible with the open-source <u><a href="https://dolphin-emu.org" target="_blank">Dolphin emulator</a></u>. BeckerBox does <b>not</b> include games, system firmware, or encryption keys; you must use backups of game discs that you legally own.'
    },
    {
      q: 'Do I need to install anything else or buy special hardware?',
      a: `No special hardware/controllers required — everyone uses their smartphone. The BeckerBox installer includes an open-source emulator binary so you can get started quickly.
      <br><br>
      <b>We do not include game files</b>. You must bring your own.`
    },
    {
      q: 'Which phones work?',
      a: 'BeckerBox works with both iOS and Android devices, no special hardware required.'
    },
    {
      q: 'How many players can join? Any network requirements?',
      a: 'BeckerBox supports up to 4 simultaneous phones connected at the same time, but the exact number depends on the specific game. For best responsiveness, connect all phones and the PC to the same local Wi-Fi network (2.4 or 5 GHz). A local network keeps latency low and provides the smoothest motion control experience.'
    }
  ];
  onMount(() => {
    setTimeout(() => {
      document.querySelectorAll('.faq-panel').forEach((panel, i) => faqs[i].m = panel.scrollHeight);
    }, 500);
  });
  return (
    <section class="section" id="faq">
      <div class="container">
        <SectionHeader
          title="Frequently asked questions"
          lead="Everything you need to know before you hit start."
        />
        <div class="faq-accordion">
          <For each={faqs}>
            {(item, index) => (
              <div class="faq-item">
                <button
                  class="faq-trigger"
                  type="button"
                  aria-expanded={index() === openIndex()}
                  aria-controls={`faq-panel-${index()}`}
                  onClick={() =>
                    setOpenIndex(index() === openIndex() ? -1 : index())
                  }
                >
                  <span>{item.q}</span>
                </button>
                <div
                  classList={{
                    'faq-panel': true,
                    'is-open': index() === openIndex(),
                  }}
                  id={`faq-panel-${index()}`}
                  style={{ height: index() === openIndex() ? `${item.m??0}px` : '0px' }}
                >
                  <div class="faq-panel-inner">
                    <p innerHTML={item.a}></p>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Faq;
