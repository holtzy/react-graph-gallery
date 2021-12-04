import { useMemo } from "react";
import * as d3 from "d3";

type DataItem = {
  name: string;
  value: number;
};
type PieChartBasicProps = {
  width: number;
  height: number;
  data: DataItem[];
};

const MARGIN = 70;

const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"];

export const PieChartBasic = ({ width, height, data }: PieChartBasicProps) => {
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [radius, pie]);

  return (
    <svg
      width={width}
      height={height}
      style={{ backgroundColor: "#f8f9fa", display: "inline-block" }}
    >
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          return <path key={i} d={arc} fill={colors[i]} />;
        })}
      </g>
    </svg>
  );
};
