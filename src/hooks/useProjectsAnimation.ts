import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useProjectsAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll('.project-item');

      items.forEach((item) => {
        const img = item.querySelector('.full-parallax-image');
        if (img) {
          gsap.set(img, { visibility: 'visible' });
          gsap.to(img, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
