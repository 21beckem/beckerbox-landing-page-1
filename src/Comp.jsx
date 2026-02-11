import { For } from 'solid-js';

const PricingCard = (props) => {
  return (
    <div
      classList={{
        card: true,
        'pricing-card': true,
        'is-highlight': props.highlight,
        'is-soon': props.comingSoon,
      }}
    >
      {props.tag && <div class="pricing-tag">{props.tag}</div>}
      <h3>{props.title}</h3>
      <p class="price">
        {props.price} <span>/{props.period}</span>
      </p>
      <p>{props.description}</p>
      <ul class="list">
        <For each={props.bullets}>{(item) => <li>{item}</li>}</For>
      </ul>
      <div class="hero-cta">
        <a
          class="btn primary"
          href="#pricing"
          aria-disabled={props.comingSoon ? 'true' : 'false'}
        >
          {props.cta}
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
