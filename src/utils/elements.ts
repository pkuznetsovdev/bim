export const getClassNameByMods = (className: string, mods: ElementMods = []) =>
  mods.filter(Boolean).map((mod) => `${className}--${mod}`);
