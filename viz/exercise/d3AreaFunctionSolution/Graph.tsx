import { area } from 'd3';

// Positions in pixels
const data = [
  { x: 0, y: 40 },
  { x: 50, y: 70 },
  { x: 100, y: 150 },
  { x: 200, y: 50 },
  { x: 300, y: 250 },
];

export const Graph = () => {
  const areaGenerator = area()
    .x((d) => d.x)
    .y0((d) => 300) // y0 is the Y coordinate of the BOTTOM of the area. 300 is the very bottom!
    .y1((d) => d.y); // y1 is the top

  const path = areaGenerator(data);

  return (
    <svg width={500} height={300} style={{ overflow: 'visible' }}>
      <path d={path} fill="grey" stroke="#69b3a2" />
    </svg>
  );
};
