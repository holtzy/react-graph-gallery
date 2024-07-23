
import * as d3 from 'd3';

export const colorScale = d3
    .scaleLinear<string, string, never>()
    .range(["rgb(7, 43, 101)", "white"])
    .domain([1950, 2100]);

export const opacityScale = d3.scaleLinear().range([0.2, 1]).domain([1950, 2100]);
