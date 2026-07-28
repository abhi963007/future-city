import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

/**
 * SolutionsShowcase Cards Animation — scale-based full-screen zoom.
 *
 * Card scaleX/scaleY expands smoothly to full screen on scroll.
 * Image scale is set to 1.0 (no extra zooming) so text/graphics remain crisp and un-cropped.
 */
export function useSolutionsAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll<HTMLElement>('.solution-showcase-item');

      items.forEach((item) => {
        const bgImg    = item.querySelector<HTMLElement>('.parallax-image');
        const colorBg  = item.querySelector<HTMLElement>('.solution-showcase-bg-color');
        const plusIcon = item.querySelector<HTMLElement>('.plus-icon-with-text');

        gsap.set(item, { visibility: 'visible' });
        if (bgImg)    gsap.set(bgImg,    { visibility: 'visible' });
        if (colorBg)  gsap.set(colorBg,  { visibility: 'visible' });
        if (plusIcon) gsap.set(plusIcon, { visibility: 'visible' });

        // Scroll-driven full-screen zoom via scale
        gsap.fromTo(
          item,
          {
            scaleX:       0.82,
            scaleY:       0.92,
            borderRadius: '2rem',
            transformOrigin: 'center center',
          },
          {
            scaleX:       1.0,
            scaleY:       1.0,
            borderRadius: '0rem',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start:   'top 90%',
              end:     'top 10%',
              scrub:   1,
            },
          }
        );

        // Keep image scale natural (scale: 1.0) so text graphics are not heavily cropped/zoomed
        if (bgImg) {
          gsap.fromTo(
            bgImg,
            { scale: 1.0, yPercent: -4 },
            {
              scale:   1.0,
              yPercent: 4,
              ease:    'none',
              scrollTrigger: {
                trigger: item,
                start:   'top bottom',
                end:     'bottom top',
                scrub:   1,
              },
            }
          );
        }

        // Hover
        const link = item.querySelector('.solution-showcase-link');
        if (link) {
          link.addEventListener('mouseenter', () => {
            if (colorBg) gsap.to(colorBg, { opacity: 0.15, duration: 0.3, ease: 'power2.out' });
          });
          link.addEventListener('mouseleave', () => {
            if (colorBg) gsap.to(colorBg, { opacity: 0,    duration: 0.3, ease: 'power2.out' });
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
