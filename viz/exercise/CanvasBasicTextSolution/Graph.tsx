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

    // Draw the circle
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI); // Circle centered at (200, 200) with radius 100
    ctx.fillStyle = 'lightblue'; // Fill color for the circle
    ctx.fill();

    // Draw the outline of the circle (optional)
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Add centered text inside the circle
    ctx.fillStyle = 'black'; // Text color
    ctx.font = '20px Arial'; // Font size and style
    ctx.textAlign = 'center'; // Center the text horizontally
    ctx.textBaseline = 'middle'; // Center the text vertically
    ctx.fillText('Hello, World!', 200, 200); // Text content and position
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
