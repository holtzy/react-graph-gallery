import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type DataPoint = { x: number; y: number; z: number };

type LineChartProps = {
  width: number;
  height: number;
  data: DataPoint[];
  domainLeft: [number, number];
  domainRight: [number, number];
};

export const LineChart = ({
  width,
  height,
  data,
  domainLeft,
  domainRight,
}: LineChartProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis (left)
  const yScaleLeft = d3
    .scaleLinear()
    .domain(domainLeft)
    .range([boundsHeight, 0]);

  // Y axis (right)
  const yScaleRight = d3
    .scaleLinear()
    .domain(domainRight)
    .range([boundsHeight, 0]);

  // X axis
  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([2004, 2023]).range([0, boundsWidth]);
  }, [data, width]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + boundsHeight + ')')
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScaleLeft);
    svgElement.append('g').call(yAxisGenerator);

    const yRightAxisGenerator = d3.axisRight(yScaleRight);
    svgElement
      .append('g')
      .attr('transform', 'translate(' + boundsWidth + ', 0)')
      .call(yRightAxisGenerator);
  }, [xScale, yScaleRight, yScaleLeft, boundsHeight]);

  // Build the line
  const lineBuilderLeft = d3
    .line<DataPoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScaleLeft(d.y));
  const linePathLeft = lineBuilderLeft(data);

  const lineBuilderRight = d3
    .line<DataPoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScaleRight(d.z));
  const linePathRight = lineBuilderRight(data);

  const allCircleLeft = data.map((d) => {
    return (
      <circle cx={xScale(d.x)} cy={yScaleLeft(d.y)} r={5} fill="#9a6fb0" />
    );
  });

  const allCircleRight = data.map((d) => {
    return (
      <circle cx={xScale(d.x)} cy={yScaleRight(d.z)} r={5} fill="orange" />
    );
  });

  if (!linePathRight || !linePathLeft) {
    return null;
  }

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          <path
            d={linePathLeft}
            opacity={1}
            stroke="#9a6fb0"
            fill="none"
            strokeWidth={2}
          />
          {allCircleLeft}
          <path
            d={linePathRight}
            opacity={1}
            stroke="orange"
            fill="none"
            strokeWidth={2}
          />
          {allCircleRight}
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
