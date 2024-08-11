'use client';

import ItemList from '@/components/ItemList';
import items from '@/db/items.json';

const Items = () => {
  return <ItemList items={items} />;
};

export default Items;
