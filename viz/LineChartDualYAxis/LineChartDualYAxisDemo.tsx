import { data } from './data';
import { LineChart } from './LineChart';

type LineChartDualYAxisDemoProps = {
  width?: number;
  height?: number;
  leftDomain: [number, number];
  rightDomain: [number, number];
};

export const LineChartDualYAxisDemo = ({
  width = 700,
  height = 400,
  leftDomain,
  rightDomain,
}: LineChartDualYAxisDemoProps) => {
  return (
    <LineChart
      data={data}
      width={width}
      height={height}
      leftDomain={leftDomain}
      rightDomain={rightDomain}
    />
  );
};
