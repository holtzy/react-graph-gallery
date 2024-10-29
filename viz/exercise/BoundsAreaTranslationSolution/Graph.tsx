import { scaleLinear } from 'd3';

const MARGIN = {
  top: 30,
  right: 30,
  bottom: 100,
  left: 100,
};

const width = 500;
const height = 300;

export const Graph = () => {
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = scaleLinear().domain([0, 100]).range([0, boundsWidth]);
  const yScale = scaleLinear().domain([0, 100]).range([boundsHeight, 0]);

  return (
    <svg width={500} height={300}>
      <rect width={width} height={height} fill="lightgrey" fillOpacity={0.3} />

      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        <rect width={boundsWidth} height={boundsHeight} fill="lightgrey" />

        <circle cx={xScale(33)} cy={yScale(33)} r={10} fill="blue" />
        <circle cx={xScale(66)} cy={yScale(66)} r={10} fill="green" />
      </g>
    </svg>
  );
};
