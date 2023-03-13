import { useMemo } from "react";
import * as d3 from "d3";
import { StripGenerator } from "./StripeGenerator";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type AxisBasicProps = {
  width: number;
  height: number;
};

export const AxisBasic = ({ width, height }: AxisBasicProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Compute the scales (usually done using the dataset as input)
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, boundsWidth]);
  const yScale = d3.scaleLinear().domain([0, 11]).range([boundsHeight, 0]);

  const logScale = d3
    .scaleLog<string>()
    .domain([0.000000000000000000000001, 10])
    .range(["red", "blue"])
    .clamp(true);
  console.log(logScale(4));

  return (
    <div>
      <svg width={width} height={height} shapeRendering={"crispEdges"}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
          overflow={"visible"}
        >
          {/* graph content */}
          <StripGenerator width={boundsWidth} height={boundsHeight} />

          {/* Y axis */}
          <AxisLeft yScale={yScale} pixelsPerTick={30} />

          {/* X axis, use an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom xScale={xScale} pixelsPerTick={60} />
          </g>
        </g>
      </svg>
    </div>
  );
};
