import { scaleOrdinal } from 'd3';
import { Group, groups } from './data';

export // Color
const colorScale = scaleOrdinal<Group, string>()
  .domain(groups)
  .range(['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253']);
