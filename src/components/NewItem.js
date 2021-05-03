import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemAdded } from '../store/actions';

export const NewItem = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(itemAdded(value));
    setValue('');
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <input
        className="NewItem-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <input className="NewItem-submit button" type="submit" />
    </form>
  );
};
