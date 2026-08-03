import React, { useRef } from 'react';
import { useHeroAnimation } from '../../hooks/useHeroAnimation';

const HeroIntro: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(heroRef);

  const scrollToNextSection = () => {
    const nextSection =
      document.querySelector('#about') ||
      document.querySelector('.section_grid-home') ||
      document.querySelector('.section-about-grid');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="hero-cinematic">
      {/* ── Full-bleed background video ── */}
      <div className="hero-cinematic-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/media/hero%20video.mp4"
          poster="/images/hero-dusk-gate.png"
          className="hero-cinematic-bg-img"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          onLoadedData={(e) => e.currentTarget.play()}
        >
          <source src="/media/hero%20video.mp4" type="video/mp4" />
        </video>
        {/* Left-heavy dark vignette gradient over video */}
        <div className="hero-cinematic-dark-overlay" />
      </div>


      {/* ── Left Content Panel ── */}
      <div className="hero-curved-panel">
        <div className="hero-panel-content">

          {/* Kicker: Gold line + THE FUTURE IS BEING BUILT */}
          <div className="hero-panel-kicker" data-hero-el="kicker">
            <span className="kicker-divider" />
            <span className="kicker-text">THE FUTURE IS BEING BUILT</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-panel-title" data-hero-el="title">
            <span className="title-row title-white">Hyderabad's Next</span>
            <span className="title-row title-gold">Growth Zone</span>
          </h1>

          {/* Gold separator line */}
          <div className="hero-title-separator" data-hero-el="separator" />

          {/* Subtitle / Description */}
          <div className="hero-panel-description" data-hero-el="tagline">
            A visionary plotted development designed for growth,<br />
            connectivity, and a higher quality of life.
          </div>

          {/* Primary CTA Button */}
          <div className="hero-panel-cta-wrap" data-hero-el="cta">
            <button
              type="button"
              onClick={scrollToNextSection}
              className="hero-panel-cta"
            >
              <div className="hero-cta-circle">
                <span className="hero-cta-arrow">→</span>
              </div>
              <span className="hero-cta-label">DISCOVER THE OPPORTUNITY</span>
            </button>
          </div>

        </div>
      </div>

      {/* ── Right Side Bottom: STRATEGICALLY POSITIONED ── */}
      <div className="hero-strategic-widget" data-hero-el="locations">
        <div className="hero-strategic-header">
          <span className="hero-strategic-dot" />
          <span className="hero-strategic-title">STRATEGICALLY POSITIONED</span>
          <span className="hero-strategic-line" />
        </div>
        <div className="hero-strategic-grid">
          <div className="hero-strategic-col">
            <span className="hero-strategic-val">Future Ready</span>
            <span className="hero-strategic-lbl">Infrastructure</span>
          </div>
          <div className="hero-strategic-divider" />
          <div className="hero-strategic-col">
            <span className="hero-strategic-val">High Growth</span>
            <span className="hero-strategic-lbl">Corridor</span>
          </div>
          <div className="hero-strategic-divider" />
          <div className="hero-strategic-col">
            <span className="hero-strategic-val">Smart</span>
            <span className="hero-strategic-lbl">Investment</span>
          </div>
        </div>
      </div>

      {/* ── Right Edge Vertical Scroll Indicator ── */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">SCROLL TO EXPLORE</span>
        <div className="hero-scroll-line">
          <span className="hero-scroll-dot" />
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
