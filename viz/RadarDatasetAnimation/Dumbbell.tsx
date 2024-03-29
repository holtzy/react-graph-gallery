import { useMemo } from 'react';
import * as d3 from 'd3';
import { DumbbellItem } from './DumbbellItem';

const MARGIN = { top: 10, right: 10, bottom: 40, left: 10 };

type DumbbellProps = {
  width: number;
  height: number;
  data: { name: string; value1: number; value2: number };
  color: string;
};

export const Dumbbell = ({ width, height, data, color }: DumbbellProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // X axis
  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 250]).range([0, boundsWidth]);
  }, [data, width]);

  const selectedShape = (
    <DumbbellItem
      xValue1={xScale(data.value1)}
      xValue2={xScale(data.value2)}
      color={color}
      y={boundsHeight / 2}
    />
  );

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {selectedShape}
          <g>
            <line
              x1={0}
              y1={boundsHeight}
              y2={boundsHeight}
              x2={boundsWidth}
              opacity={1}
              stroke="grey"
              strokeWidth={0.5}
              shapeRendering="crispEdges"
            />
            <text
              x={boundsWidth}
              y={boundsHeight + 15}
              fontSize={12}
              textAnchor="end"
              color="grey"
            >
              Salary range (k$)
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
