import { CircularPacking } from "./CircularPacking";
import { data } from "./data";

export const CircularPackingBasicDemo = ({ width = 700, height = 400 }) => {
  // TODO component should render even with width = 0
  if (width === 0) {
    return null;
  }

  return <CircularPacking width={width} height={height} data={data} />;
};
