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

const colors = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];

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

const Slice = ({ slice, radius, color }) => {
  const arcPathGenerator = d3.arc();

  const xxx = useSpring({
    pos: [slice.startAngle, slice.endAngle],
  });

  return (
    <animated.path
      d={xxx.pos.to((x, y) => {
        console.log("x", x, y);
        return arcPathGenerator({
          innerRadius: 40,
          outerRadius: radius,
          startAngle: x,
          endAngle: y,
        });
      })}
      fill={color}
    />
  );
};
