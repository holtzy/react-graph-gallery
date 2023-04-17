import { data } from "./data";
import { ParallelCoordinate } from "./ParallelCoordinate";

export const ParallelCoordinateBasicDemo = ({ width = 700, height = 400 }) => (
  <ParallelCoordinate
    data={data}
    width={width}
    height={height}
    variables={["var1", "var2", "var3", "var4"]}
  />
);
