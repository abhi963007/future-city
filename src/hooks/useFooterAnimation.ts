import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useFooterAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const ctaImage = container.querySelector('.footer-cta-image');
      const ctaColor = container.querySelector('.cta-reveal-color');
      const ctaAction = container.querySelector('.fotoer-cta-action');
      const bgImg = container.querySelector('.footer-background .parallax-image');

      if (ctaImage) gsap.set(ctaImage, { visibility: 'visible' });
      if (ctaColor) gsap.set(ctaColor, { visibility: 'visible' });
      if (ctaAction) gsap.set(ctaAction, { visibility: 'visible' });

      if (bgImg) {
        gsap.set(bgImg, { visibility: 'visible' });
        gsap.to(bgImg, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
