import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * Exact replica of the Testimonials section animation timeline (t-1651a2be) from the Webflow reference:
 *
 * 1. Scroll Scrub Fan-Out:
 *    - left: x 30vw → 5vw, y 4vw, rot -18deg
 *    - left-two: x 17vw → 2vw, y 2vw, rot 3deg
 *    - middle: scale 0.7 → 1.0, rot -3deg
 *    - right-two: x -13vw → -5vw, y 2vw, rot 4deg
 *    - right: x -34vw → -6vw, y 4vw, rot -8deg
 *
 * 2. Hover Interaction:
 *    - Hovering any card activates its corresponding quote text in `.testimonials_master-texts`.
 */
export function useTestimonialsAnimation(
  containerRef: React.RefObject<Element | null>,
  setActiveIndex?: (index: number) => void
) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const grid = container.querySelector('.testimonials_grid');
      const left = container.querySelector('.testimonials_image-wrap.is-left');
      const leftTwo = container.querySelector('.testimonials_image-wrap.is-left-two');
      const middle = container.querySelector('.testimonials_image-wrap.is-middle');
      const rightTwo = container.querySelector('.testimonials_image-wrap.is-right-two');
      const right = container.querySelector('.testimonials_image-wrap.is-right');

      if (!grid) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
          end: 'top 30%',
          scrub: 1,
        },
      });

      if (left) {
        tl.fromTo(
          left,
          { x: '30vw', y: '0vw', rotation: 0 },
          { x: '5vw', y: '4vw', rotation: -18, ease: 'power2.out' },
          0
        );
      }

      if (leftTwo) {
        tl.fromTo(
          leftTwo,
          { x: '17vw', y: '0vw', rotation: 0 },
          { x: '2vw', y: '2vw', rotation: 3, ease: 'power2.out' },
          0
        );
      }

      if (middle) {
        tl.fromTo(
          middle,
          { x: '0vw', scale: 0.7, rotation: 0 },
          { x: '0vw', scale: 1.0, rotation: -3, ease: 'power2.out' },
          0
        );
      }

      if (rightTwo) {
        tl.fromTo(
          rightTwo,
          { x: '-13vw', y: '0vw', rotation: 0 },
          { x: '-5vw', y: '2vw', rotation: 4, ease: 'power2.out' },
          0
        );
      }

      if (right) {
        tl.fromTo(
          right,
          { x: '-34vw', y: '0vw', rotation: 0 },
          { x: '-6vw', y: '4vw', rotation: -8, ease: 'power2.out' },
          0
        );
      }

      // Hover card listeners to switch active quote
      const cardElements = [left, leftTwo, middle, rightTwo, right];
      cardElements.forEach((card, idx) => {
        if (!card) return;
        card.addEventListener('mouseenter', () => {
          if (setActiveIndex) setActiveIndex(idx);
        });
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === container) t.kill();
      });
    };
  }, [containerRef, setActiveIndex]);
}
