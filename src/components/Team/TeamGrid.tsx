import React from 'react';

interface HighlightItem {
  title: string;
  subtitle: string;
  photoSrc: string;
  srcset: string;
  desc: string;
}

const highlights: HighlightItem[] = [
  {
    title: 'Yacharam Growth Hub',
    subtitle: 'High Appreciation Corridor',
    photoSrc: '/images/69f0d23c613ebaa58b5e5abd_portrait-3.avif',
    srcset:
      '/images/69f0d23c613ebaa58b5e5abd_portrait-3-p-500.avif 500w, /images/69f0d23c613ebaa58b5e5abd_portrait-3-p-800.avif 800w, /images/69f0d23c613ebaa58b5e5abd_portrait-3.avif 1623w',
    desc: "Located in Hyderabad's fastest appreciating growth corridor along the 6-lane Srisailam Highway with direct airport link.",
  },
  {
    title: 'AI City Infrastructure',
    subtitle: 'Fourth City Tech Ecosystem',
    photoSrc: '/images/69f0d24d657f94035313b9f6_portrait-2.avif',
    srcset:
      '/images/69f0d24d657f94035313b9f6_portrait-2-p-500.avif 500w, /images/69f0d24d657f94035313b9f6_portrait-2-p-800.avif 800w, /images/69f0d24d657f94035313b9f6_portrait-2.avif 1641w',
    desc: 'Positioned adjacent to the proposed 200-acre AI Hub, Young India Skills University, and Pharma City.',
  },
  {
    title: '100% Legal Assurance',
    subtitle: 'DTCP & RERA Approved',
    photoSrc: '/images/69f0d2571158f60b904d2833_portrait-6.avif',
    srcset:
      '/images/69f0d2571158f60b904d2833_portrait-6-p-500.avif 500w, /images/69f0d2571158f60b904d2833_portrait-6-p-800.avif 800w, /images/69f0d2571158f60b904d2833_portrait-6.avif 2048w',
    desc: 'Complete legal transparency with clear title documentation, spot registration readiness, and bank loan support.',
  },
];

const TeamGrid: React.FC = () => {
  return (
    <div className="team-grid-wrap w-dyn-list">
      <div role="list" className="team-list w-dyn-items">
        {highlights.map((item, index) => (
          <div key={index} id="w-node-a117a19b-8e79-f009-5be3-bbe9957277be-0aee85ab" role="listitem" className="team-grid-item w-dyn-item">
            <div
              data-wf--team-card--variant="dark"
              data-wf-component-id="e78374e9-5904-ed40-4f7f-dd0b6929f5ff"
              data-wf-variant-state="base"
              className="team-card"
            >
              <div className="team-card-name">
                <div className="paragraph is-large">{item.title}</div>
                <div className="label-text">{item.subtitle}</div>
              </div>
              <div className="team-card-photo">
                <img
                  alt={item.title}
                  loading="lazy"
                  src={item.photoSrc}
                  sizes="100vw"
                  srcSet={item.srcset}
                  className="team-photography"
                />
              </div>
              <div className="team-card-about">
                <p className="paragraph-bold is-xsmall">{item.desc}</p>
                <div className="team-card-contact">
                  <span className="team-contact-link">Future City</span>
                  <span className="team-contact-link">Hyderabad</span>
                </div>
              </div>
              <img
                src="/images/69e7c7b0c8b5b85fe79565ef_accordion-icon.svg"
                loading="lazy"
                alt="plus icon"
                className="team-card-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
