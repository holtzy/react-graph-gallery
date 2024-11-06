import * as d3 from 'd3';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';
import { useEffect, useRef, useState } from 'react';

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };
const CIRCLE_RADIUS = 1;
const HOVER_DISTANCE_THRESHOLD = 20;

type ScatterplotProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

type InteractionData = { x: number; y: number };

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const [interactionData, setInteractionData] =
    useState<InteractionData | null>(null);

  // Scales
  const yScale = d3.scaleLinear().domain([0, 16]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, boundsWidth]);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw each data point as a circle
    data.forEach((point) => {
      ctx.beginPath();
      ctx.arc(xScale(point.x), yScale(point.y), CIRCLE_RADIUS, 0, 2 * Math.PI);
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = '#cb1dd1';
      ctx.fill();
    });
  }, [data, xScale, yScale, width, height]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;

    let closestPoint = null;
    let minDistance = HOVER_DISTANCE_THRESHOLD;

    data.forEach((point) => {
      const px = xScale(point.x);
      const py = yScale(point.y);
      const distance = Math.sqrt((px - mouseX) ** 2 + (py - mouseY) ** 2);

      if (distance < minDistance) {
        minDistance = distance;
        closestPoint = { x: px, y: py };
      }
    });

    setInteractionData(closestPoint);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Inner div with slight shift for the margins */}
      <div
        style={{
          transform: `translate(${MARGIN.left}px, ${MARGIN.top}px)`,
          width: boundsWidth,
          height: boundsHeight,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setInteractionData(null)}
      >
        {/* Canvas is for the circles */}
        <canvas
          style={{ position: 'relative' }} // if this is not set, SVG will be drawn on top due to CSS stacking order issue
          ref={canvasRef}
          width={boundsWidth}
          height={boundsHeight}
        />

        {/* Axes and hover effect */}
        <svg
          width={boundsWidth}
          height={boundsHeight}
          style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}
        >
          <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              pixelsPerTick={40}
              height={boundsHeight}
            />
          </g>

          {interactionData && (
            <circle
              cx={interactionData.x}
              cy={interactionData.y}
              r={10}
              fill="red"
              opacity={0.8}
            />
          )}
        </svg>
      </div>
    </div>
  );
};
