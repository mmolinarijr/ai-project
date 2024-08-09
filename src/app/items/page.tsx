import ItemList from '@/components/ItemList';
import items from '@/db/items.json';
import ReturnButton from '@/components/layout/ReturnButton';

const Items = () => {
  return (
    <>
      <ReturnButton />
      <ItemList items={items} />
    </>
  )
};

export default Items;
