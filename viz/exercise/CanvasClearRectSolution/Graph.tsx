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

    // Set up the circle
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI); // Draw a large circle with radius 100
    ctx.fillStyle = 'purple'; // Set fill color
    ctx.fill(); // Fill the circle with color

    // Remove a portion of the circle using clearRect
    ctx.clearRect(180, 180, 60, 60); // Clear a rectangular area within the circle
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
