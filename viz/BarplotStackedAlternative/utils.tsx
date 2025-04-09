import { scaleOrdinal } from 'd3';
import { Subgroup } from './data';

export const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

export const allSubgroups: Subgroup[] = [
  'Consumer',
  'Corporate',
  'Home Office',
];

export const colorScale = scaleOrdinal<Subgroup, string>()
  .domain(allSubgroups)
  .range(['#e0ac2b', '#e85252', '#6689c6']);
