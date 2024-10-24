import { scaleLinear } from 'd3';

export const Graph = () => {
  // Create  scale here
  const scale = '';

  return (
    <svg width={500} height={300}>
      <rect
        x={0}
        y={0}
        height={300}
        width={500}
        fill="#69b3a2"
        fillOpacity={0.1}
      />
      {/* Use the scale in this rect!!! */}
      <rect x={0} y={0} height={0} width={0} fill="#69b3a2" />
    </svg>
  );
};
