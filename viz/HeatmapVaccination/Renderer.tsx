import { useMemo } from "react";
import * as d3 from "d3";
import { InteractionData } from "./Heatmap";
import { COLORS, MARGIN, THRESHOLDS } from "./constants";
import styles from "./renderer.module.css";

type RendererProps = {
  width: number;
  height: number;
  data: { x: string; y: string; value: number | null }[];
  setHoveredCell: (hoveredCell: InteractionData | null) => void;
};

export const Renderer = ({
  width,
  height,
  data,
  setHoveredCell,
}: RendererProps) => {
  // The bounds (=area inside the axis)
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
      .padding(0.1);
  }, [data, width]);

  const yScale = useMemo(() => {
    return d3
      .scaleBand<string>()
      .range([0, boundsHeight])
      .domain(allYGroups)
      .padding(0.1);
  }, [data, height]);

  // Color scale
  const colorScale = d3
    .scaleLinear<string>()
    .domain(THRESHOLDS.map((t) => t * max))
    .range(COLORS);

  // Build the shapes
  const allRects = data.map((d, i) => {
    if (d.value === null) {
      return;
    }
    return (
      <rect
        key={i}
        x={xScale(d.x)}
        y={yScale(d.y)}
        className={styles.rectangle}
        width={xScale.bandwidth()}
        height={yScale.bandwidth()}
        fill={d.value ? colorScale(d.value) : "#F8F8F8"}
        onMouseEnter={(e) => {
          setHoveredCell({
            xLabel: d.x,
            yLabel: d.y,
            xPos: xScale(d.x) + xScale.bandwidth() + MARGIN.left, // todo, is it the best way?
            yPos: yScale(d.y) + xScale.bandwidth() / 2 + MARGIN.top,
            value: Math.round(d.value * 100) / 100,
          });
        }}
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
          stroke="none"
          fill="black"
        >
          {name}
        </text>
      );
    }
  });

  const yLabels = allYGroups.map((name, i) => {
    if (i % 2 === 0) {
      return (
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
      );
    }
  });

  return (
    <svg
      width={width}
      height={height}
      onMouseLeave={() => setHoveredCell(null)}
    >
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {allRects}
        {xLabels}
        {yLabels}
      </g>
    </svg>
  );
};
