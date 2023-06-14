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

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allNodes}
        </g>
      </svg>
    </div>
  );
};
