import { useEffect, useMemo, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  axisBottom,
  axisLeft,
  extent,
  line,
  max,
  scaleLinear,
  scaleTime,
  select,
  timeParse,
} from "d3";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 100 };

type DataItem = {
  value: number;
  group: string;
  date: string;
};

type LineChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};

export const LineChart = ({ width, height, data }: LineChartProps) => {
  console.log({ data });

  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups = [...new Set(data.map((d) => d.group))];

  const parseTime = timeParse("%Y-%m-%d");
  const dateDomain = extent(data.map((d) => parseTime(d.date)));

  const maxValue = max(data.map((d) => d.value)) || 0;

  const yScale = scaleLinear().domain([0, maxValue]).range([boundsHeight, 0]);

  const xScale = scaleTime().domain(dateDomain).range([0, boundsWidth]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = select(axesRef.current);
    svgElement.selectAll("*").remove();

    const xAxisGenerator = axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  const lineBuilder = line<DataItem>()
    .x((d) => xScale(parseTime(d.date)))
    .y((d) => yScale(d.value));

  const allLines = allGroups.map((selectedGroup, i) => {
    const path = lineBuilder(data.filter((d) => d.group === selectedGroup));
    return <LineItem key={i} path={path} color={"#9a6fb0"} />;
  });

  return (
    <div>
      <svg width={width} height={height}>
        {/* first group is lines */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allLines}
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
