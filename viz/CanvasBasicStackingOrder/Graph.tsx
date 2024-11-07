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

    // Draw the rectangle
    ctx.beginPath();
    ctx.rect(50, 50, 150, 150); // Rectangle at (x: 50, y: 50) with width 80 and height 50
    ctx.fillStyle = 'purple'; // Fill color for the rectangle
    ctx.fill();

    // Draw the circle
    ctx.beginPath();
    ctx.arc(240, 80, 70, 0, 2 * Math.PI); // Circle centered at (x: 140, y: 80) with radius 30
    ctx.fillStyle = 'orange'; // Fill color for the circle
    ctx.fill();

    // Draw the triangle
    ctx.beginPath();
    ctx.moveTo(110, 140); // Starting point of the triangle
    ctx.lineTo(160, 200); // Bottom right point
    ctx.lineTo(60, 200); // Bottom left point
    ctx.closePath(); // Closes the path back to the start (110, 140)
    ctx.fillStyle = 'green'; // Fill color for the triangle
    ctx.fill();

    // Draw the ellipse
    ctx.beginPath();
    ctx.ellipse(300, 170, 80, 20, Math.PI / 4, 0, 2 * Math.PI); // Ellipse at (x: 300, y: 170) with radii 80, 20 and rotation
    ctx.fillStyle = 'blue'; // Fill color for the ellipse
    ctx.fill();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
