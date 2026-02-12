import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';

const App = () => {

  return (
    <div class="page">
      <Navbar />
      <main>
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
