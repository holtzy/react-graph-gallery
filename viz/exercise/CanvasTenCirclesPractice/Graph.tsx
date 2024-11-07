import { useEffect, useRef } from 'react';

const width = 600;
const height = 300;

// Create a small dataset with 10 values
const dataset = [
  { x: 50, y: 60, radius: 10 },
  { x: 100, y: 80, radius: 15 },
  { x: 150, y: 100, radius: 20 },
  { x: 200, y: 120, radius: 25 },
  { x: 250, y: 140, radius: 30 },
  { x: 300, y: 160, radius: 35 },
  { x: 350, y: 180, radius: 40 },
  { x: 400, y: 200, radius: 45 },
  { x: 450, y: 220, radius: 50 },
  { x: 500, y: 240, radius: 55 },
];

export const Graph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div>
      <canvas width={width} height={height} />
    </div>
  );
};
