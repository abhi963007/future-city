import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * 3D Sticky Stacking Cards Animation for Infrastructure section
 * (Matching section_services-home & timeline t-0d1a17be from Webflow animation reference):
 *
 * As each card sticky-stacks at the top of the viewport and the next card comes up,
 * the active card shrinks in scale (1 → 0.82), fades opacity (1 → 0), and tilts (rotationX: 0deg → -40deg).
 */
export function useStickyServicesAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const cards = container.querySelectorAll<HTMLElement>('.services-home_single');

      cards.forEach((card, index) => {
        gsap.set(card, { visibility: 'visible' });

        // Apply scroll-driven 3D stack-and-flip effect to cards except the last one
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
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === container) t.kill();
      });
    };
  }, [containerRef]);
}
