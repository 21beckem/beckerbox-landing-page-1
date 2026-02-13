import { For } from 'solid-js';
import PurchaseBtn from './PurchaseBtn';

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
      {/* {props.tag && <div class="pricing-tag">{props.tag}</div>} */}
      <h3>{props.title}</h3>
      <p class="price">
        {props.price} <span>/{props.period}</span>
      </p>
      <p>{props.description}</p>
      <div style="min-height: 1rem; flex: 1;"></div>
      <ul class="list">
        <For each={props.bullets}>{(item) => <li>{item}</li>}</For>
      </ul>
      <div class="hero-cta">
        <PurchaseBtn
          class="btn primary"
          target={props.external ? '_blank' : undefined}
          rel={props.external ? 'noreferrer' : undefined}
          aria-disabled={props.comingSoon ? 'true' : 'false'}
          product={props.product}
          variant={props.variant}
          text={props.cta}
        />
      </div>
    </div>
  );
};

export default PricingCard;
