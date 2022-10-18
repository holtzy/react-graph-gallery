import { useState } from "react";
import * as d3 from "d3";
import { InteractionData, ScatterplotProps } from "./types";
import { Axes } from "./Axes";
import styles from "./scatterplot.module.css";
import { Tooltip } from "./Tooltip";

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  // Sort the data: bigger squares must appear at the bottom
  const sortedData = data.sort((a, b) => b.size - a.size);

  // State
  const [interactionData, setInteractionData] = useState<InteractionData>();

  // Scales
  const xScale = d3.scaleLinear().domain([0.23, 0.69]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0.12, 0.83]).range([height, 0]);
  const sizeScale = d3.scaleSqrt().domain([0, 32]).range([3, 40]);

  // All squares, 1 per country
  const squares = sortedData.map((d, i) => {
    const size = sizeScale(d.size);

    const xPos = xScale(d.x) - size / 2;
    const yPos = yScale(d.y) - size / 2;

    const isDimmed = interactionData && interactionData.color !== d.color;
    const className = isDimmed
      ? styles.scatterplotSquare + " " + styles.dimmed
      : styles.scatterplotSquare;

    return (
      <g
        key={i}
        onMouseMove={() =>
          setInteractionData({
            xPos,
            yPos,
            ...d,
          })
        }
        onMouseLeave={() => setInteractionData(undefined)}
      >
        <rect
          x={xPos}
          y={yPos}
          opacity={1}
          fill={d.color}
          width={size}
          height={size}
          className={className}
        />
      </g>
    );
  });

  // Build the annotations (black rectangle and country name)
  // This is made separately, because it needs to appear on top of all colored rectangles
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

      const isDimmed = interactionData && interactionData.color !== d.color;
      const className = isDimmed ? styles.dimmed : "";

      const textAnchor =
        d.annotation === "left"
          ? "end"
          : d.annotation === "right"
          ? "start"
          : "middle";

      return (
        <g key={i} className={className}>
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

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height} shapeRendering={"crispEdges"}>
        <g>
          <Axes
            x={xScale(0.43)}
            y={yScale(0.41)}
            width={width}
            height={height}
          />
          {squares}
          {annotations}
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          width,
          height,
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <Tooltip interactionData={interactionData} />
      </div>
    </div>
  );
};
