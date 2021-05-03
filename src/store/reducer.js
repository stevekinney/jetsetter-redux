import uniqueId from 'lodash/uniqueId';
import { combineReducers } from 'redux';

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

export const itemsReducer = (state = initialState, action) => {
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

export const reducer = combineReducers({ items: itemsReducer });
