import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavbarAnimation } from '../../hooks/useNavbarAnimation';
import { gsap } from '../../utils/gsap';
import { ROUTES } from '../../utils/constants';

const navMenuItems = [
  { href: ROUTES.HOME, label: 'Home' },
  { href: ROUTES.PROJECT, label: 'Project' },
  { href: ROUTES.VISION, label: 'Future City Vision' },
  { href: ROUTES.CONNECTIVITY, label: 'Connectivity' },
  { href: ROUTES.LOCATION, label: 'Location' },
  { href: ROUTES.INVESTMENT, label: 'Investment Potential' },
  { href: ROUTES.GALLERY, label: 'Gallery' },
  { href: ROUTES.CONTACT, label: 'Contact' },
  { href: ROUTES.CONSULTATION, label: 'Book Site Visit' },
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

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav ref={navRef} className="nav">
      <div home-preload="true" className="nav-grid">
        {/* Top Left Logo Block with Placeholder */}
        <div className="nav-logo">
          <Link
            to={ROUTES.HOME}
            aria-current={isActive(ROUTES.HOME) ? 'page' : undefined}
            className={`logo-link w-inline-block${isActive(ROUTES.HOME) ? ' w--current' : ''}`}
          >
            {/* LOGO ICON PLACEHOLDER — Swap src attribute below when you provide your final logo asset */}
            <div className="logo-icon-wrap">
              <img
                src="/images/69e7c7b0c8b5b85fe7956664_676903cfe541dabf465087316840dcf0_logo-symbol.svg"
                loading="eager"
                alt="Future City Logo Placeholder"
                className="brand-logo-image"
              />
            </div>
            <div className="logo-text-wrap">
              <div className="brand-name-text">FUTURE CITY</div>
              <div className="brand-slogan">HYDERABAD'S FOURTH CITY</div>
            </div>
          </Link>
        </div>

        {/* Top Right Actions: Book Site Visit CTA + Burger Menu */}
        <div className="nav-actions">
          <Link to={ROUTES.CONSULTATION} className="nav-site-visit-btn">
            BOOK SITE VISIT
          </Link>

          {/* Burger menu trigger */}
          <button
            className="burger-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            <div className="burger-lines">
              <div className="burger-menu-line"></div>
              <div className="burger-menu-line-2"></div>
              <div className={`burger-menu-line is-2nd${isMenuOpen ? ' is-open' : ''}`}></div>
              <div className={`burger-menu-line-2 is-2nd${isMenuOpen ? ' is-open' : ''}`}></div>
            </div>
            <div className="burger-menu-bg is-visible"></div>
            <div className="burger-menu-bg for-animation"></div>
          </button>
        </div>

        <div className="nav-border"></div>
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
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`menu-main-link${isActive(link.href) ? ' w--current' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="menu-additional-links">
                <Link to={ROUTES.CONTACT} className="menu-additional-link" onClick={closeMenu}>Contact</Link>
                <Link to={ROUTES.CONSULTATION} className="menu-additional-link" onClick={closeMenu}>Book Site Visit</Link>
              </div>
            </div>
            <div className="menu-credit-links">
              <span className="menu-credit-link">Codename Future City</span>
              <Link to={ROUTES.CONSULTATION} onClick={closeMenu} className="menu-credit-link is-buy">Book Site Visit</Link>
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
