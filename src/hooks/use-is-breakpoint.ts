import { useContext } from "react";

import { BreakpointsContext } from "@providers";

export function useIsBreakpoint() {
  return useContext(BreakpointsContext);
}
