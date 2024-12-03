import * as d3 from 'd3';
import styles from './treemap.module.css';
import { Tree } from '@/viz/TreemapFrenchTravel/data';
import { Rectangle } from './Rectangle';

type TreemapProps = {
  width: number;
  height: number;
  data: Tree;
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

  const treeGenerator = d3.treemap<Tree>().size([width, height]).padding(4);
  const root = treeGenerator(hierarchy);

  const allShapes = root.leaves().map((leaf) => {
    return (
      <g key={leaf.id}>
        <Rectangle
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
        />

        {/* <text
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
        </text> */}
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allShapes}
      </svg>
    </div>
  );
};
