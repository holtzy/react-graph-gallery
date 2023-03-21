import * as d3 from "d3";
import { AxisLeft } from "./AxisLeft";
import { AxisBottom } from "./AxisBottom";
import { contourDensity } from "d3";

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type ContourProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

export const Contour = ({ width, height, data }: ContourProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales
  const yScale = d3.scaleLinear().domain([4, 22]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([2, 19]).range([0, boundsWidth]);

  const contourGenerator = contourDensity()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y))
    .size([500, 500]) // TODO WTF is happening?
    .bandwidth(2);

  const contourData = contourGenerator(data);

  const maxContourValue = Math.max(
    ...contourData.map((contour) => contour.value)
  );

  const colorScale = d3
    .scaleSqrt<string>()
    .domain([0, maxContourValue])
    .range(["black", "#da8ee7"]);

  const opacityScale = d3
    .scaleSqrt<number>()
    .domain([0, maxContourValue])
    .range([0.5, 1]);

  // Build the shapes
  const allShapes = contourData.map((contour, i) => {
    return (
      <path
        key={i}
        d={d3.geoPath()(contour)}
        opacity={1}
        stroke={"none"}
        fill={colorScale(contour.value)}
        fillOpacity={opacityScale(contour.value)}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {/* first group is for the violin and box shapes */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {/* Y axis */}
          <AxisLeft yScale={yScale} pixelsPerTick={100} width={boundsWidth} />

          {/* X axis, use an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              pixelsPerTick={100}
              height={boundsHeight}
            />
          </g>

          {/* Circles */}
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
