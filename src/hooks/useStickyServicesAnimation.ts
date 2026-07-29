import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * 3D Sticky Stacking Cards Animation for Infrastructure section.
 * Desktop: scale + fade + tilt as next card stacks.
 * Mobile: lighter stack effect so cards stay readable.
 */
export function useStickyServicesAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const cards = container.querySelectorAll<HTMLElement>('.services-home_single');
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        cards.forEach((card, index) => {
          gsap.set(card, { visibility: 'visible' });

          if (index < cards.length - 1) {
            gsap.to(card, {
              scale: 0.85,
              opacity: 0.2,
              rotationX: -25,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 12vh',
                end: 'bottom 12vh',
                scrub: true,
              },
            });
          }
        });
      });

      mm.add('(max-width: 767px)', () => {
        cards.forEach((card, index) => {
          gsap.set(card, { visibility: 'visible', clearProps: 'scale,opacity,rotationX' });

          if (index < cards.length - 1) {
            gsap.to(card, {
              scale: 0.94,
              opacity: 0.45,
              rotationX: -8,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 8vh',
                end: 'bottom 8vh',
                scrub: true,
              },
            });
          }
        });
      });

      return () => {
        mm.revert();
      };
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === container) t.kill();
      });
    };
  }, [containerRef]);
}
