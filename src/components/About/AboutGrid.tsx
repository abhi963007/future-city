import React, { useRef } from 'react';
import { useHomeGridAnimation } from '../../hooks/useHomeGridAnimation';

const gridImages = [
  // Top row (5 images)
  {
    src: '/images/grid-image-12.webp',
    alt: 'Future City development aerial view',
    position: 'is-topleft',
  },
  {
    src: '/images/grid-image-09.webp',
    alt: 'Future City green spaces and parks',
    position: 'is-top',
  },
  {
    src: '/images/grid-image-07.webp',
    alt: 'Future City smart infrastructure',
    position: 'is-top',
  },
  {
    src: '/images/grid-image-05.webp',
    alt: 'Future City residential district',
    position: 'is-top',
  },
  {
    src: '/images/grid-image-03.webp',
    alt: 'Future City skyline vision',
    position: 'is-top-right',
  },
  // Middle row side images (2 images)
  {
    src: '/images/grid-image-11.webp',
    alt: 'Future City commercial hub',
    position: 'is-left',
  },
  {
    src: '/images/grid-image-02.webp',
    alt: 'Future City lifestyle amenities',
    position: 'is-right',
  },
  // Bottom row (5 images)
  {
    src: '/images/grid-image-10.webp',
    alt: 'Future City water features',
    position: 'is-bottom-left',
  },
  {
    src: '/images/grid-image-08.webp',
    alt: 'Future City mixed-use development',
    position: 'is-bottom',
  },
  {
    src: '/images/grid-image-06.webp',
    alt: 'Future City innovation district',
    position: 'is-bottom',
  },
  {
    src: '/images/grid-image-04.webp',
    alt: 'Future City connectivity network',
    position: 'is-bottom',
  },
  {
    src: '/images/grid-image-01.webp',
    alt: 'Future City master plan overview',
    position: 'is-bottom-right',
  },
];

const AboutGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useHomeGridAnimation(sectionRef);

  return (
    <div ref={sectionRef} className="section_grid-home">
      <div className="sticky_grid-home">
        <div className="home-grid_paddings">
          <div className="w-layout-grid home-grid_grid">

            {/* Row 1: Top 5 images */}
            {gridImages.slice(0, 5).map((img, i) => (
              <div key={i} className={`home-grid_image-wrap ${img.position}`}>
                <img src={img.src} loading="eager" alt={img.alt} className="home-grid_image" />
              </div>
            ))}

            {/* Row 2: Left image (Col 1) */}
            <div className={`home-grid_image-wrap ${gridImages[5].position}`}>
              <img
                src={gridImages[5].src}
                loading="eager"
                alt={gridImages[5].alt}
                className="home-grid_image"
              />
            </div>

            {/* Row 2: Middle 3 columns spacer (behind center video wrap) */}
            <div style={{ gridColumn: 'span 3' }}></div>

            {/* Row 2: Right image (Col 5) */}
            <div className={`home-grid_image-wrap ${gridImages[6].position}`}>
              <img
                src={gridImages[6].src}
                loading="eager"
                alt={gridImages[6].alt}
                className="home-grid_image"
              />
            </div>

            {/* Row 3: Bottom 5 images */}
            {gridImages.slice(7, 12).map((img, i) => (
              <div key={i + 7} className={`home-grid_image-wrap ${img.position}`}>
                <img src={img.src} loading="lazy" alt={img.alt} className="home-grid_image" />
              </div>
            ))}

            {/* ── Centre video panel (positioned absolute over grid center) ── */}
            <div className="home-grid_video-wrap">
              <div className="home-grid_video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                >
                  <source src="/media/grid-center-video.webm" type="video/webm" />
                  <source src="/media/grid-center-video.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Lightbox overlay */}
              <div className="home-grid_lightbox">
                <div className="home-grid_lightbox-text">play</div>
                <svg
                  className="home-grid_lightbox-icon"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="14" y1="0" x2="14" y2="28" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="home-grid_lightbox-text">showreel</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
