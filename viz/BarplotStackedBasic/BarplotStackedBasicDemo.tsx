import { data } from "./data";
import { StackedBarplot } from "./StackedBarplot";

export const BarplotStackedBasicDemo = ({ width = 700, height = 400 }) => (
  <StackedBarplot data={data} width={width} height={height} />
);
