import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type DataPoint = { x: number; y: number };

type AreaChartProps = {
  width: number;
  height: number;
  data: DataPoint[];
};

export const AreaChart = ({ width, height, data }: AreaChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis scale
  const max = d3.max(data, (d) => d.y);
  const yScale = d3
    .scaleLinear()
    .domain([0, max || 0])
    .range([boundsHeight, 0]);

  // X axis scale
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = d3
    .scaleLinear()
    .domain([xMin || 0, xMax || 0])
    .range([0, boundsWidth]);

  // Compute the area path
  const areaBuilder = d3
    .area<DataPoint>()
    .x((d) => xScale(d.x))
    .y1((d) => yScale(d.y))
    .y0(yScale(0));
  const areaPath = areaBuilder(data);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (areaPath) {
      // Draw the area path on canvas
      const path = new Path2D(areaPath);
      ctx.fillStyle = '#9a6fb0';
      ctx.globalAlpha = 0.4;
      ctx.fill(path);
    }
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
