import { data } from "./data";
import { Treemap } from "./Treemap";

export const TreemapHoverEffectDemo = ({ width = 700, height = 400 }) => (
  <Treemap data={data} width={width} height={height} />
);
