import './ThankYouSection.css';

const ThankYouSection = () => {
  return (
    <section class="thankyou-section">
      <div class="container">
        <div class="thankyou-card">
          <div class="thankyou-header">
            <h1>Thanks for Playing!</h1>
            <p class="thankyou-subtitle">I hope you had fun with BeckerBox</p>
          </div>

          <div class="thankyou-content">
            <div class="thankyou-message">
              <p>
                I hope you enjoyed those nostalgic games and had a blast with your friends.
              </p>
              <p>
                If you'd like to experience BeckerBox whenever you want, you can get it for yourself! It's easy to set up and perfect for game nights with your family.
              </p>
            </div>

            <div class="thankyou-actions">
              <h3>What's Next?</h3>
              
              <div class="action-cards">
                <div class="action-card">
                  <div class="action-icon">
                    <i class="fas fa-download"></i>
                  </div>
                  <h4>Get BeckerBox</h4>
                  <p>Learn how to download and set up BeckerBox on your own PC.</p>
                  <a class="btn primary" href="https://box.beckersuite.com/">Learn More</a>
                </div>

                <div class="action-card">
                  <div class="action-icon">
                    <i class="fas fa-book"></i>
                  </div>
                  <h4>View Tutorials</h4>
                  <p>Follow step-by-step guides to get started or troubleshoot any issues.</p>
                  <a class="btn primary" href="https://box.beckersuite.com/tutorials.html">View Tutorials</a>
                </div>

                <div class="action-card">
                  <div class="action-icon">
                    <i class="fas fa-gamepad"></i>
                  </div>
                  <h4>Need Help?</h4>
                  <p>Have questions or ran into trouble? We're here to help.</p>
                  <a class="btn primary" href="https://box.beckersuite.com/contact.html">Get Support</a>
                </div>
              </div>
            </div>

            <div class="thankyou-footer-message">
              <p>
                <strong>Tip:</strong> If something felt confusing while playing, check out our <a href="https://box.beckersuite.com/tutorials.html">tutorials page</a> – it has guides for everything from installation to connecting controllers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
