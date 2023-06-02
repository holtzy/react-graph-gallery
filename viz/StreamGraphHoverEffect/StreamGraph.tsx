import { useMemo } from "react";
import * as d3 from "d3";
import { curveCatmullRom } from "d3";
import styles from "./streamgraph.module.css";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type StreamGraphProps = {
  width: number;
  height: number;
  data: { [key: string]: number }[];
};

export const StreamGraph = ({ width, height, data }: StreamGraphProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const groups = ["groupA", "groupB", "groupC", "groupD"];

  // Data Wrangling: stack the data
  const stackSeries = d3
    .stack()
    .keys(groups)
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetSilhouette);
  const series = stackSeries(data);

  // Y axis
  const topYValues = series.flatMap((s) => s.map((d) => d[1])); // Extract the upper values of each data point in the stacked series
  const yMax = Math.max(...topYValues);

  const bottomYValues = series.flatMap((s) => s.map((d) => d[0])); // Extract the upper values of each data point in the stacked series
  const yMin = Math.min(...bottomYValues);

  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([yMin, yMax]).range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([xMin || 0, xMax || 0])
      .range([0, boundsWidth]);
  }, [data, width]);

  // Color
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(groups)
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

  // Build the shapes
  const areaBuilder = d3
    .area<any>()
    .x((d) => {
      return xScale(d.data.x);
    })
    .y1((d) => yScale(d[1]))
    .y0((d) => yScale(d[0]))
    .curve(curveCatmullRom);

  const allPath = series.map((serie, i) => {
    const path = areaBuilder(serie);
    return (
      <path
        key={i}
        className={styles.shape}
        d={path}
        opacity={1}
        stroke="grey"
        fill={colorScale(serie.key)}
        fillOpacity={0.8}
        cursor="pointer"
      />
    );
  });

  const grid = xScale.ticks(5).map((value, i) => (
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
      <svg width={width} height={height} className={styles.container}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {grid}
          {allPath}
        </g>
      </svg>
    </div>
  );
};
