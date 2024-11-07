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

    // Draw and fill the rectangle
    ctx.beginPath(); // Start a new path for the rectangle
    ctx.rect(150, 150, 100, 50); // Define the rectangle's position and size

    // Set the fill color to pink and fill the rectangle
    ctx.fillStyle = 'pink';
    ctx.fill();

    // Set the stroke color to green and draw the outline
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3; // Optional: set the outline thickness
    ctx.stroke(); // Draw the outline
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
