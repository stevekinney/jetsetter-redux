import { Item } from './Item';
import { Filter } from './Filter';

export const Items = ({ items = [], title = 'Items', packed = true }) => {
  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      <Filter />
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};
