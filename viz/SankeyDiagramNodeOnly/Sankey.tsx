import { sankey, sankeyCenter, sankeyLinkHorizontal } from "d3-sankey";

const MARGIN_Y = 25;
const MARGIN_X = 5;

type Data = {
  nodes: { id: string }[];
  links: { source: string; target: string; value: number }[];
};

type SankeyProps = {
  width: number;
  height: number;
  data: Data;
};

export const Sankey = ({ width, height, data }: SankeyProps) => {
  // Set the sankey diagram properties
  const sankeyGenerator = sankey() // TODO: find how to type the sankey() function
    .nodeWidth(26)
    .nodePadding(29)
    .extent([
      [MARGIN_X, MARGIN_Y],
      [width - MARGIN_X, height - MARGIN_Y],
    ])
    .nodeId((node) => node.id) // Accessor function: how to retrieve the id that defines each node. This id is then used for the source and target props of links
    .nodeAlign(sankeyCenter); // Algorithm used to decide node position

  // Compute nodes and links positions
  const { nodes, links } = sankeyGenerator(data);

  //
  // Draw the nodes
  //
  const allNodes = nodes.map((node) => {
    return (
      <g key={node.index}>
        <rect
          height={node.y1 - node.y0}
          width={sankeyGenerator.nodeWidth()}
          x={node.x0}
          y={node.y0}
          stroke={"black"}
          fill="#a53253"
          fillOpacity={0.8}
          rx={0.9}
        />
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allNodes}
      </svg>
    </div>
  );
};
