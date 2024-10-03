import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export const useThrottle =  <Callback extends Function>(cb: Callback, limit = 300) => {
  const lastRun = useRef(Date.now());

  return function () {
    if (Date.now() - lastRun.current >= limit) {
      cb(); // Execute the callback
      lastRun.current = Date.now(); // Update last execution time
    }
  };
}
