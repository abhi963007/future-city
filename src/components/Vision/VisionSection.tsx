import React, { useRef } from 'react';
import { useSectionHeadingsAnimation } from '../../hooks/useSectionHeadingsAnimation';

const VisionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useSectionHeadingsAnimation(containerRef);

  return (
    <div ref={containerRef} className="section_vision-tomorrow">
      {/* Animated Section Header */}
      <div className="section_animated-heading vision-tomorrow_heading">
        <div className="animated-heading_wrap">
          <h2 className="animated-scroll-heading is-first">A Vision</h2>
          <h2 className="animated-scroll-heading is-middle">For</h2>
          <h2 className="animated-scroll-heading is-last">Tomorrow</h2>
        </div>
      </div>

      {/* CM Revanth Reddy Vision Showcase Banner */}
      <div className="vision-tomorrow_wrapper">
        <div className="vision-tomorrow_card">
          <img
            src="/images/main-card-4.png"
            alt="A. Revanth Reddy - Chief Minister Telangana - A Vision For Tomorrow"
            className="vision-tomorrow_img"
          />
          <div className="vision-tomorrow_overlay" />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
