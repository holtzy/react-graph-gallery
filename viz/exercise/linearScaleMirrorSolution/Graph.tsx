import { scaleLinear } from 'd3';

const WIDTH = 500;
const PADDING_CENTER = 20;
const LEFT_LINE_X = WIDTH / 2 - PADDING_CENTER / 2;
const RIGHT_LINE_X = WIDTH / 2 + PADDING_CENTER / 2;

export const Graph = () => {
  const scaleLeft = scaleLinear().domain([0, 100]).range([0, LEFT_LINE_X]);

  const scaleRight = scaleLinear().domain([0, 100]).range([0, RIGHT_LINE_X]);

  return (
    <svg width={WIDTH} height={300}>
      {/* Background */}
      <rect
        x={0}
        x1={0}
        y={0}
        height={300}
        width={WIDTH}
        fill="#69b3a2"
        fillOpacity={0.1}
      />

      {/* Grid */}
      <line
        x1={LEFT_LINE_X}
        y1={0}
        x2={LEFT_LINE_X}
        y2={300}
        stroke={'black'}
      />
      <line
        x1={WIDTH / 2 + PADDING_CENTER / 2}
        y1={0}
        x2={WIDTH / 2 + PADDING_CENTER / 2}
        y2={300}
        stroke={'black'}
      />

      {/* Right Bars */}
      <rect
        x={RIGHT_LINE_X}
        y={50}
        height={30}
        width={scaleRight(12)}
        fill="#69b3a2"
      />
      <rect
        x={RIGHT_LINE_X}
        y={100}
        height={30}
        width={scaleRight(43)}
        fill="#69b3a2"
      />
      <rect
        x={RIGHT_LINE_X}
        y={150}
        height={30}
        width={scaleRight(98)}
        fill="#69b3a2"
      />

      {/* Left Bars */}
      <rect
        x={LEFT_LINE_X - scaleLeft(23)}
        y={50}
        height={30}
        width={scaleLeft(23)}
        fill="#69b3a2"
      />
      <rect
        x={LEFT_LINE_X - scaleLeft(55)}
        y={100}
        height={30}
        width={scaleLeft(55)}
        fill="#69b3a2"
      />
      <rect
        x={LEFT_LINE_X - scaleLeft(87)}
        y={150}
        height={30}
        width={scaleLeft(87)}
        fill="#69b3a2"
      />
    </svg>
  );
};
