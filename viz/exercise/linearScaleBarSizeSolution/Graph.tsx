import { scaleLinear } from 'd3';

export const Graph = () => {
  const scale = scaleLinear().domain([0, 100]).range([0, 500]);

  return (
    <svg width={500} height={300} style={{ overflow: 'visible' }}>
      <rect
        x={0}
        y={0}
        height={300}
        width={500}
        fill="#69b3a2"
        fillOpacity={0.1}
      />
      <rect x={0} y={100} height={40} width={scale(82)} fill="#69b3a2" />
    </svg>
  );
};
