import classNames from 'classnames';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { getClassNameByMods } from '@utils';

const mainClass = 'list';
const listItemClass = 'ListItem';

interface ListProps<ListItem extends { id?: string | number }>
  extends ComponentPropsWithoutRef<'ul'> {
  items: Array<ListItem>;
  ItemTemplate: ComponentType<ListItem>;
  itemKeyPropName?: keyof ListItem;
  mods?: ElementMods;
}

export const List = <ListItem extends { id?: string | number }>({
  className,
  items,
  ItemTemplate,
  itemKeyPropName = 'id',
  mods,
}: ListProps<ListItem>) => {
  return (
    <ul
      className={classNames(
        className,
        mainClass,
        getClassNameByMods(mainClass, mods),
      )}
    >
      {items.map((item, idx) => (
        <li
          key={String(item[itemKeyPropName] ?? idx)}
          className={classNames(listItemClass)}
        >
          <ItemTemplate {...item} />
        </li>
      ))}
    </ul>
  );
};
