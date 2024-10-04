import { PropsWithChildren, JSX } from "react";
import classNames from 'classnames';
import { getClassNameByMods } from "@utils";

type TextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
const DEFAULT_TAG = 'p';

interface TextTemplateProps<TagName extends TextTag = typeof DEFAULT_TAG> extends PropsWithChildren<{
  as?: TagName;
  mods?: ElementMods;
}> {}

const mainClass = 'text';

export const Text =<TagName extends TextTag = typeof DEFAULT_TAG>({
  className,
                      children,
                                                     // @ts-expect-error TODO: TS ERROR
  as: Tag = DEFAULT_TAG,
                                                     mods,
  ...props
}: JSX.IntrinsicElements[TagName] & TextTemplateProps<TagName>) => {
  return (
    // @ts-expect-error TODO: TS ERROR
    <Tag
      {...props}
      className={classNames(className,mainClass, getClassNameByMods(mainClass, mods))}
    >
      {children}
    </Tag>
  );
};
