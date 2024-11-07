import { useEffect, useRef } from 'react';

const width = 600;
const height = 300;

export const Graph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div>
      <canvas width={width} height={height} />
    </div>
  );
};
