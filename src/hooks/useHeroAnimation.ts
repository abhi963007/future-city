import { useEffect } from 'react';
import { gsap } from '../utils/gsap';

export const useHeroAnimation = (heroRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = heroRef.current;
      if (!container) return;

      // Target elements
      const bgImg      = container.querySelector('.hero-cinematic-bg-img');
      const overlay    = container.querySelector('.hero-cinematic-dark-overlay');
      const panel      = container.querySelector('.hero-curved-panel');
      const kicker     = container.querySelector('[data-hero-el="kicker"]');
      const titleRows  = container.querySelectorAll('[data-hero-el="title"] .title-row');
      const separator  = container.querySelector('[data-hero-el="separator"]');
      const tagline    = container.querySelector('[data-hero-el="tagline"]');
      const locations  = container.querySelectorAll('.hero-loc-item');
      const connector  = container.querySelector('.hero-loc-connector');
      const cta        = container.querySelector('[data-hero-el="cta"]');

      // ── Set initial states ──
      if (bgImg)            gsap.set(bgImg,       { scale: 1.05, opacity: 0 });
      if (overlay)          gsap.set(overlay,     { opacity: 0 });
      if (panel)            gsap.set(panel,       { opacity: 0, x: -20 });
      if (kicker)           gsap.set(kicker,      { opacity: 0, y: 18 });
      if (titleRows.length) gsap.set(titleRows,   { opacity: 0, y: 35 });
      if (separator)        gsap.set(separator,   { scaleX: 0, transformOrigin: 'left center' });
      if (tagline)          gsap.set(tagline,     { opacity: 0, y: 18 });
      if (locations.length) gsap.set(locations,   { opacity: 0, x: -14 });
      if (connector)        gsap.set(connector,   { scaleY: 0, transformOrigin: 'top center' });
      if (cta)              gsap.set(cta,         { opacity: 0, y: 22 });

      // ── Cinematic entrance timeline ──
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. Background image: gentle de-zoom + fade
      if (bgImg) {
        tl.to(bgImg, {
          scale: 1,
          opacity: 1,
          duration: 2.6,
          ease: 'power2.out',
        }, 0);
      }

      // 2. Overlay gradient fades in
      if (overlay) {
        tl.to(overlay, {
          opacity: 1,
          duration: 1.8,
          ease: 'power2.out',
        }, 0.15);
      }

      // 3. Curved panel slides in
      if (panel) {
        tl.to(panel, {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: 'power3.out',
        }, 0.2);
      }

      // 4. Kicker label — subtle fade-up
      if (kicker) {
        tl.to(kicker, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
        }, 0.6);
      }

      // 5. Title rows — staggered reveal
      if (titleRows.length) {
        tl.to(titleRows, {
          opacity: 1,
          y: 0,
          stagger: 0.14,
          duration: 1.1,
          ease: 'power3.out',
        }, 0.8);
      }

      // 6. Gold separator — scale from left
      if (separator) {
        tl.to(separator, {
          scaleX: 1,
          duration: 0.75,
          ease: 'power2.out',
        }, 1.3);
      }

      // 7. Tagline — gentle fade-up
      if (tagline) {
        tl.to(tagline, {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'power3.out',
        }, 1.45);
      }

      // 8. Location rows — staggered slide-in
      if (locations.length) {
        tl.to(locations, {
          opacity: 1,
          x: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power2.out',
        }, 1.65);
      }

      // 9. Connector line — scale from top
      if (connector) {
        tl.to(connector, {
          scaleY: 1,
          duration: 0.5,
          ease: 'power2.out',
        }, 1.8);
      }

      // 10. CTA button — fade-up
      if (cta) {
        tl.to(cta, {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out',
        }, 1.95);
      }

      // ── Scroll Parallax — bg image only ──
      if (bgImg) {
        gsap.to(bgImg, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, [heroRef]);
};
