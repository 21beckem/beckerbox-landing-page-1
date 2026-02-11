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
      period: 'desktop',
      description: 'Unlock the full desktop hub with short ads between sessions.',
      bullets: ['Up to 2 remotes', 'Ad-supported sessions', 'Cloud pairing profiles'],
      cta: 'Coming Soon',
      href: '#pricing',
      highlight: false,
      comingSoon: true,
      tag: 'Coming Soon',
    },
    {
      title: 'Full',
      price: '$45',
      period: 'one-time',
      description: 'The premium experience for families and couch co-op nights.',
      bullets: ['Up to 4 remotes', 'No ads', 'Priority setup support'],
      cta: 'Purchase',
      href: '#pricing',
      highlight: true,
      comingSoon: false,
      tag: 'Best Value',
    },
  ];
  return (
    <section class="section" id="pricing">
      <div class="container">
        <SectionHeader
          title="Choose your setup"
          lead="Start free, upgrade when you are ready, and keep the experience tailored to your crew."
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
                href={tier.href}
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
