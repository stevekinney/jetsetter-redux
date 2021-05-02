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
