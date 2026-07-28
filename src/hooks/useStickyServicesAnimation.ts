import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useStickyServicesAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const mediaList = container.querySelectorAll('.service-grid-media');
      const imagesList = container.querySelectorAll('.service-grid-image');
      const linkBgs = container.querySelectorAll('.services-listing-link-bg');

      if (mediaList.length) gsap.set(mediaList, { visibility: 'visible' });
      if (imagesList.length) gsap.set(imagesList, { visibility: 'visible' });
      if (linkBgs.length) gsap.set(linkBgs, { visibility: 'visible' });

      // Stagger items on scroll
      const items = container.querySelectorAll('.service-grid-item');
      if (items.length) {
        gsap.from(items, {
          opacity: 0,
          y: 40,
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
