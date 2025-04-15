import { useMemo } from 'react';
import * as d3 from 'd3';
import { colorScale } from './utils';

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
  highlightedGroup: string | null;
  setHighlightedGroup: (grp: string | null) => void;
};

export const Barplot = ({
  width,
  height,
  data,
  highlightedGroup,
  setHighlightedGroup,
}: BarplotProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis is for groups since the barplot is horizontal
  const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);
  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, boundsHeight])
      .padding(BAR_PADDING);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, boundsWidth]);
  }, [data, width]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    const y = yScale(d.name);
    if (y === undefined) {
      return null;
    }

    const opacity = highlightedGroup
      ? highlightedGroup === d.name
        ? 1
        : 0.4
      : 1;

    return (
      <g
        key={i}
        onMouseEnter={() => {
          setHighlightedGroup(d.name);
        }}
        onMouseLeave={() => setHighlightedGroup(null)}
      >
        <rect
          x={xScale(0)}
          y={yScale(d.name)}
          width={xScale(d.value)}
          height={yScale.bandwidth()}
          opacity={opacity}
          stroke={colorScale(d.name)}
          fill={colorScale(d.name)}
          fillOpacity={opacity - 0.4}
          strokeWidth={1}
          rx={1}
        />
        <text
          x={xScale(d.value) - 7}
          y={y + yScale.bandwidth() / 2}
          textAnchor="end"
          alignmentBaseline="central"
          fontSize={12}
          opacity={xScale(d.value) > 90 ? 1 : 0} // hide label if bar is not wide enough
        >
          {d.value}
        </text>
        <text
          x={xScale(0) + 7}
          y={y + yScale.bandwidth() / 2}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={12}
        >
          {d.name}
        </text>
      </g>
    );
  });

  const grid = xScale
    .ticks(5)
    .slice(1)
    .map((value, i) => (
      <g key={i}>
        <line
          x1={xScale(value)}
          x2={xScale(value)}
          y1={0}
          y2={boundsHeight}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={xScale(value)}
          y={boundsHeight + 10}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={9}
          stroke="#808080"
          opacity={0.8}
        >
          {value}
        </text>
      </g>
    ));

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {grid}
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
