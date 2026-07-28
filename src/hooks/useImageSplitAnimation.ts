import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useImageSplitAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const images = container.querySelectorAll('.full-parallax-image');
      images.forEach((img) => {
        gsap.set(img, { visibility: 'visible' });
        gsap.to(img, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
