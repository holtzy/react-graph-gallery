import { data } from './data';
import { Heatmap } from './Heatmap';

export const HeatmapCanvasDemo = ({ width = 700, height = 400 }) => (
  <Heatmap data={data} width={width} height={height} />
);
