import { line } from 'd3';

// Positions in pixels
const data = [
  { x: 0, y: 40 },
  { x: 50, y: 70 },
  { x: 100, y: 150 },
  { x: 200, y: 50 },
  { x: 300, y: 250 },
];

export const Graph = () => {
  const lineGenerator = line()
    .x((d) => d.x)
    .y((d) => d.y);

  const path = lineGenerator(data);

  return (
    <svg width={500} height={300} style={{ overflow: 'visible' }}>
      <path d={path} fill="none" stroke="#69b3a2" />
    </svg>
  );
};
