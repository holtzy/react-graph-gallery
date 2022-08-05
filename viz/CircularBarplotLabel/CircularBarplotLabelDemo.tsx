import { data } from "./data";
import { CircularBarplot } from "./CircularBarplot";

export const CircularBarplotLabelDemo = ({ width = 700, height = 400 }) => (
  <CircularBarplot data={data} width={width} height={height} />
);
