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
          <h2 className="heading is-cta-title">Explore the right approach for your next move</h2>
          <div className="fotoer-cta-action">
            <Button href={ROUTES.CONSULTATION} variant="primary">
              <div className="button-text is-1st">Consultation</div>
              <div className="button-text is-2nd">Consultation</div>
            </Button>
          </div>
          <div className="footer-cta-image">
            <img
              src="/images/69f33e4ed787feeb78d1b49e_hero-image.avif"
              loading="lazy"
              alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
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
              <Link to={ROUTES.SOLUTIONS} className="footer-main-link">
                Solutions
              </Link>
              <Link to={ROUTES.SERVICES} className="footer-main-link">
                Services
              </Link>
              <Link to={ROUTES.ABOUT} className="footer-main-link">
                About
              </Link>
              <Link to={ROUTES.PROJECTS} className="footer-main-link">
                Projects
              </Link>
              <Link to={ROUTES.PROPERTIES} className="footer-main-link">
                Properties
              </Link>
              <Link to={ROUTES.BLOG} className="footer-main-link">
                Blog
              </Link>
              <Link to={ROUTES.GALLERY} className="footer-main-link">
                Gallery
              </Link>
              <Link to={ROUTES.LOCATIONS} className="footer-main-link">
                Locations
              </Link>
              <Link to={ROUTES.CONSULTATION} className="footer-main-link">
                Consultation
              </Link>
              <Link to={ROUTES.CONTACT} className="footer-main-link">
                Contact
              </Link>
            </div>
            <div className="footer-main-actions">
              <a href="mailto:contact@example.com" className="contact-link w-inline-block">
                <img
                  loading="lazy"
                  src="/images/6a021e6360a90e1f8b6c6540_email.svg"
                  alt="Contact icon"
                  className="contact-icon"
                />
                <p className="contact-link-text">contact@example.com</p>
                <div className="contact-bg"></div>
              </a>
              <a href="tel:+12355456789" className="contact-link w-inline-block">
                <img
                  loading="lazy"
                  src="/images/6a021edc8a324b1bda7f358b_calling.svg"
                  alt="Contact icon"
                  className="contact-icon"
                />
                <p className="contact-link-text">+123 (55) 456 789</p>
                <div className="contact-bg"></div>
              </a>
            </div>
          </div>
          <div className="subfooter-credits">
            <div className="footer-small-links is-left">
              <Link to={ROUTES.STYLE_GUIDE} className="footer-small-link">
                Style guide
              </Link>
              <Link to="/instructions" className="footer-small-link">
                Instructions
              </Link>
              <Link to="/licenses" className="footer-small-link">
                Licences
              </Link>
            </div>
            <div className="footer-small-links is-right">
              <a
                href="https://www.webflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-small-link"
              >
                Powered by Webflow
              </a>
              <a
                href="https://www.metrik.studio/webflow-templates"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-small-link"
              >
                Webflow Templates
              </a>
              <a
                href="https://webflow.com/templates/designers/metrik"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-small-link"
              >
                Made by metrik.studio
              </a>
            </div>
          </div>
          <div className="subfooter-copyright">
            <div className="footer-copyright-text">Harroway Webflow CMS template</div>
          </div>
        </div>
        <div className="footer-background">
          <div className="footer-gradient-top"></div>
          <div className="footer-gradient-bottom"></div>
          <div className="parallax-wrap">
            <img
              src="/images/69f1ed5bf45d323a5b46b04e_default-image-tiny-3.avif"
              loading="lazy"
              alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
              className="parallax-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
