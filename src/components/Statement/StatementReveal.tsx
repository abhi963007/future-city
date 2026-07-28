import React, { useRef } from 'react';
import ParallaxImage from '../common/ParallaxImage/ParallaxImage';
import { useStatementRevealAnimation } from '../../hooks/useStatementRevealAnimation';

const StatementReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useStatementRevealAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      data-wf--section-statement-reveal--variant="base"
      data-wf-component-id="12528b8b-0a27-3cba-e92e-cc4ac7459d66"
      data-wf-variant-state="base"
      className="section-statement-reveal"
    >
      <div className="statement-reveal">
        <div className="statement-reveal-layout">
          <div className="statement-reveal-wrap">
            <h2 className="heading is-2xlarge">
              Combining insight, precision, and modern thinking into one clear balanced process
            </h2>
          </div>
          <div className="statement-reveal-visual">
            <div className="statement-reveal-orbit is-1st"></div>
            <div className="statement-reveal-orbit is-2nd"></div>
            <div className="statement-reveal-orbit is-3rd"></div>
          </div>
        </div>
      </div>
      <div className="statement-reveal-images">
        <div className="image-size-1">
          <ParallaxImage
            alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
            src="/images/69f1de31783fc539cff5ad9f_vert-1.avif"
            variant="xlarge"
          />
        </div>
        <div className="image-size-2">
          <ParallaxImage
            alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
            src="/images/69e7c7b0c8b5b85fe7956761_1ecaf4803f02e556ed22a4074da5c2c5_dental-service.avif"
            variant="large"
          />
        </div>
        <div className="image-size-3">
          <ParallaxImage
            alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
            src="/images/69f1ed5bf45d323a5b46b04e_default-image-tiny-3.avif"
            variant="xlarge"
          />
        </div>
        <div className="image-size-4">
          <ParallaxImage
            alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
            src="/images/69f1e37c4a1bc17a07b17f0f_vert-6.avif"
            variant="large"
          />
        </div>
      </div>
    </div>
  );
};

export default StatementReveal;
