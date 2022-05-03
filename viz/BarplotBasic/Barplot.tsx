import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 150 };

type BarplotProps = {
  width: number;
  height: number;
  data: { group: string; value: number }[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis is for groups since the barplot is horizontal
  const groups = data.map((d) => d.group);
  const yScale = useMemo(() => {
    return d3.scaleBand().domain(groups).range([0, boundsHeight]).padding(0.3);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, boundsWidth]);
  }, [data, width]);

  //   // Render the X and Y axis using d3.js, not react
  //   useEffect(() => {
  //     const svgElement = d3.select(axesRef.current);
  //     svgElement.selectAll("*").remove();
  //     const xAxisGenerator = d3.axisBottom(xScale);
  //     svgElement
  //       .append("g")
  //       .attr("transform", "translate(0," + boundsHeight + ")")
  //       .call(xAxisGenerator);

  //     const yAxisGenerator = d3.axisLeft(yScale);
  //     svgElement.append("g").call(yAxisGenerator);
  //   }, [xScale, yScale, boundsHeight]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    return (
      <g key={i}>
        <rect
          x={xScale(0)}
          y={yScale(d.group)}
          width={xScale(d.value)}
          height={yScale.bandwidth()}
          opacity={0.7}
          stroke="#9d174d"
          fill="#9d174d"
          fillOpacity={0.3}
          strokeWidth={1}
          rx={1}
        />
        <text
          x={xScale(d.value) - 7}
          y={yScale(d.group) + yScale.bandwidth() / 2}
          textAnchor="end"
          alignmentBaseline="central"
          fontSize={12}
        >
          {d.value}
        </text>
        <text
          x={xScale(0) + 7}
          y={yScale(d.group) + yScale.bandwidth() / 2}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={12}
        >
          {d.group}
        </text>
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
