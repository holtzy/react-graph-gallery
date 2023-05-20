import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { useSpring, animated } from "@react-spring/web";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type Datapoint = { x: number; melanie: number; yan: number };

type LineChartProps = {
  width: number;
  height: number;
  data: Datapoint[];
  selectedGroup: "melanie" | "yan";
};

export const LineChart = ({
  width,
  height,
  data,
  selectedGroup,
}: LineChartProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 100]).range([boundsHeight, 0]);
  }, [data, height]);

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 10]).range([0, boundsWidth]);
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

  const lineBuilder = d3
    .line<Datapoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d[selectedGroup]));
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
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <LineItem
            path={linePath}
            color={selectedGroup === "yan" ? "#69b3a2" : "#9a6fb0"}
          />
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
      fill={"none"}
      stroke={color}
      strokeWidth={2}
    />
  );
};
