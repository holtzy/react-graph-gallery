import { scaleLinear } from 'd3';

const WIDTH = 500;

export const Graph = () => {
  // create the scale, reverse the domain!
  const scale = '';

  return (
    <svg width={500} height={300}>
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
      <line x1={500} y1={0} x2={WIDTH} y2={300} stroke={'black'} />

      {/* Bar */}
    </svg>
  );
};
