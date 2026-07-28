import React, { useRef } from 'react';
import Button from '../common/Button/Button';
import ParallaxImage from '../common/ParallaxImage/ParallaxImage';
import Label from '../common/Label/Label';
import { useProjectsAnimation } from '../../hooks/useProjectsAnimation';
import { ROUTES } from '../../utils/constants';

interface ProjectDetail {
  label: string;
  value: string;
}

interface ProjectItem {
  href: string;
  title: string;
  desc: string;
  year: string;
  category: string;
  imageSrc: string;
  details: ProjectDetail[];
}

const sectorsData: ProjectItem[] = [
  {
    href: ROUTES.CONSULTATION,
    title: 'Sector A — Executive Villa Plots',
    desc: "150 to 300 Sq Yds premium plots situated closest to the main 60' masterplan entrance avenue.",
    year: '2026',
    category: 'Executive Plots',
    imageSrc: '/images/69f7267845fb02b60a644c64_propera-12.avif',
    details: [
      { label: 'Location', value: 'Yacharam, Hyderabad' },
      { label: 'Units', value: '65 Plots' },
      { label: 'Status', value: 'Available' },
      { label: 'Approval', value: 'DTCP Approved' },
    ],
  },
  {
    href: ROUTES.CONSULTATION,
    title: 'Sector B — Premium Boulevard Plots',
    desc: 'East & West facing plots overlooking central park, avenue greens, and walking tracks.',
    year: '2026',
    category: 'Park Facing',
    imageSrc: '/images/69ea1826148e95c2e327330a_propera-7.avif',
    details: [
      { label: 'Location', value: 'Yacharam, Hyderabad' },
      { label: 'Units', value: '82 Plots' },
      { label: 'Status', value: 'Available' },
      { label: 'Approval', value: 'RERA Approved' },
    ],
  },
  {
    href: ROUTES.CONSULTATION,
    title: 'Sector C — Commercial & Corner Plots',
    desc: 'High-visibility corner and main road facing plots ideal for long-term commercial value.',
    year: '2026',
    category: 'Commercial',
    imageSrc: '/images/69f726a334302475a11a6e24_propera-24.avif',
    details: [
      { label: 'Location', value: 'Yacharam, Hyderabad' },
      { label: 'Units', value: '50 Plots' },
      { label: 'Status', value: 'High Demand' },
      { label: 'Approval', value: 'Clear Title' },
    ],
  },
];

const ProjectListing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useProjectsAnimation(containerRef);

  return (
    <div ref={containerRef} className="section-project-listing">
      <div className="projects-wrap w-dyn-list">
        <div role="list" className="projects-list w-dyn-items">
          {sectorsData.map((sector, index) => (
            <div key={index} role="listitem" className="project-item w-dyn-item">
              <div className="project-listing-image">
                <div className="project-image-size">
                  <ParallaxImage alt={sector.title} src={sector.imageSrc} variant="small" />
                </div>
              </div>
              <div className="col-2">
                <div className="project-listing-about">
                  <Label parts={[sector.year, sector.category]} variant="light" />
                  <h2 className="heading is-medium">{sector.title}</h2>
                  <p className="paragraph">{sector.desc}</p>
                  <div className="project-details">
                    {sector.details.map((detail, dIdx) => (
                      <div key={dIdx} className="project-detail-block">
                        <div className="label-text with-opacity">{detail.label}</div>
                        <div className="label-text">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="project-listing-action">
                    <Button href={sector.href} variant="secondary">
                      <div className="button-text is-1st">Book Site Visit</div>
                      <div className="button-text is-2nd">Book Site Visit</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
