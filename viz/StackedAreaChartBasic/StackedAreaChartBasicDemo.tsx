import { data } from "./data";
import { StackedAreaChart } from "./StackedAreaChart";

export const StackedAreaChartBasicDemo = ({ width = 700, height = 400 }) => (
  <StackedAreaChart data={data} width={width} height={height} />
);
