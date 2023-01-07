import { useMemo } from "react";
import * as d3 from "d3";
import { AxisBottom } from "./AxisBottom";

const MARGIN = { top: 30, right: 30, bottom: 40, left: 50 };

const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];

type DensityProps = {
  width: number;
  height: number;
  data: { name: string; values: number[] }[];
};

export const Density = ({ width, height, data }: DensityProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroupNames = data.map((group) => group.name);

  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allGroupNames)
    .range(COLORS);

  const xScale = useMemo(() => {
    const max = Math.max(...data.map((group) => Math.max(...group.values)));
    const min = Math.min(...data.map((group) => Math.min(...group.values)));
    const range = max - min;
    return d3
      .scaleLinear()
      .domain([min - range * 0.2, max + range * 0.2]) // Add 20%: smoothing ends up out of the data bounds when drawing
      .range([10, boundsWidth])
      .nice();
  }, [data, width]);

  // Function that computes a kernel density based on an array of number
  const densityGenerator = kernelDensityEstimator(
    kernelEpanechnikov(2),
    xScale.ticks(40)
  );

  // Compute densities for all groups before drawing.
  // We need all densities to be able to know the max of the Y axis
  const densityData = data.map((group, i) => {
    const density = densityGenerator(group.values);
    return {
      name: group.name,
      density,
    };
  });

  const allYMax = densityData.map((group) =>
    Math.max(...group.density.map((d) => d[1]))
  );
  const yMax = Math.max(...allYMax);

  const yScale = useMemo(() => {
    return d3.scaleLinear().range([boundsHeight, 0]).domain([0, yMax]);
  }, [data, height]);

  const pathGenerator = d3
    .line()
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]))
    .curve(d3.curveBasis);

  const allShapes = densityData.map((group, i) => {
    const path = pathGenerator(group.density);
    return (
      <path
        key={i}
        d={path}
        fill={colorScale(group.name)}
        opacity={0.4}
        stroke="black"
        strokeWidth={1}
        strokeLinejoin="round"
      />
    );
  });

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {allShapes}
        {/* X axis, use an additional translation to appear at the bottom */}
        <g transform={`translate(0, ${boundsHeight})`}>
          <AxisBottom xScale={xScale} pixelsPerTick={40} />
        </g>
      </g>
    </svg>
  );
};

// TODO: improve types
// Function to compute density
function kernelDensityEstimator(kernel: (v: number) => number, X: number[]) {
  return function (V: number[]) {
    return X.map((x) => [x, d3.mean(V, (v) => kernel(x - v))]);
  };
}

function kernelEpanechnikov(k: number) {
  return function (v: number) {
    return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0;
  };
}
