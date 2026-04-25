import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartyGamesPage from '../components/PartyGamesPage';

const App = () => {
  return (
    <div class="page">
      <Navbar />
      <main>
        <PartyGamesPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
