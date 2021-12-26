import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { StripGenerator } from "./StripeGenerator";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type AxisBasicD3Props = {
  width: number;
  height: number;
};

export const AxisBasicD3 = ({ width, height }: AxisBasicD3Props) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // X axis
  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 10]).range([0, boundsWidth]);
  }, [width]);

  // Y axis
  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 10]).range([boundsHeight, 0]);
  }, [height]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  return (
    <div>
      <svg width={width} height={height} style={{ display: "inline-block" }}>
        {/* first group is for the violin and box shapes */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <StripGenerator width={boundsWidth} height={boundsHeight} />
        </g>
        {/* Second is for the axes */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
    </div>
  );
};
