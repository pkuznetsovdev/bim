import { PropsWithChildren, JSX } from 'react';
import classNames from 'classnames';
import { getClassNameByMods } from '@utils';

type BlockTag = 'div' | 'section' | 'main' | 'header' | 'footer';
const DEFAULT_TAG = 'div';

interface BlockTemplateProps<TagName extends BlockTag = typeof DEFAULT_TAG>
  extends PropsWithChildren<{
    as?: TagName;
    mods?: ElementMods;
  }> {}

const mainClass = 'block';

export const Block = <TagName extends BlockTag = typeof DEFAULT_TAG>({
  className,
  children,
  // @ts-expect-error TODO: TS ERROR
  as: Tag = DEFAULT_TAG,
  mods,
  ...props
}: JSX.IntrinsicElements[TagName] & BlockTemplateProps<TagName>) => {
  return (
    // @ts-expect-error TODO: TS ERROR
    <Tag
      {...props}
      className={classNames(
        className,
        mainClass,
        getClassNameByMods(mainClass, mods),
      )}
    >
      {children}
    </Tag>
  );
};
