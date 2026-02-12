import { createSignal, onCleanup, onMount } from 'solid-js';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slideshow from './components/Slideshow';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Compatibility from './components/Compatibility';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import CheckoutOverlay from './components/CheckoutOverlay';

const App = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = createSignal(false);
  const [checkoutProduct, setCheckoutProduct] = createSignal(null);

  const openPayhipCheckout = (product) => {
    if (!product || !window.Payhip?.Checkout?.open) return;
    setTimeout(() => {
      window.Payhip.Checkout.open({
        method: 'inline',
        iframeTarget: 'checkout-overlay-placeholder',
        icon: 'https://raw.githubusercontent.com/21beckem/becker-suite-public-assets/refs/heads/main/logo.png',
        title: 'Becker Box - Full Version',
        product,
        message: 'A custom message to add to the checkout',
        successCallback: function() {
          console.log('Purchase successful!');
        }
      });
    }, 300);
  };

  const handleCheckoutOpen = (event) => {
    const product = event.detail?.product ?? null;
    setCheckoutProduct(product);
    setIsCheckoutOpen(true);
    requestAnimationFrame(() => openPayhipCheckout(product));
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
      <Hero
        purchaseHref="#pricing"
        demoHref="https://r.box.beckersuite.com/v2/host/"
        imageSrc="/images/beckerbox-hero.png"
      />
      <Slideshow />
      <HowItWorks />
      <Features />
      <Compatibility />
      <Testimonials />
      <Faq />
      <Pricing />
      <Footer />
      <CheckoutOverlay
        isOpen={isCheckoutOpen()}
        onClose={handleCheckoutClose}
        product={checkoutProduct()}
      />
    </div>
  );
};

export default App;
