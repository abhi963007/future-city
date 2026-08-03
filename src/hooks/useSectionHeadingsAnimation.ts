import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

/**
 * Universal left-to-right row-wise scroll-scrub reveal animation
 * for all section animated headings across the site.
 */
export function useSectionHeadingsAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const headingWraps = container.querySelectorAll('.section_animated-heading');

      headingWraps.forEach((headingWrap) => {
        const headingLines = headingWrap.querySelectorAll('.animated-scroll-heading');
        if (headingLines.length) {
          gsap.set(headingLines, { visibility: 'visible' });
          gsap.fromTo(
            headingLines,
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
                trigger: headingWrap,
                start: 'top 85%',
                end: 'bottom 45%',
                scrub: 1,
              },
            }
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
