import { useMemo } from 'react';
import * as d3 from 'd3';
import { getSummaryStats } from './summary-stats';
import { AxisLeft } from './AxisLeftCategoric';

import { HorizontalBox } from './HorizontalBox';
import { AxisBottom } from './AxisBottom';

const MARGIN = { top: 30, right: 30, bottom: 30, left: 50 };

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
    const groups = [...new Set(data.map((d) => d.name))];
    return { chartMin, chartMax, groups };
  }, [data]);

  // Compute scales
  const xScale = d3
    .scaleLinear()
    .domain([chartMin, chartMax])
    .range([0, boundsWidth]);

  const yScale = d3
    .scaleBand()
    .range([0, boundsHeight])
    .domain(groups)
    .padding(0.25);

  // Build the box shapes
  const allShapes = groups.map((group, i) => {
    const groupData = data.filter((d) => d.name === group).map((d) => d.value);
    const sumStats = getSummaryStats(groupData);

    if (!sumStats) {
      return null;
    }

    const { min, q1, median, q3, max } = sumStats;

    return (
      <g key={i} transform={`translate(0,${yScale(group)})`}>
        <HorizontalBox
          height={yScale.bandwidth()}
          q1={xScale(q1)}
          median={xScale(median)}
          q3={xScale(q3)}
          min={xScale(min)}
          max={xScale(max)}
          stroke="black"
          fill={'#ead4f5'}
        />
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

          <AxisLeft yScale={yScale} />

          {/* X axis uses an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              height={boundsHeight}
              pixelsPerTick={80}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
