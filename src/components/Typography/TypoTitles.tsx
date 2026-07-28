import React, { useRef } from 'react';
import { useTypoTitlesAnimation } from '../../hooks/useTypoTitlesAnimation';

interface TypoTitlesProps {
  variant?: 'without-image' | 'base';
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  bgColorClass?: string;
}

const TypoTitles: React.FC<TypoTitlesProps> = ({
  variant = 'without-image',
  title1,
  title2,
  title3,
  subtitle,
  imageSrc,
  imageAlt = 'Section image',
  bgColorClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useTypoTitlesAnimation(containerRef);

  if (variant === 'without-image') {
    return (
      <div
        ref={containerRef}
        data-wf--section-typo-titles--variant="without-image"
        data-wf-component-id="d9f0c69f-c0ba-a043-eaf9-a2421686f1cc"
        data-wf-variant-state="c66c9044-c086-1b51-6dd0-6a4df23afb84"
        className="section-typo-titles w-variant-c66c9044-c086-1b51-6dd0-6a4df23afb84"
      >
        <div className="typo-title-block is-1st">
          <div className="heading is-typo-title">{title1}</div>
        </div>
        <div className="typo-title-block is-2nd">
          <div className="heading is-typo-title">{title2}</div>
          <h2 className="typo-text w-variant-c66c9044-c086-1b51-6dd0-6a4df23afb84">{subtitle}</h2>
        </div>
        <div className="typo-title-block is-3rd">
          <div className="heading is-typo-title">{title3}</div>
        </div>
        <div className="typo-titles-mobile-text">
          <h2 className="typo-text w-variant-c66c9044-c086-1b51-6dd0-6a4df23afb84 in-mobile">{subtitle}</h2>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      data-wf--section-typo-titles--variant="base"
      data-wf-component-id="d9f0c69f-c0ba-a043-eaf9-a2421686f1cc"
      data-wf-variant-state="base"
      className="section-typo-titles"
    >
      <div className="typo-title-block is-1st">
        {imageSrc && (
          <div className="typo-title-image">
            <img loading="lazy" src={imageSrc} alt={imageAlt} className="cover-image" />
          </div>
        )}
        <div className="heading is-typo-title">{title1}</div>
      </div>
      <div className="typo-title-block is-2nd">
        <div className="heading is-typo-title">{title2}</div>
        <h2 className="typo-text">{subtitle}</h2>
      </div>
      <div className="typo-title-block is-3rd">
        <div className="heading is-typo-title">{title3}</div>
      </div>
      <div className="typo-titles-mobile-text">
        <h2 className="typo-text in-mobile">{subtitle}</h2>
      </div>
      {bgColorClass && <div className={`section-bg-color ${bgColorClass}`}></div>}
    </div>
  );
};

export default TypoTitles;
