import { useMemo } from "react";
import * as d3 from "d3";
import { HoveredCell } from "./Heatmap";

const MARGIN = { top: 10, right: 10, bottom: 30, left: 30 };

type RendererProps = {
  width: number;
  height: number;
  data: { x: string; y: string; value: number | null }[];
  setHoveredCell: (hoveredCell: HoveredCell | null) => void;
};

export const Renderer = ({
  width,
  height,
  data,
  setHoveredCell,
}: RendererProps) => {
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
    .interpolator(d3.interpolateInferno)
    .domain([min, max]);

  // Build the rectangles
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
        rx={5}
        stroke={"white"}
        onMouseEnter={(e) => {
          setHoveredCell({
            xLabel: "group " + d.x,
            yLabel: "group " + d.y,
            xPos: xScale(d.x) + xScale.bandwidth() + MARGIN.left, // todo, is it the best way?
            yPos: yScale(d.y) + xScale.bandwidth() / 2 + MARGIN.top,
            value: Math.round(d.value * 100) / 100,
          });
        }}
        onMouseLeave={() => setHoveredCell(null)}
      />
    );
  });

  const xLabels = allXGroups.map((name, i) => {
    return (
      <text
        key={i}
        x={xScale(name) + xScale.bandwidth() / 2}
        y={boundsHeight + 10}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={10}
      >
        {name}
      </text>
    );
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
  );
};
