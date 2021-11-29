import { useEffect, useRef } from "react";
import * as d3 from "d3";

// A function that builds the svg path of a violin from a set of numbers
const buildViolinPath = (data, y, width) => {
  const binBuilder = d3
    .bin()
    .domain(y.domain())
    .thresholds(y.ticks(27))
    .value((d) => d);
  const bins = binBuilder(data);

  const biggestBin = Math.max(...bins.map((b) => b.length));

  const w = d3
    .scaleLinear()
    .domain([-biggestBin, biggestBin])
    .range([0, width]);

  const areaBuilder = d3
    .area()
    .x0((d) => w(-d.length))
    .x1((d) => w(d.length))
    .y((d) => y(d.x0))
    .curve(d3.curveBumpY);

  return areaBuilder(bins);
};

const MARGIN = { top: 10, right: 10, bottom: 25, left: 25 };

export const Violin = (props) => {
  const { width, height, data } = props;

  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const chartRef = useRef();
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Data prep
  const [min, max] = d3.extent(data.map((d) => d.value));
  const groups = [...new Set(data.map((d) => d.name))];
  const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);
  const xScale = d3
    .scaleBand()
    .range([0, boundsWidth])
    .domain(groups)
    .padding(0.05);

  useEffect(() => {
    // X Scale and axis (rendered with d3, not with React)
    const svgElement = d3.select(chartRef.current);
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    // Y Scale and axis
    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  return (
    <svg
      width={width}
      height={height}
      style={{ backgroundColor: "#F8F8F8", display: "inline-block" }}
    >
      <g
        width={boundsWidth}
        height={boundsHeight}
        ref={chartRef}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {groups.map((group, i) => {
          const groupData = data
            .filter((d) => d.name === group)
            .map((d) => d.value);
          const path = buildViolinPath(groupData, yScale, xScale.bandwidth());
          return (
            <path
              d={path}
              stroke="none"
              fill="#69b3a2"
              transform={`translate(${xScale(group)},0)`}
            />
          );
        })}
      </g>
    </svg>
  );
};
