import { useMemo } from "react";
import * as d3 from "d3";
import { animated, useSpring, config } from "react-spring";

type DataItem = {
  name: string;
  value: number;
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
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3
      .pie<any, DataItem>()
      .value((d) => d.value)
      .sort(null);
    return pieGenerator(data);
  }, [data]);

  const allPaths = pie.map((slice, i) => {
    return <Slice key={i} radius={radius} slice={slice} color={colors[i]} />;
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
    from: {
      pos: [slice.endAngle, slice.endAngle],
      opacity: 0,
    },
    to: {
      pos: [slice.startAngle, slice.endAngle],
      opacity: slice.startAngle ? 1 : 0,
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
      opacity={springProps.opacity}
    />
  );
};
