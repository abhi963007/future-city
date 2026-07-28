import { useLayoutEffect } from 'react';
import { gsap, SplitText } from '../utils/gsap';

/**
 * Reproduces the Webflow hero-intro entrance animation.
 * Elements are hidden by CSS preloader and revealed with stagger.
 */
export function useHeroAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      const bgSize = container.querySelector('.hero-intro-bg-size');
      const titleEl = container.querySelector('.heading.is-home-hero');
      const introContent = container.querySelector('.hero-intro-content');
      const stats = container.querySelectorAll('.hero-intro-stat');
      const statsBg = container.querySelector('.stats-blur-bg');

      // Reveal background
      if (bgSize) {
        gsap.set(bgSize, { visibility: 'visible' });
        tl.from(bgSize, { scale: 1.08, duration: 1.6, ease: 'power3.out' }, 0);
      }

      // Reveal heading with SplitText
      if (titleEl) {
        const split = new SplitText(titleEl, { type: 'lines' });
        const parent = titleEl.closest('.hero-intro-title');
        if (parent) gsap.set(parent, { visibility: 'visible' });
        gsap.set(titleEl, { visibility: 'visible' });

        tl.from(split.lines, {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
        }, 0.3);
      }

      // Reveal content block
      if (introContent) {
        gsap.set(introContent, { visibility: 'visible' });
        tl.from(introContent, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          ease: 'power2.out',
        }, 0.7);
      }

      // Reveal stats staggered
      if (stats.length) {
        gsap.set(stats, { visibility: 'visible' });
        if (statsBg) gsap.set(statsBg, { visibility: 'visible' });
        tl.from(stats, {
          opacity: 0,
          y: 15,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
        }, 0.9);
      }

      // hero-intro-image parallax on scroll
      const heroImage = container.querySelector('.hero-intro-image');
      if (heroImage) {
        gsap.set(heroImage, { visibility: 'visible' });
        gsap.to(heroImage, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
