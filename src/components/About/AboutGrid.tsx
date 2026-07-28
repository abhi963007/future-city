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
          <h2 className="heading is-large">Modern Real Estate Solutions & Properties</h2>
        </div>
        <div className="about-block">
          <p className="paragraph is-large">
            Our team delivers integrated property and development services, combining local expertise with a global perspective.
          </p>
        </div>
        <div className="about-block">
          <Button href={ROUTES.ABOUT} variant="secondary">
            <div className="button-text is-1st">About</div>
            <div className="button-text is-2nd">About</div>
          </Button>
        </div>
      </div>
      <div className="about-grid-block is-image">
        <img
          src="/images/69ecfb756f9c8f6a30c4a9c9_01ab18978e1037db8e36de819ec758c5_profile-pic.avif"
          loading="lazy"
          alt="Professional real estate agent portrait"
          className="cover-image is-portrait-position"
        />
      </div>
      <div className="about-grid-block large-gap">
        <div className="about-block">
          <img
            loading="lazy"
            src="/images/69edd20b05a3f6da31ad600e_round%20%281%29.svg"
            alt="Architecture plan icon"
            className="about-grid-icon"
          />
        </div>
        <div className="about-block">
          <p className="paragraph-bold is-small">
            Our team delivers integrated property and development services, combining local expertise with a global perspective.
          </p>
        </div>
        <div className="about-block">
          <div className="label-text">Charlotte Reid</div>
        </div>
      </div>
      <div className="section-about-bg"></div>
    </div>
  );
};

export default AboutGrid;
