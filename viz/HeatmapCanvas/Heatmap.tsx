import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';

const MARGIN = { top: 10, right: 10, bottom: 30, left: 30 };

type HeatmapProps = {
  width: number;
  height: number;
  data: { x: string; y: string; value: number }[];
};

export const Heatmap = ({ width, height, data }: HeatmapProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // groups
  const allYGroups = useMemo(() => [...new Set(data.map((d) => d.y))], [data]);
  const allXGroups = useMemo(() => [...new Set(data.map((d) => d.x))], [data]);

  // x and y scales
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([0, boundsWidth])
      .domain(allXGroups)
      .padding(0.01);
  }, [data, width]);

  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([boundsHeight, 0])
      .domain(allYGroups)
      .padding(0.01);
  }, [data, height]);

  const [min, max] = d3.extent(data.map((d) => d.value));

  if (!min || !max) {
    return null;
  }

  // Color scale
  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateInferno)
    .domain([min, max]);

  const xLabels = allXGroups.map((name, i) => {
    const xPos = xScale(name) ?? 0;
    return (
      <text
        key={i}
        x={xPos + xScale.bandwidth() / 2}
        y={boundsHeight + 10}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={10}
      >
        {name}
      </text>
    );
  });

  const yLabels = allYGroups.map((name, i) => {
    const yPos = yScale(name) ?? 0;
    return (
      <text
        key={i}
        x={-5}
        y={yPos + yScale.bandwidth() / 2}
        textAnchor="end"
        dominantBaseline="middle"
        fontSize={10}
      >
        {name}
      </text>
    );
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, width, height);

    data.forEach((d) => {
      const x = xScale(d.x);
      const y = yScale(d.y);
      if (x === undefined || y === undefined) return;

      context.fillStyle = colorScale(d.value);
      context.strokeStyle = 'white';
      context.lineWidth = 1;
      context.fillRect(
        x + MARGIN.left,
        y + MARGIN.top,
        xScale.bandwidth(),
        yScale.bandwidth()
      );
      context.strokeRect(
        x + MARGIN.left,
        y + MARGIN.top,
        xScale.bandwidth(),
        yScale.bandwidth()
      );
    });
  }, [data, width, height, xScale, yScale, colorScale, allXGroups, allYGroups]);

  return (
    <div style={{ position: 'relative' }}>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {xLabels}
          {yLabels}
        </g>
      </svg>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <canvas ref={canvasRef} width={width} height={height} />
      </div>
    </div>
  );
};
