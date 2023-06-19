import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";

const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];
const MARGIN = { top: 10, right: 30, bottom: 50, left: 30 };

type Data = {
  nodes: { node: string }[];
  links: { source: string; target: string; value: number }[];
};

type SankeyProps = {
  width: number;
  height: number;
  data: Data;
};

export const Sankey = ({ width, height, data }: SankeyProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Set the sankey diagram properties
  const sankeyGenerator = sankey()
    .nodeWidth(26)
    .nodePadding(29)
    .size([boundsWidth, boundsHeight]);

  const { nodes, links } = sankeyGenerator(data);

  //
  // Compute the nodes
  //
  const allNodes = nodes.map((node) => {
    console.log({ node });
    return (
      <g key={node.index}>
        <rect
          height={node.y1 - node.y0}
          width={sankeyGenerator.nodeWidth()}
          x={node.x0}
          y={node.y0}
          stroke={"black"}
          fill="none"
        />
      </g>
    );
  });

  // const allNodeNames = data.nodes.map((node) => node.id);
  // const allNodeGroups = [...new Set(data.nodes.map((node) => node.group))];

  // const xScale = d3.scalePoint().range([0, boundsWidth]).domain(allNodeNames);
  // const colorScale = d3
  //   .scaleOrdinal<string>()
  //   .domain(allNodeGroups)
  //   .range(COLORS);

  // const allNodes = data.nodes.map((node) => {
  //   return (
  //     <circle
  //       key={node.id}
  //       cx={xScale(node.id)}
  //       cy={boundsHeight}
  //       r={8}
  //       fill={colorScale(node.group)}
  //     />
  //   );
  // });

  //
  // Compute the links
  //
  const allLinks = links.map((link, i) => {
    const gen = sankeyLinkHorizontal();
    const path = gen(link);
    console.log({ path });
    return <path key={i} d={path} stroke="black" fill="none" />;
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
