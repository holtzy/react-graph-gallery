import { data } from './data';
import { CirclePacking } from './CirclePacking';

export const CircularPackingWithD3ForceDemo = ({
  width = 700,
  height = 400,
}) => {
  if (width === 0) {
    return null;
  }
  return <CirclePacking data={data} width={width} height={height} />;
};
