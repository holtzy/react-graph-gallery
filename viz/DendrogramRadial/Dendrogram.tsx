import { useMemo } from "react";
import { Tree } from "./data";
import * as d3 from "d3";
import { DefaultLinkObject } from "d3";

type DendrogramProps = {
  width: number;
  height: number;
  data: Tree;
};

const MARGIN = 70;

// 360 degrees (full circle) = 2π radians
const degToRad = (deg: number) => {
  return (deg * 2 * Math.PI) / 360;
};

export const Dendrogram = ({ width, height, data }: DendrogramProps) => {
  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data]);

  const radius = Math.min(width, height) / 2 - MARGIN;

  const dendrogram = useMemo(() => {
    const dendrogramGenerator = d3.cluster<Tree>().size([360, radius]);
    return dendrogramGenerator(hierarchy);
  }, [hierarchy, width, height]);

  const allNodes = dendrogram.descendants().map((node) => {
    const turnLabelUpsideDown = node.x > 180;
    return (
      <g
        key={node.id}
        transform={"rotate(" + (node.x - 90) + ")translate(" + node.y + ")"}
      >
        <circle cx={0} cy={0} r={5} stroke="transparent" fill={"#69b3a2"} />
        {!node.children && (
          <text
            x={turnLabelUpsideDown ? -15 : 15}
            y={0}
            fontSize={12}
            textAnchor={turnLabelUpsideDown ? "end" : "start"}
            transform={turnLabelUpsideDown ? "rotate(180)" : "rotate(0)"}
            alignmentBaseline="middle"
          >
            {node.data.name}
          </text>
        )}
      </g>
    );
  });

  const linksGenerator = d3
    .linkRadial<d3.HierarchyPointLink<Tree>, d3.HierarchyPointNode<Tree>>()
    .angle((node) => degToRad(node.x))
    .radius((node) => node.y);

  const allEdges = dendrogram.links().map((link) => {
    // For the very first level, draw lines instead of radial links that would look bad at the root
    if (link.source.depth === 0) {
      return (
        <g
          key={link.source + "_" + link.target}
          transform={"rotate(" + (link.target.x - 90) + ")"}
        >
          <line x1={0} y1={0} x2={link.target.y} y2={0} stroke="grey" />;
        </g>
      );
    }
    return (
      <path
        key={link.source + "_" + link.target}
        fill="none"
        stroke="grey"
        d={linksGenerator(link) || undefined}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          transform={
            "translate(" +
            (radius + MARGIN / 2) +
            "," +
            (radius + MARGIN / 2) +
            ")"
          }
        >
          {allEdges}
          {allNodes}
        </g>
      </svg>
    </div>
  );
};
