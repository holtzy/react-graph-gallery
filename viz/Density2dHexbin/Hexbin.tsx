import * as d3 from "d3";
import { AxisLeft } from "./AxisLeft";
import { AxisBottom } from "./AxisBottom";
import { hexbin } from "d3-hexbin";

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };
const BIN_SIZE = 9;

type HexbinProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

export const Hexbin = ({ width, height, data }: HexbinProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales
  const yScale = d3.scaleLinear().domain([4, 22]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([2, 19]).range([0, boundsWidth]);

  const hexbinGenerator = hexbin()
    .radius(BIN_SIZE)
    .extent([
      [0, 0],
      [boundsWidth, boundsHeight],
    ]);

  const hexbinData = hexbinGenerator(
    data.map((item) => [xScale(item.x), yScale(item.y)])
  );

  const maxItemPerBin = Math.max(...hexbinData.map((hex) => hex.length));

  const colorScale = d3
    .scaleSqrt<string>()
    .domain([0, maxItemPerBin])
    .range(["black", "#cb1dd1"]);

  const opacityScale = d3
    .scaleLinear<number>()
    .domain([0, maxItemPerBin])
    .range([0.2, 1]);

  // Build the shapes
  const allShapes = hexbinData.map((d, i) => {
    return (
      <path
        key={i}
        d={hexbinGenerator.hexagon()}
        transform={"translate(" + d.x + "," + d.y + ")"}
        opacity={1}
        stroke={"white"}
        fill={colorScale(d.length)}
        // fillOpacity={opacityScale(d.length)}
        strokeOpacity={opacityScale(d.length)}
        strokeWidth={0.5}
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
