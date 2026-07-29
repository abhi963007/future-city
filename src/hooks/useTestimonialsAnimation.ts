import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * Testimonials / Future City Pillars animation:
 *
 * Desktop (≥768px): scroll-scrub fan-out of the five pillar cards.
 * Mobile (<768px): compact static fan with mild rotation — no scrub transforms
 * that crush the layout on narrow viewports.
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

      const cardElements = [left, leftTwo, middle, rightTwo, right];

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
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
      });

      mm.add('(max-width: 767px)', () => {
        if (left) gsap.set(left, { x: 0, y: 0, rotation: -6, scale: 1 });
        if (leftTwo) gsap.set(leftTwo, { x: 0, y: 0, rotation: -2, scale: 1 });
        if (middle) gsap.set(middle, { x: 0, y: 0, rotation: 0, scale: 1.02 });
        if (rightTwo) gsap.set(rightTwo, { x: 0, y: 0, rotation: 2, scale: 1 });
        if (right) gsap.set(right, { x: 0, y: 0, rotation: 6, scale: 1 });
      });

      cardElements.forEach((card, idx) => {
        if (!card) return;
        const activate = () => {
          if (setActiveIndex) setActiveIndex(idx);
        };
        card.addEventListener('mouseenter', activate);
        card.addEventListener('click', activate);
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
  }, [containerRef, setActiveIndex]);
}
