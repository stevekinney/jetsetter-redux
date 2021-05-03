import { useDispatch } from 'react-redux';
import { itemRemoved, itemToggled } from '../store/actions';

export const Item = ({ item = {} }) => {
  const dispatch = useDispatch();

  const remove = () => dispatch(itemRemoved(item.id));
  const toggle = () => dispatch(itemToggled(item.id));

  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={toggle}
          id={'item-' + item.id + '-toggle'}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={remove}>
        Remove
      </button>
    </article>
  );
};
