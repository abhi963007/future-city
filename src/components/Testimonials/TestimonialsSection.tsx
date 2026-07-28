import React, { useRef, useState } from 'react';
import { useTestimonialsAnimation } from '../../hooks/useTestimonialsAnimation';

interface TestimonialItem {
  id: string;
  imageSrc: string;
  alt: string;
  logoText: string;
  quote: string;
  author: string;
  role: string;
  positionClass: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 'dtcp',
    imageSrc: '/images/grid-image-12.webp',
    alt: 'DTCP & RERA Approved Villa Plots',
    logoText: 'DTCP APPROVED',
    quote:
      '“Investing in Future City gave us complete peace of mind. 100% clear title, spot registration readiness, and bank loan approvals made the process smooth and transparent.”',
    author: 'Rajesh Varma',
    role: 'NRI Investor · Hyderabad',
    positionClass: 'is-left',
  },
  {
    id: 'ai-hub',
    imageSrc: '/images/grid-image-04.webp',
    alt: 'AI City Tech Hub Corridor',
    logoText: 'AI CITY HUB',
    quote:
      '“Positioned right next to the upcoming 200-acre AI Hub and Skill University. The infrastructure plan and future growth trajectory here are unmatched in Telangana.”',
    author: 'Dr. Ananya Reddy',
    role: 'Tech Executive & Plot Owner',
    positionClass: 'is-left-two',
  },
  {
    id: 'main-vision',
    imageSrc: '/images/grid-image-05.webp',
    alt: 'Future City Masterplan Vision',
    logoText: 'FOURTH CITY',
    quote:
      '“Hyderabad’s Fourth City is set to become the premier economic engine of the state. Future City offers the strategic early-mover advantage for maximum ROI.”',
    author: 'K. Sunder Rao',
    role: 'Real Estate Analyst',
    positionClass: 'is-middle',
  },
  {
    id: 'rrr-highway',
    imageSrc: '/images/grid-image-11.webp',
    alt: 'Regional Ring Road Connectivity',
    logoText: 'RRR EXPRESSWAY',
    quote:
      '“Direct connectivity to the 6-lane Srisailam Highway and Regional Ring Road ensures effortless commute to ORR and RGIA Airport within minutes.”',
    author: 'Siddharth Mehta',
    role: 'Infrastructure Consultant',
    positionClass: 'is-right-two',
  },
  {
    id: 'pharma-city',
    imageSrc: '/images/grid-image-08.webp',
    alt: 'Pharma City Cluster Growth',
    logoText: 'PHARMA CLUSTER',
    quote:
      '“Surrounded by a 14,000-acre life sciences hub generating over 500,000 jobs. High rental yield potential and rapid land appreciation make this the top choice.”',
    author: 'Priya Sharma',
    role: 'Portfolio Investor',
    positionClass: 'is-right',
  },
];

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(2); // Default middle card

  useTestimonialsAnimation(containerRef, setActiveIndex);

  return (
    <div ref={containerRef} className="section_testimonials-wrapper">
      {/* Animated Section Header */}
      <div className="section_animated-heading">
        <div className="animated-heading_wrap">
          <h2 className="animated-scroll-heading is-first">Why investors</h2>
          <h2 className="animated-scroll-heading is-middle">Choose Future City</h2>
          <h2 className="animated-scroll-heading is-last">For Growth</h2>
        </div>
      </div>

      {/* Dark Testimonials Box Container */}
      <div className="section_testimonials">
        <div className="container-large">
          <div className="testimonials-background">
            {/* Top labels */}
            <div className="testimonials_absolute-small-texts-top">
              <div className="label-small">INVESTOR CORRIDOR</div>
              <div className="label-small">HYDERABAD FOURTH CITY</div>
            </div>

            {/* 5 Card Fan-Out Grid */}
            <div className="testimonials_grid">
              {testimonialsData.map((item, idx) => (
                <div
                  key={item.id}
                  className={`testimonials_image-wrap ${item.positionClass}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <img src={item.imageSrc} loading="lazy" alt={item.alt} className="testimonials_image" />
                  <div className="testimonials_logo-tile">{item.logoText}</div>
                  <div
                    className="testimonials_image-overlay"
                    style={{ opacity: activeIndex === idx ? 0.1 : 0.45 }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Quote & Author Texts (switches actively) */}
            <div className="testimonials_master-texts">
              {testimonialsData.map((item, idx) => (
                <div
                  key={item.id}
                  className="testimonials_text-single"
                  style={{
                    display: activeIndex === idx ? 'flex' : 'none',
                    opacity: activeIndex === idx ? 1 : 0,
                  }}
                >
                  <div className="testimonials_top-text">{item.quote}</div>
                  <div className="testimonials_person-wrap">
                    <div className="text-size-small">{item.author}</div>
                    <div className="testimonials_circle-divider"></div>
                    <div className="text-size-small">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom labels */}
            <div className="testimonials_absolute-small-texts">
              <div className="label-small">TESTIMONIALS & TRUST</div>
              <div className="label-small">100% DTCP & RERA APPROVED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
