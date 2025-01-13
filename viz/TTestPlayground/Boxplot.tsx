import { useMemo } from 'react';
import * as d3 from 'd3';
import { getSummaryStats } from './summary-stats';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottomCategoric';
import { VerticalBox } from './VerticalBox';

const MARGIN = { top: 30, right: 30, bottom: 30, left: 50 };
const JITTER_WIDTH = 40;

type BoxplotProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const Boxplot = ({ width, height, data }: BoxplotProps) => {
  // The bounds (= area inside the axis) is calculated by substracting the margins from total width / height
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Compute everything derived from the dataset:
  const { chartMin, chartMax, groups } = useMemo(() => {
    const [chartMin, chartMax] = d3.extent(data.map((d) => d.value)) as [
      number,
      number,
    ];
    const groups = data
      .map((d) => d.name)
      .filter((x, i, a) => a.indexOf(x) == i);
    return { chartMin, chartMax, groups };
  }, [data]);

  // Compute scales
  const yScale = d3
    .scaleLinear()
    .domain([chartMin, chartMax])
    .range([boundsHeight, 0]);

  const xScale = d3
    .scaleBand()
    .range([0, boundsWidth])
    .domain(groups)
    .padding(0.25);

  // Color Scale
  var colorScale = d3
    .scaleOrdinal<string>()
    .domain(groups)
    .range(['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253']);

  // Build the box shapes
  const allShapes = groups.map((group, i) => {
    const groupData = data.filter((d) => d.name === group).map((d) => d.value);
    const sumStats = getSummaryStats(groupData);

    if (!sumStats) {
      return null;
    }

    const { min, q1, median, q3, max } = sumStats;

    const allCircles = groupData.map((value, i) => (
      <circle
        key={i}
        cx={
          xScale.bandwidth() / 2 -
          JITTER_WIDTH / 2 +
          Math.random() * JITTER_WIDTH
        }
        cy={yScale(value)}
        r={4}
        fill="grey"
        fillOpacity={0.3}
      />
    ));

    return (
      <g key={i} transform={`translate(${xScale(group)},0)`}>
        <VerticalBox
          width={xScale.bandwidth()}
          q1={yScale(q1)}
          median={yScale(median)}
          q3={yScale(q3)}
          min={yScale(min)}
          max={yScale(max)}
          stroke="black"
          fill={colorScale(group)}
        />
        {allCircles}
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allShapes}
          <AxisLeft yScale={yScale} pixelsPerTick={30} />
          {/* X axis uses an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom xScale={xScale} />
          </g>
        </g>
      </svg>
    </div>
  );
};
