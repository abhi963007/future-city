import React, { useRef } from 'react';
import Button from '../common/Button/Button';
import { useAboutAnimation } from '../../hooks/useAboutAnimation';
import { ROUTES } from '../../utils/constants';

const AboutGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useAboutAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      data-wf-component-id="5b229c31-06c0-1d67-4b9d-e50b918c9524"
      data-wf-variant-state="base"
      className="section-about-grid"
    >
      <div className="about-grid-block">
        <div className="about-block">
          <h2 className="heading is-large">Hyderabad's Fourth City & AI Ecosystem</h2>
        </div>
        <div className="about-block">
          <p className="paragraph is-large">
            Strategically located in Yacharam along the Srisailam Highway, Future City represents India's next major urban growth corridor, adjacent to the 14,000-acre Pharma City and upcoming AI Hub.
          </p>
        </div>
        <div className="about-block">
          <Button href={ROUTES.PROJECT} variant="secondary">
            <div className="button-text is-1st">View Masterplan</div>
            <div className="button-text is-2nd">View Masterplan</div>
          </Button>
        </div>
      </div>
      <div className="about-grid-block is-image">
        <img
          src="/images/69ecfb756f9c8f6a30c4a9c9_01ab18978e1037db8e36de819ec758c5_profile-pic.avif"
          loading="lazy"
          alt="Codename Future City Masterplan Development"
          className="cover-image is-portrait-position"
        />
      </div>
      <div className="about-grid-block large-gap">
        <div className="about-block">
          <img
            loading="lazy"
            src="/images/69edd20b05a3f6da31ad600e_round%20%281%29.svg"
            alt="Infrastructure plan icon"
            className="about-grid-icon"
          />
        </div>
        <div className="about-block">
          <p className="paragraph-bold is-small">
            Designed for rapid capital appreciation, seamless regional connectivity, and multi-generational wealth creation.
          </p>
        </div>
        <div className="about-block">
          <div className="label-text">Project Overview</div>
        </div>
      </div>
      <div className="section-about-bg"></div>
    </div>
  );
};

export default AboutGrid;
