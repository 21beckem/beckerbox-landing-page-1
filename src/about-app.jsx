import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <div class="page">
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
