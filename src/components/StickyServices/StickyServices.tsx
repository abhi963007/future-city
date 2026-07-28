import React, { useRef } from 'react';
import { useStickyServicesAnimation } from '../../hooks/useStickyServicesAnimation';

interface InfrastructureCard {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  imgSrc: string;
  alt: string;
  variantClass: string;
}

const infrastructureCards: InfrastructureCard[] = [
  {
    number: '01',
    title: 'Blacktop Roads',
    subtitle: "30' & 40' Heavy-Duty Internal Roads",
    desc: 'Heavy-duty internal road network with underground drainage, LED street cabling, and wide avenue access across the 16-acre masterplan.',
    imgSrc: '/images/69ea170d9416fbbec2a6517b_propera-service-4.avif',
    alt: 'Wide Internal Roads',
    variantClass: '',
  },
  {
    number: '02',
    title: 'Gated Security',
    subtitle: 'Gated Security & Grand Entry Arch',
    desc: '24/7 CCTV surveillance, grand entry archway, manned security checkpost, and high perimeter fencing protecting all villa plot owners.',
    imgSrc: '/images/69ea171e88eece9f8199cfc8_propera-service-23.avif',
    alt: 'Gated Community Entrance',
    variantClass: 'is-second',
  },
  {
    number: '03',
    title: 'Green Parks',
    subtitle: 'Avenue Plantation & Landscaped Parks',
    desc: 'Lush green parks, jogging tracks, dedicated children play zones, and avenue plantation lining every major internal corridor.',
    imgSrc: '/images/69ea1734e9c846e525c837a3_propera-service-8.avif',
    alt: 'Parks and Landscapes',
    variantClass: 'is-third',
  },
  {
    number: '04',
    title: 'Utilities Grid',
    subtitle: 'Underground Utilities Grid & Water Supply',
    desc: 'Direct water supply connection to every plot, underground electricity grid, storm water management, and internet optical fiber readiness.',
    imgSrc: '/images/6a0206389fe3babd75823870_office-space.avif',
    alt: 'Underground Utilities',
    variantClass: 'is-fourth',
  },
];

const StickyServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useStickyServicesAnimation(containerRef);

  return (
    <div ref={containerRef} className="section_services-home" style={{ paddingTop: '0.5vw' }}>
      {/* Animated Section Header */}
      <div className="section_animated-heading" style={{ paddingTop: '0vw', paddingBottom: '2vw' }}>
        <div className="animated-heading_wrap">
          <h2 className="animated-scroll-heading is-first">Infrastructure</h2>
          <h2 className="animated-scroll-heading is-middle">Engineered For The</h2>
          <h2 className="animated-scroll-heading is-last">Future</h2>
        </div>
      </div>

      {/* 3D Sticky Stacking Cards */}
      <div className="services-home_master">
        {infrastructureCards.map((card) => (
          <div key={card.number} className={`services-home_single ${card.variantClass}`}>
            <div className="services-home_top">
              <h3 className="services-home_title">{card.title}</h3>
            </div>

            <div className="services-home_bottom">
              <h4 className="services-home_subtitle">{card.subtitle}</h4>
              <p className="services-home_desc">{card.desc}</p>
            </div>

            <div className="services-home_background-image-wrap">
              <img src={card.imgSrc} loading="lazy" alt={card.alt} className="services-home_image" />
              <div className="services-home_overlay"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyServices;
