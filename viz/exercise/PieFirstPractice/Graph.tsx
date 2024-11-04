import * as d3 from 'd3';
import { data, DataItem } from './data';

const MARGIN = 30;
const width = 400;
const height = 400;
const colors = ['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56'];

export const Graph = () => {
  const radius = Math.min(width, height) / 2 - MARGIN;

  // TODO

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>{/* TODO */}</g>
    </svg>
  );
};
