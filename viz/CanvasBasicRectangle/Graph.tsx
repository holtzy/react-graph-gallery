import { useEffect, useRef } from 'react';

type GraphProps = {
  width: number;
  height: number;
};

export const Graph = ({ width, height }: GraphProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath(); // Start a new path (a new shape)
    ctx.rect(100, 100, 80, 50); // Draw the rectangle (x, y, width, height)
    ctx.fillStyle = 'purple'; // Set the fill color to blue
    ctx.fill(); // Fill the rectangle with color
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
