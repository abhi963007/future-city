import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useSolutionsAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll('.solution-showcase-item');

      items.forEach((item) => {
        const bgImg = item.querySelector('.parallax-image');
        const colorBg = item.querySelector('.solution-showcase-bg-color');
        const plusIcon = item.querySelector('.plus-icon-with-text');

        gsap.set(item, { visibility: 'visible' });

        if (bgImg) {
          gsap.set(bgImg, { visibility: 'visible' });
          gsap.to(bgImg, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        if (colorBg) gsap.set(colorBg, { visibility: 'visible' });
        if (plusIcon) gsap.set(plusIcon, { visibility: 'visible' });

        // Hover animation
        const link = item.querySelector('.solution-showcase-link');
        if (link) {
          link.addEventListener('mouseenter', () => {
            if (colorBg) gsap.to(colorBg, { opacity: 0.15, duration: 0.3, ease: 'power2.out' });
          });
          link.addEventListener('mouseleave', () => {
            if (colorBg) gsap.to(colorBg, { opacity: 0, duration: 0.3, ease: 'power2.out' });
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
