export const itemAdded = (value) => ({
  type: 'items/added',
  payload: { value }
});

export const itemToggled = (id) => ({
  type: 'items/toggled',
  payload: { id }
});

export const itemRemoved = (id) => ({
  type: 'items/removed',
  payload: { id }
});
