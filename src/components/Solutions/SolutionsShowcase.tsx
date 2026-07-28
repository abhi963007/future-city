import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSolutionsAnimation } from '../../hooks/useSolutionsAnimation';

interface SolutionItem {
  href: string;
  title: string;
  desc: string;
  clientCount: string;
  imageSrc: string;
  srcset: string;
}

const solutionsData: SolutionItem[] = [
  {
    href: '/solution/buying-selling',
    title: 'New Development',
    desc: 'Specialist new development sales for residential developers across city, from off-plan launch through to legal completion.',
    clientCount: '2,400+',
    imageSrc: '/images/69f1e465817d0d47ef738f2d_propera-service-31.avif',
    srcset:
      '/images/69f1e465817d0d47ef738f2d_propera-service-31-p-500.avif 500w, /images/69f1e465817d0d47ef738f2d_propera-service-31-p-800.avif 800w, /images/69f1e465817d0d47ef738f2d_propera-service-31-p-1080.avif 1080w, /images/69f1e465817d0d47ef738f2d_propera-service-31.avif 2752w',
  },
  {
    href: '/solution/property-management-solution',
    title: 'Property Management',
    desc: 'Full-service block and estate management for residential developments and mixed-tenure schemes across city.',
    clientCount: '480+',
    imageSrc: '/images/69ea07b728150dd0b3685ee2_propera-service-24.avif',
    srcset:
      '/images/69ea07b728150dd0b3685ee2_propera-service-24-p-500.avif 500w, /images/69ea07b728150dd0b3685ee2_propera-service-24-p-800.avif 800w, /images/69ea07b728150dd0b3685ee2_propera-service-24-p-1080.avif 1080w, /images/69ea07b728150dd0b3685ee2_propera-service-24.avif 2752w',
  },
  {
    href: '/solution/investment-commercial-solution',
    title: 'Buying & Selling',
    desc: 'Residential sales, buyer representation, and letting services for prime and super-prime property across the capital.',
    clientCount: '6,100+',
    imageSrc: '/images/69ea07cc2c86599b34f48149_propera-service-21.avif',
    srcset:
      '/images/69ea07cc2c86599b34f48149_propera-service-21-p-500.avif 500w, /images/69ea07cc2c86599b34f48149_propera-service-21-p-800.avif 800w, /images/69ea07cc2c86599b34f48149_propera-service-21-p-1080.avif 1080w, /images/69ea07cc2c86599b34f48149_propera-service-21.avif 2752w',
  },
  {
    href: '/solution/relocation-advisory',
    title: 'Investment & Development',
    desc: 'Investment acquisition, portfolio advisory, and consultancy for residential investors and developers.',
    clientCount: '520+',
    imageSrc: '/images/69ea07d745cb0fb5f423ad4d_propera-service-2.avif',
    srcset:
      '/images/69ea07d745cb0fb5f423ad4d_propera-service-2-p-500.avif 500w, /images/69ea07d745cb0fb5f423ad4d_propera-service-2-p-800.avif 800w, /images/69ea07d745cb0fb5f423ad4d_propera-service-2-p-1080.avif 1080w, /images/69ea07d745cb0fb5f423ad4d_propera-service-2.avif 2752w',
  },
];

const SolutionsShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useSolutionsAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      data-wf-component-id="eedd7e33-8ab9-5801-1b86-33dc183aad94"
      data-wf-variant-state="base"
      className="section-solutions-showcase"
    >
      <div className="solutions-showcase-wrap w-dyn-list">
        <div role="list" className="solutions-showcase-list w-dyn-items">
          {solutionsData.map((item, index) => (
            <div
              key={index}
              animation-reveal="true"
              role="listitem"
              className="solution-showcase-item w-dyn-item"
            >
              <Link to={item.href} className="solution-showcase-link w-inline-block">
                <h2 className="heading is-xlarge">{item.title}</h2>
                <div className="solution-showcase-about">
                  <p className="paragraph is-small">{item.desc}</p>
                  <div className="plus-icon-with-text">
                    <img
                      src="/images/69ee3303a50b755a5a3d45a8_add.svg"
                      loading="lazy"
                      alt="Plus icon"
                      className="plus-icon"
                    />
                    <div className="label-text">Details</div>
                  </div>
                </div>
                <div className="solution-showcase-bg-color"></div>
              </Link>
              <div className="solutions-showcase-highlight">
                <div className="solutions-showcase-line"></div>
                <div className="label-text">Client served</div>
                <div className="solutions-showcase-number">{item.clientCount}</div>
              </div>
              <div className="solutions-showcase-bg">
                <div className="parallax-wrap">
                  <img
                    src={item.imageSrc}
                    loading="lazy"
                    alt={item.title}
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    srcSet={item.srcset}
                    className="parallax-image"
                  />
                </div>
                <div className="solutions-showcase-gradient"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsShowcase;
