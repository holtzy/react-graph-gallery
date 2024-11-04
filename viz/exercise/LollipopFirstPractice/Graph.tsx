import * as d3 from 'd3';
import { data } from './data';

const width = 500;
const height = 500;
const MARGIN = { top: 30, right: 30, bottom: 30, left: 80 };

export const Graph = () => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis is for groups
  const groups = data.sort((a, b) => b.value1 - a.value1).map((d) => d.name);
  const yScale = d3.scaleBand().domain(groups).range([0, boundsHeight]);

  // X axis
  const [min, max] = d3.extent(data.map((d) => d.value1));

  const xScale = d3
    .scaleLinear()
    .domain([0, max || 10])
    .range([0, boundsWidth]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    // TODO
    return null;
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
