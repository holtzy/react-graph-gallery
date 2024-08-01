import { data } from './data';
import { ResponsiveDensityChart } from './DensityChart';

export const DensityChartBasicDemo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <ResponsiveDensityChart data={data} />
  </div>
);
