# Redux Template

A sample React and Redux application for teaching React and Redux.

## Implementing Hooks (Draft)

Update the `initialState`:

```js
export const initialState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Melatonin', id: uniqueId(), packed: true },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Vegan Tuna Sandwich', id: uniqueId(), packed: true }
];
```

Create the actions:

```js
export const itemAdded = (value) => ({
  type: 'item/added',
  payload: { value }
});

export const itemToggled = (id) => ({
  type: 'item/toggled',
  payload: { id }
});

export const itemRemoved = (id) => ({
  type: 'item/removed',
  payload: { id }
});
```

Update the reducer:

```js
export const reducer = (state = initialState, action) => {
  if (action.type === 'items/added') {
    const item = {
      id: uniqueId(),
      value: action.payload.value,
      packed: false
    };
    return [...state, item];
  }

  if (action.type === 'items/toggled') {
    return state.map((item) => {
      if (item.id !== action.payload.id) return item;
      return { ...item, packed: !item.packed };
    });
  }

  if (action.type === 'items/removed') {
    return state.filter((item) => item.id !== action.payload.id);
  }

  return state;
};
```

Load in the items:

```js
import { Item } from './Item';
import { Filter } from './Filter';
import { useSelector } from 'react-redux';

export const Items = ({ title = 'Items', filter = true }) => {
  const items = useSelector((state) => state);

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
```

Pass in props for naming and filtering the list:

```js
export const Application = () => {
  return (
    <div className="Application">
      <NewItem />
      <Items title="Unpacked Items" filter={false} />
      <Items title="Packed Items" filter={true} />
      <button className="button full-width">Mark All As Unpacked</button>
    </div>
  );
};
```

Filter the items based on packed status:

```js
export const Items = ({ title = 'Items', packed = true }) => {
  const items = useSelector((state) => state);
  const filteredItems = items.filter((item) => item.packed === packed);

  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};
```

Add the ability to add a new item:

```js
const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(itemAdded(value));
  setValue('');
};
```

Add the ability to toggle and remove an item:

```js
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
```
