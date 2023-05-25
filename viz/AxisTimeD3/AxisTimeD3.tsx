import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { StripGenerator } from "./StripeGenerator";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type AxisTimeD3Props = {
  width: number;
  height: number;
};

export const AxisTimeD3 = ({ width, height }: AxisTimeD3Props) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const start = new Date("2020-12-01");
  const end = new Date("2023-06-01");

  // X axis
  const xScale = d3.scaleTime().domain([start, end]).range([0, boundsWidth]);

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
      .call(xAxisGenerator.ticks(8)); // How many ticks are targeted

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
