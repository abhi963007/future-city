import { useEffect } from 'react';
import { gsap } from '../utils/gsap';

export const useHeroAnimation = (heroRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = heroRef.current;
      if (!container) return;

      // Target elements
      const bgImg     = container.querySelector('.hero-cinematic-bg-img');
      const overlay   = container.querySelector('.hero-cinematic-dark-overlay');
      const panel     = container.querySelector('.hero-curved-panel');
      const kicker    = container.querySelector('[data-hero-el="kicker"]');
      const titleRows = container.querySelectorAll('[data-hero-el="title"] .title-row');
      const separator = container.querySelector('[data-hero-el="separator"]');
      const tagline   = container.querySelector('[data-hero-el="tagline"]');
      const cta       = container.querySelector('[data-hero-el="cta"]');
      const widget    = container.querySelector('[data-hero-el="locations"]');
      const scrollInd = container.querySelector('.hero-scroll-indicator');

      // ── Set initial states ──
      if (bgImg)            gsap.set(bgImg,     { scale: 1.05, opacity: 0 });
      if (overlay)          gsap.set(overlay,   { opacity: 0 });
      if (panel)            gsap.set(panel,     { opacity: 0, x: -24 });
      if (kicker)           gsap.set(kicker,    { opacity: 0, y: 16 });
      if (titleRows.length) gsap.set(titleRows, { opacity: 0, y: 32 });
      if (separator)        gsap.set(separator, { scaleX: 0, transformOrigin: 'left center' });
      if (tagline)          gsap.set(tagline,   { opacity: 0, y: 16 });
      if (cta)              gsap.set(cta,       { opacity: 0, y: 20 });
      if (widget)           gsap.set(widget,    { opacity: 0, y: 16 });
      if (scrollInd)        gsap.set(scrollInd, { opacity: 0 });

      // ── Cinematic entrance timeline ──
      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Background video: gentle de-zoom + fade
      if (bgImg) {
        tl.to(bgImg, {
          scale: 1,
          opacity: 1,
          duration: 2.2,
          ease: 'power2.out',
        }, 0);
      }

      // 2. Overlay gradient fades in
      if (overlay) {
        tl.to(overlay, {
          opacity: 1,
          duration: 1.6,
          ease: 'power2.out',
        }, 0.1);
      }

      // 3. Panel slides in from left
      if (panel) {
        tl.to(panel, {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
        }, 0.2);
      }

      // 4. Kicker label — subtle fade-up
      if (kicker) {
        tl.to(kicker, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, 0.55);
      }

      // 5. Title rows — staggered reveal
      if (titleRows.length) {
        tl.to(titleRows, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 1.0,
          ease: 'power3.out',
        }, 0.72);
      }

      // 6. Gold separator — scale from left
      if (separator) {
        tl.to(separator, {
          scaleX: 1,
          duration: 0.65,
          ease: 'power2.out',
        }, 1.1);
      }

      // 7. Description — gentle fade-up
      if (tagline) {
        tl.to(tagline, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
        }, 1.25);
      }

      // 8. CTA — fade-up
      if (cta) {
        tl.to(cta, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
        }, 1.55);
      }

      // 9. Strategic widget — fade-up
      if (widget) {
        tl.to(widget, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
        }, 1.75);
      }

      // 10. Scroll indicator — fade in
      if (scrollInd) {
        tl.to(scrollInd, {
          opacity: 1,
          duration: 0.8,
          ease: 'power1.out',
        }, 2.0);
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
