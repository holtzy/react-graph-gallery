import { data } from "./data";
import { ParallelCoordinate } from "./ParallelCoordinate";

export const ParallelCoordinateAxesOnlyDemo = ({
  width = 700,
  height = 400,
}) => (
  <ParallelCoordinate
    data={data}
    width={width}
    height={height}
    variables={["petalLength", "petalWidth", "sepalLength", "sepalWidth"]}
  />
);
