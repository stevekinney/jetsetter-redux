import { Item } from './Item';
import { useSelector } from 'react-redux';

export const Items = ({ title = 'Items', filter = true }) => {
  const items = useSelector((state) => state);

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
