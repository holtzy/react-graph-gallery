import * as d3 from 'd3';
import { DataItem } from './data';

type PieChartProps = {
  width: number;
  height: number;
  data: DataItem[];
  hoveredGroup: string | null;
  setHoveredGroup: (group: string | null) => void;
};

const MARGIN = 30;

const colors = ['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56'];

export const PieChart = ({
  width,
  height,
  data,
  hoveredGroup,
  setHoveredGroup,
}: PieChartProps) => {
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
    <svg width={width} height={height} style={{ display: 'inline-block' }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          const name = data[i].name;

          const opacity = name === hoveredGroup ? 1 : 0.7;
          const strokeColor = name === hoveredGroup ? 'black' : colors[i];

          return (
            <path
              key={i}
              d={arc}
              fill={colors[i]}
              stroke={strokeColor}
              onMouseOver={() => setHoveredGroup(name)}
              onMouseLeave={() => setHoveredGroup(null)}
              cursor={'pointer'}
              opacity={opacity}
            />
          );
        })}
      </g>
    </svg>
  );
};
