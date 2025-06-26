import {RefObject, useEffect} from 'react';

export const usePagination = (
  containerRef: RefObject<HTMLElement>,
  lastOptionRef: RefObject<HTMLElement>,
  onNextPage: (() => void | Promise<void>) | undefined,
  isVisible: boolean,
  data?: unknown
) => {
  useEffect(() => {
    const containerElement = containerRef.current;
    const lastElement = lastOptionRef.current;

    if (!isVisible || onNextPage === undefined || containerElement === null || lastElement === null) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const lastEntry = entries[entries.length - 1];
        if (lastEntry.isIntersecting) {
          void onNextPage();
        }
      },
      {
        root: containerElement,
        rootMargin: '0px 0px 100% 0px',
        threshold: 0,
      }
    );

    observer.observe(lastElement);

    return () => {
      observer.unobserve(lastElement);
    };
  }, [onNextPage, isVisible, data]);
};
