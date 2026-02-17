import SectionHeader from './SectionHeader';
import './Compatibility.css';

const Compatibility = (props) => {
  return (
    <section class={`section ${props.slim ? 'slim' : ''} ${props.slimTTop ? 'slim-top' : ''} ${props.slimBottom ? 'slim-bottom' : ''}`} id="compatibility">
      <div class="container">
        <SectionHeader
          title="Compatible right away"
          lead="Every player brings their own phone, making multiplayer setup effortless."
        />
        <div class="compatibility-grid">
          <div class="compat-card">
            <div class="compat-icon-group">
              <div class="compat-icon">
                <i class="fa-brands fa-apple"></i>
              </div>
              <div class="compat-icon">
                <i class="fa-brands fa-android"></i>
              </div>
            </div>
            <h3>Mobile Ready</h3>
            <p>Works on all phones</p>
            <p>Both iPhone and Android</p>
          </div>

          <div class="compat-card">
            <div class="compat-icon-single">
              <i class="fa-brands fa-windows"></i>
            </div>
            <h3>Windows Support</h3>
            <p>Runs on Windows computers</p>
            <p>Windows 10 and later</p>
          </div>

          <div class="compat-card compat-card-soon">
            <div class="compat-icon-single compat-icon-disabled">
              <i class="fa-brands fa-apple"></i>
            </div>
            <h3>macOS <span class="coming-soon">Coming Soon</span></h3>
            <p>Support for Mac computers</p>
            <p>Stay tuned for updates</p>
          </div>

          <div class="compat-card compat-card-featured">
            <div class="compat-icon-large">
              <i class="fa-solid fa-mobile"></i>
            </div>
            <h3>Up to 4 Players</h3>
            <p>Family-centered gaming</p>
            <p>Connect up to 4 phones at once</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compatibility;
