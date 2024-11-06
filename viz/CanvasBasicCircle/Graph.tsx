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
    ctx.arc(100, 100, 50, 0, 2 * Math.PI); // Draw the circle
    ctx.fillStyle = 'blue'; // Set the fill color to blue
    ctx.fill(); // Fill the circle with color
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
