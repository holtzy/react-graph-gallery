import { useEffect, useRef } from 'react';

const width = 600;
const height = 300;

export const Graph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Set global alpha for opacity
    ctx.globalAlpha = 0.3; // Set the global opacity to 0.3

    // Make a circle
    ctx.beginPath(); // Start a new path (a new shape)
    ctx.arc(100, 100, 50, 0, 2 * Math.PI); // Draw the circle
    ctx.fillStyle = 'blue'; // Set the fill color to blue
    ctx.fill(); // Fill the circle with color

    // Reset global alpha to 1.0 after drawing to avoid affecting other drawings
    ctx.globalAlpha = 1.0;
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
