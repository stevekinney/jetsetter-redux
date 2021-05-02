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
