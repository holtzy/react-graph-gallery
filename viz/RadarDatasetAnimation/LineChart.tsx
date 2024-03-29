import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { useSpring, animated } from '@react-spring/web';

const MARGIN = { top: 10, right: 10, bottom: 40, left: 10 };

type Datapoint = { x: Date; value: number };

type LineChartProps = {
  width: number;
  height: number;
  data: Datapoint[];
  color: string;
};

export const LineChart = ({ width, height, data, color }: LineChartProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = d3.scaleLinear().domain([0, 100]).range([boundsHeight, 0]);

  const xExtent = d3.extent(data, (d) => d.x);

  const xScale = d3.scaleTime().domain(xExtent).range([0, boundsWidth]).nice();

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + boundsHeight + ')')
      .call(xAxisGenerator.ticks(4));
  }, [xScale, yScale, boundsHeight]);

  const lineBuilder = d3
    .line<Datapoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.value));
  const linePath = lineBuilder(data);

  if (!linePath) {
    return null;
  }

  return (
    <div>
      <svg width={width} height={height}>
        {/* first group is lines */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          <LineItem path={linePath} color={color} />
        </g>
        {/* Second is for the axes */}
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

type LineItemProps = {
  path: string;
  color: string;
};

const LineItem = ({ path, color }: LineItemProps) => {
  const springProps = useSpring({
    to: {
      path,
      color,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <animated.path
      d={springProps.path}
      fill={'none'}
      stroke={color}
      strokeWidth={2}
    />
  );
};
