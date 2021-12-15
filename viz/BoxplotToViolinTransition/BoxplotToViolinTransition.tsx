import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { buildBoxplotPath, buildViolinPath } from "./util";
import { ShapeRenderer } from "./ShapeRenderer";

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "4px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
};

const MARGIN = { top: 10, right: 10, bottom: 25, left: 25 };

type BoxplotToViolinTransitionProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const BoxplotToViolinTransition = (
  props: BoxplotToViolinTransitionProps
) => {
  const [type, setType] = useState("violinplot");
  const { width, height, data } = props;

  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Compute everything derived from the dataset:
  const { min, max, groups } = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value)) as [number, number];
    const groups = data
      .map((d) => d.name)
      .filter((x, i, a) => a.indexOf(x) == i);
    return { min, max, groups };
  }, [data]);

  // Compute scales
  const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);
  const xScale = d3
    .scaleBand()
    .range([0, boundsWidth])
    .domain(groups)
    .padding(0.25);

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
  const allShapes = groups.map((group, i) => {
    const groupData = data.filter((d) => d.name === group).map((d) => d.value);
    const path =
      type === "boxplot"
        ? buildBoxplotPath(groupData, yScale, xScale.bandwidth())
        : buildViolinPath(groupData, yScale, xScale.bandwidth());
    return (
      <ShapeRenderer
        key={i}
        path={path}
        xTranslate={xScale(group)}
        type={type}
        opacity={type === "boxplot" ? 1 : 0.1}
      />
    );
  });

  return (
    <div>
      <div>
        <button style={buttonStyle} onClick={() => setType("boxplot")}>
          Boxplot
        </button>
        <button style={buttonStyle} onClick={() => setType("violinplot")}>
          Violin
        </button>
      </div>

      <svg
        width={width}
        height={height}
        style={{
          display: "inline-block",
        }}
      >
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
