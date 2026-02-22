import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slideshow from './components/Slideshow';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Compatibility from './components/Compatibility';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App = () => {

  return (
    <div class="page">
      <Navbar />
      <Hero />
      <Slideshow />
      <Faq slim={true} />
      <HowItWorks />
      <Features />
      <Compatibility />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
