import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useTypoTitlesAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const titles = container.querySelectorAll('.heading.is-typo-title');
      const text = container.querySelectorAll('.typo-text');
      const typoImg = container.querySelector('.typo-title-image');

      if (titles.length) {
        gsap.set(titles, { visibility: 'visible' });
        gsap.from(titles, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
          },
        });
      }

      if (text.length) {
        gsap.set(text, { visibility: 'visible' });
        gsap.from(text, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
          },
        });
      }

      if (typoImg) {
        gsap.set(typoImg, { visibility: 'visible' });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
