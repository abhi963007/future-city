import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useProjectsAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const rows = container.querySelectorAll('.project-clean_row');

      rows.forEach((row) => {
        const img = row.querySelector('.project-clean_image');
        const content = row.querySelector('.project-clean_content');

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 85%',
                end: 'bottom 15%',
                scrub: true,
              },
            }
          );
        }

        if (content) {
          gsap.from(content, {
            y: 45,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 75%',
            },
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
