import * as d3 from 'd3';
import { DataItem } from './data';

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;
const colors = ['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56'];

type BarplotProps = {
  width: number;
  height: number;
  data: DataItem[];
  hoveredGroup: string | null;
  setHoveredGroup: (group: string | null) => void;
};

export const Barplot = ({
  width,
  height,
  data,
  hoveredGroup,
  setHoveredGroup,
}: BarplotProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis is for groups since the barplot is horizontal
  const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);
  const yScale = d3
    .scaleBand()
    .domain(groups)
    .range([0, boundsHeight])
    .padding(BAR_PADDING);

  // X axis
  const [min, max] = d3.extent(data.map((d) => d.value));
  const xScale = d3
    .scaleLinear()
    .domain([0, max || 10])
    .range([0, boundsWidth]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    const y = yScale(d.name);

    const opacity = d.name === hoveredGroup ? 1 : 0.7;
    const strokeColor = d.name === hoveredGroup ? 'black' : colors[i];

    if (y === undefined) {
      return null;
    }

    return (
      <g key={i}>
        <rect
          x={xScale(0)}
          y={yScale(d.name)}
          width={xScale(d.value)}
          height={yScale.bandwidth()}
          opacity={opacity}
          stroke={strokeColor}
          fill={colors[i]}
          fillOpacity={opacity}
          strokeWidth={1}
          rx={1}
          onMouseOver={() => setHoveredGroup(d.name)}
          onMouseLeave={() => setHoveredGroup(null)}
          cursor={'pointer'}
        />
        <text
          x={xScale(0) + 7}
          y={y + yScale.bandwidth() / 2}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={12}
          opacity={opacity}
        >
          {d.name}
        </text>
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
