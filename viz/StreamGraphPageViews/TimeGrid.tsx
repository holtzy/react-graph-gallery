import * as d3 from "d3";

const yearTimeFormatter = d3.timeFormat("%Y");

type TimeGridProps = {
  xScale: Date[] & d3.ScaleTime<number, number, never>;
  height: number;
};

export const TimeGrid = ({ xScale, height }: TimeGridProps) => {
  const grid = xScale.ticks(5).map((value, i) => {
    return (
      <g key={i}>
        <line
          x1={xScale(value)}
          x2={xScale(value)}
          y1={0}
          y2={height}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={xScale(value)}
          y={height + 10}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={9}
          stroke="#808080"
          fill="none"
          opacity={0.8}
        >
          {yearTimeFormatter(value)}
        </text>
      </g>
    );
  });

  return <>{grid}</>;
};
