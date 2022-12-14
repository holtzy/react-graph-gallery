import { useMemo, useRef } from "react";
import * as d3 from "d3";
import { colors, MARGIN } from "./constants";
import { AxisLeft } from "./Axis/AxisLeft";
import { AxisBottom } from "./Axis/AxisBottom";

type ScatterplotProps = {
  width: number;
  height: number;
  data: { y: number; x: number; group: string }[];
  xLabel?: string;
  yLabel?: string;
};

export const Scatterplot = ({
  width,
  height,
  data,
  xLabel,
  yLabel,
}: ScatterplotProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const yScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.y));
    return d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]).nice();
  }, [data, height]);

  // Y axis
  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.x));
    return d3.scaleLinear().domain([0, max]).range([0, boundsWidth]).nice();
  }, [data, width]);

  // Color Scale
  const allGroups = [...new Set(data.map((d) => d.group))].sort();
  const colorScale = d3.scaleOrdinal<string>().domain(allGroups).range(colors);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={3}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        opacity={1}
        stroke={colorScale(d.group)}
        fill={colorScale(d.group)}
        fillOpacity={0.8}
        strokeWidth={1}
      />
    );
  });

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {allShapes}

        {/* Y axis */}
        <AxisLeft yScale={yScale} pixelsPerTick={20} label={yLabel} />

        {/* X axis, use an additional translation to appear at the bottom */}
        <g transform={`translate(0, ${boundsHeight})`}>
          <AxisBottom xScale={xScale} pixelsPerTick={20} label={xLabel} />
        </g>
      </g>
    </svg>
  );
};
