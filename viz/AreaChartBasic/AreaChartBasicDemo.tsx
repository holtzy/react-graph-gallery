import { data } from "./data";
import { AreaChart } from "./AreaChart";

export const AreaChartBasicDemo = ({ width = 700, height = 400 }) => (
  <AreaChart data={data} width={width} height={height} />
);
