import { useMemo } from "react";
import * as d3 from "d3";
import styles from "./dumbbell.module.css";
const MARGIN = { top: 30, right: 30, bottom: 30, left: 80 };

type DumbbellProps = {
  width: number;
  height: number;
  data: { name: string; value1: number; value2: number }[];
};

export const Dumbbell = ({ width, height, data }: DumbbellProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis is for groups since the barplot is horizontal
  const groups = data.sort((a, b) => b.value1 - a.value1).map((d) => d.name);
  const yScale = useMemo(() => {
    return d3.scaleBand().domain(groups).range([0, boundsHeight]);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value1));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, boundsWidth]);
  }, [data, width]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    const yTop = yScale(d.name);

    if (!yTop) {
      return null;
    }
    const y = yTop + yScale.bandwidth() / 2;

    const hoverBandPadding = 6;

    return (
      <g key={i} className={styles.row}>
        <rect
          width={width}
          height={yScale.bandwidth()}
          x={0}
          y={y}
          fill="transparent"
        />
        <rect
          width={width}
          height={yScale.bandwidth() - hoverBandPadding}
          x={-MARGIN.left}
          y={yTop + hoverBandPadding / 2}
          fill="grey"
          rx={5}
          className={styles.highlightRect}
        />
        <line
          x1={xScale(d.value1)}
          y1={y}
          y2={y}
          x2={xScale(d.value2)}
          opacity={0.7}
          stroke="grey"
          strokeWidth={1}
        />
        <circle
          cy={y}
          cx={xScale(d.value1)}
          opacity={0.7}
          stroke="#69b3a2"
          fill="#69b3a2"
          strokeWidth={1}
          r={5}
        />
        <circle
          cy={y}
          cx={xScale(d.value2)}
          opacity={0.7}
          stroke="#9d174d"
          fill="#9d174d"
          strokeWidth={1}
          r={5}
        />
        <text
          x={xScale(0) - 7}
          y={y}
          textAnchor="end"
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
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {grid}
          <g className={styles.rowsContainer}>{allShapes}</g>
        </g>
      </svg>
    </div>
  );
};
