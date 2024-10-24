import { scaleLinear } from 'd3';

const WIDTH = 500;

export const Graph = () => {
  const scale = scaleLinear().domain([100, 0]).range([0, WIDTH]);

  return (
    <svg width={500} height={300} style={{ overflow: 'visible' }}>
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
      <rect
        x={scale(82)}
        y={150}
        height={60}
        width={WIDTH - scale(82)}
        fill="#69b3a2"
      />
    </svg>
  );
};
