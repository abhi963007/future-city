import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Label from '../common/Label/Label';
import { useStickyServicesAnimation } from '../../hooks/useStickyServicesAnimation';
import { ROUTES } from '../../utils/constants';

interface FeatureItem {
  href: string;
  title: string;
  desc: string;
  imgSrc: string;
  srcset?: string;
  alt: string;
}

const featuresData: FeatureItem[] = [
  {
    href: ROUTES.PROJECT,
    title: "30' & 40' Blacktop Roads",
    desc: 'Heavy-duty internal road network with underground drainage and LED cabling.',
    imgSrc: '/images/69ea170d9416fbbec2a6517b_propera-service-4.avif',
    srcset:
      '/images/69ea170d9416fbbec2a6517b_propera-service-4-p-500.avif 500w, /images/69ea170d9416fbbec2a6517b_propera-service-4-p-800.avif 800w, /images/69ea170d9416fbbec2a6517b_propera-service-4-p-1080.avif 1080w, /images/69ea170d9416fbbec2a6517b_propera-service-4.avif 2752w',
    alt: 'Wide Internal Roads',
  },
  {
    href: ROUTES.PROJECT,
    title: 'Gated Security & Entrance Arch',
    desc: '24/7 CCTV surveillance, grand entry arch, and perimeter fencing across 16 acres.',
    imgSrc: '/images/69ea171e88eece9f8199cfc8_propera-service-23.avif',
    srcset:
      '/images/69ea171e88eece9f8199cfc8_propera-service-23-p-500.avif 500w, /images/69ea171e88eece9f8199cfc8_propera-service-23-p-800.avif 800w, /images/69ea171e88eece9f8199cfc8_propera-service-23-p-1080.avif 1080w, /images/69ea171e88eece9f8199cfc8_propera-service-23-p-1600.avif 1600w, /images/69ea171e88eece9f8199cfc8_propera-service-23.avif 2752w',
    alt: 'Gated Community Entrance',
  },
  {
    href: ROUTES.PROJECT,
    title: 'Avenue Plantation & Parks',
    desc: 'Landscaped green parks, jogging tracks, and dedicated children play zones.',
    imgSrc: '/images/69ea1734e9c846e525c837a3_propera-service-8.avif',
    srcset:
      '/images/69ea1734e9c846e525c837a3_propera-service-8-p-500.avif 500w, /images/69ea1734e9c846e525c837a3_propera-service-8-p-800.avif 800w, /images/69ea1734e9c846e525c837a3_propera-service-8-p-1080.avif 1080w, /images/69ea1734e9c846e525c837a3_propera-service-8.avif 2752w',
    alt: 'Parks and Landscapes',
  },
  {
    href: ROUTES.PROJECT,
    title: 'Underground Utilities Grid',
    desc: 'Direct water supply connection to every plot, underground electricity, and storm drains.',
    imgSrc: '/images/6a0206389fe3babd75823870_office-space.avif',
    alt: 'Underground Utilities',
  },
];

const StickyServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useStickyServicesAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      data-wf-component-id="1a329848-d548-65e9-c96d-d09b9e5395fe"
      data-wf-variant-state="base"
      className="section-services-sticky-listing"
    >
      <div className="services-listing-grid">
        <div id="w-node-_1a329848-d548-65e9-c96d-d09b9e539600-9e5395fe" className="sticky-service-block">
          <div className="services-listing-wrap">
            <Label parts={['Project', 'Features']} variant="dark" />
            <div className="services-listing-title">
              <h2 className="heading is-xlarge">Infrastructure engineered for the future</h2>
            </div>
          </div>
          <Link to={ROUTES.CONSULTATION} className="services-listing-link w-inline-block">
            <div className="label-text">Download Brochure</div>
            <img
              src="/images/69e7c7b0c8b5b85fe79564d2_arrow-right.svg"
              loading="lazy"
              alt="Arrow icon"
              className="services-listing-icon"
            />
            <div className="services-listing-link-bg"></div>
          </Link>
        </div>
        <div id="w-node-_1a329848-d548-65e9-c96d-d09b9e539610-9e5395fe" className="service-wrap w-dyn-list">
          <div role="list" className="service-grid w-dyn-items">
            {featuresData.map((feature, index) => (
              <div key={index} role="listitem" className="service-grid-item w-dyn-item">
                <Link to={feature.href} className="service-grid-link w-inline-block">
                  <div className="service-grid-media">
                    <div className="service-image-animation-color"></div>
                    <img
                      alt={feature.alt}
                      loading="lazy"
                      src={feature.imgSrc}
                      sizes="100vw"
                      srcSet={feature.srcset}
                      className="service-grid-image"
                    />
                  </div>
                  <div className="service-block">
                    <div className="label-text">Infrastructure</div>
                    <div className="service-max">
                      <h2 className="heading is-medium">{feature.title}</h2>
                      <p className="paragraph">{feature.desc}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyServices;
