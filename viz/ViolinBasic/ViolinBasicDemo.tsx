import { data } from "./data";
import { Violin } from "./Violin";

export const ViolinBasicDemo = ({ width = 700, height = 400 }) => (
  <Violin width={width} height={height} data={data} />
);
