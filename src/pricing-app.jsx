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

  const handleCheckoutOpen = (event) => {
    const product = event.detail?.product ?? null;
    setCheckoutProduct(product);
    setCheckoutVariant(event.detail?.variant ?? null);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  onMount(() => {
    window.addEventListener('checkout:open', handleCheckoutOpen);
    onCleanup(() => {
      window.removeEventListener('checkout:open', handleCheckoutOpen);
    });
  });

  return (
    <div class="page">
      <Navbar />
      <main>
        <Pricing slim={true} />
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
