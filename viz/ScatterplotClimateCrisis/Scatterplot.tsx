import { useState } from "react";
import * as d3 from "d3";
import { ScatterplotProps } from "./types";

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  // Sort the data: bigger squares must appear at the bottom
  const sortedData = data.sort((a, b) => b.size - a.size);

  // State
  const [hoveredGroup, setHoveredGroup] = useState<string>();

  // Scales
  const xScale = d3.scaleLinear().domain([0.23, 0.69]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0.12, 0.83]).range([height, 0]);
  const sizeScale = d3.scaleSqrt().domain([0, 32]).range([3, 40]);

  // All squares, 1 per country
  const squares = sortedData.map((d, i) => {
    const size = sizeScale(d.size);
    const x = xScale(d.x); // position of the baricenter of the square
    const y = yScale(d.y);
    const stroke = d.annotation ? "black" : "white";
    const isShown = !hoveredGroup || hoveredGroup === d.categoryy;
    const opacity = isShown ? 1 : 0;

    return (
      <g
        key={i}
        onMouseMove={() => setHoveredGroup(d.categoryy)}
        onMouseLeave={() => setHoveredGroup(undefined)}
        opacity={opacity}
      >
        <rect
          x={x - size / 2}
          y={y - size / 2}
          opacity={1}
          fill={d.color}
          fillOpacity={0.7}
          strokeWidth={0.5}
          stroke={stroke}
          width={size}
          height={size}
        />
      </g>
    );
  });

  // Build the annotations (black rectangle and country name)
  const annotations = sortedData
    .filter((d) => d.annotation)
    .map((d, i) => {
      const size = sizeScale(d.size);

      const x = xScale(d.x); // position of the baricenter of the square
      const y = yScale(d.y);

      const xText =
        d.annotation === "left"
          ? x - size / 2 - 5
          : d.annotation === "right"
          ? x + size / 2 + 5
          : x;

      const yText =
        d.annotation === "top"
          ? y - size / 2 - 7
          : d.annotation === "bottom"
          ? y + size / 2 + 7
          : y;

      const isShown = !hoveredGroup || hoveredGroup === d.categoryy;
      const opacity = isShown ? 1 : 0;

      const textAnchor =
        d.annotation === "left"
          ? "end"
          : d.annotation === "right"
          ? "start"
          : "middle";

      return (
        <g key={i} opacity={opacity}>
          <rect
            x={x - size / 2}
            y={y - size / 2}
            opacity={1}
            fill={"none"}
            strokeWidth={1}
            stroke={"black"}
            width={size}
            height={size}
          />
          <text
            x={xText}
            y={yText}
            fontSize={12}
            fontWeight={500}
            textAnchor={textAnchor} // horizontal alignment
            dominantBaseline={"middle"} // vertical alignment
          >
            {d.name}
          </text>
        </g>
      );
    });

  // Add the X and Y axis
  const x = xScale(0.43);
  const y = yScale(0.41);
  const axes = (
    <g>
      {/* vertical and horizontal lines */}
      <line
        x1={0}
        x2={width}
        y1={y}
        y2={y}
        stroke="#ababab"
        strokeDasharray="2"
      />
      <line
        x1={x}
        x2={x}
        y1={0}
        y2={height}
        stroke="#ababab"
        strokeDasharray="2"
      />

      {/* labels for X axis */}
      <text
        x={0}
        y={y - 15}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Auto"}
      >
        High Readiness
      </text>
      <text
        x={0}
        y={y - 37}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Auto"}
      >
        &uarr;
      </text>

      <text
        x={0}
        y={y + 15}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Hanging"}
      >
        Low Readiness
      </text>
      <text
        x={0}
        y={y + 37}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Hanging"}
      >
        &darr;
      </text>
    </g>
  );

  return (
    <div>
      <svg width={width} height={height} shapeRendering={"crispEdges"}>
        <g width={width} height={height}>
          {axes}
          {squares}
          {annotations}
        </g>
      </svg>
    </div>
  );
};
