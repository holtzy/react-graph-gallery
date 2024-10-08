import { sankey, sankeyCenter, sankeyLinkHorizontal } from 'd3-sankey';
import { InputData } from './data';
import { scaleOrdinal } from 'd3';

const MARGIN_Y = 25;
const MARGIN_X = 5;
const COLORS = ['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0'];

// List of all group names
const allGroups = ['Amanda', 'Jay', 'Tom', 'Xin'];

// Color scale
const colorScale = scaleOrdinal<string>().domain(allGroups).range(COLORS);

type SankeyBumpChartProps = {
  width: number;
  height: number;
  data: InputData;
};

export const SankeyBumpChart = ({
  width,
  height,
  data,
}: SankeyBumpChartProps) => {
  // Transform the dataset to a list of nodes and a list of links:
  const nodeAndLinksData = transformData(data);
  console.log('nodeAndLinksData', nodeAndLinksData);

  // Set the sankey diagram properties
  const sankeyGenerator = sankey() // TODO: find how to type the sankey() function
    .nodeWidth(26)
    .nodePadding(29)
    .nodeSort((node1, node2) => {
      console.log('node1', node1);
      return node1.value > node2.value ? -1 : 1;
    })
    .extent([
      [MARGIN_X, MARGIN_Y],
      [width - MARGIN_X, height - MARGIN_Y],
    ])
    .nodeId((node) => node.id) // Accessor function: how to retrieve the id that defines each node. This id is then used for the source and target props of links
    .nodeAlign(sankeyCenter); // Algorithm used to decide node position

  // Compute nodes and links positions
  const { nodes, links } = sankeyGenerator(nodeAndLinksData);

  //
  // Draw the nodes
  //
  const allNodes = nodes.map((node) => {
    console.log('---', node);
    return (
      <g key={node.index}>
        <rect
          height={node.y1 - node.y0}
          width={sankeyGenerator.nodeWidth()}
          x={node.x0}
          y={node.y0}
          stroke={'black'}
          fill={colorScale(String(node.index).split('_')[0])}
          fillOpacity={0.8}
          rx={0.9}
        />
      </g>
    );
  });

  //
  // Draw the links
  //
  const allLinks = links.map((link, i) => {
    const linkGenerator = sankeyLinkHorizontal();
    const path = linkGenerator(link);

    return (
      <path
        key={i}
        d={path}
        stroke="#a53253"
        fill="none"
        strokeOpacity={0.1}
        strokeWidth={link.width}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allNodes}
        {allLinks}
      </svg>
    </div>
  );
};

export type Node = {
  id: string;
  value: number;
};

export type Link = {
  source: string;
  target: string;
  value: number;
};

export type OutputData = {
  nodes: Node[];
  links: Link[];
};

const transformData = (input: InputData): OutputData => {
  const nodes: Node[] = [];
  const links: Link[] = [];

  const nameYearMap: { [name: string]: string[] } = {};

  input.forEach((entry) => {
    const id = `${entry.name}_${entry.year}`;

    // Add node
    nodes.push({ id, value: entry.value });

    // Create a map of name -> years for link creation
    if (!nameYearMap[entry.name]) {
      nameYearMap[entry.name] = [];
    }
    nameYearMap[entry.name].push(id);
  });

  // Create links between consecutive years for each name
  for (const name in nameYearMap) {
    const years = nameYearMap[name];
    for (let i = 0; i < years.length - 1; i++) {
      links.push({
        source: years[i],
        target: years[i + 1],
        value: 2, // nodes.find((n) => n.id === years[i])['value'],
      });
    }
  }

  console.log('***', nodes);
  return { nodes, links };
};
