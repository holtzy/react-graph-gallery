import { data } from './data';
import { SankeyBumpChart } from './SankeyBumpChart';

export const SankeyBumpChartDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return <SankeyBumpChart data={data} width={width} height={height} />;
};
