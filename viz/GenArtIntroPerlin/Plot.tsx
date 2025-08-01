'use client';

import { useRef, useEffect, useMemo } from 'react';
import { createNoise2D } from 'simplex-noise';
import { setupHiDPICanvas } from './setupHiDPICanvas';
import { scaleLinear } from 'd3';
import { exportCanvasAsImage } from '../../util/exportCanvas';

type PlotProps = { width: number; height: number };

const X_OFFSET = 0.01;

export const Plot = ({ width, height }: PlotProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const yScale = scaleLinear().range([height, 0]).domain([-1, 1]);

  const noise = useMemo(() => {
    return createNoise2D();
  }, []);

  useEffect(() => {
    const ctx = setupHiDPICanvas(canvasRef.current, width, height);
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#ebf4fa';
    ctx.fillRect(0, 0, width, height);

    ctx.globalAlpha = 1;
    ctx.lineWidth = 2;

    ctx.beginPath();

    for (let x = 0; x < width; x += 1) {
      const value = noise(x * X_OFFSET, 0);
      const y = yScale(value);
      ctx.lineTo(x, y);
    }

    ctx.stroke();

    // if (canvasRef.current && width > 0 && height > 0) {
    //   exportCanvasAsImage(
    //     canvasRef.current,
    //     'GenArtIntroPerlin.webp',
    //     'image/webp'
    //   );
    // }
  }, [width, height]);

  return <canvas ref={canvasRef} style={{ display: 'block', width, height }} />;
};
