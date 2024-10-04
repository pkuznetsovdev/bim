import { useMemo } from 'react';

import { BreakpointKey } from '@types';
import { BREAKPOINT_KEYS } from '@constants';
import { useIsBreakpoint } from './use-is-breakpoint';

const getValueByBreakpoint =
  (currentBpKey: BreakpointKey) =>
  <Value = unknown>(
    defaultValue: Value,
    responsiveValues: Partial<Record<BreakpointKey, Value>>,
  ) => {
    const currenBPIndex = BREAKPOINT_KEYS.indexOf(currentBpKey);

    // eslint-disable-next-line no-plusplus
    for (let i = currenBPIndex; i >= 0; i--) {
      const bpKeyByIndex = BREAKPOINT_KEYS[i];

      if (Object.hasOwn(responsiveValues, bpKeyByIndex)) {
        return responsiveValues[bpKeyByIndex];
      }
    }

    return defaultValue;
  };

export const useGetValueByBreakpoint = () => {
  const { bpName } = useIsBreakpoint();

  return useMemo(() => getValueByBreakpoint(bpName), [bpName]);
};
