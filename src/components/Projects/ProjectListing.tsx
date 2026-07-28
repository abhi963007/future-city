import React, { useRef } from 'react';
import Button from '../common/Button/Button';
import { useProjectsAnimation } from '../../hooks/useProjectsAnimation';
import { ROUTES } from '../../utils/constants';

interface SectorSpec {
  label: string;
  value: string;
}

interface SectorItem {
  id: string;
  year: string;
  category: string;
  title: string;
  desc: string;
  imageSrc: string;
  specs: SectorSpec[];
}

const sectorsData: SectorItem[] = [
  {
    id: 'sector-a',
    year: '2026',
    category: 'EXECUTIVE PLOTS',
    title: 'Sector A — Executive Villa Plots',
    desc: "150 to 300 Sq Yds premium plots situated closest to the main 60' masterplan entrance avenue.",
    imageSrc: '/images/69f7267845fb02b60a644c64_propera-12.avif',
    specs: [
      { label: 'LOCATION', value: 'Yacharam, Hyderabad' },
      { label: 'UNITS', value: '65 Plots' },
      { label: 'STATUS', value: 'Available' },
      { label: 'APPROVAL', value: 'DTCP Approved' },
    ],
  },
  {
    id: 'sector-b',
    year: '2026',
    category: 'PREMIUM BOULEVARD',
    title: 'Sector B — Premium Boulevard Plots',
    desc: 'East & West facing plots overlooking central park, avenue greens, and walking tracks.',
    imageSrc: '/images/69ea1826148e95c2e327330a_propera-7.avif',
    specs: [
      { label: 'LOCATION', value: 'Yacharam, Hyderabad' },
      { label: 'UNITS', value: '82 Plots' },
      { label: 'STATUS', value: 'Available' },
      { label: 'APPROVAL', value: 'RERA Approved' },
    ],
  },
  {
    id: 'sector-c',
    year: '2026',
    category: 'COMMERCIAL HUBS',
    title: 'Sector C — Commercial & Corner Plots',
    desc: 'High-visibility corner and main road facing plots ideal for long-term commercial value.',
    imageSrc: '/images/69f726a334302475a11a6e24_propera-24.avif',
    specs: [
      { label: 'LOCATION', value: 'Yacharam, Hyderabad' },
      { label: 'UNITS', value: '50 Plots' },
      { label: 'STATUS', value: 'High Demand' },
      { label: 'APPROVAL', value: '100% Clear Title' },
    ],
  },
];

const ProjectListing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useProjectsAnimation(containerRef);

  return (
    <div ref={containerRef} className="section_project-clean-listing">
      {/* Section Heading with expanded bottom gap before content */}
      <div className="section_animated-heading" style={{ paddingTop: '1vw', paddingBottom: '5vw' }}>
        <div className="animated-heading_wrap">
          <h2 className="animated-scroll-heading is-first">Masterplan</h2>
          <h2 className="animated-scroll-heading is-middle">Layout Sectors</h2>
        </div>
      </div>

      {/* Sector Rows Container */}
      <div className="project-clean_container">
        {sectorsData.map((sector) => (
          <div key={sector.id} className="project-clean_row">
            {/* Left Side: Title & Description */}
            <div className="project-clean_left">
              <div className="project-clean_badge">
                <span>{sector.year}</span>
                <span className="badge-sep">•</span>
                <span>{sector.category}</span>
              </div>

              <h3 className="project-clean_title">{sector.title}</h3>
              <p className="project-clean_desc">{sector.desc}</p>

              <div className="project-clean_action">
                <Button href={ROUTES.CONSULTATION} variant="secondary">
                  <div className="button-text is-1st">Book Site Visit</div>
                  <div className="button-text is-2nd">Book Site Visit</div>
                </Button>
              </div>
            </div>

            {/* Right Side: Image & Specs Table */}
            <div className="project-clean_right">
              <div className="project-clean_image-wrap">
                <img src={sector.imageSrc} loading="lazy" alt={sector.title} className="project-clean_image" />
              </div>

              <div className="project-clean_specs-table">
                {sector.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="project-clean_spec-row">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectListing;
