import {
  useEffect,
  type RefObject,
} from 'react';

const useResizeObserver = <TElement extends HTMLElement>(
  ref: RefObject<TElement | null>,
  onUpdate: (reizeObserverEntry: ResizeObserverEntry) => void,
) => {
  const element = ref.current;

  useEffect(() => {
    if (!element) {
      return;
    }


    const observer = new window.ResizeObserver((entries) => {
      const entry = entries?.[0];

      if (!entry) {
        return;
      }

      window.requestAnimationFrame(() => {
        onUpdate(entry);
      });
    });

    observer.observe(element);

    return () => observer.disconnect();
  });
};

export default useResizeObserver;
