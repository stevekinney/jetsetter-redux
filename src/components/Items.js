import { connect } from 'react-redux';
import { Item } from './Item';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    items: state.items.filter((item) => item.packed === ownProps.packed)
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
