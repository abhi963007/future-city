import { useEffect } from 'react';
import { gsap } from '../utils/gsap';

export const useHeroAnimation = (heroRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = heroRef.current;
      if (!container) return;

      const img = container.querySelector('.hero-cinematic-img');
      const fog = container.querySelector('.hero-cinematic-fog');
      const sunbloom = container.querySelector('.hero-cinematic-sunbloom');
      const kicker = container.querySelector('.hero-cinematic-kicker');
      const primaryTitle = container.querySelector('.hero-cinematic-title-primary');
      const streak = container.querySelector('.hero-signature-streak');
      const secondaryTitle = container.querySelector('.hero-cinematic-title-secondary');
      const cta = container.querySelector('.hero-cinematic-cta-wrap');
      const scrollBtn = container.querySelector('.hero-cinematic-scroll-minimal');

      // Set initial states
      if (img) gsap.set(img, { scale: 1.08 });
      if (fog) gsap.set(fog, { opacity: 0 });
      if (sunbloom) gsap.set(sunbloom, { opacity: 0, scale: 0.8 });
      if (kicker) gsap.set(kicker, { opacity: 0, y: 20 });
      if (primaryTitle) gsap.set(primaryTitle, { opacity: 0, y: 30 });
      if (streak) gsap.set(streak, { backgroundPosition: '200% 0', opacity: 0 });
      if (secondaryTitle) gsap.set(secondaryTitle, { opacity: 0, y: 30 });
      if (cta) gsap.set(cta, { opacity: 0, y: 20 });
      if (scrollBtn) gsap.set(scrollBtn, { opacity: 0, y: 15 });

      // Slow, cinematic entrance timeline
      const tl = gsap.timeline({ delay: 0.2 });

      if (img) {
        tl.to(img, {
          scale: 1,
          duration: 2.4,
          ease: 'power2.out',
        }, 0);
      }

      if (sunbloom) {
        tl.to(sunbloom, {
          opacity: 0.8,
          scale: 1,
          duration: 2.2,
          ease: 'power2.out',
        }, 0.2);
      }

      if (fog) {
        tl.to(fog, {
          opacity: 0.5,
          duration: 2,
          ease: 'power1.out',
        }, 0.3);
      }

      if (kicker) {
        tl.to(kicker, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
        }, 0.5);
      }

      if (primaryTitle) {
        tl.to(primaryTitle, {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power3.out',
        }, 0.7);
      }

      // Signature moment: Text-clipped golden illumination shine across BULLETSPEED
      if (streak) {
        tl.to(streak, {
          opacity: 1,
          backgroundPosition: '-100% 0',
          duration: 1.6,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.to(streak, { opacity: 0, duration: 0.4 });
          },
        }, 1.3);
      }

      if (secondaryTitle) {
        tl.to(secondaryTitle, {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power3.out',
        }, 0.9);
      }

      if (cta) {
        tl.to(cta, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
        }, 1.3);
      }

      if (scrollBtn) {
        tl.to(scrollBtn, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        }, 1.6);
      }

      // Smooth parallax scroll scrub
      if (img) {
        gsap.to(img, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Subtle scroll fade for content
      const content = container.querySelector('.hero-cinematic-content');
      if (content) {
        gsap.to(content, {
          opacity: 0,
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'center top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [heroRef]);
};
