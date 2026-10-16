import {RefObject, useCallback, useEffect} from 'react';

const useAutoFocus = (ref: RefObject<HTMLElement>, descendantSelector?: string): (() => void) => {
  const focus = useCallback(() => {
    setTimeout(() => {
      const target =
        undefined === descendantSelector ? ref.current : ref.current?.querySelector<HTMLElement>(descendantSelector);
      target?.focus();
    }, 0);
  }, [ref, descendantSelector]);

  useEffect(focus, []);

  return focus;
};

export {useAutoFocus};
