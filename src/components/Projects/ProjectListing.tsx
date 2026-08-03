import React, { useRef } from 'react';
import { useProjectsAnimation } from '../../hooks/useProjectsAnimation';
import InteractiveMasterplanMap from './InteractiveMasterplanMap';

const ProjectListing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useProjectsAnimation(containerRef);

  return (
    <div ref={sectionRef => { containerRef.current = sectionRef; }} className="section_project-clean-listing">
      {/* Section Heading */}
      <div className="section_animated-heading project-clean_heading">
        <div className="animated-heading_wrap">
          <h2 className="animated-scroll-heading is-first">Masterplan</h2>
          <h2 className="animated-scroll-heading is-middle">Layout Sectors</h2>
        </div>
      </div>

      {/* Interactive Location Masterplan Map */}
      <InteractiveMasterplanMap />
    </div>
  );
};

export default ProjectListing;
