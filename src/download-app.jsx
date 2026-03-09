import { createSignal, onCleanup, onMount } from 'solid-js';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Download from './components/Download';
import Footer from './components/Footer';
import CheckoutOverlay from './components/CheckoutOverlay';

const App = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = createSignal(false);
  const [checkoutProduct, setCheckoutProduct] = createSignal(null);
  const [checkoutVariant, setCheckoutVariant] = createSignal(null);
  const [purchaseKey, setPurchaseKey] = createSignal(null);
  const [isFromURL, setIsFromURL] = createSignal(false);
  const [isCopied, setIsCopied] = createSignal(false);

  const handleCheckoutOpen = (event) => {
    // const product = event.detail?.product ?? null;
    // setCheckoutProduct(product);
    // setCheckoutVariant(event.detail?.variant ?? null);
    // setIsCheckoutOpen(true);
    gtag('event', 'begin_checkout', {
      event_callback: function () {
        console.log('Begin checkout event tracked successfully');
        window.location.href = event.detail.hrefTarget;
      }
    });
    
    // just in case the callback doesn't fire, we still want to navigate
    setTimeout(() => {
      console.warn('Begin checkout event callback did not fire quickly. Navigating to checkout page anyway.');
      window.location.href = event.detail.hrefTarget;
    }, 500);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  onMount(() => {
    // Check for key in URL search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const keyFromURL = urlParams.get('key');

    if (keyFromURL) {
      // they probably just completed a purchase!
      gtag('event', 'purchase', {
        key: keyFromURL,
        timestamp: new Date().toISOString(),
        event_callback: function () {
          console.log('Purchase event tracked successfully with key:', keyFromURL);
        }
      });
      gtag('event', 'conversion_event_purchase', {
        key: keyFromURL,
        timestamp: new Date().toISOString(),
        event_callback: function () {
          console.log('Purchase event tracked successfully with key:', keyFromURL);
        }
      });
      // Save key to localStorage
      localStorage.setItem('beckerbox_purchase_key', keyFromURL);
      setPurchaseKey(keyFromURL);
      setIsFromURL(true);
    } else {
      // Check if key exists in localStorage
      const keyFromStorage = localStorage.getItem('beckerbox_purchase_key');
      if (keyFromStorage) {
        setPurchaseKey(keyFromStorage);
        setIsFromURL(false);
      }
    }

    window.addEventListener('checkout:open', handleCheckoutOpen);
    onCleanup(() => {
      window.removeEventListener('checkout:open', handleCheckoutOpen);
    });
  });

  const handleCopyKey = () => {
    navigator.clipboard.writeText(purchaseKey()).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div class="page">
      <Navbar />
      <main>
        {purchaseKey() ? (
          <section class="section slim" id="purchase-confirmation" style="margin-bottom: 0; padding-bottom: 0;">
            <div class="container">
              <div class="card" style={{ 'text-align': 'center', 'margin-bottom': '2rem' }}>
                <h2 style={{ 'margin-bottom': '1rem' }}>
                  {isFromURL() ? '✓ Thank you for purchasing BeckerBox!' : 'You already own BeckerBox!'}
                </h2>
                <p style={{ 'margin-bottom': '1.5rem' }}>
                  {isFromURL() ? 'Your purchase is complete. Download your copy below.' : ''}
                </p>
                
                <div style={{ 'margin': '1.5rem 0' }}>
                  <p style={{ 'color': 'var(--muted)', 'margin-bottom': '0.75rem', 'font-size': '0.95rem' }}>
                    Your License Key:
                  </p>
                  <div style={{
                    'display': 'flex',
                    'gap': '0.5rem',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'background': 'rgba(15, 28, 22, 0.04)',
                    'border': '1px solid rgba(15, 28, 22, 0.1)',
                    'border-radius': 'var(--radius-sm)',
                    'padding': '0.75rem 1rem',
                    'width': 'fit-content',
                    'margin': '0 auto'
                  }}>
                    <input 
                      type="text" 
                      value={purchaseKey()} 
                      readonly
                      style={{
                        'border': 'none',
                        'background': 'transparent',
                        'font-family': 'monospace',
                        'font-size': '0.95rem',
                        'color': 'var(--text)',
                        'outline': 'none',
                        'padding': '0',
                        'width': 'auto'
                      }}
                    />
                    <button
                      id="copy-key-btn"
                      onClick={handleCopyKey}
                      title={isCopied() ? 'Copied!' : 'Copy license key'}
                      style={{
                        'background': isCopied() ? 'rgba(25, 194, 101, 0.3)' : 'rgba(25, 194, 101, 0.15)',
                        'border': isCopied() ? '1px solid rgba(25, 194, 101, 0.6)' : '1px solid rgba(25, 194, 101, 0.3)',
                        'color': 'var(--text)',
                        'padding': '0.5rem 0.75rem',
                        'border-radius': 'var(--radius-sm)',
                        'cursor': 'pointer',
                        'display': 'flex',
                        'align-items': 'center',
                        'justify-content': 'center',
                        'min-width': '2.5rem',
                        'height': '2.5rem',
                        'transition': 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isCopied()) {
                          e.target.style.background = 'rgba(25, 194, 101, 0.25)';
                          e.target.style.borderColor = 'rgba(25, 194, 101, 0.5)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isCopied()) {
                          e.target.style.background = 'rgba(25, 194, 101, 0.15)';
                          e.target.style.borderColor = 'rgba(25, 194, 101, 0.3)';
                        }
                      }}
                    >
                      <i class={isCopied() ? 'fas fa-check' : 'fas fa-copy'}></i>
                    </button>
                  </div>
                  <p
                    style={{
                      'margin-top': '0.85rem',
                      'font-size': '0.95rem',
                      'font-weight': '700',
                      'color': '#6b3f00',
                      'transform': 'translateY(0.7rem)'
                    }}
                  >
                    Important: Save this key somewhere safe. You will need it to access BeckerBox later.
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <Pricing slim={true} />
        )}
        <Download slim={true} />
      </main>
      <Footer />
      <CheckoutOverlay
        isOpen={isCheckoutOpen()}
        onClose={handleCheckoutClose}
        product={checkoutProduct()}
        variant={checkoutVariant()}
      />
    </div>
  );
};

export default App;
