import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = 20;
const BAR_PADDING = 0.2;

type CircularBarplotProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const CircularBarplot = ({
  width,
  height,
  data,
}: CircularBarplotProps) => {
  const innerRadius = 90;
  const outerRadius = Math.min(width, height) / 2;

  const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, 2 * Math.PI])
      .padding(BAR_PADDING);
  }, [data, height, width]);

  const yScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleRadial()
      .domain([0, max || 10])
      .range([innerRadius, outerRadius]);
  }, [data, width, height]);

  // Build the shapes
  const arcPathGenerator = d3.arc();
  const allShapes = data.map((group, i) => {
    const path = arcPathGenerator({
      innerRadius: innerRadius,
      outerRadius: yScale(group.value),
      startAngle: xScale(group.name),
      endAngle: xScale(group.name) + xScale.bandwidth(),
    });

    return (
      <g key={i}>
        <path
          d={path}
          opacity={0.7}
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
    <div>
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
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
