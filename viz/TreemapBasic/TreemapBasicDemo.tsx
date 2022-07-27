import { data } from "./data";
import { Treemap } from "./Treemap";

export const TreemapBasicDemo = ({ width = 700, height = 400 }) => (
  <Treemap data={data} width={width} height={height} />
);
