import { useCallback, useRef, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export const useDebounce = <Callback extends Function>(
  callback: Callback,
  delay = 300,
) => {
  const handlerRef = useRef<ReturnType<typeof setTimeout>>();

  const debouncedCallback = useCallback(
    (...args: Array<unknown>) => {
      if (handlerRef.current) {
        clearTimeout(handlerRef.current);
      }

      handlerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  // Cleanup
  useEffect(
    () => () => {
      if (handlerRef.current) {
        clearTimeout(handlerRef.current);
      }
    },
    [],
  );

  return debouncedCallback;
};
