import classNames from 'classnames';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { getClassNameByMods } from '@utils';

const mainClass = 'list';
const itemClass = 'item';

interface ListProps<Item> extends ComponentPropsWithoutRef<'ul'> {
  items: Array<Item>;
  ItemTemplate: ComponentType<Item>;
  itemKeyPropName?: keyof Item;
  mods?: ElementMods;
}

export function List<Item>({
  className,
  items,
  ItemTemplate,
  itemKeyPropName,
  mods,
}: ListProps<Item>) {
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
          key={
            itemKeyPropName && item[itemKeyPropName]
              ? `${item[itemKeyPropName]}`
              : idx
          }
          className={classNames(itemClass)}
        >
          {/* @ts-expect-error TODO: TS ERROR */}
          <ItemTemplate {...item} />
        </li>
      ))}
    </ul>
  );
}
