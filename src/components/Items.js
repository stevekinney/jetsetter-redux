import { Item } from './Item';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const selectItems = (state) => state.items;
const selectPackedProp = (_, props) => props.packed;

const selectFilteredItems = createSelector(
  [selectItems, selectPackedProp],
  (items, packed) => items.filter((item) => item.packed === packed)
);

export const Items = ({ title = 'Items', packed = true }) => {
  const filteredItems = useSelector((state) =>
    selectFilteredItems(state, { packed })
  );

  return (
    <section className="Items">
      <h2>
        {title} ({filteredItems.length})
      </h2>
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};
