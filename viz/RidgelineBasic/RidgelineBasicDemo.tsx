import { data } from "./data";
import { Ridgeline } from "./Ridgeline";

export const RidgelineBasicDemo = ({ width = 700, height = 400 }) => (
  <Ridgeline width={width} height={height} data={data} />
);
