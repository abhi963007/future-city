import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from '../utils/gsap';

let lenisInstance: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function useLenis(): Lenis | null {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize only once
    if (lenisInstance) {
      lenisRef.current = lenisInstance;
      return;
    }

    const lenis = new Lenis({
      autoRaf: false, // We use GSAP ticker instead
      anchors: true,
      allowNestedScroll: true,
    });

    lenisInstance = lenis;
    lenisRef.current = lenis;

    // Integrate with GSAP ticker
    function onRaf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onRaf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisRef.current;
}
