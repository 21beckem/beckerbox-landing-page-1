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

const App = () => {

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
    </div>
  );
};

export default App;
