import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThankYouSection from '../components/ThankYouSection';

const App = () => {

  return (
    <div class="page">
      <Navbar />
      <main>
        <ThankYouSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
