'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { createNoise2D } from 'simplex-noise';
import { setupHiDPICanvas } from './setupHiDPICanvas';
import { scaleLinear } from 'd3';

type PlotProps = { width: number; height: number };

export const Plot = ({ width, height }: PlotProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [xOffset, setXOffset] = useState(0.04);

  const yScale = scaleLinear().range([height, 0]).domain([-1, 1]);

  const noise = useMemo(() => {
    return createNoise2D();
  }, []);

  useEffect(() => {
    const ctx = setupHiDPICanvas(canvasRef.current, width, height);
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = '#6a4c93';

    for (let i = 0; i < 0.2; i += 0.01) {
      ctx.globalAlpha = 1 - i * 40;
      ctx.lineWidth = 2 - i * 40;

      ctx.beginPath();

      for (let x = 0; x < width; x += 1) {
        const value = noise(x * xOffset, i);
        const y = yScale(value);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }, [width, height, xOffset]);

  return (
    <div className="relative">
      <input
        className="absolute"
        type="range"
        min={0.001}
        max={0.1}
        value={xOffset}
        step={0.001}
        onChange={(e) => setXOffset(Number(e.target.value))}
        style={{ height: 2, opacity: 0.5 }}
      />
      <canvas ref={canvasRef} style={{ display: 'block', width, height }} />;
    </div>
  );
};
