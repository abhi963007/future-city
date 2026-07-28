import React, { useRef } from 'react';
import { useFooterAnimation } from '../../hooks/useFooterAnimation';

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useFooterAnimation(containerRef);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={containerRef} className="footer-minimal">
      {/* Top CTA Banner with Background Image & Soft Shade */}
      <div className="footer-minimal_cta">
        <img
          src="/images/69f33e4ed787feeb78d1b49e_hero-image.avif"
          loading="lazy"
          alt="Future City Landscape Horizon"
          className="footer-minimal_cta-bg"
        />
        <div className="footer-minimal_cta-overlay"></div>

        <div className="footer-minimal_cta-content">
          <h2 className="footer-minimal_title">
            Secure your stake in Hyderabad's Fourth City today
          </h2>

          <button
            type="button"
            onClick={() => scrollToSection('.section_project-clean-listing')}
            className="project-clean_cta-btn"
            style={{ marginTop: 0, cursor: 'pointer' }}
          >
            <span>Book Site Visit</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Main Minimal Grid */}
      <div className="footer-minimal_main">
        <div className="footer-minimal_grid">
          {/* Brand Column */}
          <div className="footer-minimal_brand">
            <div className="footer-minimal_logo">FUTURE CITY</div>
            <p className="footer-minimal_tagline">
              Hyderabad's premier Fourth City economic corridor featuring DTCP & RERA approved villa plotting layouts.
            </p>
            <div className="footer-minimal_badges">
              <span>DTCP Approved</span>
              <span className="badge-dot">•</span>
              <span>RERA Approved</span>
              <span className="badge-dot">•</span>
              <span>100% Clear Title</span>
            </div>
          </div>

          {/* Quick Navigation Links (Smooth Scroll) */}
          <div className="footer-minimal_nav">
            <div className="footer-minimal_nav-column">
              <button
                type="button"
                onClick={() => scrollToSection('.hero-cinematic')}
                className="footer-minimal_link-btn"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('.section-about-grid')}
                className="footer-minimal_link-btn"
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('.section-typo-titles')}
                className="footer-minimal_link-btn"
              >
                Future City Vision
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('.solution-showcase')}
                className="footer-minimal_link-btn"
              >
                Strategic Growth
              </button>
            </div>
            <div className="footer-minimal_nav-column">
              <button
                type="button"
                onClick={() => scrollToSection('.section_testimonials')}
                className="footer-minimal_link-btn"
              >
                Growth Pillars
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('.section_services-home')}
                className="footer-minimal_link-btn"
              >
                Infrastructure
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('.section_project-clean-listing')}
                className="footer-minimal_link-btn"
              >
                Layout Sectors
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('.footer-minimal_cta')}
                className="footer-minimal_link-btn"
              >
                Site Visit
              </button>
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-minimal_contact">
            <div className="footer-minimal_contact-item">
              <span className="contact-label">EMAIL</span>
              <a href="mailto:info@futurecityhyderabad.in" className="contact-value">
                info@futurecityhyderabad.in
              </a>
            </div>
            <div className="footer-minimal_contact-item">
              <span className="contact-label">PHONE</span>
              <a href="tel:+919876543210" className="contact-value">
                +91 98765 43210
              </a>
            </div>
            <div className="footer-minimal_contact-item">
              <span className="contact-label">LOCATION</span>
              <span className="contact-value">
                Yacharam, Srisailam Highway, Hyderabad
              </span>
            </div>
          </div>
        </div>

        {/* Subfooter Bottom Bar */}
        <div className="footer-minimal_bottom">
          <div>© 2026 Future City. All Rights Reserved.</div>
          <div className="footer-minimal_bottom-right">
            <span>HYDERABAD FOURTH CITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
