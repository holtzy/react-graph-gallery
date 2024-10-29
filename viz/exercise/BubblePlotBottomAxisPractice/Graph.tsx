import { scaleLinear } from 'd3';

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

const MARGIN = {};

const width = 500;
const height = 300;

export const Graph = () => {
  const boundsWidth = '';
  const boundsHeight = '';

  const xScale = 'TODO';
  const yScale = 'TODO';
  // you need a scaleSize too!

  return (
    <svg width={500} height={300}>
      {/* SVG background */}
      <rect />

      {/* Bounds area */}
      <g>
        <rect fill="lightgrey" />
        {/* Loop for circles here! */}
      </g>
    </svg>
  );
};
