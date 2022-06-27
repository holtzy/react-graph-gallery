import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 10, right: 10, bottom: 50, left: 50 };

type HeatmapProps = {
  width: number;
  height: number;
  data: { x: string; y: string; value: number | null }[];
};

export const Heatmap = ({ width, height, data }: HeatmapProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // groups
  const allYGroups = useMemo(() => [...new Set(data.map((d) => d.y))], [data]);
  const allXGroups = useMemo(() => [...new Set(data.map((d) => d.x))], [data]);

  const [min, max] = d3.extent(data.map((d) => d.value));

  // x and y scales
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([0, boundsWidth])
      .domain(allXGroups)
      .padding(0.01);
  }, [data, width]);

  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([boundsHeight, 0])
      .domain(allYGroups)
      .padding(0.01);
  }, [data, height]);

  // Color scale
  var colorScale = d3
    .scaleSequential()
    .range(["#E8F8F5", "#17202A"])
    .domain([min, max]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    if (d.value === null) {
      return;
    }
    return (
      <rect
        key={i}
        r={4}
        x={xScale(d.x)}
        y={yScale(d.y)}
        width={xScale.bandwidth()}
        height={yScale.bandwidth()}
        opacity={1}
        fill={colorScale(d.value)}
      />
    );
  });

  const xLabels = allXGroups.map((name, i) => {
    if (name % 10 === 0) {
      return (
        <text
          key={i}
          x={xScale(name)}
          y={boundsHeight + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={10}
        >
          {name}
        </text>
      );
    }
  });

  const yLabels = allYGroups.map((name, i) => (
    <text
      key={i}
      x={-5}
      y={yScale(name) + yScale.bandwidth() / 2}
      textAnchor="end"
      dominantBaseline="middle"
      fontSize={10}
    >
      {name}
    </text>
  ));

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allShapes}
          {xLabels}
          {yLabels}
        </g>
      </svg>
    </div>
  );
};
