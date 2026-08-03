import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavbarAnimation } from '../../hooks/useNavbarAnimation';
import { useBookVisit } from '../../context/BookVisitContext';
import { gsap } from '../../utils/gsap';
import { getLenis } from '../../hooks/useLenis';

const navMenuItems = [
  { href: '/#hero', label: 'Home', selector: '#hero' },
  { href: '/#about', label: 'About', selector: '#about' },
  { href: '/#plots', label: 'Plots', selector: '#plots' },
  { href: '/#location', label: 'Location & Infrastructure', selector: '#location' },
  { href: '/#vision', label: 'Future City Vision', selector: '#vision' },
];

const headerNavLinks = [
  { href: '/#hero', label: 'Home', selector: '#hero' },
  { href: '/#about', label: 'About', selector: '#about' },
  { href: '/#plots', label: 'Plots', selector: '#plots' },
  { href: '/#location', label: 'Location', selector: '#location' },
];

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBgRef = useRef<HTMLDivElement>(null);
  const menuFullBgRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { openBookVisit } = useBookVisit();

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
      .from(
        menu.querySelectorAll('.menu-main-link'),
        {
          opacity: 0,
          y: 20,
          stagger: 0.06,
          duration: 0.5,
          ease: 'power2.out',
        },
        0.3
      )
      .from(
        menu.querySelectorAll('.menu-additional-link'),
        {
          opacity: 0,
          y: 10,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power2.out',
        },
        0.5
      );
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
    let targetSelector = selector;
    if (!targetSelector && href.includes('#')) {
      targetSelector = '#' + href.split('#')[1];
    }

    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    if (targetSelector) {
      const targetEl = document.querySelector<HTMLElement>(targetSelector);
      if (targetEl) {
        e.preventDefault();
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(targetEl, { duration: 1.2 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        if (!isHomePage) {
          window.location.href = '/' + targetSelector;
        } else {
          window.history.pushState(null, '', targetSelector);
        }
        if (isMenuOpen) closeMenu();
        return;
      }
    }

    if (href === '/' || href === '/#hero') {
      e.preventDefault();
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (!isHomePage) {
        window.location.href = '/';
      } else {
        window.history.pushState(null, '', '/');
      }
      if (isMenuOpen) closeMenu();
      return;
    }

    if (isMenuOpen) closeMenu();
  };

  const handleBookClick = () => {
    if (isMenuOpen) closeMenu();
    openBookVisit();
  };

  const isActive = (href: string) => {
    if (href === '/#hero' || href === '/') {
      return location.pathname === '/' && (!location.hash || location.hash === '#hero');
    }
    if (href.includes('#')) {
      return location.hash === href.substring(href.indexOf('#'));
    }
    return location.pathname === href;
  };

  return (
    <nav ref={navRef} className="nav">
      <div home-preload="true" className="nav-grid">
        <Link to="/#hero" onClick={(e) => handleNavClick(e, '/#hero', '#hero')} className="nav-logo" aria-label="Future City Home">
          <img src="/logo.svg" alt="Future City Logo" className="nav-logo-img" />
        </Link>
        <div className="nav-actions">
          <div className="nav-inline-links">
            {headerNavLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.selector)}
                className={`nav-inline-link${isActive(link.href) ? ' is-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button type="button" onClick={handleBookClick} className="nav-site-visit-btn">
            <svg
              className="nav-site-visit-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
            </svg>
            <span className="nav-site-visit-text">BOOK SITE VISIT</span>
          </button>

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
                <button type="button" onClick={handleBookClick} className="menu-additional-link">
                  Contact
                </button>
                <button type="button" onClick={handleBookClick} className="menu-additional-link">
                  Book Site Visit
                </button>
              </div>
            </div>
            <div className="menu-credit-links">
              <span className="menu-credit-link">Codename Future City</span>
              <button type="button" onClick={handleBookClick} className="menu-credit-link is-buy">
                Book Site Visit
              </button>
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
