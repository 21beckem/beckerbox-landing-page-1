import { createSignal, onMount } from 'solid-js';
import './ErrorPage.css';

const ErrorPage = () => {
  const [reason, setReason] = createSignal('');
  const [message, setMessage] = createSignal('');

  onMount(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const reasonParam = urlParams.get('reason') || 'Payment Failed';
    const messageParam = urlParams.get('message') || 'An error occurred while processing your payment. Please try again.';
    
    setReason(reasonParam);
    setMessage(messageParam);
  });

  return (
    <section class="error-section">
      <div class="container">
        <div class="error-card">
          <div class="error-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          
          <div class="error-content">
            <h1 class="error-title" innerHTML={reason()}></h1>
            <div class="error-message" innerHTML={message()}></div>
          </div>

          <div class="error-actions">
            <a href="/download.html" class="btn primary">
              <i class="fas fa-redo"></i> Try Again
            </a>
            <a href="/contact.html" class="btn secondary">
              <i class="fas fa-envelope"></i> Contact Support
            </a>
            <a href="/" class="btn secondary">
              <i class="fas fa-home"></i> Return Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
