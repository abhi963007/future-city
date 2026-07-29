import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

/**
 * SolutionsShowcase Cards Animation — scale-based zoom on scroll.
 * Desktop: full-bleed expand. Mobile: lighter scale so stacked cards stay readable.
 */
export function useSolutionsAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll<HTMLElement>('.solution-showcase-item');
      const mm = gsap.matchMedia();

      const setupHover = (item: HTMLElement) => {
        const colorBg = item.querySelector<HTMLElement>('.solution-showcase-bg-color');
        const link = item.querySelector('.solution-showcase-link');
        if (!link) return;

        link.addEventListener('mouseenter', () => {
          if (colorBg) gsap.to(colorBg, { opacity: 0.15, duration: 0.3, ease: 'power2.out' });
        });
        link.addEventListener('mouseleave', () => {
          if (colorBg) gsap.to(colorBg, { opacity: 0, duration: 0.3, ease: 'power2.out' });
        });
      };

      mm.add('(min-width: 768px)', () => {
        items.forEach((item) => {
          const bgImg = item.querySelector<HTMLElement>('.parallax-image');
          const colorBg = item.querySelector<HTMLElement>('.solution-showcase-bg-color');
          const plusIcon = item.querySelector<HTMLElement>('.plus-icon-with-text');

          gsap.set(item, { visibility: 'visible' });
          if (bgImg) gsap.set(bgImg, { visibility: 'visible' });
          if (colorBg) gsap.set(colorBg, { visibility: 'visible' });
          if (plusIcon) gsap.set(plusIcon, { visibility: 'visible' });

          gsap.fromTo(
            item,
            {
              scaleX: 0.82,
              scaleY: 0.92,
              borderRadius: '2rem',
              transformOrigin: 'center center',
            },
            {
              scaleX: 1.0,
              scaleY: 1.0,
              borderRadius: '0rem',
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                end: 'top 10%',
                scrub: 1,
              },
            }
          );

          if (bgImg) {
            gsap.fromTo(
              bgImg,
              { scale: 1.0, yPercent: -4 },
              {
                scale: 1.0,
                yPercent: 4,
                ease: 'none',
                scrollTrigger: {
                  trigger: item,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1,
                },
              }
            );
          }

          setupHover(item);
        });
      });

      mm.add('(max-width: 767px)', () => {
        items.forEach((item) => {
          const bgImg = item.querySelector<HTMLElement>('.parallax-image');
          const colorBg = item.querySelector<HTMLElement>('.solution-showcase-bg-color');

          gsap.set(item, {
            visibility: 'visible',
            clearProps: 'scale,scaleX,scaleY',
            borderRadius: '1rem',
          });
          if (bgImg) gsap.set(bgImg, { visibility: 'visible', clearProps: 'yPercent,scale' });
          if (colorBg) gsap.set(colorBg, { visibility: 'visible' });

          gsap.fromTo(
            item,
            {
              opacity: 0.55,
              y: 28,
              scale: 0.97,
              transformOrigin: 'center center',
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 92%',
                end: 'top 55%',
                scrub: 0.8,
              },
            }
          );

          setupHover(item);
        });
      });

      return () => {
        mm.revert();
      };
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
