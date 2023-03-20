import { useMemo } from "react";
import * as d3 from "d3";
import { animated, useSpring, config } from "react-spring";
import { ShapeRenderer } from "./ShapeRenderer";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

const MARGIN_PIE = 30;

type DataItem = {
  name: string;
  value?: number;
};

type DonutBarplotChartProps = {
  width: number;
  height: number;
  data: DataItem[];
  type: "bar" | "pie";
};

const colors = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];

export const DonutBarplotChart = ({
  width,
  height,
  data,
  type,
}: DonutBarplotChartProps) => {
  // Sort by alphabetical to maximise consistency between dataset
  const sortedData = data.sort((a, b) => b.value - a.value);
  const groups = sortedData.map((d) => d.name);

  const radius = Math.min(width, height) / 2 - MARGIN_PIE;

  const pie = useMemo(() => {
    const pieGenerator = d3
      .pie<any, DataItem>()
      .value((d) => d.value || 0)
      .sort(null); // Do not apply any sorting, respect the order of the provided dataset
    return pieGenerator(sortedData);
  }, [data]);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

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
    const max = d3.max(data.map((d) => d.value || 0));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, boundsWidth]);
  }, [data, width]);

  const allPaths = pie.map((slice, i) => {
    const arcPathGenerator = d3.arc();

    const arcPath = arcPathGenerator({
      innerRadius: 40,
      outerRadius: radius,
      startAngle: slice.startAngle,
      endAngle: slice.endAngle,
    });

    const y = yScale(slice.data.name) - height / 2;
    const x = xScale(slice.value) - width / 2;
    const x0 = xScale(0) - width / 2;
    const bw = yScale.bandwidth();

    const rectPath = `M ${x0} ${y} L ${x} ${y} L ${x} ${y + bw} L ${x0} ${
      y + bw
    } Z`;

    return (
      <ShapeRenderer
        key={slice.data.name}
        path={type === "pie" ? arcPath : rectPath}
        color={colors[i]}
      />
    );
  });

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>{allPaths}</g>
    </svg>
  );
};
