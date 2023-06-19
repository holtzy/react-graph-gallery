import { CircularPacking } from "./CircularPacking";
import { data } from "./data";

export const CircularPackingBasicDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }

  return <CircularPacking width={width} height={height} data={data} />;
};
