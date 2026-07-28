import React, { useRef } from 'react';
import ParallaxImage from '../common/ParallaxImage/ParallaxImage';
import { useImageSplitAnimation } from '../../hooks/useImageSplitAnimation';

const ImageSplit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImageSplitAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      data-wf--section-image-split--variant="base"
      className="section-image-split"
    >
      <div className="images-split-layout">
        <div className="image-split-left">
          <ParallaxImage
            alt="Modern business meeting in a minimalist office interior with natural light and contemporary workspace design."
            src="/images/69f1e37cb735948465f81b86_vert-5.avif"
            variant="large"
          />
        </div>
        <div className="image-split-right">
          <ParallaxImage
            alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
            src="/images/69f1e37c4a1bc17a07b17f0f_vert-6.avif"
            variant="small"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSplit;
