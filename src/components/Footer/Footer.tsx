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

          {/* Section Badge */}
          <div className="footer-map_badge_tag">
            <span className="red-pulse-dot" />
            SITE LOCATION
          </div>

          {/* Two-column layout: info left, map right */}
          <div className="footer-map_twocol">

            {/* LEFT: Location Info Panel */}
            <div className="footer-map_info-panel">
              <h2 className="footer-map_heading">Yacharam,<br />Srisailam<br />Highway</h2>
              <p className="footer-map_desc">
                Strategically located at the intersection of Hyderabad's fastest-growing industrial and residential corridors. 45 min from the city, a lifetime ahead of the curve.
              </p>

              {/* Location Stat Cards */}
              <div className="footer-map_stats">
                <div className="footer-map_stat">
                  <span className="footer-map_stat-val">45 min</span>
                  <span className="footer-map_stat-lbl">From Hyderabad CBD</span>
                </div>
                <div className="footer-map_stat-div" />
                <div className="footer-map_stat">
                  <span className="footer-map_stat-val">NH-44</span>
                  <span className="footer-map_stat-lbl">Srisailam Highway</span>
                </div>
                <div className="footer-map_stat-div" />
                <div className="footer-map_stat">
                  <span className="footer-map_stat-val">RRR</span>
                  <span className="footer-map_stat-lbl">Ring Road Access</span>
                </div>
              </div>

              {/* Address Row */}
              <div className="footer-map_address">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A24C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Samooha Golden Gate, Yacharam, Telangana 501509</span>
              </div>

              {/* CTA */}
              <a
                href="https://maps.google.com/?q=Yacharam+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map_cta"
              >
                <span>Get Directions</span>
                <span className="footer-map_cta-arrow">↗</span>
              </a>
            </div>

            {/* RIGHT: Map Card */}
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

              {/* Floating badge on map */}
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
                  <span>Open Maps</span>
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
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
