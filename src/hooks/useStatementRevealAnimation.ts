import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useStatementRevealAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const visual = container.querySelector('.statement-reveal-visual');
      const orbits = container.querySelectorAll('.statement-reveal-orbit');
      const images = container.querySelectorAll('.full-parallax-image');

      if (visual) gsap.set(visual, { visibility: 'visible' });

      if (orbits.length) {
        orbits.forEach((orbit, index) => {
          gsap.to(orbit, {
            rotation: (index + 1) * 360,
            duration: 20 + index * 10,
            ease: 'none',
            repeat: -1,
          });
        });
      }

      if (images.length) {
        images.forEach((img) => {
          gsap.set(img, { visibility: 'visible' });
          gsap.to(img, {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
