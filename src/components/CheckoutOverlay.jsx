import { createEffect, onCleanup, Show } from 'solid-js';
import './CheckoutOverlay.css';

const CheckoutOverlay = (props) => {
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

  const makeIframeSrc = () => {
    if (!props.product) return '';
    const baseUrl = 'https://payhip.com/buy';
    const params = new URLSearchParams({
      variant_id: props.variant ?? '',
      link: props.product,
      [`variant_combination[${props.product}]`]: props.variant ?? ''
    });
    return `${baseUrl}?${params.toString()}`;
  }

  return (
    <Show when={props.isOpen}>
      <div
        class="checkout-overlay"
        onClick={props.onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Checkout"
      >
        <div class="checkout-panel" onClick={(event) => event.stopPropagation()}>
          <div class="checkout-header">
            <div class="checkout-title">
              <span class="checkout-kicker">Secure Checkout</span>
              <h3>Complete your order</h3>
            </div>
            <button
              class="checkout-close"
              type="button"
              onClick={props.onClose}
              aria-label="Close checkout"
            >
              x
            </button>
          </div>
          <div class="checkout-body">
            <div class="checkout-overlay-placeholder">
              <div class="checkout-loader">
                <div class="loader-spinner"></div>
                <p>Loading checkout...</p>
              </div>
              <iframe src={makeIframeSrc()} frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default CheckoutOverlay;
