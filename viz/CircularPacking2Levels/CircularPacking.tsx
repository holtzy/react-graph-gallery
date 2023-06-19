import * as d3 from "d3";
import { Tree } from "../../data/hierarchy-1-level-random";

type CircularPackingProps = {
  width: number;
  height: number;
  data: Tree;
};

const MARGIN = 3;

const colors = [
  "#e0ac2b",
  "#6689c6",
  "#a4c969",
  "#e85252",
  "#9a6fb0",
  "#a53253",
  "#7f7f7f",
];

export const CircularPacking = ({
  width,
  height,
  data,
}: CircularPackingProps) => {
  const hierarchy = d3
    .hierarchy(data)
    .sum((d) => d.value)
    .sort((a, b) => b.value! - a.value!);

  const packGenerator = d3.pack<Tree>().size([width, height]).padding(4);
  const root = packGenerator(hierarchy);

  // List of item of level 1 (just under root) & related color scale
  const firstLevelGroups = hierarchy?.children?.map((child) => child.data.name);
  var colorScale = d3
    .scaleOrdinal<string>()
    .domain(firstLevelGroups || [])
    .range(colors);

  // Circles for level 1 of the hierarchy
  const allLevel1Circles = root
    .descendants()
    .filter((node) => node.depth === 1)
    .map((node) => {
      const parentName = node.data.name;

      return (
        <g key={node.data.name}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            stroke={colorScale(parentName)}
            strokeWidth={1}
            strokeOpacity={0.3}
            fill={colorScale(parentName)}
            fillOpacity={0.1}
          />
        </g>
      );
    });

  // Circles for level 2 = leaves
  const allLeafCircles = root.leaves().map((leaf) => {
    const parentName = leaf.parent?.data.name;

    if (!parentName) {
      return null;
    }

    return (
      <g key={leaf.data.name}>
        <circle
          cx={leaf.x}
          cy={leaf.y}
          r={leaf.r}
          stroke={colorScale(parentName)}
          strokeWidth={2}
          fill={colorScale(parentName)}
          fillOpacity={0.2}
        />

        <text
          key={leaf.data.name}
          x={leaf.x}
          y={leaf.y}
          fontSize={13}
          fontWeight={0.4}
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {leaf.data.name}
        </text>
      </g>
    );
  });

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      {allLevel1Circles}
      {allLeafCircles}
    </svg>
  );
};
