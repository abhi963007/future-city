import React, { useRef } from 'react';
import { useHeroAnimation } from '../../hooks/useHeroAnimation';

const HeroIntro: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(heroRef);

  return (
    <div ref={heroRef} className="hero-intro">
      <div className="hero-intro-title">
        <h1 className="heading is-home-hero">BULLETSPEED YOUR INVESTMENTS</h1>
      </div>
      <div className="hero-intro-content">
        <div className="hero-intro-stats-wrap">
          <div className="hero-intro-stats w-dyn-list">
            <div role="list" className="hero-intro-stats-list w-dyn-items">
              <div role="listitem" className="hero-intro-stat w-dyn-item">
                <div className="hero-intro-number">₹12,999</div>
                <div className="label-text">Per Sq Yard</div>
              </div>
              <div role="listitem" className="hero-intro-stat w-dyn-item">
                <div className="hero-intro-number">197</div>
                <div className="label-text">Villa Plots</div>
              </div>
              <div role="listitem" className="hero-intro-stat w-dyn-item">
                <div className="hero-intro-number">16 Acres</div>
                <div className="label-text">Masterplan</div>
              </div>
            </div>
          </div>
          <div className="stats-blur-bg"></div>
        </div>
        <div className="hero-intro-about">
          <div className="hero-intro-desc">
            <div className="hero-intro-text-max">
              <p className="hero-intro-about-text">
                Secure Your Stake in Hyderabad's Fourth City — Invest before the boom. Not after it.
              </p>
            </div>
            <div className="hero-intro-line"></div>
            <p className="hero-intro-about-text">Scroll</p>
          </div>
        </div>
      </div>
      <div className="hero-intro-bg">
        <div className="hero-intro-bg-size">
          <div className="hero-intro-gradient"></div>
          <div className="hero-intro-overlay"></div>
          <img
            loading="eager"
            src="/images/69f33e4ed787feeb78d1b49e_hero-image.avif"
            alt="Codename Future City — Hyderabad's Fourth City AI-driven urban ecosystem masterplan"
            className="hero-intro-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
