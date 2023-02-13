import { data } from "./data";
import { CircularBarplot } from "./CircularBarplot";

export const CircularBarplotStackingDemo = ({ width = 700, height = 400 }) => (
  <CircularBarplot data={data} width={width} height={height} />
);
