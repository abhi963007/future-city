import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Label from '../common/Label/Label';
import { useStickyServicesAnimation } from '../../hooks/useStickyServicesAnimation';
import { ROUTES } from '../../utils/constants';

interface ServiceItem {
  href: string;
  title: string;
  desc: string;
  imgSrc: string;
  srcset?: string;
  alt: string;
}

const servicesData: ServiceItem[] = [
  {
    href: '/service/property-sales',
    title: 'New Development Sales',
    desc: 'Expert sales representation from launch through to legal completion',
    imgSrc: '/images/69ea170d9416fbbec2a6517b_propera-service-4.avif',
    srcset:
      '/images/69ea170d9416fbbec2a6517b_propera-service-4-p-500.avif 500w, /images/69ea170d9416fbbec2a6517b_propera-service-4-p-800.avif 800w, /images/69ea170d9416fbbec2a6517b_propera-service-4-p-1080.avif 1080w, /images/69ea170d9416fbbec2a6517b_propera-service-4.avif 2752w',
    alt: 'New Development Sales',
  },
  {
    href: '/service/property-management',
    title: 'Block & Estate Management',
    desc: 'Professional block and estate management for residential developments',
    imgSrc: '/images/69ea171e88eece9f8199cfc8_propera-service-23.avif',
    srcset:
      '/images/69ea171e88eece9f8199cfc8_propera-service-23-p-500.avif 500w, /images/69ea171e88eece9f8199cfc8_propera-service-23-p-800.avif 800w, /images/69ea171e88eece9f8199cfc8_propera-service-23-p-1080.avif 1080w, /images/69ea171e88eece9f8199cfc8_propera-service-23-p-1600.avif 1600w, /images/69ea171e88eece9f8199cfc8_propera-service-23.avif 2752w',
    alt: 'Block & Estate Management',
  },
  {
    href: '/service/hoa-management',
    title: 'Buyer Representation',
    desc: 'Access to the best new and resale properties before they reach the open market',
    imgSrc: '/images/69ea1734e9c846e525c837a3_propera-service-8.avif',
    srcset:
      '/images/69ea1734e9c846e525c837a3_propera-service-8-p-500.avif 500w, /images/69ea1734e9c846e525c837a3_propera-service-8-p-800.avif 800w, /images/69ea1734e9c846e525c837a3_propera-service-8-p-1080.avif 1080w, /images/69ea1734e9c846e525c837a3_propera-service-8.avif 2752w',
    alt: 'Buyer Representation',
  },
  {
    href: '/service/buyer-representation',
    title: 'Residential Letting',
    desc: 'Maximising rental income from prime London residential investments',
    imgSrc: '/images/6a0206389fe3babd75823870_office-space.avif',
    alt: 'Residential Letting',
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
            <Label parts={['Our', 'Offerings']} variant="dark" />
            <div className="services-listing-title">
              <h2 className="heading is-xlarge">Services for a changing city</h2>
            </div>
          </div>
          <Link to={ROUTES.SERVICES} className="services-listing-link w-inline-block">
            <div className="label-text">All services</div>
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
            {servicesData.map((service, index) => (
              <div key={index} role="listitem" className="service-grid-item w-dyn-item">
                <Link to={service.href} className="service-grid-link w-inline-block">
                  <div className="service-grid-media">
                    <div className="service-image-animation-color"></div>
                    <img
                      alt={service.alt}
                      loading="lazy"
                      src={service.imgSrc}
                      sizes="100vw"
                      srcSet={service.srcset}
                      className="service-grid-image"
                    />
                  </div>
                  <div className="service-block">
                    <div className="label-text">Service</div>
                    <div className="service-max">
                      <h2 className="heading is-medium">{service.title}</h2>
                      <p className="paragraph">{service.desc}</p>
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
