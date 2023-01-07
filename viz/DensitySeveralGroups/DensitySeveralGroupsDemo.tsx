import { data } from "./data";
import { Density } from "./Density";

export const DensitySeveralGroupsDemo = ({ width = 700, height = 400 }) => (
  <Density width={width} height={height} data={data} />
);
