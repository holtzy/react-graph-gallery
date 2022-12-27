import { data } from "./data";
import { Contour } from "./Contour";

export const Density2dContourDemo = ({ width = 700, height = 400 }) => (
  <Contour data={data} width={width} height={height} />
);
