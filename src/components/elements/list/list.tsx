import type { ComponentPropsWithoutRef, ComponentType } from 'react';

import classnames from 'classnames';

import { getClassNameByMods } from '@utils';

const mainClass = 'list';
const listItemClass = 'ListItem';

interface ListProps<ListItem> extends ComponentPropsWithoutRef<'ul'> {
  items: Array<ListItem>;
  ItemTemplate: ComponentType<ListItem>;
  itemKeyPropName?: keyof ListItem | 'id';
  mods?: ElementMods;
}

export const List = <ListItem extends object>({
  className,
  items,
  ItemTemplate,
  itemKeyPropName = 'id',
  mods,
}: ListProps<ListItem>) => (
  <ul
    className={classnames(
      className,
      mainClass,
      getClassNameByMods(mainClass, mods),
    )}
  >
    {items.map((item, idx) => (
      <li
        // TODO: eslint
        //  eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        key={String(item[itemKeyPropName] ?? idx)}
        className={classnames(listItemClass)}
      >
        <ItemTemplate {...item} />
      </li>
    ))}
  </ul>
);
