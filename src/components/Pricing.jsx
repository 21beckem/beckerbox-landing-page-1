import { For } from 'solid-js';
import SectionHeader from './SectionHeader';
import PricingCard from './PricingCard';

const Pricing = (props) => {
  const tiers = [
    // {
    //   title: 'Demo Mode',
    //   price: '$0',
    //   period: 'browser',
    //   description: 'Try the core experience in your browser and test pairing.',
    //   bullets: ['One remote connection', 'Basic calibration', 'Instant launch'],
    //   cta: 'Launch Demo',
    //   href: 'https://r.box.beckersuite.com/v2/host/',
    //   external: true,
    //   highlight: false,
    //   comingSoon: false,
    //   tag: 'Free',
    // },
    {
      title: 'Free With Ads',
      price: '$0',
      period: 'never',
      description: 'If you cannot support me financially, that\'s okay! You can use BeckerBox for free with ads.',
      bullets: ['Full access to all features', 'Ad-supported sessions'],
      cta: 'Coming Soon',
      highlight: false,
      comingSoon: true,
      tag: 'Coming Soon',
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
                tag={tier.tag}
              />
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Pricing;