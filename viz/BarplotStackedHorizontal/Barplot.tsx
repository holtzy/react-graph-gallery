import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

type BarplotProps = {
  width: number;
  height: number;
  data: { group: string; subgroup: string; value: number }[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const groups = [...new Set(data.map((d) => d.group))];
  const subGroups = [...new Set(data.map((d) => d.subgroup))];

  // Reformat the dataset
  const stack = d3
    .stack()
    .keys(subGroups)
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone)
    .value((d, key) => data.filter((item) => item.group === d)[0].value);
  const series = stack(groups);

  // Y axis is for groups since the barplot is horizontal
  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, boundsHeight])
      .padding(BAR_PADDING);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, 400]) // todo
      .range([0, boundsWidth]);
  }, [data, width]);

  // Color Scale
  var colorScale = d3
    .scaleOrdinal<string>()
    .domain(subGroups)
    .range(["#e85252", "#6689c6", "#9a6fb0"]);

  const rectangles = series.map((subgroup, i) => {
    return (
      <g key={i}>
        {subgroup.map((group, j) => {
          return (
            <>
              <rect
                key={j}
                y={yScale(group.data)}
                height={yScale.bandwidth()}
                x={xScale(group[0])}
                width={xScale(group[1]) - xScale(group[0])}
                fill={colorScale(subgroup.key)}
                opacity={0.9}
              ></rect>
            </>
          );
        })}
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
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {grid}
          {rectangles}
        </g>
      </svg>
    </div>
  );
};
