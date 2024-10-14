export const getClassNameByMods = (
  className: string,
  mods: ElementMods = [],
  ...restMods: ElementMods
) =>
  [...mods, ...restMods].filter(Boolean).map((mod) => `${className}--${mod}`);
