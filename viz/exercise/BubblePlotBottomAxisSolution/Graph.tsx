import { scaleLinear, scaleSqrt } from 'd3';
import { AxisBottom } from './AxisBottom';

const data = [
  { x: 10, y: 76, size: 8 },
  { x: 45, y: 20, size: 10 },
  { x: 80, y: 55, size: 5 },
  { x: 15, y: 90, size: 7 },
  { x: 60, y: 40, size: 9 },
  { x: 25, y: 65, size: 6 },
  { x: 70, y: 30, size: 4 },
  { x: 50, y: 85, size: 11 },
  { x: 35, y: 10, size: 12 },
  { x: 95, y: 50, size: 8 },
];

const MARGIN = {
  top: 30,
  right: 30,
  bottom: 100,
  left: 100,
};
const BUBBLE_MIN_SIZE = 2;
const BUBBLE_MAX_SIZE = 20;

const width = 500;
const height = 300;

export const Graph = () => {
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = scaleLinear().domain([0, 100]).range([0, boundsWidth]);
  const yScale = scaleLinear().domain([0, 100]).range([boundsHeight, 0]);
  const sizeScale = scaleSqrt()
    .domain([4, 12])
    .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);

  return (
    <svg width={500} height={300}>
      <rect width={width} height={height} fill="lightgrey" fillOpacity={0.3} />

      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        <rect width={boundsWidth} height={boundsHeight} fill="lightgrey" />

        {data.map((d) => {
          return (
            <circle cx={xScale(d.x)} cy={yScale(d.y)} r={sizeScale(d.size)} />
          );
        })}

        <g transform={`translate(0, ${boundsHeight})`}>
          <AxisBottom xScale={xScale} pixelsPerTick={60} />
        </g>
      </g>
    </svg>
  );
};
