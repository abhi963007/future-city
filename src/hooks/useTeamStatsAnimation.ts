import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useTeamStatsAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const title = container.querySelector('.sticky-team-title');
      const images = container.querySelectorAll('.stats-cms-image-item');
      const stats = container.querySelectorAll('.stats-cms-item');

      if (title) gsap.set(title, { visibility: 'visible' });

      if (images.length) {
        images.forEach((img) => gsap.set(img, { visibility: 'visible' }));
      }

      if (stats.length) {
        gsap.from(stats, {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
