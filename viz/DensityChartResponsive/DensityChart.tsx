import { useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { useDimensions } from './use-dimensions';

type ResponsiveDensityChartProps = {
  data: number[];
};

export const ResponsiveDensityChart = (props: ResponsiveDensityChartProps) => {
  const chartRef = useRef(null);

  const chartSize = useDimensions(chartRef);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }}>
      <DensityChart
        height={chartSize.height}
        width={chartSize.width}
        {...props}
      />
    </div>
  );
};

type DensityChartProps = ResponsiveDensityChartProps & {
  width: number;
  height: number;
};

export const DensityChart = ({ width, height, data }: DensityChartProps) => {
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, 1000]) // note: limiting to 1000 instead of max here because of extreme values in the dataset
      .range([10, width - 10]);
  }, [data, width]);

  // Compute kernel density estimation
  const density = useMemo(() => {
    const kde = kernelDensityEstimator(
      kernelEpanechnikov(10),
      xScale.ticks(40)
    );
    return kde(data);
  }, [xScale]);

  const yScale = useMemo(() => {
    const max = Math.max(...density.map((d) => d[1]));
    return d3.scaleLinear().range([height, 10]).domain([0, max]);
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
      <path
        d={path}
        fill="#9a6fb0"
        opacity={0.4}
        stroke="black"
        strokeWidth={1}
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Function to compute density
function kernelDensityEstimator(kernel, X) {
  return function (V) {
    return X.map(function (x) {
      return [
        x,
        d3.mean(V, function (v) {
          return kernel(x - v);
        }),
      ];
    });
  };
}
function kernelEpanechnikov(k) {
  return function (v) {
    return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0;
  };
}
