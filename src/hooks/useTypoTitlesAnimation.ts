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
        gsap.fromTo(
          titles,
          {
            opacity: 0,
            x: -120,
            filter: 'blur(5px)',
          },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            stagger: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              end: 'bottom 40%',
              scrub: 1,
            },
          }
        );
      }

      if (text.length) {
        gsap.set(text, { visibility: 'visible' });
        gsap.fromTo(
          text,
          {
            opacity: 0,
            x: -60,
            filter: 'blur(3px)',
          },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 75%',
              end: 'bottom 45%',
              scrub: 1,
            },
          }
        );
      }

      if (typoImg) {
        gsap.set(typoImg, { visibility: 'visible' });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
