import * as d3 from 'd3';
import { Data } from './data';
import { AxisConfig, INNER_RADIUS, RadarGrid } from './RadarGrid';

const MARGIN = 30;
const COLORS = [
  '#e0ac2b',
  '#e85252',
  '#6689c6',
  '#9a6fb0',
  '#a53253',
  '#69b3a2',
];

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

  // Color Scale
  const allGroups = data.map((d) => d.name);
  const colorScale = d3.scaleOrdinal<string>().domain(allGroups).range(COLORS);

  // Compute the main radar shapes, 1 per group
  const lineGenerator = d3.lineRadial();

  const allLines = data.map((series, i) => {
    const allCoordinates = axisConfig.map((axis) => {
      const yScale = yScales[axis.name];
      const angle = xScale(axis.name) ?? 0; // I don't understand the type of scalePoint. IMO x cannot be undefined since I'm passing it something of type Variable.
      const radius = yScale(series[axis.name]);
      const coordinate: [number, number] = [angle, radius];
      return coordinate;
    });

    // To close the path of each group, the path must finish where it started
    // so add the last data point at the end of the array
    allCoordinates.push(allCoordinates[0]);

    const d = lineGenerator(allCoordinates);

    if (!d) {
      return;
    }

    return (
      <path
        key={i}
        d={d}
        stroke={colorScale(series.name)}
        strokeWidth={3}
        fill={colorScale(series.name)}
        fillOpacity={0.1}
      />
    );
  });

  return (
    <svg width={width} height={height}>
      <g transform={'translate(' + width / 2 + ',' + height / 2 + ')'}>
        <RadarGrid
          outerRadius={outerRadius}
          xScale={xScale}
          axisConfig={axisConfig}
        />
        {allLines}
      </g>
    </svg>
  );
};
