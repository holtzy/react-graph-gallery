import { data } from "./data";
import { Barplot } from "./Barplot";

export const BarplotStackedHorizontalDemo = ({ width = 700, height = 400 }) => (
  <Barplot data={data} width={width} height={height} />
);
