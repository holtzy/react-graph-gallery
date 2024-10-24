import { scaleLinear } from 'd3';

const MARGIN = 20;

export const Graph = () => {
  const scale = scaleLinear().domain([0, 100]).range([MARGIN, 500]);

  return (
    <svg width={500} height={300} style={{ overflow: 'visible' }}>
      {/* Background */}
      <rect
        x={0}
        x1={0}
        y={0}
        height={300}
        width={500}
        fill="#69b3a2"
        fillOpacity={0.1}
      />

      {/* Grid */}
      <line x1={20} y1={0} x2={20} y2={300} stroke={'black'} />
      <line x1={260} y1={0} x2={260} y2={300} stroke={'black'} />
      <line x1={500} y1={0} x2={500} y2={300} stroke={'black'} />

      {/* Bars */}
      <rect
        x={20}
        y={50}
        height={30}
        width={scale(34) - MARGIN}
        fill="#69b3a2"
      />
      <rect
        x={20}
        y={100}
        height={30}
        width={scale(50) - MARGIN}
        fill="#69b3a2"
      />
      <rect
        x={20}
        y={150}
        height={30}
        width={scale(82) - MARGIN}
        fill="#69b3a2"
      />
    </svg>
  );
};
