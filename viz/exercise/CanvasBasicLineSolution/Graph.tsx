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

    // Set up the line style
    ctx.strokeStyle = 'black'; // Set the line color
    ctx.lineWidth = 2; // Set the line width

    // Start the path
    ctx.beginPath();
    ctx.moveTo(50, 150); // Starting point of the line (left side)

    // Define the six points of the line
    ctx.lineTo(100, 120); // First point
    ctx.lineTo(150, 180); // Second point
    ctx.lineTo(200, 100);
    ctx.lineTo(250, 160);
    ctx.lineTo(300, 90);
    ctx.lineTo(350, 140);

    // Draw the path
    ctx.stroke();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
