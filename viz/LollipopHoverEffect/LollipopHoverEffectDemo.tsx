import { data } from "./data";
import { Dumbbell } from "./Dumbbell";

export const LollipopHoverEffectDemo = ({ width = 700, height = 400 }) => (
  <Dumbbell data={data} width={width} height={height} />
);
