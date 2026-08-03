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
          poster="/images/hero-dusk-gate.png"
          className="hero-cinematic-bg-img"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source src="/media/hero video.mp4" type="video/mp4" />
        </video>
        {/* Left-heavy dark vignette gradient over video */}
        <div className="hero-cinematic-dark-overlay" />
      </div>

      {/* ── Left Content Panel ── */}
      <div className="hero-curved-panel">
        <div className="hero-panel-content">

          {/* PLOTTING PROJECT kicker + gold line */}
          <div className="hero-panel-kicker" data-hero-el="kicker">
            <span className="kicker-text">PLOTTING PROJECT</span>
            <span className="kicker-divider" />
          </div>

          {/* Main Headline */}
          <h1 className="hero-panel-title" data-hero-el="title">
            <span className="title-row title-white">Hyderabad's Next</span>
            <span className="title-row title-gold">Growth Zone</span>
            <span className="title-row title-white">Starts Here</span>
          </h1>

          {/* Gold separator line between headline and tagline */}
          <div className="hero-title-separator" data-hero-el="separator" />

          {/* Tagline — italic gold serif */}
          <div className="hero-panel-tagline" data-hero-el="tagline">
            Invest Today, Grow Tomorrow!
          </div>

          {/* Location Information with vertical connector */}
          <div className="hero-panel-locations" data-hero-el="locations">
            {/* Row 1 — Pin icon + text */}
            <div className="hero-loc-item">
              <div className="hero-loc-icon-col">
                <svg className="hero-loc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>
              <span className="hero-loc-text">Yacharam, Hyderabad</span>
            </div>

            {/* Vertical gold connector line — sibling between rows, left-aligned with icons */}
            <div className="hero-loc-connector-row">
              <div className="hero-loc-connector" />
            </div>

            {/* Row 2 — City icon + text */}
            <div className="hero-loc-item">
              <div className="hero-loc-icon-col">
                <svg className="hero-loc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M5 21V7l8-4v18M13 21V11l6-3v13"/>
                </svg>
              </div>
              <span className="hero-loc-text">Near Hyderabad Future City</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="hero-panel-cta-wrap" data-hero-el="cta">
            <button
              type="button"
              onClick={scrollToNextSection}
              className="hero-panel-cta"
            >
              <span>EXPLORE THE OPPORTUNITY</span>
              <span className="hero-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
