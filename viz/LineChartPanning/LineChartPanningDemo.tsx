import { data } from "./data";
import { LineChart } from "./LineChart";

export const LineChartPanningDemo = ({ width = 700, height = 400 }) => (
  <LineChart data={data} width={width} height={height} />
);
