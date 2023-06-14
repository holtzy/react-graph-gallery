import * as d3 from "d3";

const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];
const MARGIN = { top: 10, right: 30, bottom: 50, left: 30 };

type Data = {
  nodes: { id: string; group: string }[];
  links: { source: string; target: string; value: number }[];
};

type ArcDiagramProps = {
  width: number;
  height: number;
  data: Data;
};

export const ArcDiagram = ({ width, height, data }: ArcDiagramProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  //
  // Compute the nodes
  //
  const allNodeNames = data.nodes.map((node) => node.id);
  const allNodeGroups = [...new Set(data.nodes.map((node) => node.group))];

  const xScale = d3.scalePoint().range([0, boundsWidth]).domain(allNodeNames);
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allNodeGroups)
    .range(COLORS);

  const allNodes = data.nodes.map((node) => {
    return (
      <circle
        key={node.id}
        cx={xScale(node.id)}
        cy={boundsHeight}
        r={8}
        fill={colorScale(node.group)}
      />
    );
  });

  //
  // Compute the links
  //
  const allLinks = data.links.map((link, i) => {
    const xStart = xScale(link.source);
    const xEnd = xScale(link.target);

    if (typeof xStart === "undefined" || typeof xEnd === "undefined") {
      return;
    }

    return (
      <path
        key={i}
        d={horizontalArcGenerator(
          xStart, // TODO: fix type
          boundsHeight,
          xEnd,
          boundsHeight
        )}
        stroke="black"
        fill="none"
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allNodes}
          {allLinks}
        </g>
      </svg>
    </div>
  );
};

const horizontalArcGenerator = (
  xStart: number,
  yStart: number,
  xEnd: number,
  yEnd: number
) => {
  return [
    // the arc starts at the coordinate xStart, xEnd
    "M",
    xStart,
    yStart,
    // A means we're gonna build an elliptical arc
    "A",
    (xStart - xEnd) / 2,
    ",", // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
    (xStart - xEnd) / 2,
    0,
    0,
    ",",
    xStart < xEnd ? 1 : 0,
    xEnd,
    ",",
    yEnd,
  ] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
    .join(" ");
};
