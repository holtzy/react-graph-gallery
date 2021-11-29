import { useMemo } from "react";
import * as d3 from "d3";
import { Tree } from "../../data/hierarchy-1-level-random";

type CircularPackingBasicProps = {
  width: number;
  height: number;
  data: Tree;
};

export const CircularPackingBasic = ({
  width,
  height,
  data,
}: CircularPackingBasicProps) => {
  const hierarchy = useMemo(() => {
    return d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value! - a.value!);
  }, [data]);

  const root = useMemo(() => {
    return d3.pack<Tree>().size([width, height]).padding(4)(hierarchy);
  }, [hierarchy, width, height]);

  return (
    <svg
      width={width}
      height={height}
      style={{ backgroundColor: "#f8f9fa", display: "inline-block" }}
    >
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <circle
            key={node.data.name}
            cx={node.x}
            cy={node.y}
            r={node.r}
            stroke="#553C9A"
            strokeWidth={2}
            fill="#B794F4"
            fillOpacity={0.2}
          />
        ))}
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <text
            key={node.data.name}
            x={node.x}
            y={node.y}
            fontSize={13}
            fontWeight={0.4}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {node.data.name}
          </text>
        ))}
    </svg>
  );
};
