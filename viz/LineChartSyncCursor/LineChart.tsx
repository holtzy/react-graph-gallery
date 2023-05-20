import { MouseEventHandler, useLayoutEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { useSpring, animated } from "react-spring";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type DataPoint = { x: number; y: number };
type LineChartProps = {
  width: number;
  height: number;
  data: DataPoint[];
  color: string;
  cursorPosition: number | null;
  setCursorPosition: (position: number | null) => void;
};

export const LineChart = ({
  width,
  height,
  data,
  cursorPosition,
  setCursorPosition,
  color,
}: LineChartProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const [min, max] = d3.extent(data, (d) => d.y);
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max || 0])
      .range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, xMax || 0])
      .range([0, boundsWidth]);
  }, [data, width]);

  // Render the X and Y axis using d3.js, not react
  useLayoutEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  // Build the line
  const lineBuilder = d3
    .line<DataPoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
  const linePath = lineBuilder(data);
  if (!linePath) {
    return null;
  }

  //
  const getClosestPoint = (cursorPixelPosition: number) => {
    const x = xScale.invert(cursorPixelPosition);

    let minDistance = Infinity;
    let closest: DataPoint | null = null;

    for (const point of data) {
      const distance = Math.abs(point.x - x);
      if (distance < minDistance) {
        minDistance = distance;
        closest = point;
      }
    }

    return closest;
  };

  //
  const onMouseMove = (e: React.MouseEvent<SVGRectElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    const closest = getClosestPoint(mouseX);

    setCursorPosition(xScale(closest.x));
  };

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <path
            d={linePath}
            opacity={1}
            stroke={color}
            fill="none"
            strokeWidth={2}
          />
          {cursorPosition && (
            <Cursor
              height={boundsHeight}
              x={cursorPosition}
              y={yScale(getClosestPoint(cursorPosition)?.y)}
              color={color}
            />
          )}
          <rect
            x={0}
            y={0}
            width={boundsWidth}
            height={boundsHeight}
            onMouseMove={onMouseMove}
            onMouseLeave={() => setCursorPosition(null)}
            visibility={"hidden"}
            pointerEvents={"all"}
          />
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
    </div>
  );
};

type CursorProps = {
  x: number | null;
  y: number;
  height: number;
  color: string;
};

const Cursor = ({ x, y, height, color }: CursorProps) => {
  const springProps = useSpring({
    to: {
      x,
      y,
    },
  });

  if (!springProps.x) {
    return null;
  }

  return (
    <>
      <animated.line
        x1={springProps.x}
        x2={springProps.x}
        y1={0}
        y2={height}
        stroke="black"
        strokeWidth={1}
      />
      <circle cx={x} cy={y} r={5} fill={color} />
    </>
  );
};
