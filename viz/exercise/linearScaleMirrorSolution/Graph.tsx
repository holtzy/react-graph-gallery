import { scaleLinear } from 'd3';

const WIDTH = 500;
const PADDING_CENTER = 20;

export const Graph = () => {
  const scaleLeft = scaleLinear()
    .domain([100, 0])
    .range([0, WIDTH / 2 - PADDING_CENTER / 2]);

  const scaleRight = scaleLinear()
    .domain([0, 100])
    .range([0, WIDTH / 2 + PADDING_CENTER / 2, WIDTH]);

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
        x1={WIDTH / 2 - PADDING_CENTER / 2}
        y1={0}
        x2={WIDTH / 2 - PADDING_CENTER / 2}
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
        x={WIDTH / 2 + PADDING_CENTER / 2}
        y={50}
        height={30}
        width={scaleRight(12)}
        fill="#69b3a2"
      />
      <rect
        x={WIDTH / 2 + PADDING_CENTER / 2}
        y={100}
        height={30}
        width={scaleRight(43)}
        fill="#69b3a2"
      />
      <rect
        x={WIDTH / 2 + PADDING_CENTER / 2}
        y={150}
        height={30}
        width={scaleRight(98)}
        fill="#69b3a2"
      />

      {/* Left Bars */}
      <rect
        x={scaleLeft(23)}
        y={50}
        height={30}
        width={WIDTH / 2 - PADDING_CENTER / 2 - scaleLeft(23)}
        fill="#69b3a2"
      />
      <rect
        x={scaleLeft(55)}
        y={100}
        height={30}
        width={WIDTH / 2 - PADDING_CENTER / 2 - scaleLeft(55)}
        fill="#69b3a2"
      />
      <rect
        x={scaleLeft(87)}
        y={150}
        height={30}
        width={WIDTH / 2 - PADDING_CENTER / 2 - scaleLeft(87)}
        fill="#69b3a2"
      />
    </svg>
  );
};
