import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';

const MARGIN = { top: 30, right: 30, bottom: 80, left: 100 };
const BUBBLE_MIN_SIZE = 4;
const BUBBLE_MAX_SIZE = 40;

type BubblePlotProps = {
  width: number;
  height: number;
  data: {
    lifeExp: number;
    gdpPercap: number;
    continent: string;
    pop: number;
  }[];
};

export const BubblePlot = ({ width, height, data }: BubblePlotProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales
  const [minY, maxY] = d3.extent(data.map((d) => d.lifeExp)) as [
    number,
    number,
  ];
  const yScale = d3
    .scaleLinear()
    .domain([minY, maxY])
    .range([boundsHeight, 0])
    .nice();

  const maxX = d3.max(data.map((d) => d.gdpPercap)) as number;
  const xScale = d3
    .scaleLinear()
    .domain([0, maxX])
    .range([0, boundsWidth])
    .nice();

  const groups = data
    .map((d) => d.continent)
    .filter((x, i, a) => a.indexOf(x) == i);

  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(groups)
    .range(['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253']);

  const sizeScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.pop)) as [number, number];
    return d3
      .scaleSqrt()
      .domain([min, max])
      .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);
  }, [data, width]);

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
      ctx.arc(
        xScale(point.gdpPercap),
        yScale(point.lifeExp),
        sizeScale(point.pop),
        0,
        2 * Math.PI
      );
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = colorScale(point.continent);
      ctx.fill();
    });
  }, [data, xScale, yScale, width, height]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Inner div with slight shift for the margins */}
      <div
        style={{
          transform: `translate(${MARGIN.left}px, ${MARGIN.top}px)`,
          width: boundsWidth,
          height: boundsHeight,
        }}
      >
        {/* Axes */}
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
        </svg>

        {/* Canvas is for the circles */}
        <canvas
          style={{ position: 'relative' }} // if this is not set, SVG will be drawn on top due to CSS stacking order issue
          ref={canvasRef}
          width={boundsWidth}
          height={boundsHeight}
        />
      </div>
    </div>
  );
};
