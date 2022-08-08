import { data } from "./data";
import { Lollipop } from "./Lollipop";

export const LollipopBasicDemo = ({ width = 700, height = 400 }) => (
  <Lollipop data={data} width={width} height={height} />
);
