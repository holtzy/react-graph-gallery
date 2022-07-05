import { data } from "./data";
import { DensityChart } from "./DensityChart";

export const DensityChartBasicDemo = ({ width = 700, height = 400 }) => (
  <DensityChart width={width} height={height} data={data} />
);
