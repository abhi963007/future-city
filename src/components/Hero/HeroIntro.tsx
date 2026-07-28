import React, { useRef } from 'react';
import { useHeroAnimation } from '../../hooks/useHeroAnimation';

const HeroIntro: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(heroRef);

  return (
    <div ref={heroRef} className="hero-intro">
      <div className="hero-intro-title">
        <h1 className="heading is-home-hero">A higher standard of real estate</h1>
      </div>
      <div className="hero-intro-content">
        <div className="hero-intro-stats-wrap">
          <div className="hero-intro-stats w-dyn-list">
            <div role="list" className="hero-intro-stats-list w-dyn-items">
              <div role="listitem" className="hero-intro-stat w-dyn-item">
                <div className="hero-intro-number">18+</div>
                <div className="label-text">Years</div>
              </div>
              <div role="listitem" className="hero-intro-stat w-dyn-item">
                <div className="hero-intro-number">98%</div>
                <div className="label-text">Satisfaction</div>
              </div>
              <div role="listitem" className="hero-intro-stat w-dyn-item">
                <div className="hero-intro-number">£4.2bn</div>
                <div className="label-text">GDV</div>
              </div>
            </div>
          </div>
          <div className="stats-blur-bg"></div>
        </div>
        <div className="hero-intro-about">
          <div className="hero-intro-desc">
            <div className="hero-intro-text-max">
              <p className="hero-intro-about-text">
                Full-service real estate representation and property management solutions
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
            alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
            className="hero-intro-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
