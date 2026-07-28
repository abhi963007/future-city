import React, { useRef } from 'react';
import { useHeroAnimation } from '../../hooks/useHeroAnimation';

const HeroIntro: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(heroRef);

  const scrollToNextSection = () => {
    const nextSection =
      document.querySelector('.section_grid-home') ||
      document.querySelector('.section-about-grid') ||
      document.querySelector('.animated-heading_wrap');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="hero-cinematic">
      {/* Layer 1: Background Image/Video Container & Vignette Overlays */}
      <div className="hero-cinematic-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-cinematic-img"
        >
          <source src="/images/hero video.mp4" type="video/mp4" />
        </video>
        {/* Layer 2: Soft Atmospheric Fog */}
        <div className="hero-cinematic-fog"></div>

        {/* Layer 3: Warm Sunlight Bloom */}
        <div className="hero-cinematic-sunbloom"></div>

        {/* Vignette Overlays */}
        <div className="hero-cinematic-overlay-top"></div>
        <div className="hero-cinematic-overlay-left"></div>
        <div className="hero-cinematic-overlay-bottom"></div>
      </div>

      {/* Layer 4: Main Editorial Content */}
      <div className="hero-cinematic-content">
        <div className="hero-cinematic-kicker">INVEST BEFORE THE BOOM.</div>
        <h1 className="hero-cinematic-headline">
          <span className="hero-cinematic-title-primary">
            BULLETSPEED
            <span className="hero-signature-streak" aria-hidden="true">BULLETSPEED</span>
          </span>
          <span className="hero-cinematic-title-secondary">YOUR INVESTMENTS</span>
        </h1>
        <div className="hero-cinematic-cta-wrap">
          <button type="button" onClick={scrollToNextSection} className="hero-cinematic-cta">
            <span>DISCOVER THE FUTURE</span>
            <span className="hero-cinematic-cta-arrow"></span>
          </button>
        </div>
      </div>

      {/* Bottom Bar: Minimal Scroll Indicator Only (No Stats) */}
      <div className="hero-cinematic-bottom">
        <button
          type="button"
          onClick={scrollToNextSection}
          className="hero-cinematic-scroll-minimal"
          aria-label="Scroll down to explore"
        >
          <div className="hero-minimal-arrow">↓</div>
        </button>
      </div>
    </div>
  );
};

export default HeroIntro;
