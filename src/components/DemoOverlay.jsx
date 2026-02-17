import { createEffect, onCleanup, Show } from 'solid-js';
import './DemoOverlay.css';

const DemoOverlay = (props) => {
  createEffect(() => {
    if (!props.isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        props.onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    onCleanup(() => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    });
  });

  return (
    <Show when={props.isOpen}>
      <div
        class="demo-overlay"
        onClick={props.onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Becker Box demo"
      >
        <div class="demo-panel" onClick={(event) => event.stopPropagation()}>
          <div class="demo-header">
            <div class="demo-title">
              <span class="demo-kicker">Live Demo</span>
              <h3>Becker Box Host</h3>
            </div>
            <button
              class="demo-close"
              type="button"
              onClick={props.onClose}
              aria-label="Close demo"
            >
              x
            </button>
          </div>
          <div class="demo-body">
            <iframe
              class="demo-frame"
              src={props.demoHref}
              title="Becker Box demo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Show>
  );
};

export default DemoOverlay;
