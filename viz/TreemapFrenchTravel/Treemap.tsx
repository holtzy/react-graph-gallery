import * as d3 from 'd3';
import styles from './treemap.module.css';
import { Tree } from '@/viz/TreemapFrenchTravel/data';
import { Rectangle } from './Rectangle';
import { useMemo } from 'react';

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
  'red',
];

export const Treemap = ({ width, height, data }: TreemapProps) => {
  const hierarchy = d3
    .hierarchy(data)
    .sum((d) => d.value)
    .sort((a, b) => b.value - a.value);

  const treeGenerator = useMemo(() => {
    console.log('compute tree generator');

    return d3
      .treemap()
      .size([width, height])
      .padding(4)
      .round(true)
      .tile(d3.treemapResquarify);
  }, []);

  const root = treeGenerator(hierarchy);

  const allGroups = hierarchy
    .leaves()
    .map((l) => l.data.name)
    .sort((a, b) => b.localeCompare(a));

  var colorScale = d3.scaleOrdinal().domain(allGroups).range(colors);

  const allShapes = root.leaves().map((leaf) => {
    return (
      <g key={leaf.id}>
        <Rectangle
          key={leaf.data.name}
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          label={leaf.data.name}
          value={leaf.data.value}
          color={colorScale(leaf.data.name)}
        />
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
