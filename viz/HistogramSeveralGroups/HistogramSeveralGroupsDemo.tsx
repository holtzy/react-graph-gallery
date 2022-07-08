import { data } from "./data";
import { Histogram } from "./Histogram";

export const HistogramSeveralGroupsDemo = ({ width = 700, height = 400 }) => (
  <Histogram width={width} height={height} data={data} />
);
