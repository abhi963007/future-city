import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useProjectsAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const rows = container.querySelectorAll('.project-clean_row');
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        rows.forEach((row) => {
          const left = row.querySelector('.project-clean_left');
          const right = row.querySelector('.project-clean_right');
          const img = row.querySelector('.project-clean_image');

          if (left) {
            gsap.from(left, {
              x: -35,
              opacity: 0,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 78%',
              },
            });
          }

          if (right) {
            gsap.from(right, {
              x: 35,
              opacity: 0,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 78%',
              },
            });
          }

          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.1 },
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
        });
      });

      mm.add('(max-width: 767px)', () => {
        rows.forEach((row) => {
          const left = row.querySelector('.project-clean_left');
          const right = row.querySelector('.project-clean_right');
          const img = row.querySelector('.project-clean_image');

          if (left) {
            gsap.from(left, {
              y: 24,
              opacity: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 85%',
              },
            });
          }

          if (right) {
            gsap.from(right, {
              y: 24,
              opacity: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 88%',
              },
            });
          }

          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.06 },
              {
                scale: 1,
                ease: 'power1.out',
                scrollTrigger: {
                  trigger: row,
                  start: 'top 90%',
                  end: 'bottom 20%',
                  scrub: true,
                },
              }
            );
          }
        });
      });

      return () => {
        mm.revert();
      };
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
