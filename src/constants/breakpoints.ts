export const BREAKPOINTS = {
  xxs: 460,
  xs: 576,
  sm: 768,
  md: 960,
  lg: 1248,
  xl: 1632,
  xxl: 1920,
} as const;

export const BREAKPOINT_KEYS = Object.keys(BREAKPOINTS) as Array<
  keyof typeof BREAKPOINTS
>;
