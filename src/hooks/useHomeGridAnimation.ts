import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * Corrected animation direction based on user feedback:
 *
 * 1. Initial State (entering section):
 *    - All 12 grid images are ALREADY VISIBLE (opacity: 1, rotationY: 0).
 *
 * 2. On Scroll Down (scrubbed timeline):
 *    - All grid images FLIP OUT / FADE OUT (opacity 1 → 0, rotationY 0 → -180°).
 *    - Center video panel zooms to FULL SCREEN (width: 100vw, height: 100vh, borderRadius: 0).
 *    - Lightbox overlay ("play + showreel") fades IN (opacity 0 → 1).
 */
export function useHomeGridAnimation(
  sectionRef: React.RefObject<Element | null>
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const imageWraps = section.querySelectorAll<HTMLElement>('.home-grid_image-wrap');
      const videoWrap  = section.querySelector<HTMLElement>('.home-grid_video-wrap');
      const lightbox   = section.querySelector<HTMLElement>('.home-grid_lightbox');

      // Ensure all images are fully visible initially before scroll
      gsap.set(imageWraps, { opacity: 1, rotationY: 0, rotationX: 0 });
      if (lightbox) gsap.set(lightbox, { opacity: 0 });

      // Master scrub timeline linked to section scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',   // starts as section top hits viewport top
          end:   'bottom bottom',
          scrub: 1,
        },
      });

      // 1 — Image cards flip OUT / fade OUT as user scrolls
      if (imageWraps.length) {
        tl.to(
          imageWraps,
          {
            opacity: 0,
            rotationX: 0,
            rotationY: -180,
            duration: 2.5,
            stagger: { each: 0.08, from: 'center' },
            ease: 'power3.inOut',
          },
          0
        );
      }

      // 2 — Video panel width expands to 100vw
      if (videoWrap) {
        tl.to(
          videoWrap,
          {
            width: '100vw',
            duration: 1.8,
            ease: 'power2.inOut',
          },
          0.3
        );

        // 3 — Video panel height expands to 100vh & border-radius collapses to 0
        tl.to(
          videoWrap,
          {
            height: '100vh',
            borderRadius: 0,
            duration: 1.5,
            ease: 'power2.inOut',
          },
          1.2
        );
      }

      // 4 — Lightbox overlay ("play + showreel") fades in
      if (lightbox) {
        tl.to(
          lightbox,
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power1.inOut',
          },
          2.0
        );
      }
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === section) t.kill();
      });
    };
  }, [sectionRef]);
}
