import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { Circle } from './Circle';
import { LineItem } from './Line';
import { AxisBottom } from './AxisBottom';

const MARGIN = { top: 30, right: 60, bottom: 50, left: 60 };
const COLOR1 = '#9a6fb0';
const COLOR2 = '#e0ac2b';

type DataPoint = { x: number; y: number; z: number };

type LineChartProps = {
  width: number;
  height: number;
  data: DataPoint[];
  leftDomain: [number, number];
  rightDomain: [number, number];
};

export const LineChart = ({
  width,
  height,
  data,
  leftDomain,
  rightDomain,
}: LineChartProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis (left)
  const yScaleLeft = d3
    .scaleLinear()
    .domain(leftDomain)
    .range([boundsHeight, 0]);

  // Y axis (right)
  const yScaleRight = d3
    .scaleLinear()
    .domain(rightDomain)
    .range([boundsHeight, 0]);

  // X axis
  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([2004, 2023]).range([0, boundsWidth]);
  }, [data, width]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();

    const yAxisGenerator = d3.axisLeft(yScaleLeft);
    svgElement
      .append('g')
      .attr('transform', 'translate(-30,0)')
      .call(yAxisGenerator);

    const yRightAxisGenerator = d3.axisRight(yScaleRight);
    svgElement
      .append('g')
      .attr('transform', 'translate(' + (boundsWidth + 30) + ', 0)')
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
    return <Circle cx={xScale(d.x)} cy={yScaleLeft(d.y)} color={COLOR1} />;
  });

  const allCircleRight = data.map((d) => {
    return <Circle cx={xScale(d.x)} cy={yScaleRight(d.z)} color={COLOR2} />;
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
          overflow={'hidden'}
        >
          <rect
            x={-30}
            width={boundsWidth + 30 * 2}
            y={0}
            height={boundsHeight}
            className="bg-sl"
            fill="#f8fafc"
          />

          {/* Axes */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              pixelsPerTick={80}
              height={boundsHeight}
            />
          </g>

          {/* axis title */}
          <text x={-10} y={16} fontSize={12} fill={COLOR1}>
            World GDP
          </text>
          <text x={boundsWidth - 60} y={16} fontSize={12} fill={COLOR2}>
            France GDP
          </text>

          <LineItem path={linePathLeft} color={COLOR1} />
          {allCircleLeft}
          <LineItem path={linePathRight} color={COLOR2} />
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
