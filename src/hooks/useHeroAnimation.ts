import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

/**
 * Cinematic Hero animation hook tailored for Future City Phase 2 redesign.
 * Smooth entrance sequence and scroll-linked parallax.
 */
export function useHeroAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const img = container.querySelector('.hero-cinematic-img');
      const kicker = container.querySelector('.hero-cinematic-kicker');
      const primaryTitle = container.querySelector('.hero-cinematic-title-primary');
      const secondaryTitle = container.querySelector('.hero-cinematic-title-secondary');
      const cta = container.querySelector('.hero-cinematic-cta-wrap');
      const stats = container.querySelectorAll('.hero-cinematic-stat-item, .hero-cinematic-stat-divider');
      const scrollBtn = container.querySelector('.hero-cinematic-scroll');

      // Set initial states
      if (img) gsap.set(img, { scale: 1.08 });
      if (kicker) gsap.set(kicker, { opacity: 0, y: 15 });
      if (primaryTitle) gsap.set(primaryTitle, { opacity: 0, y: 35 });
      if (secondaryTitle) gsap.set(secondaryTitle, { opacity: 0, y: 35 });
      if (cta) gsap.set(cta, { opacity: 0, y: 15 });
      if (stats.length) gsap.set(stats, { opacity: 0, y: 15 });
      if (scrollBtn) gsap.set(scrollBtn, { opacity: 0, y: 15 });

      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.3 });

      if (img) {
        tl.to(img, {
          scale: 1,
          duration: 1.8,
          ease: 'power3.out',
        }, 0);
      }

      if (kicker) {
        tl.to(kicker, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, 0.3);
      }

      if (primaryTitle) {
        tl.to(primaryTitle, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }, 0.5);
      }

      if (secondaryTitle) {
        tl.to(secondaryTitle, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }, 0.7);
      }

      if (cta) {
        tl.to(cta, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, 0.9);
      }

      if (stats.length) {
        tl.to(stats, {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power2.out',
        }, 1.1);
      }

      if (scrollBtn) {
        tl.to(scrollBtn, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, 1.3);
      }

      // Parallax scroll effect
      if (img) {
        gsap.to(img, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Fade hero content on scroll down
      const content = container.querySelector('.hero-cinematic-content');
      const bottom = container.querySelector('.hero-cinematic-bottom');
      if (content && bottom) {
        gsap.to([content, bottom], {
          opacity: 0,
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '50% top',
            scrub: true,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
