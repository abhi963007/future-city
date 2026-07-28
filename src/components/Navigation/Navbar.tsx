import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavbarAnimation } from '../../hooks/useNavbarAnimation';
import { gsap } from '../../utils/gsap';
import { ROUTES } from '../../utils/constants';

const navMenuItems = [
  { href: ROUTES.HOME, label: 'Home', selector: '.hero-cinematic' },
  { href: ROUTES.PROJECT, label: 'Project', selector: '.section-project-listing' },
  { href: ROUTES.VISION, label: 'Future City Vision', selector: '.section-solutions-showcase' },
  { href: ROUTES.CONNECTIVITY, label: 'Connectivity', selector: '.section-about-grid' },
  { href: ROUTES.LOCATION, label: 'Location', selector: '.section-about-grid' },
  { href: ROUTES.INVESTMENT, label: 'Investment Potential', selector: '.section-statement-reveal' },
  { href: ROUTES.GALLERY, label: 'Gallery', selector: '.section-image-split' },
  { href: ROUTES.CONTACT, label: 'Contact', selector: '.section-consultation' },
  { href: ROUTES.CONSULTATION, label: 'Book Site Visit', selector: '.section-consultation' },
];

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBgRef = useRef<HTMLDivElement>(null);
  const menuFullBgRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useNavbarAnimation(navRef);

  const openMenu = () => {
    setIsMenuOpen(true);
    const menu = menuRef.current;
    const bg = menuBgRef.current;
    const fullBg = menuFullBgRef.current;
    if (!menu || !bg || !fullBg) return;

    gsap.set(fullBg, { visibility: 'visible' });
    gsap.set(bg, { visibility: 'visible' });

    const tl = gsap.timeline();
    tl.to(fullBg, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      .to(bg, { scaleY: 1, duration: 0.5, ease: 'power3.out', transformOrigin: 'top center' }, 0.1)
      .from(menu.querySelectorAll('.menu-main-link'), {
        opacity: 0,
        y: 20,
        stagger: 0.06,
        duration: 0.5,
        ease: 'power2.out',
      }, 0.3)
      .from(menu.querySelectorAll('.menu-additional-link'), {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power2.out',
      }, 0.5);
  };

  const closeMenu = () => {
    const bg = menuBgRef.current;
    const fullBg = menuFullBgRef.current;
    if (!bg || !fullBg) return;

    gsap.to([bg, fullBg], {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => setIsMenuOpen(false),
    });
  };

  const handleNavClick = (e: React.MouseEvent, href: string, selector?: string) => {
    const isHomePage = location.pathname === '/' || location.pathname === ROUTES.HOME;

    if (isHomePage) {
      if (selector) {
        const targetEl = document.querySelector(selector);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
          if (isMenuOpen) closeMenu();
          return;
        }
      }
      if (href === ROUTES.HOME) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (isMenuOpen) closeMenu();
        return;
      }
    }

    if (isMenuOpen) closeMenu();
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav ref={navRef} className="nav">
      <div home-preload="true" className="nav-grid">
        {/* Top Left Logo Link - Removed per user request */}

        {/* Top Right Actions: Book Site Visit CTA + Burger Menu */}
        <div className="nav-actions">
          <Link
            to={ROUTES.CONSULTATION}
            onClick={(e) => handleNavClick(e, ROUTES.CONSULTATION, '.section-consultation')}
            className="nav-site-visit-btn"
          >
            BOOK SITE VISIT
          </Link>

          {/* Burger menu trigger */}
          <button
            className="burger-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            <div className="burger-lines">
              <div className={`burger-menu-line${isMenuOpen ? ' is-open' : ''}`}></div>
              <div className={`burger-menu-line-2${isMenuOpen ? ' is-open' : ''}`}></div>
              <div className={`burger-menu-line is-2nd${isMenuOpen ? ' is-open' : ''}`}></div>
              <div className={`burger-menu-line-2 is-2nd${isMenuOpen ? ' is-open' : ''}`}></div>
            </div>
            <div className="burger-menu-bg is-visible"></div>
            <div className="burger-menu-bg for-animation"></div>
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      <div className="menu" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <div className="menu-layout">
          <div ref={menuRef} className="menu-wrap">
            <div className="menu-main">
              <div className="menu-main-links">
                {navMenuItems.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.selector)}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`menu-main-link${isActive(link.href) ? ' w--current' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="menu-additional-links">
                <Link
                  to={ROUTES.CONTACT}
                  onClick={(e) => handleNavClick(e, ROUTES.CONTACT, '.section-consultation')}
                  className="menu-additional-link"
                >
                  Contact
                </Link>
                <Link
                  to={ROUTES.CONSULTATION}
                  onClick={(e) => handleNavClick(e, ROUTES.CONSULTATION, '.section-consultation')}
                  className="menu-additional-link"
                >
                  Book Site Visit
                </Link>
              </div>
            </div>
            <div className="menu-credit-links">
              <span className="menu-credit-link">Future City</span>
              <Link
                to={ROUTES.CONSULTATION}
                onClick={(e) => handleNavClick(e, ROUTES.CONSULTATION, '.section-consultation')}
                className="menu-credit-link is-buy"
              >
                Book Site Visit
              </Link>
            </div>
            <div ref={menuBgRef} className="menu-background"></div>
          </div>
        </div>
        <div ref={menuFullBgRef} className="menu-full-background"></div>
      </div>
    </nav>
  );
};

export default Navbar;
