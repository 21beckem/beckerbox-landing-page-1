import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WebAppSection from '../components/WebAppSection';

const App = () => {

  return (
    <div class="page">
      <Navbar />
      <main>
        <WebAppSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
