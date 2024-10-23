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
  // Use the line() function of d3 to create a path generator that expects data as input
  const lineGenerator = '';

  // Use the lineGenerator function above to build the path string
  const path = '';

  return (
    <svg width={500} height={300} style={{ overflow: 'visible' }}>
      {/* The path built above is used here for the d argument */}
      <path d={path} fill="none" stroke="#69b3a2" />
    </svg>
  );
};
