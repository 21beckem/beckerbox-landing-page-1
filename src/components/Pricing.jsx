import { For } from 'solid-js';
import SectionHeader from './SectionHeader';
import PricingCard from './PricingCard';
import './Pricing.css';

const Pricing = (props) => {
  const tiers = [
    {
      title: 'Free With Ads',
      price: '$0',
      period: 'never',
      description: 'If you cannot support me financially, that\'s okay! You can use BeckerBox for free with ads.',
      bullets: ['Full access to all features', 'Ad-supported sessions'],
      cta: 'Download for free',
      product: '_',
      variant: '_',
      highlight: false,
      comingSoon: false,
      tag: 'Free',
      onclick: () => {
        document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      title: 'Budget',
      price: '$20',
      period: 'one-time',
      description: 'If you can\'t afford the Standard price, this is a lower-cost way to support me.',
      bullets: ['Full access to all features', 'No ads'],
      cta: 'Purchase',
      product: 'ilf1s',
      variant: '1771009262029',
      highlight: false,
      comingSoon: false,
      tag: 'Low Cost',
      hrefTarget: 'https://buy.stripe.com/8x29AV41S3If58kbAc8bS02',
      btnClass: 'btn ghost'
    },
    {
      title: 'Standard',
      price: '$35',
      period: 'one-time',
      description: 'Support me and the project.',
      bullets: ['Full access to all features', 'No ads'],
      cta: 'Purchase',
      product: 'ilf1s',
      variant: '1771009293244',
      highlight: true,
      comingSoon: false,
      tag: 'Recommended',
      hrefTarget: 'https://buy.stripe.com/8x2aEZbuk6Ur9oA47K8bS00',
      btnClass: 'btn ghost'
    },
    {
      title: 'Supporter',
      price: '$45',
      period: 'one-time',
      description: 'If you want to give extra support, this is it.',
      bullets: ['Full access to all features', 'No ads', 'Personal thank-you'],
      cta: 'Purchase',
      product: 'ilf1s',
      variant: '1771009313859',
      highlight: false,
      comingSoon: false,
      tag: 'Supporter',
      hrefTarget: 'https://buy.stripe.com/14A4gBfKAceLfMY9s48bS01',
      btnClass: 'btn ghost'
    },
  ];

  return (
    <section class={`section ${props.slim ? 'slim' : ''} ${props.slimTTop ? 'slim-top' : ''} ${props.slimBottom ? 'slim-bottom' : ''}`} id="pricing">
      <div class="container">
        <SectionHeader
          title="Choose your setup"
        />
        <div class="pricing-grid">
          <For each={tiers}>
            {(tier) => (
              <PricingCard
                btnClass={tier.btnClass}
                title={tier.title}
                price={tier.price}
                period={tier.period}
                description={tier.description}
                bullets={tier.bullets}
                cta={tier.cta}
                product={tier.product}
                variant={tier.variant}
                external={tier.external}
                highlight={tier.highlight}
                comingSoon={tier.comingSoon}
                hrefTarget={tier.hrefTarget}
                tag={tier.tag}
                onclick={tier.onclick}
              />
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Pricing;