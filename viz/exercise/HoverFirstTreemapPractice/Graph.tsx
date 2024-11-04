import { useMemo } from 'react';
import { Tree, data } from './data';
import * as d3 from 'd3';
import styles from './graph.module.css';

const width = 500;
const height = 300;

export const Graph = () => {
  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data]);

  const root = useMemo(() => {
    const treeGenerator = d3.treemap<Tree>().size([width, height]).padding(4);
    return treeGenerator(hierarchy);
  }, [hierarchy, width, height]);

  // Use console.log to check how this root object looks like!
  // Check root.leaves() too!

  // Now, use root.leaves() to add rectangles

  return (
    <div>
      <svg width={width} height={height}>
        {/*  rectangles here! */}
      </svg>
    </div>
  );
};
