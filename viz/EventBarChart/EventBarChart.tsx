import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import type { EventList } from "./data";

type EventBarChartProps = {
  width: number;
  height: number;
  data: EventList;
};

const MARGIN = { top: 30, right: 0, bottom: 30, left: 0 };
const MIDDLE_PADDING = 1;
const BETWEEN_BAR_PADDING = 0.08;

export const EventBarChart = ({ width, height, data }: EventBarChartProps) => {
  // The bounds (= area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Data prep
  const min = -Math.max(...data.map((d) => d.deletion));
  const max = Math.max(...data.map((d) => d.addition));

  // Scales
  const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);
  const xScale = d3
    .scaleBand()
    .range([0, boundsWidth])
    .domain(data.map((d) => d.name))
    .padding(BETWEEN_BAR_PADDING);

  return (
    <svg
      width={width}
      height={height}
      style={{ backgroundColor: "#f8f9fa", display: "inline-block" }}
    >
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {data.map((d, i) => {
          return (
            <>
              <rect
                key={i}
                x={xScale(d.name)}
                width={xScale.bandwidth()}
                height={yScale(0) - yScale(d.addition) - MIDDLE_PADDING}
                y={yScale(d.addition)}
                fill={"rgb(204, 255, 216)"}
              />
              <rect
                key={i}
                x={xScale(d.name)}
                width={xScale.bandwidth()}
                height={yScale(0) - yScale(d.deletion) - MIDDLE_PADDING}
                y={yScale(0) + MIDDLE_PADDING}
                fill={"rgb(255, 215, 213)"}
              />
            </>
          );
        })}
      </g>
    </svg>
  );
};
