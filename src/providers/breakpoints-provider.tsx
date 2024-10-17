import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { BREAKPOINT_KEYS, BREAKPOINTS } from '@constants';
import { useThrottle } from '@hooks/use-throttle';
import { BreakpointKey } from '@types';
import { capitalize } from '@utils';

type BreakpointsContextType = Record<
  `is${Capitalize<BreakpointKey>}` | `isAbove${Capitalize<BreakpointKey>}`,
  boolean
> & {
  bpName: BreakpointKey;
};

const getBreakPoints = (screenWidth: number) => {
  const isExactAndAboveResults = BREAKPOINT_KEYS.reduce(
    (res, bpKey, bpIndex) => {
      const bpValue = BREAKPOINTS[BREAKPOINT_KEYS[bpIndex]];
      const nextBpValue = BREAKPOINTS[BREAKPOINT_KEYS[bpIndex + 1]];

      const isAboveBp = screenWidth >= bpValue;
      const isExactBp =
        isAboveBp && (!nextBpValue || screenWidth < nextBpValue);

      return {
        ...res,
        [`isAbove${capitalize(bpKey)}`]: screenWidth >= bpValue,
        [`is${capitalize(bpKey)}`]: isExactBp,
        bpName: isExactBp ? bpKey : res.bpName,
      };
    },
    {} as BreakpointsContextType,
  );

  return {
    ...isExactAndAboveResults,
    isMobile: !isExactAndAboveResults.isAboveSm,
    isDesktop: isExactAndAboveResults.isAboveSm,
  };
};

const BreakpointsContext = createContext(getBreakPoints(window.innerWidth));

export const BreakpointsProvider = ({ children }: PropsWithChildren) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useThrottle(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const value = useMemo(
    () => getBreakPoints(windowSize.width),
    [windowSize.width],
  );

  return (
    <BreakpointsContext.Provider value={value}>
      {children}
    </BreakpointsContext.Provider>
  );
};

export function useIsBreakpoint() {
  return useContext(BreakpointsContext);
}
