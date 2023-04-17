import { useMemo } from "react";
import * as d3 from "d3";

const COLORS = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];

type DataItem = {
  [variable: string]: number;
} & { group: string };

type ParallelCoordinateProps = {
  width: number;
  height: number;
  data: DataItem[];
  variables: string[];
};

type YScale = d3.ScaleLinear<number, number, never>;
export const ParallelCoordinate = ({
  width,
  height,
  data,
  variables,
}: ParallelCoordinateProps) => {
  const allGroups = [...new Set(data.map((d) => d.group))];

  // Compute a xScale: spread all Y axis along the chart width
  const xScale = d3.scalePoint().range([0, width]).domain(variables).padding(1);

  // Compute the yScales: 1 scale per variable
  let yScales: { [name: string]: YScale } = {};
  variables.forEach((variable) => {
    yScales[variable] = d3.scaleLinear().range([height, 0]).domain([0, 10]);
  });

  // Color Scale
  const colorScale = d3.scaleOrdinal<string>().domain(allGroups).range(COLORS);

  // Compute lines
  const lineGenerator = d3.line();

  const allLines = data.map((item, i) => {
    const allCoordinates = variables.map((variable) => {
      const yScale = yScales[variable];
      return [xScale(variable), yScale(item[variable])];
    });
    const path = lineGenerator(allCoordinates);
    return (
      <path key={i} d={path} stroke={colorScale(item.group)} fill="none" />
    );
  });
  console.log(allLines);

  return (
    <svg width={width} height={height}>
      {allLines}
    </svg>
  );
};
