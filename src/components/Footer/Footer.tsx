import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import { useFooterAnimation } from '../../hooks/useFooterAnimation';
import { ROUTES } from '../../utils/constants';

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useFooterAnimation(containerRef);

  return (
    <footer ref={containerRef} className="footer-minimal">
      {/* Top CTA Banner */}
      <div className="footer-minimal_cta">
        <div className="footer-minimal_cta-content">
          <h2 className="footer-minimal_title">
            Secure your stake in Hyderabad's Fourth City today
          </h2>
          <Button href={ROUTES.CONSULTATION} variant="primary">
            <div className="button-text is-1st">Book Site Visit</div>
            <div className="button-text is-2nd">Book Site Visit</div>
          </Button>
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

          {/* Navigation Links Column */}
          <div className="footer-minimal_nav">
            <div className="footer-minimal_nav-column">
              <Link to={ROUTES.HOME} className="footer-minimal_link">Home</Link>
              <Link to={ROUTES.PROJECT} className="footer-minimal_link">Project</Link>
              <Link to={ROUTES.VISION} className="footer-minimal_link">Future City Vision</Link>
              <Link to={ROUTES.LOCATION} className="footer-minimal_link">Location</Link>
            </div>
            <div className="footer-minimal_nav-column">
              <Link to={ROUTES.CONNECTIVITY} className="footer-minimal_link">Connectivity</Link>
              <Link to={ROUTES.INVESTMENT} className="footer-minimal_link">Investment</Link>
              <Link to={ROUTES.GALLERY} className="footer-minimal_link">Gallery</Link>
              <Link to={ROUTES.CONTACT} className="footer-minimal_link">Contact</Link>
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
