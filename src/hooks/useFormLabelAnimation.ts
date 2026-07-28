import { useLayoutEffect } from 'react';
import { gsap } from '../utils/gsap';

export function useFormLabelAnimation(containerRef: React.RefObject<Element | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const fields = container.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input.field, textarea.field',
      );

      fields.forEach((field) => {
        const wrap = field.closest('.form-field-wrap');
        if (!wrap) return;
        const label = wrap.querySelector('.field-label:not(.is-radio)');
        if (!label) return;

        gsap.set(label, { transformOrigin: 'left top' });

        const moveUp = () => {
          gsap.to(label, {
            y: -18,
            scale: 0.75,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };

        const moveDown = () => {
          gsap.to(label, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };

        if (field.value && field.value.trim().length > 0) {
          gsap.set(label, { y: -18, scale: 0.75 });
        }

        field.addEventListener('focus', moveUp);
        field.addEventListener('blur', () => {
          if (field.value.trim().length === 0) moveDown();
        });
        field.addEventListener('change', () => {
          if (field.value.trim().length > 0 && document.activeElement !== field) {
            gsap.set(label, { y: -18, scale: 0.75 });
          }
        });
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
