import { CommonComponentProps } from '@types';
import classNames from 'classnames';
import type { ComponentType } from "react";

const mainClass = 'list';
const itemClass = 'item';

interface ListProps<Item> extends CommonComponentProps {
  items: Array<Item>;
  ItemTemplate: ComponentType<Item & CommonComponentProps>;
  itemKeyPropName?: keyof Item;
}

export const List = <Item,>({
  className,
  items,
  ItemTemplate,
                              itemKeyPropName,
}: ListProps<Item>) => {
  return (
    <ul className={classNames(mainClass, className)}>
      {items.map((item, idx) => (
        <li
          key={itemKeyPropName && item[itemKeyPropName] ? `${item[itemKeyPropName]}` : idx}
          className={classNames(itemClass)}
        >
          {/* @ts-expect-error TODO: TS ERROR */}
          <ItemTemplate {...item} />
        </li>
      ))}
    </ul>
  );
}
