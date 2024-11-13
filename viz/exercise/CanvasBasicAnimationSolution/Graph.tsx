import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import * as d3 from 'd3';

export const Graph19 = () => {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState(30);

  // Set up react-spring to animate the x position of the circle
  const [springProps, api] = useSpring(() => ({
    x: position,
  }));

  useEffect(() => {
    drawCanvas(position);
  }, [springProps]);

  const handleCanvasClick = () => {
    setPosition(position === 30 ? 200 : 30);

    api.start();
  };

  const drawCanvas = (position: number) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear canvas and redraw circle
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(position, 100, 20, 0, 2 * Math.PI);
    context.fillStyle = 'steelblue';
    context.fill();
  };

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={200}
      onClick={handleCanvasClick}
      style={{ border: '1px solid black', cursor: 'pointer' }}
    />
  );
};
