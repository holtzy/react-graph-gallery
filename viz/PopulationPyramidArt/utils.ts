
import * as d3 from 'd3';

export const colorScale = d3
    .scaleLinear<string, string, never>()
    .range(['blue', 'white'])
    .domain([1950, 2100]);

export const opacityScale = d3.scaleLinear().range([0, 1]).domain([1950, 2100]);
