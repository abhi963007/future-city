import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useAboutAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const blocks = container.querySelectorAll('.about-block');
      const bg = container.querySelector('.section-about-bg');
      const imageBlock = container.querySelector('.about-grid-block.is-image');

      if (blocks.length) {
        gsap.set(blocks, { visibility: 'visible' });
        gsap.from(blocks, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
          },
        });
      }

      if (imageBlock) {
        gsap.set(imageBlock, { visibility: 'visible' });
        gsap.from(imageBlock, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageBlock,
            start: 'top 80%',
          },
        });
      }

      if (bg) {
        gsap.set(bg, { visibility: 'visible' });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
