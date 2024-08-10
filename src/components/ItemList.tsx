const ItemList = ({ items }: { items: string[] }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Commodities:</h2>

      <ul className="py-2 my-2">
        {items.map((item, index) => (
          <li
            className="list-disc"
            key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
