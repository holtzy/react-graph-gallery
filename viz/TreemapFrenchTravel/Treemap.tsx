import { useMemo } from 'react';
import * as d3 from 'd3';
import styles from './treemap.module.css';

export type TreeNode = {
  type: 'node';
  name: string;
  children: Tree[];
};
export type TreeLeaf = {
  parent: string;
  name: string;
  value: number;
};

export type Tree = TreeNode | TreeLeaf;

type TreemapProps = {
  width: number;
  height: number;
  data: d3.HierarchyNode<unknown>;
};

const colors = [
  '#e0ac2b',
  '#6689c6',
  '#a4c969',
  '#e85252',
  '#9a6fb0',
  '#a53253',
  '#7f7f7f',
];

export const Treemap = ({ width, height, data }: TreemapProps) => {
  const hierarchy = d3.hierarchy(data).sum((d) => d.value);
  console.log('hierarchy', hierarchy);

  const firstLevelGroups = hierarchy?.children?.map((child) => child.data.name);
  console.log('firstLevelGroups', firstLevelGroups);

  var colorScale = d3
    .scaleOrdinal<string>()
    .domain(firstLevelGroups || [])
    .range(colors);

  const treeGenerator = d3.treemap<Tree>().size([width, height]).padding(4);
  const root = treeGenerator(hierarchy);
  console.log('root', root);

  const allShapes = root.leaves().map((leaf, i) => {
    console.log('leaf', leaf);
    return (
      <g key={leaf.id} className={styles.rectangle}>
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          stroke="transparent"
          fill={colorScale(leaf.data.name)}
          className={'opacity-80 hover:opacity-100'}
        />
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 3}
          fontSize={12}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-bold"
        >
          {leaf.data.name}
        </text>
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 18}
          fontSize={12}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-light"
        >
          {leaf.data.value}
        </text>
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height} className={styles.container}>
        {allShapes}
      </svg>
    </div>
  );
};
