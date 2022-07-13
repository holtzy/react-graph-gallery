import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 90, right: 30, bottom: 40, left: 120 };
const X_LIMITS = [-20, 120];
const X_SCALE_PADDING = 20;
const DENSITY_BAND_HEIGHT = 100;

type RidgelineProps = {
  width: number;
  height: number;
  data: { key: string; values: number[] }[];
};

export const Ridgeline = ({ width, height, data }: RidgelineProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups = data.map((group) => group.key);

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain(X_LIMITS).range([10, boundsWidth]).nice();
  }, [data, width]);

  // Render the X axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr(
        "transform",
        "translate(0," + (boundsHeight + X_SCALE_PADDING) + ")"
      )
      .call(xAxisGenerator);
  }, [xScale, boundsHeight]);

  // Compute kernel density estimation for each groups
  const densities = useMemo(() => {
    const kde = kernelDensityEstimator(kernelEpanechnikov(7), xScale.ticks(40));
    return data.map((group) => {
      return {
        key: group.key,
        density: kde(group.values) as [number, number][],
      };
    });
  }, [xScale, data]);

  const densityMax = Math.max(
    ...densities.map((group) => Math.max(...group.density.map((y) => y[1])))
  );

  // Create a Y scale for each density
  const yScale = d3
    .scaleLinear()
    .domain([0, densityMax])
    .range([DENSITY_BAND_HEIGHT, 0]);

  // Create the Y axis for groups
  var groupScale = d3
    .scaleBand()
    .domain(allGroups)
    .range([0, boundsHeight])
    .paddingInner(1);

  const paths = useMemo(() => {
    const lineGenerator = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]))
      .curve(d3.curveBasis);

    return densities.map((group, i) => {
      const path = lineGenerator(group.density);
      return (
        <path
          key={i}
          d={path}
          transform={
            "translate(0," + (groupScale(group.key) - DENSITY_BAND_HEIGHT) + ")"
          }
          fill="purple"
          opacity={0.8}
          stroke="black"
          strokeWidth={0.3}
          strokeLinejoin="round"
        />
      );
    });
  }, [densities]);

  const labels = useMemo(() => {
    return densities.map((group, i) => {
      return (
        <text
          key={i}
          x={-5}
          y={groupScale(group.key)}
          textAnchor="end"
          dominantBaseline="middle"
          fontSize={10}
        >
          {group.key}
        </text>
      );
    });
  }, [densities]);

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {paths}
        {labels}
      </g>
      <g
        width={boundsWidth}
        height={boundsHeight}
        ref={axesRef}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
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
