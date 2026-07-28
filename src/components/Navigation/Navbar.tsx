import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavbarAnimation } from '../../hooks/useNavbarAnimation';
import { gsap } from '../../utils/gsap';
import { ROUTES } from '../../utils/constants';

const megaMenuLinks = [
  { href: ROUTES.HOME, label: 'Home' },
  { href: ROUTES.SOLUTIONS, label: 'Solutions' },
  { href: ROUTES.SERVICES, label: 'Services' },
  { href: ROUTES.ABOUT, label: 'About' },
  { href: ROUTES.PROPERTIES, label: 'Properties' },
  { href: ROUTES.PROJECTS, label: 'Projects' },
  { href: ROUTES.BLOG, label: 'Blog' },
  { href: ROUTES.GALLERY, label: 'Gallery' },
  { href: ROUTES.CONTACT, label: 'Contact' },
  { href: ROUTES.CONSULTATION, label: 'Consultation' },
  { href: ROUTES.LOCATIONS, label: 'Locations' },
  { href: ROUTES.STYLE_GUIDE, label: 'Style Guide' },
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
        {/* Left nav links */}
        <div id="w-node-_1b35a1ae-84f6-7697-a581-a9667f4b0e3b-7f4b0e3a" className="nav-main-links">
          <div className="nav-links-wrap">
            {/* Pages mega-menu trigger */}
            <div className="mega-menu">
              <Link
                to={ROUTES.HOME}
                aria-current={isActive(ROUTES.HOME) ? 'page' : undefined}
                className={`nav-link w-inline-block${isActive(ROUTES.HOME) ? ' w--current' : ''}`}
              >
                <div className="nav-text is-1st">Pages</div>
                <div className="nav-text is-2nd">Pages</div>
                <div className="nav-icon-wrap">
                  <img src="/images/69e8dafe2b2ad885270bec2d_angle-small-down.svg" loading="lazy" alt="Nav link icon" className="nav-link-icon" />
                </div>
                <div className="nav-link-blur"></div>
                <div className="nav-link-bg-animation"></div>
              </Link>
              <div className="mega-menu-trigger">
                <div className="mega-menu-layout">
                  <div className="mega-menu-actions">
                    {megaMenuLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        aria-current={isActive(link.href) ? 'page' : undefined}
                        className={`mega-menu-link w-inline-block${isActive(link.href) ? ' w--current' : ''}`}
                      >
                        <div className="mega-menu-link-text">{link.label}</div>
                        <img src="/images/69e7c7b0c8b5b85fe79564cd_arrow-dark-5.svg" loading="lazy" alt="Arrow icon" className="mega-menu-link-icon" />
                        <div className="mega-menu-link-line-1st"></div>
                        <div className="mega-menu-link-line-2nd"></div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to={ROUTES.SERVICES} className="nav-link w-inline-block">
              <div className="nav-text is-1st">Services</div>
              <div className="nav-text is-2nd">Services</div>
              <div className="nav-icon-wrap">
                <img src="/images/69e7c7b0c8b5b85fe79564d2_arrow-right.svg" loading="lazy" alt="Nav link icon" className="nav-link-icon" />
              </div>
              <div className="nav-link-blur"></div>
              <div className="nav-link-bg-animation"></div>
            </Link>

            <Link to={ROUTES.SOLUTIONS} className="nav-link w-inline-block">
              <div className="nav-text is-1st">Solutions</div>
              <div className="nav-text is-2nd">Solutions</div>
              <div className="nav-icon-wrap">
                <img src="/images/69e7c7b0c8b5b85fe79564d2_arrow-right.svg" loading="lazy" alt="Nav link icon" className="nav-link-icon" />
              </div>
              <div className="nav-link-blur"></div>
              <div className="nav-link-bg-animation"></div>
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div id="w-node-fe0d276e-e449-0cb4-f4aa-4eb312bbad9e-7f4b0e3a" className="nav-logo">
          <Link
            to={ROUTES.HOME}
            aria-current={isActive(ROUTES.HOME) ? 'page' : undefined}
            className={`logo-link w-inline-block${isActive(ROUTES.HOME) ? ' w--current' : ''}`}
          >
            <img src="/images/69e7c7b0c8b5b85fe7956664_676903cfe541dabf465087316840dcf0_logo-symbol.svg" loading="lazy" alt="Logo symbol" className="brand-logo-image" />
            <div className="brand-name-text">Harroway</div>
            <div className="brand-slogan">Real Estate template</div>
          </Link>
        </div>

        {/* Right nav actions */}
        <div className="nav-actions">
          <div className="nav-links-wrap is-2nd">
            <Link to={ROUTES.ABOUT} className="nav-link w-inline-block">
              <div className="nav-text is-1st">About</div>
              <div className="nav-text is-2nd">About</div>
              <div className="nav-icon-wrap">
                <img src="/images/69e7c7b0c8b5b85fe79564d2_arrow-right.svg" loading="lazy" alt="Nav link icon" className="nav-link-icon" />
              </div>
              <div className="nav-link-blur"></div>
              <div className="nav-link-bg-animation"></div>
            </Link>
            <Link to={ROUTES.PROJECTS} className="nav-link w-inline-block">
              <div className="nav-text is-1st">Projects</div>
              <div className="nav-text is-2nd">Projects</div>
              <div className="nav-icon-wrap">
                <img src="/images/69e7c7b0c8b5b85fe79564d2_arrow-right.svg" loading="lazy" alt="Nav link icon" className="nav-link-icon" />
              </div>
              <div className="nav-link-blur"></div>
              <div className="nav-link-bg-animation"></div>
            </Link>
          </div>

          {/* Burger menu */}
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

      {/* Full-screen menu */}
      <div className="menu" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <div className="menu-layout">
          <div ref={menuRef} className="menu-wrap">
            <div className="menu-main">
              <div className="menu-main-links">
                {[
                  { href: ROUTES.HOME, label: 'Home' },
                  { href: ROUTES.SOLUTIONS, label: 'Solutions' },
                  { href: ROUTES.SERVICES, label: 'Services' },
                  { href: ROUTES.ABOUT, label: 'About' },
                  { href: ROUTES.PROJECTS, label: 'Projects' },
                  { href: ROUTES.PROPERTIES, label: 'Properties' },
                  { href: ROUTES.BLOG, label: 'Blog' },
                  { href: ROUTES.GALLERY, label: 'Gallery' },
                  { href: ROUTES.LOCATIONS, label: 'Locations' },
                ].map((link) => (
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
                <Link to={ROUTES.CONSULTATION} className="menu-additional-link" onClick={closeMenu}>Consultation</Link>
              </div>
            </div>
            <div className="menu-credit-links">
              <a href="https://www.metrik.studio" target="_blank" rel="noopener noreferrer" className="menu-credit-link">Made by metrik.studio</a>
              <a href="https://webflow.com/templates/designers/metrik" target="_blank" rel="noopener noreferrer" className="menu-credit-link is-buy">Buy a template</a>
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
