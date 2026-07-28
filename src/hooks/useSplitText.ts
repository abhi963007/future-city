import { useLayoutEffect, useRef } from 'react';
import { gsap, SplitText } from '../utils/gsap';

interface SplitTextOptions {
  type?: 'lines' | 'words' | 'chars' | 'lines,words' | 'lines,words,chars';
}

export function useSplitText(
  targetRef: React.RefObject<Element | null>,
  animateCallback: (split: InstanceType<typeof SplitText>) => gsap.core.Timeline,
  options: SplitTextOptions = { type: 'lines' },
  deps: React.DependencyList = [],
) {
  const splitRef = useRef<InstanceType<typeof SplitText> | null>(null);

  useLayoutEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(el, { type: options.type ?? 'lines' });
      splitRef.current = split;
      animateCallback(split);
    }, el);

    return () => {
      ctx.revert();
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
