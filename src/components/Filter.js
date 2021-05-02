import { useCallback } from 'react';

export const Filter = ({ searchTerm = '', onChange = () => {} }) => {
  const handleChange = useCallback(
    (event) => {
      const value = event.target.value;
      onChange(value);
    },
    [onChange]
  );

  return (
    <input
      className="Items-searchTerm"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Filter…"
    />
  );
};
