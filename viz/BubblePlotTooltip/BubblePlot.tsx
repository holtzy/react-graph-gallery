import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { BubbleLegend } from "./BubbleLegend";
import { Tooltip } from "./Tooltip";

const MARGIN = { top: 30, right: 30, bottom: 80, left: 100 };
const BUBBLE_MIN_SIZE = 4;
const BUBBLE_MAX_SIZE = 40;

type BubblePlotProps = {
  width: number;
  height: number;
  data: {
    lifeExp: number;
    gdpPercap: number;
    continent: string;
    pop: number;
    country: string;
  }[];
};

export const BubblePlot = ({ width, height, data }: BubblePlotProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const [hoveredItem, setHoveredCircle] = useState<string | null>(null);
  console.log("hoveredItem", hoveredItem);

  //Scales
  const yScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.lifeExp));
    return d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]).nice();
  }, [data, height]);

  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.gdpPercap));
    return d3.scaleLinear().domain([0, max]).range([0, boundsWidth]).nice();
  }, [data, width]);

  const groups = data
    .map((d) => d.continent)
    .filter((x, i, a) => a.indexOf(x) == i);

  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(groups)
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

  const sizeScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.pop));
    return d3
      .scaleSqrt()
      .domain([0, max])
      .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);
  }, [data, width]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + (boundsHeight + 20) + ")")
      .call(xAxisGenerator);
    svgElement
      .append("text")
      .attr("font-size", 12)
      .attr("text-anchor", "end")
      .attr("x", boundsWidth)
      .attr("y", boundsHeight + 60)
      .text("Gdp per Capita");

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement
      .append("g")
      .attr("transform", "translate(" + -20 + ",0)")
      .call(yAxisGenerator);
    svgElement
      .append("text")
      .attr("font-size", 12)
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -60)
      .text("Life expectancy")
      .attr("transform", "rotate(-90)");
  }, [xScale, yScale, boundsHeight, boundsWidth]);

  // Build the shapes
  const allShapes = data
    .sort((a, b) => b.pop - a.pop)
    .map((d, i) => {
      return (
        <circle
          key={i}
          r={sizeScale(d.pop)}
          cx={xScale(d.gdpPercap)}
          cy={yScale(d.lifeExp)}
          opacity={1}
          stroke={colorScale(d.continent)}
          fill={colorScale(d.continent)}
          fillOpacity={0.4}
          strokeWidth={1}
          onMouseEnter={() => setHoveredCircle(d.country)}
          onMouseLeave={() => setHoveredCircle(null)}
        />
      );
    });

  return (
    <div style={{ position: "relative", width, height }}>
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
      {/* Legend */}
      <div style={{ position: "absolute", right: 0, bottom: 100 }}>
        <BubbleLegend scale={sizeScale} tickNumber={4} />
      </div>
      {/* Tooltip */}
      <Tooltip hoveredItem={hoveredItem} width={width} height={height} />
    </div>
  );
};
