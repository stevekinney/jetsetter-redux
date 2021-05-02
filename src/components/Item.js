export const Item = ({ item = {} }) => {
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {}}
          id={'item-' + item.id + '-toggle'}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={() => {}}>
        Remove
      </button>
    </article>
  );
};
