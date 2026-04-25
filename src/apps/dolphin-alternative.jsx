import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DolphinAlternativePage from '../components/DolphinAlternativePage';

const App = () => {
  return (
    <div class="page">
      <Navbar />
      <main>
        <DolphinAlternativePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
