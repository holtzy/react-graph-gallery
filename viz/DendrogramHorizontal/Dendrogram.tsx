import { useMemo } from "react";
import { Tree } from "./data";
import * as d3 from "d3";

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
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data]);

  const dendrogram = useMemo(() => {
    const dendrogramGenerator = d3
      .cluster<Tree>()
      .size([boundsHeight, boundsWidth]);
    return dendrogramGenerator(hierarchy);
  }, [hierarchy, width, height]);

  const allNodes = dendrogram.descendants().map((node) => {
    return (
      <g key={node.id}>
        <circle
          cx={node.y}
          cy={node.x}
          r={5}
          stroke="transparent"
          fill={"#69b3a2"}
        />
        {!node.children && (
          <text
            x={node.y + 15}
            y={node.x}
            fontSize={12}
            textAnchor="left"
            alignmentBaseline="middle"
          >
            {node.data.name}
          </text>
        )}
      </g>
    );
  });

  const horizontalLinkGenerator = d3.linkHorizontal();

  const allEdges = dendrogram.descendants().map((node) => {
    if (!node.parent) {
      return;
    }
    return (
      <path
        key={node.id}
        fill="none"
        stroke="grey"
        d={horizontalLinkGenerator({
          source: [node.parent.y, node.parent.x],
          target: [node.y, node.x],
        })}
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
          {allEdges}
        </g>
      </svg>
    </div>
  );
};
