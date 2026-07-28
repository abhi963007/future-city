import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsap';

interface ScrollTriggerConfig {
  trigger?: string | Element | null;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean | string | Element;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  toggleActions?: string;
}

export function useScrollTrigger(
  containerRef: React.RefObject<Element | null>,
  setup: (container: Element) => gsap.core.Timeline | ScrollTrigger | null,
  deps: React.DependencyList = [],
) {
  const cleanupRef = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const instance = setup(container);
      if (instance) {
        cleanupRef.current = () => {
          if (instance instanceof ScrollTrigger) {
            instance.kill();
          } else {
            instance.kill();
          }
        };
      }
    }, container);

    return () => {
      ctx.revert();
      cleanupRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export type { ScrollTriggerConfig };
