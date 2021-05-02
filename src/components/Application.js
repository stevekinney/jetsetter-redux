import { NewItem } from './NewItem';
import { Items } from './Items';

export const Application = () => {
  return (
    <div className="Application">
      <NewItem />
      <Items title="Unpacked Items" />
      <Items title="Packed Items" />
      <button className="button full-width">Mark All As Unpacked</button>
    </div>
  );
};

export default Application;
