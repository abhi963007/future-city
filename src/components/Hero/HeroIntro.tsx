import React, { useRef } from 'react';
import { useHeroAnimation } from '../../hooks/useHeroAnimation';

const HeroIntro: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(heroRef);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.section-about-grid');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="hero-cinematic">
      {/* Background Image & Vignette Overlays */}
      <div className="hero-cinematic-bg">
        <img
          loading="eager"
          src="/images/hero-background.png"
          alt="Codename Future City — Hyderabad's Fourth City AI-driven urban ecosystem masterplan"
          className="hero-cinematic-img"
        />
        <div className="hero-cinematic-overlay-top"></div>
        <div className="hero-cinematic-overlay-left"></div>
        <div className="hero-cinematic-overlay-bottom"></div>
      </div>

      {/* Center Left Main Headline Content */}
      <div className="hero-cinematic-content">
        <div className="hero-cinematic-kicker">INVEST BEFORE THE BOOM.</div>
        <h1 className="hero-cinematic-headline">
          <span className="hero-cinematic-title-primary">BULLETSPEED</span>
          <span className="hero-cinematic-title-secondary">Your Investments</span>
        </h1>
        <div className="hero-cinematic-cta-wrap">
          <button type="button" onClick={scrollToNextSection} className="hero-cinematic-cta">
            <span>DISCOVER THE FUTURE</span>
            <span className="hero-cinematic-cta-arrow"></span>
          </button>
        </div>
      </div>

      {/* Bottom Bar: Stats & Scroll Indicator */}
      <div className="hero-cinematic-bottom">
        <div className="hero-cinematic-stats">
          <div className="hero-cinematic-stat-item">
            <span className="hero-cinematic-stat-number">₹12,999</span>
            <span className="hero-cinematic-stat-label">PER SQ YARD</span>
          </div>
          <div className="hero-cinematic-stat-divider"></div>
          <div className="hero-cinematic-stat-item">
            <span className="hero-cinematic-stat-number">197</span>
            <span className="hero-cinematic-stat-label">VILLA PLOTS</span>
          </div>
          <div className="hero-cinematic-stat-divider"></div>
          <div className="hero-cinematic-stat-item">
            <span className="hero-cinematic-stat-number">16</span>
            <span className="hero-cinematic-stat-label">ACRES</span>
          </div>
        </div>

        <button type="button" onClick={scrollToNextSection} className="hero-cinematic-scroll" aria-label="Scroll to explore">
          <span className="hero-cinematic-scroll-label">SCROLL TO EXPLORE</span>
          <div className="hero-cinematic-scroll-pill">
            <div className="hero-cinematic-scroll-dot"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroIntro;
