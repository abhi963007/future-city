import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSolutionsAnimation } from '../../hooks/useSolutionsAnimation';
import { ROUTES } from '../../utils/constants';

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
    href: ROUTES.VISION,
    title: 'AI City Corridor',
    desc: 'Specialist plotting adjacent to the proposed 200-acre AI Hub and Young India Skills University.',
    clientCount: '10X Potential',
    imageSrc: '/images/69f1e465817d0d47ef738f2d_propera-service-31.avif',
    srcset:
      '/images/69f1e465817d0d47ef738f2d_propera-service-31-p-500.avif 500w, /images/69f1e465817d0d47ef738f2d_propera-service-31-p-800.avif 800w, /images/69f1e465817d0d47ef738f2d_propera-service-31-p-1080.avif 1080w, /images/69f1e465817d0d47ef738f2d_propera-service-31.avif 2752w',
  },
  {
    href: ROUTES.LOCATION,
    title: 'Pharma City Hub',
    desc: "Positioned next to the world's largest 14,000-acre pharmaceutical and life sciences cluster.",
    clientCount: '500k+ Jobs',
    imageSrc: '/images/69ea07b728150dd0b3685ee2_propera-service-24.avif',
    srcset:
      '/images/69ea07b728150dd0b3685ee2_propera-service-24-p-500.avif 500w, /images/69ea07b728150dd0b3685ee2_propera-service-24-p-800.avif 800w, /images/69ea07b728150dd0b3685ee2_propera-service-24-p-1080.avif 1080w, /images/69ea07b728150dd0b3685ee2_propera-service-24.avif 2752w',
  },
  {
    href: ROUTES.CONNECTIVITY,
    title: 'RRR Highway Link',
    desc: 'Direct access to the Regional Ring Road (RRR) and 6-lane Srisailam Highway corridor.',
    clientCount: '100% Express',
    imageSrc: '/images/69ea07cc2c86599b34f48149_propera-service-21.avif',
    srcset:
      '/images/69ea07cc2c86599b34f48149_propera-service-21-p-500.avif 500w, /images/69ea07cc2c86599b34f48149_propera-service-21-p-800.avif 800w, /images/69ea07cc2c86599b34f48149_propera-service-21-p-1080.avif 1080w, /images/69ea07cc2c86599b34f48149_propera-service-21.avif 2752w',
  },
  {
    href: ROUTES.PROJECT,
    title: 'DTCP & RERA Approved',
    desc: '100% clear title, bank loan eligible, with immediate spot registration readiness.',
    clientCount: '100% Verified',
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
                <div className="label-text">Growth Metric</div>
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
