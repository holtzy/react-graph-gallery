import { useMemo } from 'react';
import { Tree } from './data';
import * as d3 from 'd3';

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type DendrogramProps = {
  width: number;
  height: number;
  data: Tree;
};

export const Dendrogram = ({ width, height, data }: DendrogramProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const hierarchy = useMemo(() => {
    return d3.hierarchy(data);
  }, [data]);

  const dendrogram = useMemo(() => {
    const dendrogramGenerator = d3
      .cluster<Tree>()
      .size([boundsWidth, boundsHeight]);
    return dendrogramGenerator(hierarchy);
  }, [hierarchy, width, height]);

  const allNodes = dendrogram.descendants().map((node) => {
    return (
      <g key={'node' + node.id}>
        <circle
          cx={node.x}
          cy={node.y}
          r={5}
          stroke="transparent"
          fill={'#69b3a2'}
        />
        <text x={node.x} y={node.y + 25} fontSize={12} textAnchor="middle">
          {node.data.name}
        </text>
      </g>
    );
  });

  const allEdges = dendrogram.descendants().map((node) => {
    if (!node.parent) {
      return null;
    }
    return (
      <line
        key={'line' + node.id}
        fill="none"
        stroke="grey"
        x1={node.x}
        x2={node.parent.x}
        y1={node.y}
        y2={node.parent.y}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allNodes}
          {allEdges}
        </g>
      </svg>
    </div>
  );
};
