import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { DumbbellItem } from './DumbbellItem';

const MARGIN = { top: 40, right: 10, bottom: 60, left: 30 };

type DumbbellProps = {
  width: number;
  height: number;
  data: { name: string; value1: number; value2: number };
  color: string;
};

export const Dumbbell = ({ width, height, data, color }: DumbbellProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const axesRef = useRef(null);
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

  // Render the X axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + boundsHeight + ')')
      .call(xAxisGenerator.ticks(4));
    svgElement
      .append('text')
      .attr('x', boundsWidth)
      .attr('y', boundsHeight + 40)
      .style('text-anchor', 'end')
      .style('font-size', 12)
      .text('Salary range (in k$)');
  }, [xScale, boundsHeight]);

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {selectedShape}
          {/* Second is for the axes */}
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        />
      </svg>
    </div>
  );
};
