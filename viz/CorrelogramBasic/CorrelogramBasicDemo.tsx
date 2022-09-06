import { data } from "./data";
import { Correlogram } from "./Correlogram";

export const CorrelogramBasicDemo = ({ width = 700, height = 400 }) => (
  <Correlogram data={data} width={width} height={height} />
);
