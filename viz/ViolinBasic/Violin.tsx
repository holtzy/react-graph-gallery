import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { VerticalViolinShape } from "./VerticalViolinShape";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };

type ViolinProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const Violin = ({ width, height, data }: ViolinProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Compute everything derived from the dataset:
  const { min, max, groups } = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value)) as [number, number];
    const groups = data
      .map((d) => d.name)
      .filter((x, i, a) => a.indexOf(x) == i);
    return { min, max, groups };
  }, [data]);

  // Compute scales
  const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);
  const xScale = d3
    .scaleBand()
    .range([0, boundsWidth])
    .domain(groups)
    .padding(0.25);

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

  // Build the shapes
  const allShapes = groups.map((group, i) => {
    const groupData = data.filter((d) => d.name === group).map((d) => d.value);
    return (
      <g key={i} transform={`translate(${xScale(group)},0)`}>
        <VerticalViolinShape
          data={groupData}
          yScale={yScale}
          width={xScale.bandwidth()}
          binNumber={14}
        />
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height} style={{ display: "inline-block" }}>
        {/* first group is for the violin and box shapes */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allShapes}
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
