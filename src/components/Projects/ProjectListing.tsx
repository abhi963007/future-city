import React, { useRef } from 'react';
import { useProjectsAnimation } from '../../hooks/useProjectsAnimation';
import { useBookVisit } from '../../context/BookVisitContext';

interface SectorSpec {
  label: string;
  value: string;
}

interface SectorItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  imageSrc: string;
  specs: SectorSpec[];
}

const sectorsData: SectorItem[] = [
  {
    id: 'sector-a',
    badge: 'SECTOR A',
    title: 'Executive Villa Plots',
    subtitle: '150 TO 300 SQ YDS VILLA LAYOUT',
    desc: "Premium plot positions situated closest to the main 60' masterplan entrance avenue with immediate spot registration.",
    imageSrc: '/images/69f7267845fb02b60a644c64_propera-12.avif',
    specs: [
      { label: 'LOCATION', value: 'Yacharam, Hyd' },
      { label: 'UNITS', value: '65 Plots' },
      { label: 'STATUS', value: 'Available' },
      { label: 'APPROVAL', value: 'DTCP Approved' },
    ],
  },
  {
    id: 'sector-b',
    badge: 'SECTOR B',
    title: 'Premium Boulevard Plots',
    subtitle: 'PARK FACING & EAST/WEST OPEN',
    desc: 'East & West facing plots directly overlooking central landscaped parks, jogging tracks, and green avenue corridors.',
    imageSrc: '/images/69ea1826148e95c2e327330a_propera-7.avif',
    specs: [
      { label: 'LOCATION', value: 'Yacharam, Hyd' },
      { label: 'UNITS', value: '82 Plots' },
      { label: 'STATUS', value: 'Available' },
      { label: 'APPROVAL', value: 'RERA Approved' },
    ],
  },
  {
    id: 'sector-c',
    badge: 'SECTOR C',
    title: 'Commercial & Corner Plots',
    subtitle: 'HIGH VISIBILITY MAIN ROAD HUBS',
    desc: 'High-visibility corner and main road facing plot positions engineered for long-term commercial value and high ROI.',
    imageSrc: '/images/69f726a334302475a11a6e24_propera-24.avif',
    specs: [
      { label: 'LOCATION', value: 'Yacharam, Hyd' },
      { label: 'UNITS', value: '50 Plots' },
      { label: 'STATUS', value: 'High Demand' },
      { label: 'APPROVAL', value: '100% Clear Title' },
    ],
  },
];

const ProjectListing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openBookVisit } = useBookVisit();

  useProjectsAnimation(containerRef);

  return (
    <div ref={containerRef} className="section_project-clean-listing">
      {/* Section Heading */}
      <div className="section_animated-heading project-clean_heading">
        <div className="animated-heading_wrap">
          <h2 className="animated-scroll-heading is-first">Masterplan</h2>
          <h2 className="animated-scroll-heading is-middle">Layout Sectors</h2>
        </div>
      </div>

      {/* Sector Rows Container */}
      <div className="project-clean_container">
        {sectorsData.map((sector) => (
          <div key={sector.id} className="project-clean_row">
            {/* Left Side: Sector Header & Description */}
            <div className="project-clean_left">
              <div className="project-clean_badge">{sector.badge}</div>

              <h3 className="project-clean_title">{sector.title}</h3>
              <div className="project-clean_subtitle">{sector.subtitle}</div>
              <p className="project-clean_desc">{sector.desc}</p>

              <button type="button" onClick={openBookVisit} className="project-clean_cta-btn">
                <span>Book Site Visit</span>
                <span className="cta-arrow">→</span>
              </button>
            </div>

            {/* Right Side: Image & Horizontal Specs Grid */}
            <div className="project-clean_right">
              <div className="project-clean_image-wrap">
                <img src={sector.imageSrc} loading="lazy" alt={sector.title} className="project-clean_image" />
              </div>

              {/* Horizontal 4-Column Specs Inline Grid */}
              <div className="project-clean_specs-horizontal">
                {sector.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="spec-item-col">
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
