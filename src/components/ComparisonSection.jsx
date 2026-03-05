import './ComparisonSection.css';

const ComparisonSection = (props) => {
    function getTypeIconsClass(type) {
        if (type === 'pro') {
            return 'fa-check';
        } else if (type === 'con') {
            return 'fa-times';
        } else {
            return 'fa-minus';
        }
    }

  return (
    <section class={`comparison-section ${props.reverse ? 'reverse' : ''}`}>
      <div class="header">
        <h2>{props.title}</h2>
        <p class="lead">{props.description}</p>
      </div>
      <div class="comparison-section-content">
        <div class="comparison-section-text">

          <div class="comparison-section-cards">
            <article class="comparison-card dolphin-card">
              <div class="comparison-card-header">
                <i class="fas fa-desktop"></i>
                <h3>Using Dolphin Alone</h3>
              </div>
              <ul class="comparison-list">
                {props.dolphinPoints.map((point) => (
                  <li class={point.type}>
                    <i class={`fas ${getTypeIconsClass(point.type)}`}></i>
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article class="comparison-card beckerbox-card">
              <div class="comparison-card-header">
                <i class="fas fa-mobile-alt"></i>
                <h3>Using BeckerBox</h3>
              </div>
              <ul class="comparison-list">
                {props.beckerboxPoints.map((point) => (
                  <li class={point.type}>
                    <i class={`fas ${getTypeIconsClass(point.type)}`}></i>
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div class="comparison-section-media">
          <div class="comparison-media-placeholder">
            <i class={`fas ${props.icon || 'fa-image'}`}></i>
            <span>{props.imageLabel || 'Visual'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;