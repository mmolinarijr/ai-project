'use client';

import Title from "./layout/Title";

const ItemList = ({ items }: { items: string[] }) => {
  return (
    <div>
      <Title title='Commodities' />

      <ul className="py-2 mt-5">
        {items.map((item, index) => (
          <li
            className="list-disc"
            key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
