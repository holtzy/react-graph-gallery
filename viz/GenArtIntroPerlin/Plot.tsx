'use client';

import { useRef, useEffect } from 'react';
import { createNoise2D } from 'simplex-noise';
import { setupHiDPICanvas } from './setupHiDPICanvas';
import { scaleLinear } from 'd3';

type PlotProps = { width: number; height: number };

const X_OFFSET = 0.04;

export const Plot = ({ width, height }: PlotProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const yScale = scaleLinear().range([height, 0]).domain([-1, 1]);

  useEffect(() => {
    const ctx = setupHiDPICanvas(canvasRef.current, width, height);
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const noise = createNoise2D();

    ctx.beginPath();

    for (let x = 0; x < width; x += 1) {
      const value = noise(x * X_OFFSET, 0);
      const y = yScale(value);
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = '#6a4c93';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [width, height]);

  return <canvas ref={canvasRef} style={{ display: 'block', width, height }} />;
};
