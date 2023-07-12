import * as d3 from 'd3';
import { useEffect, useState } from 'react';

const COLORS = ['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253'];

type Data = {
  nodes: { id: string; group: string }[];
  links: { source: string; target: string; value: number }[];
};

type NetworkDiagramProps = {
  width: number;
  height: number;
  data: Data;
};

export const NetworkDiagram = ({
  width,
  height,
  data,
}: NetworkDiagramProps) => {
  // The force simulation mutates links and nodes, so create a copy
  // so that re-evaluating this cell produces the same result.
  const links = data.links.map((d) => ({ ...d }));
  const nodes = data.nodes.map((d) => ({ ...d }));
  // note: node positions are initialized by d3

  const [isSimulationDone, setIsSimulationDone] = useState(false);

  useEffect(() => {
    const simulation = d3
      .forceSimulation(nodes)
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('end', () => {
        setIsSimulationDone(true);
      });
  }, [nodes, height, width]);

  //
  // Compute the nodes
  //
  const allNodeNames = data.nodes.map((node) => node.id);
  const allNodeGroups = [...new Set(data.nodes.map((node) => node.group))];

  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allNodeGroups)
    .range(COLORS);

  const allNodes = nodes.map((node) => {
    return (
      <circle
        key={node.id}
        cx={node.x}
        cy={node.y}
        r={16}
        fill={colorScale(node.group)}
        fillOpacity={0.3}
      />
    );
  });

  //
  // Compute the links
  //
  // const allLinks = data.links.map((link, i) => {
  //   const xStart = xScale(link.source);
  //   const xEnd = xScale(link.target);

  //   if (typeof xStart === 'undefined' || typeof xEnd === 'undefined') {
  //     return;
  //   }

  //   return (
  //     <path
  //       key={i}
  //       d={horizontalArcGenerator(
  //         xStart, // TODO: fix type
  //         boundsHeight,
  //         xEnd,
  //         boundsHeight
  //       )}
  //       stroke="black"
  //       fill="none"
  //     />
  //   );
  // });

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={'translate(' + width / 2 + ',' + height / 2 + ')'}>
          {allNodes}
          {/* {allLinks} */}
        </g>
      </svg>
    </div>
  );
};
