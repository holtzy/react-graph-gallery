import { data } from './data';
import { ChartAndTitle } from './ChartAndTitle';

export const BarplotStackedAlternativeDemo = ({
  width = 700,
  height = 700,
}) => <ChartAndTitle data={data} width={width} height={height} />;
