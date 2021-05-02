import { Item } from './Item';

export const Items = ({ items = [], title = 'Items', packed = true }) => {
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
