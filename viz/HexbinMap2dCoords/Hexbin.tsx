import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };
const BIN_SIZE = 6;

type HexbinProps = {
  width: number;
  height: number;
  data: { lon: number; lat: number }[];
};

export const Hexbin = ({ width, height, data }: HexbinProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales
  const yScale = d3.scaleLinear().domain([25, 65]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([-20, 60]).range([0, boundsWidth]);

  const hexbinGenerator = hexbin()
    .radius(BIN_SIZE)
    .extent([
      [0, 0],
      [boundsWidth, boundsHeight],
    ]);

  const hexbinData = hexbinGenerator(
    data.map((item) => [xScale(item.lon), yScale(item.lat)])
  );

  const maxItemPerBin = Math.max(...hexbinData.map((hex) => hex.length));

  const colorScale = d3
    .scaleSqrt<string>()
    .domain([0, maxItemPerBin])
    .range(['#f1d5f7', '#cb1dd1']);

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
        transform={'translate(' + d.x + ',' + d.y + ')'}
        opacity={1}
        stroke={'white'}
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
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
