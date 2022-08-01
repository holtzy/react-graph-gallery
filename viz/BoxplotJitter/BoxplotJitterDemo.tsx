import { data } from "./data";
import { Boxplot } from "./Boxplot";

export const BoxplotJitterDemo = ({ width = 700, height = 400 }) => (
  <Boxplot data={data} width={width} height={height} />
);
