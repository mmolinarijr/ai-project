const ItemList = ({ items }: { items: string[] }) => {
  return (
    <ul className="py-2 my-2">
      {items.map((item, index) => (
        <li className="list-disc" key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
