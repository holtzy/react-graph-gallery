import { data } from "./data";
import { Hexbin } from "./Hexbin";

export const Density2dHexbinDemo = ({ width = 700, height = 400 }) => (
  <Hexbin data={data} width={width} height={height} />
);
