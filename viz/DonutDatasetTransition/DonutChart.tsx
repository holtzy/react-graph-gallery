import { useMemo } from "react";
import * as d3 from "d3";
import { animated, SpringValue, useSpring } from "react-spring";

type DataItem = {
  name: string;
  value?: number;
};

type DonutChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};

const MARGIN = 30;

const colors = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];

export const DonutChart = ({ width, height, data }: DonutChartProps) => {
  // Sort by alphabetical to maximise consistency between dataset
  const sortedData = data.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3
      .pie<any, DataItem>()
      .value((d) => d.value || 0)
      .sort(null); // Do not apply any sorting, respect the order of the provided dataset
    return pieGenerator(sortedData);
  }, [data]);

  const allPaths = pie.map((slice, i) => {
    return (
      <Slice
        key={slice.data.name}
        radius={radius}
        slice={slice}
        color={colors[i]}
      />
    );
  });

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>{allPaths}</g>
    </svg>
  );
};

type SliceProps = {
  color: string;
  radius: number;
  slice: d3.PieArcDatum<DataItem>;
};
const Slice = ({ slice, radius, color }: SliceProps) => {
  const arcPathGenerator = d3.arc();

  const springProps = useSpring({
    to: {
      pos: [slice.startAngle, slice.endAngle] as [number, number],
    },
  });

  return (
    <animated.path
      d={springProps.pos.to((start, end) => {
        return arcPathGenerator({
          innerRadius: 40,
          outerRadius: radius,
          startAngle: start,
          endAngle: end,
        });
      })}
      fill={color}
    />
  );
};
