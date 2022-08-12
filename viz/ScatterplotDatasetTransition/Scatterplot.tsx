import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { useSpring, animated } from "@react-spring/web";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type ScatterplotProps = {
  width: number;
  height: number;
  data: { x: number; y: number; name: string }[];
};

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 100]).range([boundsHeight, 0]);
  }, [data, height]);

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 100]).range([0, boundsWidth]);
  }, [data, width]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
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

  // Build the shapes
  const allShapes = data.map((d, i) => {
    const color =
      d.x === 50 && d.y === 50
        ? "blue"
        : d.x === 20 && d.y === 20
        ? "red"
        : "purple";

    return (
      <CircleItem key={d.name} x={xScale(d.x)} y={yScale(d.y)} color={color} />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {/* first group is for the violin and box shapes */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allShapes}
        </g>
        {/* Second is for the axes */}
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

type CircleItemProps = {
  x: number;
  y: number;
  color: string;
};

const CircleItem = ({ x, y, color }: CircleItemProps) => {
  const springProps = useSpring({
    // this is how the circle enter the scene the first time.
    from: {
      opacity: 0,
      r: 0,
    },
    to: {
      x,
      y,
      opacity: 1,
      r: 8,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <animated.circle
      r={springProps.r}
      cx={springProps.x}
      cy={springProps.y}
      opacity={1}
      fill={color}
      fillOpacity={springProps.opacity}
    />
  );
};
