import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = 50;
const BAR_PADDING = 0.2;

export const COLORS = ["#e85252", "#6689c6", "#9a6fb0"];

type CircularBarplotProps = {
  width: number;
  height: number;
  data: { group: string; subgroup: string; value: number }[];
};

export const CircularBarplot = ({
  width,
  height,
  data,
}: CircularBarplotProps) => {
  const innerRadius = (Math.min(width, height) / 2) * 0.3;
  const outerRadius = Math.min(width, height) / 2 - MARGIN;

  const groups = [...new Set(data.map((d) => d.group))];
  const subGroups = [...new Set(data.map((d) => d.subgroup))];

  // Stack the data
  const stackGenerator = d3
    .stack<string>()
    .keys(subGroups)
    .value((d) => data.filter((item) => item.group === d)[0].value);
  const series = stackGenerator(groups);

  // Find size of the longest bar and group rank.
  // Values are available in the last group of the stack
  const lastStackGroup = series.at(-1) || [];
  const groupTotalValues = lastStackGroup.map((group) => {
    const biggest = group.at(-1) || 0;
    return { name: group.data, value: biggest };
  });
  const sortedGroupTotalValues = groupTotalValues.sort(
    (a, b) => b.value - a.value
  );
  const maxValue = sortedGroupTotalValues[0].value;

  const xScale = d3
    .scaleBand()
    .domain(sortedGroupTotalValues.map((g) => g.name))
    .range([0, 2 * Math.PI])
    .padding(BAR_PADDING);

  const yScale = useMemo(() => {
    return d3
      .scaleRadial()
      .domain([0, maxValue])
      .range([innerRadius, outerRadius]);
  }, [data, width, height]);

  // Color Scale
  var colorScale = d3.scaleOrdinal<string>().domain(subGroups).range(COLORS);

  // Build the ~rectangles
  const arcPathGenerator = d3.arc();
  const allShapes = series.map((subgroup, i) => {
    return subgroup.map((group, j) => {
      const startAngle = xScale(group.data) || 0;

      const path = arcPathGenerator({
        innerRadius: yScale(group[0]),
        outerRadius: yScale(group[1]),
        startAngle,
        endAngle: startAngle + xScale.bandwidth(),
      });

      if (!path) {
        return;
      }

      return (
        <g key={i + "-" + j}>
          <path
            key={i}
            d={path}
            opacity={0.7}
            stroke="black"
            fill={colorScale(subgroup.key)}
            fillOpacity={0.9}
            strokeWidth={1}
          />
        </g>
      );
    });
  });

  const allLabels = sortedGroupTotalValues.map((group, i) => {
    const startAngle = xScale(group.name) || 0;

    const turnLabelUpsideDown =
      (startAngle + xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI;

    const labelRotation =
      ((startAngle + xScale.bandwidth() / 2) * 180) / Math.PI - 90;

    const labelXTranslation = yScale(group.value) + 10;

    const labelTransform =
      "rotate(" +
      labelRotation +
      ")" +
      ",translate(" +
      labelXTranslation +
      ",0)";

    return (
      <g transform={labelTransform} key={i}>
        <text
          textAnchor={turnLabelUpsideDown ? "end" : "start"}
          alignmentBaseline="middle"
          fontSize={16}
          transform={turnLabelUpsideDown ? "rotate(180)" : "rotate(0)"}
        >
          {group.name}
        </text>
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={"translate(" + width / 2 + "," + height / 2 + ")"}>
          {allShapes}
          {allLabels}
        </g>
      </svg>
    </div>
  );
};
