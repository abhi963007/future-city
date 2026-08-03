import React, { useRef } from 'react';
import { useHomeGridAnimation } from '../../hooks/useHomeGridAnimation';

const gridImages = [
  // Top row (5 images: Slots 1 to 5)
  {
    src: '/images/Slot 1.png',
    title: 'Future City',
    alt: 'Future City',
    position: 'is-topleft',
  },
  {
    src: '/images/Slot 2.png',
    title: 'Eliminedu Aerospace SEZ',
    alt: 'Eliminedu Aerospace SEZ',
    position: 'is-top',
  },
  {
    src: '/images/Slot 3.png',
    title: 'HMDA IT Hub & Township',
    alt: 'HMDA IT Hub & Township',
    position: 'is-top',
  },
  {
    src: '/images/Slot 4.png',
    title: 'Amazon Data Center & Skill University',
    alt: 'Amazon Data Center & Skill University',
    position: 'is-top',
  },
  {
    src: '/images/Slot 5.png',
    title: 'Radial Road S7',
    alt: 'Radial Road S7',
    position: 'is-top-right',
  },
  // Middle row side images (2 images: Slots 6 and 7)
  {
    src: '/images/Slot 6.png',
    title: 'Future City Master Plan Roads',
    alt: 'Future City Master Plan Roads',
    position: 'is-left',
  },
  {
    src: '/images/Slot 7.png',
    title: 'Outer Ring Road (ORR)',
    alt: 'Outer Ring Road (ORR)',
    position: 'is-right',
  },
  // Bottom row (5 images: Slots 8 to 12)
  {
    src: '/images/Slot 8.png',
    title: 'Proposed Regional Ring Road (RRR)',
    alt: 'Proposed Regional Ring Road (RRR)',
    position: 'is-bottom-left',
  },
  {
    src: '/images/Slot 9.png',
    title: 'TATA Aerospace & TCS Adibatla',
    alt: 'TATA Aerospace & TCS Adibatla',
    position: 'is-bottom',
  },
  {
    src: '/images/Slot 10.png',
    title: 'Ranga Reddy Collectorate Office',
    alt: 'Ranga Reddy Collectorate Office',
    position: 'is-bottom',
  },
  {
    src: '/images/Slot 11.png',
    title: 'Wonderla Amusement Park',
    alt: 'Wonderla Amusement Park',
    position: 'is-bottom',
  },
  {
    src: '/images/Slot 12.png',
    title: 'Nandi Wanaparthy Reserved Forest',
    alt: 'Nandi Wanaparthy Reserved Forest',
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
                <div className="home-grid_card-overlay">
                  <span className="home-grid_card-title">{img.title}</span>
                </div>
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
              <div className="home-grid_card-overlay">
                <span className="home-grid_card-title">{gridImages[5].title}</span>
              </div>
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
              <div className="home-grid_card-overlay">
                <span className="home-grid_card-title">{gridImages[6].title}</span>
              </div>
            </div>

            {/* Row 3: Bottom 5 images */}
            {gridImages.slice(7, 12).map((img, i) => (
              <div key={i + 7} className={`home-grid_image-wrap ${img.position}`}>
                <img src={img.src} loading="lazy" alt={img.alt} className="home-grid_image" />
                <div className="home-grid_card-overlay">
                  <span className="home-grid_card-title">{img.title}</span>
                </div>
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
                  <source src="/media/about-center.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Lightbox overlay */}
              <div className="home-grid_lightbox">
                <div className="home-grid_lightbox-text">EXPLORE</div>
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
                <div className="home-grid_lightbox-text">MASTERPLAN</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
