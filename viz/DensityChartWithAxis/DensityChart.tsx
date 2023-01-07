import { useMemo } from "react";
import * as d3 from "d3";
import { AxisBottom } from "./AxisBottom";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type DensityChartProps = {
  width: number;
  height: number;
  data: number[];
};

export const DensityChart = ({ width, height, data }: DensityChartProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = useMemo(() => {
    // const max = Math.max(...data);
    return d3
      .scaleLinear()
      .domain([0, 1000]) // note: limiting to 1000 instead of max here because of extreme values in the dataset
      .range([10, boundsWidth - 10]);
  }, [data, width]);

  // Compute kernel density estimation
  const density = useMemo(() => {
    const kde = kernelDensityEstimator(kernelEpanechnikov(7), xScale.ticks(40));
    return kde(data);
  }, [xScale]);

  const yScale = useMemo(() => {
    const max = Math.max(...density.map((d) => d[1]));
    return d3.scaleLinear().range([boundsHeight, 0]).domain([0, max]);
  }, [data, height]);

  const path = useMemo(() => {
    const lineGenerator = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]))
      .curve(d3.curveBasis);
    return lineGenerator(density);
  }, [density]);

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        <path
          d={path}
          fill="#9a6fb0"
          opacity={0.4}
          stroke="black"
          strokeWidth={1}
          strokeLinejoin="round"
        />

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
