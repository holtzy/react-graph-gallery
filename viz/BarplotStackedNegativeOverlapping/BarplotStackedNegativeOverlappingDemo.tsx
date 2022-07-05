import { data } from "./data";
import { StackedBarplot } from "./StackedBarplot";

export const BarplotStackedNegativeOverlappingDemo = ({
  width = 700,
  height = 400,
}) => <StackedBarplot data={data} width={width} height={height} />;
