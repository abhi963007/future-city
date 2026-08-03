import React, { useRef } from 'react';
import { useFooterAnimation } from '../../hooks/useFooterAnimation';
import { useBookVisit } from '../../context/BookVisitContext';
import { getLenis } from '../../hooks/useLenis';

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openBookVisit } = useBookVisit();

  useFooterAnimation(containerRef);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector<HTMLElement>(selector);
    if (element) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(element, { duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer ref={containerRef} className="footer-minimal">
      {/* Top CTA Banner with Visible Background Image & Soft Shade */}
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
            onClick={openBookVisit}
            className="project-clean_cta-btn"
            style={{ marginTop: 0, cursor: 'pointer' }}
          >
            <span>Book Site Visit</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Interactive Google Map Location Showcase */}
      <div id="map-location" className="footer-map_section">
        <div className="footer-map_container">
          <div className="footer-map_header">
            <div className="footer-map_badge_tag">
              <span className="red-pulse-dot"></span>
              GOOGLE MAPS SITE LOCATION
            </div>
            <h3 className="footer-map_heading">Yacharam, Srisailam Highway Corridor</h3>
          </div>

          <div className="footer-map_card">
            <iframe
              title="Codename Future City Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121980.5283737213!2d78.58359218671874!3d17.044161726715694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca4587396603a1%3A0xb363ef8088891506!2sYacharam%2C%20Telangana%20501509!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="footer-map_iframe"
            />

            {/* Custom Google Maps Red Pointer Pin Overlay */}
            <div className="footer-map_pointer_overlay">
              <div className="google-red-pin">
                <svg width="36" height="48" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="red-pin-icon">
                  <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#EA4335"/>
                  <circle cx="12" cy="12" r="4" fill="#FFFFFF"/>
                </svg>
                <div className="google-pin-ripple"></div>
              </div>
            </div>

            {/* Floating Glassmorphic Details Card */}
            <div className="footer-map_floating_card">
              <div className="map-card-info">
                <div className="map-card-title">SAMOOHA GOLDEN GATE</div>
                <div className="map-card-subtitle">Yacharam, Srisailam Highway, Hyderabad</div>
              </div>
              <a
                href="https://maps.google.com/?q=Yacharam+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="map-card-directions-btn"
              >
                <span>Open Google Maps</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Minimal Grid */}
      <div className="footer-minimal_main">
        <div className="footer-minimal_grid">
          {/* Brand Column */}
          <div className="footer-minimal_brand">
            <div className="footer-minimal_logo">CODENAME FUTURE CITY</div>
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

          {/* Clean Single-Page Navigation */}
          <div className="footer-minimal_nav">
            <div className="footer-minimal_nav-column">
              <button
                type="button"
                onClick={() => scrollToSection('#hero')}
                className="footer-minimal_link-btn"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('#about')}
                className="footer-minimal_link-btn"
              >
                Overview (About)
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('#vision')}
                className="footer-minimal_link-btn"
              >
                Strategic Vision
              </button>
            </div>
            <div className="footer-minimal_nav-column">
              <button
                type="button"
                onClick={() => scrollToSection('#location')}
                className="footer-minimal_link-btn"
              >
                Location & Infrastructure
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('#plots')}
                className="footer-minimal_link-btn"
              >
                Masterplan Plots
              </button>
              <button
                type="button"
                onClick={openBookVisit}
                className="footer-minimal_link-btn"
              >
                Book Site Visit
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
          <div>© 2026 Codename Future City. All Rights Reserved.</div>
          <div className="footer-minimal_bottom-right">
            <span>HYDERABAD FOURTH CITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
