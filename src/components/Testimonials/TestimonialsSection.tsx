import React, { useRef, useState } from 'react';
import { useTestimonialsAnimation } from '../../hooks/useTestimonialsAnimation';

interface PillarItem {
  id: string;
  imageSrc: string;
  alt: string;
  badgeText: string;
  title: string;
  description: string;
  metric: string;
  positionClass: string;
}

const pillarsData: PillarItem[] = [
  {
    id: 'dtcp',
    imageSrc: '/images/pillar-verified-plots.png',
    alt: 'DTCP & RERA Approved Villa Plotting',
    badgeText: '100% VERIFIED',
    title: 'DTCP & RERA Approved Layouts',
    description:
      '100% clear title documentation with instant spot registration readiness and approved bank loan facilities across major financial institutions.',
    metric: 'IMMEDIATE REGISTRATION',
    positionClass: 'is-left',
  },
  {
    id: 'ai-hub',
    imageSrc: '/images/pillar-ai-hub.png',
    alt: 'AI City Tech Hub Corridor',
    badgeText: 'AI HUB ACCESS',
    title: '200-Acre AI City & Skills Corridor',
    description:
      'Strategically positioned adjacent to the proposed Young India Skills University and 200-acre AI Hub for high-tech economic growth.',
    metric: 'TECH CORRIDOR',
    positionClass: 'is-left-two',
  },
  {
    id: 'fourth-city',
    imageSrc: '/images/pillar-fourth-city.png',
    alt: 'Future City Masterplan Vision',
    badgeText: 'FOURTH CITY',
    title: 'Hyderabad’s Fourth Economic City',
    description:
      'Pioneering the transformation of Hyderabad’s southern corridor into an international destination for mega infrastructure and smart urbanization.',
    metric: '10X CAPITAL GROWTH',
    positionClass: 'is-middle',
  },
  {
    id: 'rrr-highway',
    imageSrc: '/images/pillar-express-highway.png',
    alt: 'Regional Ring Road Connectivity',
    badgeText: '6-LANE HIGHWAY',
    title: 'Regional Ring Road & Highway Link',
    description:
      'Direct access to the 6-lane Srisailam Highway and Regional Ring Road (RRR) providing express transit to ORR and RGIA Airport within minutes.',
    metric: 'EXPRESS TRANSIT',
    positionClass: 'is-right-two',
  },
  {
    id: 'pharma-city',
    imageSrc: '/images/pillar-life-sciences.png',
    alt: 'Pharma City Cluster Proximity',
    badgeText: 'LIFE SCIENCES',
    title: '14,000-Acre Pharma City Proximity',
    description:
      'Surrounded by the world’s largest pharmaceutical and life sciences cluster, projected to generate over 500,000 employment opportunities.',
    metric: '500K+ JOBS CLUSTER',
    positionClass: 'is-right',
  },
];

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(2); // Default middle pillar card

  useTestimonialsAnimation(containerRef, setActiveIndex);

  return (
    <div ref={containerRef} className="section_testimonials-wrapper">
      {/* Animated Section Header */}
      <div className="section_animated-heading">
        <div className="animated-heading_wrap">
          <h2 className="animated-scroll-heading is-first">Strategic Pillars of</h2>
          <h2 className="animated-scroll-heading is-middle">Future City</h2>
          <h2 className="animated-scroll-heading is-last">Growth</h2>
        </div>
      </div>

      {/* Dark Box Container */}
      <div className="section_testimonials">
        <div className="container-large">
          <div className="testimonials-background">
            {/* Top labels */}
            <div className="testimonials_absolute-small-texts-top">
              <div className="label-small">FUTURE CITY PILLARS</div>
              <div className="label-small">HYDERABAD FOURTH CITY</div>
            </div>

            {/* 5 Card Fan-Out Grid */}
            <div className="testimonials_grid">
              {pillarsData.map((item, idx) => (
                <div
                  key={item.id}
                  className={`testimonials_image-wrap ${item.positionClass}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx);
                  }}
                  aria-pressed={activeIndex === idx}
                  aria-label={item.title}
                >
                  <img src={item.imageSrc} loading="lazy" alt={item.alt} className="testimonials_image" />
                  <div className="testimonials_logo-tile">{item.badgeText}</div>
                  <div
                    className="testimonials_image-overlay"
                    style={{ opacity: activeIndex === idx ? 0.1 : 0.45 }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Pillar Content & Metric Details (switches actively on hover/scroll) */}
            <div className="testimonials_master-texts">
              {pillarsData.map((item, idx) => (
                <div
                  key={item.id}
                  className="testimonials_text-single"
                  style={{
                    display: activeIndex === idx ? 'flex' : 'none',
                    opacity: activeIndex === idx ? 1 : 0,
                  }}
                >
                  <div className="testimonials_top-text" style={{ fontSize: 'clamp(1.2rem, 2vw, 2.2rem)', fontWeight: 500 }}>
                    {item.title}
                  </div>
                  <p className="paragraph is-small" style={{ maxWidth: '42rem', opacity: 0.85, margin: 0 }}>
                    {item.description}
                  </p>
                  <div className="testimonials_person-wrap">
                    <div className="text-size-small" style={{ letterSpacing: '0.1em', fontWeight: 600 }}>
                      {item.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom labels */}
            <div className="testimonials_absolute-small-texts">
              <div className="label-small">CORE INVESTMENT HIGHLIGHTS</div>
              <div className="label-small">HYDERABAD FOURTH CITY MASTERPLAN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
