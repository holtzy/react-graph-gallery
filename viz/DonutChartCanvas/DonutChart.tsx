import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type DataItem = {
  name: string;
  value: number;
};
type DonutChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};

const MARGIN = 30;

const colors = [
  '#e0ac2b',
  '#e85252',
  '#6689c6',
  '#9a6fb0',
  '#a53253',
  '#69b3a2',
];

export const DonutChart = ({ width, height, data }: DonutChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
  const pie = pieGenerator(data);

  const arcPathGenerator = d3.arc();
  const arcs = pie.map((p) =>
    arcPathGenerator({
      innerRadius: 70,
      outerRadius: radius,
      startAngle: p.startAngle,
      endAngle: p.endAngle,
    })
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.clearRect(0, 0, width, height);

        // Translate the canvas to the center of the canvas
        ctx.translate(width / 2, height / 2);

        // Loop through each arc to draw on canvas
        arcs.forEach((arc, i) => {
          const path = new Path2D(arc);
          ctx.fillStyle = colors[i % colors.length];
          ctx.fill(path);
        });
      }
    }
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
