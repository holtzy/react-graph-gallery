import { useRef, useEffect, useMemo } from 'react';
import { createNoise2D } from 'simplex-noise';
import { setupHiDPICanvas } from './setupHiDPICanvas';
import { scaleLinear } from 'd3';

// Animation speed
const X_OFFSET = 0.01;
const ANIMATION_SPEED = 0.01;

type PlotProps = { width: number; height: number };

export const Plot = ({ width, height }: PlotProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const yScale = scaleLinear().range([height, 0]).domain([-1, 1]);
  const noise = useMemo(() => createNoise2D(), []);
  const offsetRef = useRef(0);

  useEffect(() => {
    let running = true;
    function draw() {
      const ctx = setupHiDPICanvas(canvasRef.current, width, height);
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ebf4fa';
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < width; x += 1) {
        const value = noise(x * X_OFFSET + offsetRef.current, 0);
        const y = yScale(value);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      offsetRef.current += ANIMATION_SPEED;
      if (running) {
        animationRef.current = requestAnimationFrame(draw);
      }
    }
    draw();
    return () => {
      running = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [width, height, noise, yScale]);

  return <canvas ref={canvasRef} style={{ display: 'block', width, height }} />;
};
