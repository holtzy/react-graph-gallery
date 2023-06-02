import * as d3 from "d3";
import styles from "./streamgraph.module.css";
import { AnimatedPathItem } from "./AnimatedPath";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

const OFFSET_TYPES = {
  silouhette: d3.stackOffsetSilhouette,
  wiggle: d3.stackOffsetWiggle,
  none: d3.stackOffsetNone,
  diverging: d3.stackOffsetDiverging,
  expand: d3.stackOffsetExpand,
};

const CURVE_TYPES = {
  curveBasis: d3.curveBasis,
  bumpX: d3.curveBumpX,
  bumpY: d3.curveBumpY,
  curveCardinal: d3.curveCardinal,
  catMullRom: d3.curveCatmullRom,
  curveLinear: d3.curveLinear,
  curveNatural: d3.curveNatural,
  curveStep: d3.curveStep,
};

type StreamGraphProps = {
  width: number;
  height: number;
  data: { [key: string]: number }[];
  offsetType: string;
  curveType: string;
};

export const StreamGraph = ({
  width,
  height,
  data,
  offsetType,
  curveType,
}: StreamGraphProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const groups = ["groupA", "groupB", "groupC", "groupD"];

  // Data Wrangling: stack the data
  const stackSeries = d3
    .stack()
    .keys(groups)
    .order(d3.stackOrderNone)
    .offset(OFFSET_TYPES[offsetType]);
  const series = stackSeries(data);

  // Y axis
  const topYValues = series.flatMap((s) => s.map((d) => d[1])); // Extract the upper values of each data point in the stacked series
  const yMax = Math.max(...topYValues);

  const bottomYValues = series.flatMap((s) => s.map((d) => d[0])); // Extract the upper values of each data point in the stacked series
  const yMin = Math.min(...bottomYValues);

  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([boundsHeight, 0]);

  // X axis
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = d3
    .scaleLinear()
    .domain([xMin || 0, xMax || 0])
    .range([0, boundsWidth]);

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
    .curve(CURVE_TYPES[curveType]);

  const allPath = series.map((serie, i) => {
    const path = areaBuilder(serie);
    if (!path) {
      console.log("null");
      return null;
    }
    return (
      <AnimatedPathItem key={i} path={path} color={colorScale(serie.key)} />
    );
  });

  console.log({ allPath });

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
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {grid}
          <g className={styles.container}>{allPath}</g>
        </g>
      </svg>
    </div>
  );
};
