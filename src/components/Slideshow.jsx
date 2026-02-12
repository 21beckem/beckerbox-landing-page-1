import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js';

const Slideshow = () => {
  const slides = createMemo(() => [
    {
      image: '/images/racing-game-on-couch.png',
      title: 'Play Together',
      description: 'Turn any room into a motion-powered game night with friends.',
      ctaLabel: 'How it works',
      ctaHref: '#how',
    },
    {
      image: '/images/remote-steering.png',
      title: 'Your Device, Your Controller',
      description: 'Your phone becomes the controller, not the console.',
      ctaLabel: '',
      ctaHref: '',
    },
    {
      image: '/images/swinging-remote.png',
      title: 'Everyone’s In',
      description: 'Easy setup means no one’s left out when game night begins.',
      ctaLabel: 'Get Started',
      ctaHref: '#get-started',
    },
    {
      image: '/images/remote-on-tablet.png',
      title: 'Runs on What You Own',
      description: 'Use your existing computer and devices. Nothing else needed.',
      ctaLabel: '',
      ctaHref: '',
    },
  ]);

  const [activeIndex, setActiveIndex] = createSignal(0);

  createEffect(() => {
    const length = slides().length;
    activeIndex();

    const timer = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % length);
    }, 7000);

    onCleanup(() => clearTimeout(timer));
  });

  const goTo = (index) => {
    setActiveIndex((index + slides().length) % slides().length);
  };

  const current = createMemo(() => slides()[activeIndex()]);

  return (
    <section class="slideshow" aria-label="Featured moments">
      <div class="container">
        <div class="slideshow-shell">
          <div class="slideshow-viewport">
            <div
              class="slideshow-track"
              style={{ transform: `translateX(-${activeIndex() * 100}%)` }}
            >
              {slides().map((slide, index) => (
                <article
                  class="slide"
                  key={`${slide.image}-${index}`}
                  style={`background-image: url(${slide.image})`}
                  aria-hidden={activeIndex() !== index}
                >
                  <div class="slide-overlay" />
                </article>
              ))}
            </div>
          </div>
          <div class="slideshow-content">
            {current().title ? <h2>{current().title}</h2> : null}
            {current().description ? (
              <p class="slideshow-copy">{current().description}</p>
            ) : null}
            {current().ctaLabel && current().ctaHref ? (
              <a class="btn light" href={current().ctaHref}>
                {current().ctaLabel}
              </a>
            ) : null}
          </div>
          <div class="slideshow-controls">
            <button class="slide-arrow" type="button" onClick={() => goTo(activeIndex() - 1)}>
              <span aria-hidden="true">&#8249;</span>
              <span class="sr-only">Previous slide</span>
            </button>
            <div class="slide-dots" role="tablist" aria-label="Slide selection">
              {slides().map((slide, index) => (
                <button
                  key={`${slide.image}-dot-${index}`}
                  type="button"
                  class={`slide-dot ${index === activeIndex() ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-pressed={index === activeIndex()}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <button class="slide-arrow" type="button" onClick={() => goTo(activeIndex() + 1)}>
              <span aria-hidden="true">&#8250;</span>
              <span class="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
