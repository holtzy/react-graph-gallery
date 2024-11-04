import * as d3 from 'd3';
import { data } from './data';
import styles from './graph.module.css';

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
    const y = yScale(d.name) + yScale.bandwidth() / 2;

    return (
      <g key={i} className={styles.row}>
        <line
          x1={xScale(d.value1)}
          y1={y}
          y2={y}
          x2={xScale(d.value2)}
          opacity={0.7}
          stroke="grey"
          strokeWidth={1}
        />
        <circle
          cy={y}
          cx={xScale(d.value1)}
          opacity={0.7}
          stroke="#69b3a2"
          fill="#69b3a2"
          strokeWidth={1}
          r={5}
        />
        <circle
          cy={y}
          cx={xScale(d.value2)}
          opacity={0.7}
          stroke="#9d174d"
          fill="#9d174d"
          strokeWidth={1}
          r={5}
        />
        <text
          x={xScale(0) - 7}
          y={y}
          textAnchor="end"
          alignmentBaseline="central"
          fontSize={12}
        >
          {d.name}
        </text>
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          className={styles.rowsContainer}
        >
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
