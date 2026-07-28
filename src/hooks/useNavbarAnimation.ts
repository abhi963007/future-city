import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

/**
 * Reproduces the Webflow home-preload entrance animation for the navbar.
 * Elements with [home-preload="true"] are hidden by CSS (.w-mod-js) and
 * revealed by this animation on page load.
 */
export function useNavbarAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const navGrid = container.querySelector('[home-preload="true"]');
      if (!navGrid) return;

      // Reveal nav on load with slight delay
      gsap.set(navGrid, { visibility: 'visible' });
      gsap.from(navGrid, {
        opacity: 0,
        y: -10,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
      });

      // Nav text hover: is-1st slides up, is-2nd comes in from below
      const navLinks = container.querySelectorAll('.nav-link');
      navLinks.forEach((link) => {
        const text1 = link.querySelector('.nav-text.is-1st');
        const text2 = link.querySelector('.nav-text.is-2nd');
        const bgAnim = link.querySelector('.nav-link-bg-animation');
        const icon = link.querySelector('.nav-link-icon');

        if (!text1 || !text2) return;

        gsap.set(text2, { visibility: 'visible', yPercent: 100 });
        gsap.set(icon, { visibility: 'visible' });

        link.addEventListener('mouseenter', () => {
          gsap.to(text1, { yPercent: -100, duration: 0.35, ease: 'power2.inOut' });
          gsap.to(text2, { yPercent: 0, duration: 0.35, ease: 'power2.inOut' });
          if (bgAnim) gsap.to(bgAnim, { scaleX: 1, duration: 0.35, ease: 'power2.inOut', transformOrigin: 'left center' });
          if (icon) gsap.to(icon, { x: 3, duration: 0.3, ease: 'power2.out' });
        });

        link.addEventListener('mouseleave', () => {
          gsap.to(text1, { yPercent: 0, duration: 0.35, ease: 'power2.inOut' });
          gsap.to(text2, { yPercent: 100, duration: 0.35, ease: 'power2.inOut' });
          if (bgAnim) gsap.to(bgAnim, { scaleX: 0, duration: 0.35, ease: 'power2.inOut', transformOrigin: 'right center' });
          if (icon) gsap.to(icon, { x: 0, duration: 0.3, ease: 'power2.out' });
        });
      });

      // Brand slogan reveal
      const brandSlogan = container.querySelector('.brand-slogan');
      if (brandSlogan) {
        gsap.set(brandSlogan, { visibility: 'visible' });
        gsap.from(brandSlogan, { opacity: 0, y: 5, duration: 0.6, ease: 'power2.out', delay: 0.4 });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
