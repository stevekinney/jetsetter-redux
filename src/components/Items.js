import { Item } from './Item';
import { useSelector } from 'react-redux';

export const Items = ({ title = 'Items', packed = true }) => {
  const items = useSelector((state) => state.items);
  const filteredItems = items.filter((item) => item.packed === packed);

  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};
