import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Item } from './Item';

const selectItems = (state) => state.items;
const selectPackedProp = (_, props) => props.packed;

const selectFilteredItems = createSelector(
  [selectItems, selectPackedProp],
  (items, packed) => items.filter((item) => item.packed === packed)
);

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    items: selectFilteredItems(state, ownProps)
  };
};

const Component = ({ items = [], title = 'Items', packed = true }) => {
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

export const Items = connect(mapStateToProps)(Component);
