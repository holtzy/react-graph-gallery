import * as d3 from "d3";
import { AxisVertical } from "./AxisVertical";
import { Data, Variable } from "./data";

const MARGIN = 30;

const COLORS = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];

type RadarProps = {
  width: number;
  height: number;
  data: Data;
  axisConfig: {
    name: Variable;
    max: number;
  }[];
};

type YScale = d3.ScaleRadial<number, number, never>;

export const Radar = ({ width, height, data, axisConfig }: RadarProps) => {
  const outerRadius = Math.min(width, height) / 2 - MARGIN;
  const innerRadius = 40;

  // The x scale provides an angle for each variable of the dataset
  const allVariableNames = axisConfig.map((axis) => axis.name);
  const xScale = d3
    .scaleBand()
    .domain(allVariableNames)
    .range([0, 2 * Math.PI]);

  // Compute the yScales: 1 scale per variable. Provides the distance to the center.
  let yScales: { [name: string]: YScale } = {};

  axisConfig.forEach((axis) => {
    yScales[axis.name] = d3
      .scaleRadial()
      .domain([0, axis.max])
      .range([innerRadius, outerRadius]);
  });

  const lineGenerator = d3
    .lineRadial()
    .angle((d) => d.angle)
    .radius((d) => d.radius);
  // .curve(d3.curveLinearClosed);

  // Color Scale
  const allGroups = data.map((d) => d.name);
  const colorScale = d3.scaleOrdinal<string>().domain(allGroups).range(COLORS);

  const allLines = data.map((series, i) => {
    const allCoordinates = axisConfig.map((axis) => {
      const yScale = yScales[axis.name];
      const angle = xScale(axis.name) ?? 0; // I don't understand the type of scalePoint. IMO x cannot be undefined since I'm passing it something of type Variable.
      const radius = yScale(series[axis.name]);
      const coordinate: [number, number] = { angle, radius };
      return coordinate;
    });

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

  // Compute Axes
  const allAxes = axisConfig.map((axis, i) => {
    const path = lineGenerator([
      { angle: xScale(axis.name), radius: innerRadius },
      { angle: xScale(axis.name), radius: outerRadius },
    ]);

    return (
      <g key={i}>
        <path
          d={path}
          stroke="#9d174d"
          fill="#9d174d"
          fillOpacity={0.3}
          strokeWidth={1}
          rx={1}
        />
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      <g
        transform={
          "translate(" +
          (width / 2 + MARGIN) +
          "," +
          (height / 2 + MARGIN) +
          ")"
        }
      >
        {allLines}
        {allAxes}
      </g>
    </svg>
  );
};
