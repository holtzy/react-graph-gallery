'use client';

import { useRef, useEffect, useMemo } from 'react';
import { createNoise2D } from 'simplex-noise';
import { setupHiDPICanvas } from './setupHiDPICanvas';

type PlotProps = { width: number; height: number };

// Controls zoom level of the noise
const NOISE_SCALE = 0.005;

export const Plot = ({ width, height }: PlotProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const noise2D = useMemo(() => createNoise2D(), []);

  useEffect(() => {
    const ctx = setupHiDPICanvas(canvasRef.current, width, height);
    if (!ctx || !width || !height) return;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    let i = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const value = noise2D(x * NOISE_SCALE, y * NOISE_SCALE);
        const normalized = value < -0.5 ? 0 : value > 0 ? 100 : 255; // Math.floor(((value + 1) / 2) * 255); // Convert from [-1,1] to [0,255]

        data[i++] = normalized; // R
        data[i++] = normalized; // G
        data[i++] = normalized; // B
        data[i++] = 255; // A
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [width, height, noise2D]);

  return <canvas ref={canvasRef} style={{ display: 'block', width, height }} />;
};

// if (canvasRef.current && width > 0 && height > 0) {
//   exportCanvasAsImage(
//     canvasRef.current,
//     'GenArtIntroPerlin.webp',
//     'image/webp'
//   );
// }
