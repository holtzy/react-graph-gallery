import { data } from "./data";
import { Histogram } from "./Histogram";

export const HistogramBasicDemo = ({ width = 700, height = 400 }) => (
  <div style={{ marginTop: 20, marginBottom: 20 }}>
    <Histogram width={width} height={height - 40} data={data} />
  </div>
);
