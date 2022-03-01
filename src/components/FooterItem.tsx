import React, { FC } from 'react';
import { IUser } from '../types/types';

interface IFooterItem {
  items: IUser[];
}

const FooterItem: FC<IFooterItem> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <h3>
          {item.name}
          {item.age}
        </h3>
      ))}
    </div>
  );
};

export default FooterItem;
