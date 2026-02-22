import { createEffect, onCleanup, Show } from 'solid-js';
import './Overlay.css';

const Overlay = (props) => {
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
        aria-label={props.title}
      >
        <div class="demo-panel" onClick={(event) => event.stopPropagation()}>
          <div class="demo-header">
            <div class="demo-title">
              <Show when={props.kicker !== undefined && props.kicker !== null && props.kicker !== ''}>
                <span class="demo-kicker">{props.kicker}</span>
              </Show>
              <h3>{props.title}</h3>
            </div>
            <button
              class="demo-close"
              type="button"
              onClick={props.onClose}
              aria-label={`Close ${props.title}`}
            >
              x
            </button>
          </div>
          <div class="demo-body">
            <iframe
              class="demo-frame"
              src={props.demoHref}
              title={props.title}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Overlay;
