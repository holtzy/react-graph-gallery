import { scaleLinear } from 'd3';

const WIDTH = 500;
const PADDING_CENTER = 20;

export const Graph = () => {
  const scaleLeft = '';

  const scaleRight = '';

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
        x={0} // TODO
        y={50}
        height={30}
        width={0} // TODO
        fill="#69b3a2"
      />
      <rect
        x={0} // TODO
        y={100}
        height={30}
        width={0} // TODO
        fill="#69b3a2"
      />
      <rect
        x={0} // TODO
        y={150}
        height={30}
        width={0} // TODO
        fill="#69b3a2"
      />

      {/* Left Bars */}
      <rect
        x={0} // TODO
        y={50}
        height={30}
        width={0} // TODO
        fill="#69b3a2"
      />
      <rect
        x={0} // TODO
        y={100}
        height={30}
        width={0} // TODO
        fill="#69b3a2"
      />
      <rect
        x={0} // TODO
        y={150}
        height={30}
        width={0} // TODO
        fill="#69b3a2"
      />
    </svg>
  );
};
