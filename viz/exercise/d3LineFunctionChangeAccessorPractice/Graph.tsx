import { line } from 'd3';

// Positions in pixels
const data = [
  { xAxisPosition: 0, y: 40 },
  { xAxisPosition: 50, y: 70 },
  { xAxisPosition: 100, y: 150 },
  { xAxisPosition: 200, y: 50 },
  { xAxisPosition: 300, y: 250 },
];

export const Graph = () => {
  // Update the accessor function of the .x() method to be able to parse the dataset properly!
  const lineGenerator = line();
  //... TODO

  const path = lineGenerator(data);

  return (
    <svg width={500} height={300} style={{ overflow: 'visible' }}>
      <path d={path} fill="none" stroke="#69b3a2" />
    </svg>
  );
};
