import * as d3 from 'd3';
import { Data } from './data';
import { AxisConfig, INNER_RADIUS, RadarGrid } from './RadarGrid';

const MARGIN = 40;

type YScale = d3.ScaleRadial<number, number, never>;

type RadarProps = {
  width: number;
  height: number;
  data: Data;
  axisConfig: AxisConfig[];
};

/*
  A react component that builds a Radar Chart for several groups in the dataset
*/
export const Radar = ({ width, height, data, axisConfig }: RadarProps) => {
  const outerRadius = Math.min(width, height) / 2 - MARGIN;

  // The x scale provides an angle for each variable of the dataset
  const allVariableNames = axisConfig.map((axis) => axis.name);
  const xScale = d3
    .scaleBand()
    .domain(allVariableNames)
    .range([0, 2 * Math.PI]);

  // Compute the y scales: 1 scale per variable.
  // Provides the distance to the center.
  let yScales: { [name: string]: YScale } = {};
  axisConfig.forEach((axis) => {
    yScales[axis.name] = d3
      .scaleRadial()
      .domain([0, axis.max])
      .range([INNER_RADIUS, outerRadius]);
  });

  return (
    <svg width={width} height={height}>
      <g transform={'translate(' + width / 2 + ',' + height / 2 + ')'}>
        <RadarGrid
          outerRadius={outerRadius}
          xScale={xScale}
          axisConfig={axisConfig}
        />
      </g>
    </svg>
  );
};
