import * as d3 from 'd3';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';
import { MouseEventHandler, useMemo, useState } from 'react';

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type ScatterplotProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
  setData: (data: { x: number; y: number }[]) => void;
};

export const Scatterplot = ({
  width,
  height,
  data,
  setData,
}: ScatterplotProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedPointIndex, setDraggedPointIndex] = useState<number | null>(
    null
  );

  // Layout
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales
  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 10]).range([boundsHeight, 0]);
  }, []);

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 10]).range([0, boundsWidth]);
  }, []);

  // Compute regression parameters
  const xMean = d3.mean(data, (d) => d.x) || 0;
  const yMean = d3.mean(data, (d) => d.y) || 0;
  const slope =
    d3.sum(data, (d) => (d.x - xMean) * (d.y - yMean)) /
    d3.sum(data, (d) => (d.x - xMean) ** 2);
  const intercept = yMean - slope * xMean;
  const ssTotal = d3.sum(data, (d) => (d.y - yMean) ** 2);
  const ssResidual = d3.sum(
    data,
    (d) => (d.y - (slope * d.x + intercept)) ** 2
  );
  const r2 = 1 - ssResidual / ssTotal;

  // Regression line points
  const x1 = 0;
  const y1 = slope * x1 + intercept;
  const x2 = 10;
  const y2 = slope * x2 + intercept;

  const handleMouseDown = (index: number) => {
    setIsDragging(true);
    setDraggedPointIndex(index);
  };

  const handleMouseMove: MouseEventHandler<SVGRectElement> = (event) => {
    if (!isDragging) {
      return;
    }

    const { clientY, clientX } = event;
    const { top, left } = event.target.getBoundingClientRect();

    const mousePosY = clientY - top;
    const yValue = yScale.invert(mousePosY);

    const mousePosX = clientX - left;
    const xValue = xScale.invert(mousePosX);

    const newData = data.map((d, i) =>
      i === draggedPointIndex ? { x: xValue, y: yValue } : d
    );

    setData(newData);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedPointIndex(null);
  };

  // Build shapes
  const allShapes = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={i === draggedPointIndex ? 12 : 8}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        fill="#cb1dd1"
        stroke="#cb1dd1"
        fillOpacity={i === draggedPointIndex ? 0.6 : 0.1}
        strokeWidth={i === draggedPointIndex ? 3 : 1}
        onMouseDown={() => handleMouseDown(i)}
        onMouseUp={handleMouseUp}
        cursor={'pointer'}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          <rect
            width={boundsWidth}
            height={boundsHeight}
            x={0}
            y={0}
            onMouseMove={handleMouseMove}
            fill={'transparent'}
            pointerEvents={'all'}
          />
        </g>

        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {/* Y axis */}
          <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

          {/* X axis */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              pixelsPerTick={40}
              height={boundsHeight}
            />
          </g>

          {/* Circles */}
          {allShapes}

          {/* Regression line */}
          <line
            x1={xScale(x1)}
            y1={yScale(y1)}
            x2={xScale(x2)}
            y2={yScale(y2)}
            stroke="blue"
            strokeWidth={2}
          />
        </g>
      </svg>

      <p>R²: {r2.toFixed(3)}</p>
    </div>
  );
};
