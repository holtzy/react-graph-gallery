import { useMemo } from "react";
import * as d3 from "d3";
import { BarItem } from "./BarItem";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis is for groups since the barplot is horizontal
  const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);
  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, boundsHeight])
      .padding(BAR_PADDING);
  }, [data, height]);

  // X axis
  const max = d3.max(data.map((d) => d.value));
  const xScale = d3.scaleLinear().domain([0, max]).range([0, boundsWidth]);

  // Build the shapes
  const allShapes = data.map((d) => {
    return (
      <BarItem
        key={d.name}
        name={d.name}
        value={d.value}
        barHeight={yScale.bandwidth()}
        barWidth={xScale(d.value)}
        x={xScale(0)}
        y={yScale(d.name)}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
