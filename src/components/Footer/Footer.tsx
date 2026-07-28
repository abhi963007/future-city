import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import { useFooterAnimation } from '../../hooks/useFooterAnimation';
import { ROUTES } from '../../utils/constants';

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useFooterAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      data-wf--footer--footer-footer-variant="full-version"
      data-wf-component-id="7802d547-b193-2a54-2872-39a7f9a3db0a"
      data-wf-variant-state="base"
      className="footer"
    >
      <div className="footer-action">
        <div className="footer-cta-size">
          <h2 className="heading is-cta-title">Secure your stake in Hyderabad's Fourth City today</h2>
          <div className="fotoer-cta-action">
            <Button href={ROUTES.CONSULTATION} variant="primary">
              <div className="button-text is-1st">Book Site Visit</div>
              <div className="button-text is-2nd">Book Site Visit</div>
            </Button>
          </div>
          <div className="footer-cta-image">
            <img
              src="/images/69f33e4ed787feeb78d1b49e_hero-image.avif"
              loading="lazy"
              alt="Codename Future City Landscape"
              className="cover-image"
            />
            <div className="cta-reveal-color"></div>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-layout">
          <div className="footer-menu">
            <div className="footer-main-links">
              <Link to={ROUTES.HOME} className="footer-main-link w--current">
                Home
              </Link>
              <Link to={ROUTES.PROJECT} className="footer-main-link">
                Project
              </Link>
              <Link to={ROUTES.VISION} className="footer-main-link">
                Future City Vision
              </Link>
              <Link to={ROUTES.CONNECTIVITY} className="footer-main-link">
                Connectivity
              </Link>
              <Link to={ROUTES.LOCATION} className="footer-main-link">
                Location
              </Link>
              <Link to={ROUTES.INVESTMENT} className="footer-main-link">
                Investment
              </Link>
              <Link to={ROUTES.GALLERY} className="footer-main-link">
                Gallery
              </Link>
              <Link to={ROUTES.CONTACT} className="footer-main-link">
                Contact
              </Link>
              <Link to={ROUTES.CONSULTATION} className="footer-main-link">
                Book Site Visit
              </Link>
            </div>
            <div className="footer-main-actions">
              <a href="mailto:info@futurecityhyderabad.in" className="contact-link w-inline-block">
                <img
                  loading="lazy"
                  src="/images/6a021e6360a90e1f8b6c6540_email.svg"
                  alt="Contact icon"
                  className="contact-icon"
                />
                <p className="contact-link-text">info@futurecityhyderabad.in</p>
                <div className="contact-bg"></div>
              </a>
              <a href="tel:+919876543210" className="contact-link w-inline-block">
                <img
                  loading="lazy"
                  src="/images/6a021edc8a324b1bda7f358b_calling.svg"
                  alt="Contact icon"
                  className="contact-icon"
                />
                <p className="contact-link-text">+91 98765 43210</p>
                <div className="contact-bg"></div>
              </a>
            </div>
          </div>
          <div className="subfooter-credits">
            <div className="footer-small-links is-left">
              <span className="footer-small-link">DTCP Approved</span>
              <span className="footer-small-link">RERA Approved</span>
              <span className="footer-small-link">100% Clear Title</span>
            </div>
            <div className="footer-small-links is-right">
              <span className="footer-small-link">Yacharam, Hyderabad</span>
              <span className="footer-small-link">Srisailam Highway</span>
            </div>
          </div>
          <div className="subfooter-copyright">
            <div className="footer-copyright-text">© 2026 Codename Future City. All Rights Reserved.</div>
          </div>
        </div>
        <div className="footer-background">
          <div className="footer-gradient-top"></div>
          <div className="footer-gradient-bottom"></div>
          <div className="parallax-wrap">
            <img
              src="/images/69f1ed5bf45d323a5b46b04e_default-image-tiny-3.avif"
              loading="lazy"
              alt="Codename Future City Masterplan Horizon"
              className="parallax-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
