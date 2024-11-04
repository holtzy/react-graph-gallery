import * as d3 from 'd3';
import { data, DataItem } from './data';

const MARGIN = 30;
const width = 400;
const height = 400;
const colors = ['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56'];

export const Graph = () => {
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
  const pie = pieGenerator(data);

  const arcPathGenerator = d3.arc();
  const arcs = pie.map((p) =>
    arcPathGenerator({
      innerRadius: 0,
      outerRadius: radius,
      startAngle: p.startAngle,
      endAngle: p.endAngle,
    })
  );

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          return <path key={i} d={arc} fill={colors[i]} />;
        })}
      </g>
    </svg>
  );
};
