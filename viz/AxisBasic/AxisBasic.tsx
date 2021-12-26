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
  const xScale = useMemo(
    () => d3.scaleLinear().domain([0, 10]).range([0, boundsWidth]),
    [width]
  );
  const yScale = useMemo(
    () => d3.scaleLinear().domain([0, 11]).range([boundsHeight, 0]),
    [width]
  );

  return (
    <div>
      <svg width={width} height={height}>
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
